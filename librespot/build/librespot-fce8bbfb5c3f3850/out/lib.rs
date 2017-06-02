pub mod connection {
    mod codec {
        use byteorder::{BigEndian, ByteOrder, WriteBytesExt};
        use shannon::Shannon;
        use std::io;
        use tokio_core::io::{Codec, EasyBuf};
        const HEADER_SIZE: usize = 3;
        const MAC_SIZE: usize = 4;
        #[derive(Debug)]
        enum DecodeState { Header, Payload(u8, usize), }
        pub struct APCodec {
            encode_nonce: u32,
            encode_cipher: Shannon,
            decode_nonce: u32,
            decode_cipher: Shannon,
            decode_state: DecodeState,
        }
        impl APCodec {
            pub fn new(send_key: &[u8], recv_key: &[u8]) -> APCodec {
                APCodec{encode_nonce: 0,
                        encode_cipher: Shannon::new(send_key),
                        decode_nonce: 0,
                        decode_cipher: Shannon::new(recv_key),
                        decode_state: DecodeState::Header,}
            }
        }
        impl Codec for APCodec {
            type
            Out
            =
            (u8, Vec<u8>);
            type
            In
            =
            (u8, EasyBuf);
            fn encode(&mut self, item: (u8, Vec<u8>), buf: &mut Vec<u8>)
             -> io::Result<()> {
                let (cmd, payload) = item;
                let offset = buf.len();
                buf.write_u8(cmd).unwrap();
                buf.write_u16::<BigEndian>(payload.len() as u16).unwrap();
                buf.extend_from_slice(&payload);
                self.encode_cipher.nonce_u32(self.encode_nonce);
                self.encode_nonce += 1;
                self.encode_cipher.encrypt(&mut buf[offset..]);
                let mut mac = [0u8; MAC_SIZE];
                self.encode_cipher.finish(&mut mac);
                buf.extend_from_slice(&mac);
                Ok(())
            }
            fn decode(&mut self, buf: &mut EasyBuf)
             -> io::Result<Option<(u8, EasyBuf)>> {
                if let DecodeState::Header = self.decode_state {
                    if buf.len() >= HEADER_SIZE {
                        let mut header = [0u8; HEADER_SIZE];
                        header.copy_from_slice(buf.drain_to(HEADER_SIZE).as_slice());
                        self.decode_cipher.nonce_u32(self.decode_nonce);
                        self.decode_nonce += 1;
                        self.decode_cipher.decrypt(&mut header);
                        let cmd = header[0];
                        let size = BigEndian::read_u16(&header[1..]) as usize;
                        self.decode_state = DecodeState::Payload(cmd, size);
                    }
                }
                if let DecodeState::Payload(cmd, size) = self.decode_state {
                    if buf.len() >= size + MAC_SIZE {
                        self.decode_state = DecodeState::Header;
                        let mut payload = buf.drain_to(size + MAC_SIZE);
                        self.decode_cipher.decrypt(&mut payload.get_mut()[..size]);
                        let mac = payload.split_off(size);
                        self.decode_cipher.check_mac(mac.as_slice())?;
                        return Ok(Some((cmd, payload)));
                    }
                }
                Ok(None)
            }
        }
    }
    mod handshake {
        use crypto::sha1::Sha1;
        use crypto::hmac::Hmac;
        use crypto::mac::Mac;
        use byteorder::{BigEndian, ByteOrder, WriteBytesExt};
        use protobuf::{self, Message, MessageStatic};
        use rand::thread_rng;
        use std::io::{self, Read, Write};
        use std::marker::PhantomData;
        use tokio_core::io::{Io, Framed, write_all, WriteAll, read_exact,
                             ReadExact, Window};
        use futures::{Poll, Async, Future};
        use diffie_hellman::DHLocalKeys;
        use protocol;
        use protocol::keyexchange::{ClientHello, APResponseMessage,
                                    ClientResponsePlaintext};
        use util;
        use super::codec::APCodec;
        pub struct Handshake<T> {
            keys: DHLocalKeys,
            state: HandshakeState<T>,
        }
        enum HandshakeState<T> {
            ClientHello(WriteAll<T, Vec<u8>>),
            APResponse(RecvPacket<T, APResponseMessage>),
            ClientResponse(Option<APCodec>, WriteAll<T, Vec<u8>>),
        }
        pub fn handshake<T: Io>(connection: T) -> Handshake<T> {
            let local_keys = DHLocalKeys::random(&mut thread_rng());
            let client_hello =
                client_hello(connection, local_keys.public_key());
            Handshake{keys: local_keys,
                      state: HandshakeState::ClientHello(client_hello),}
        }
        impl <T: Io> Future for Handshake<T> {
            type
            Item
            =
            Framed<T, APCodec>;
            type
            Error
            =
            io::Error;
            fn poll(&mut self) -> Poll<Self::Item, io::Error> {
                use self::HandshakeState::*;
                loop  {
                    self.state =
                        match self.state {
                            ClientHello(ref mut write) => {
                                let (connection, accumulator) =
                                    try_ready!(write . poll (  ));
                                let read =
                                    recv_packet(connection, accumulator);
                                APResponse(read)
                            }
                            APResponse(ref mut read) => {
                                let (connection, message, accumulator) =
                                    try_ready!(read . poll (  ));
                                let remote_key =
                                    message.get_challenge().get_login_crypto_challenge().get_diffie_hellman().get_gs().to_owned();
                                let shared_secret =
                                    self.keys.shared_secret(&remote_key);
                                let (challenge, send_key, recv_key) =
                                    compute_keys(&shared_secret,
                                                 &accumulator);
                                let codec =
                                    APCodec::new(&send_key, &recv_key);
                                let write =
                                    client_response(connection, challenge);
                                ClientResponse(Some(codec), write)
                            }
                            ClientResponse(ref mut codec, ref mut write) => {
                                let (connection, _) =
                                    try_ready!(write . poll (  ));
                                let codec = codec.take().unwrap();
                                let framed = connection.framed(codec);
                                return Ok(Async::Ready(framed));
                            }
                        }
                }
            }
        }
        fn client_hello<T: Write>(connection: T, gc: Vec<u8>)
         -> WriteAll<T, Vec<u8>> {
            let packet =
                {
                    let mut msg = ClientHello::new();
                    {
                        let mut msg = msg.mut_build_info();
                        msg.set_product(protocol::keyexchange::Product::PRODUCT_PARTNER);
                        msg.set_platform(protocol::keyexchange::Platform::PLATFORM_LINUX_X86);
                        msg.set_version(1133871366144);
                        msg
                    };
                    {
                        let repeated = msg.mut_cryptosuites_supported();
                        repeated.push(protocol::keyexchange::Cryptosuite::CRYPTO_SUITE_SHANNON)
                    };
                    {
                        let mut msg =
                            msg.mut_login_crypto_hello().mut_diffie_hellman();
                        msg.set_gc(gc);
                        msg.set_server_keys_known(1);
                        msg
                    };
                    msg.set_client_nonce(util::rand_vec(&mut thread_rng(),
                                                        16));
                    msg.set_padding(vec!(0x1e));
                    msg
                };
            let mut buffer = vec!(0 , 4);
            let size = 2 + 4 + packet.compute_size();
            buffer.write_u32::<BigEndian>(size).unwrap();
            packet.write_to_vec(&mut buffer).unwrap();
            write_all(connection, buffer)
        }
        fn client_response<T: Write>(connection: T, challenge: Vec<u8>)
         -> WriteAll<T, Vec<u8>> {
            let packet =
                {
                    let mut msg = ClientResponsePlaintext::new();
                    {
                        let mut msg =
                            msg.mut_login_crypto_response().mut_diffie_hellman();
                        msg.set_hmac(challenge);
                        msg
                    };
                    msg.mut_pow_response();
                    msg.mut_crypto_response();
                    msg
                };
            let mut buffer = vec!();
            let size = 4 + packet.compute_size();
            buffer.write_u32::<BigEndian>(size).unwrap();
            packet.write_to_vec(&mut buffer).unwrap();
            write_all(connection, buffer)
        }
        enum RecvPacket<T, M: MessageStatic> {
            Header(ReadExact<T, Window<Vec<u8>>>, PhantomData<M>),
            Body(ReadExact<T, Window<Vec<u8>>>, PhantomData<M>),
        }
        fn recv_packet<T, M>(connection: T, acc: Vec<u8>) -> RecvPacket<T, M>
         where T: Read, M: MessageStatic {
            RecvPacket::Header(read_into_accumulator(connection, 4, acc),
                               PhantomData)
        }
        impl <T, M> Future for RecvPacket<T, M> where T: Read,
         M: MessageStatic {
            type
            Item
            =
            (T, M, Vec<u8>);
            type
            Error
            =
            io::Error;
            fn poll(&mut self) -> Poll<Self::Item, io::Error> {
                use self::RecvPacket::*;
                loop  {
                    *self =
                        match *self {
                            Header(ref mut read, _) => {
                                let (connection, header) =
                                    try_ready!(read . poll (  ));
                                let size =
                                    BigEndian::read_u32(header.as_ref()) as
                                        usize;
                                let acc = header.into_inner();
                                let read =
                                    read_into_accumulator(connection,
                                                          size - 4, acc);
                                RecvPacket::Body(read, PhantomData)
                            }
                            Body(ref mut read, _) => {
                                let (connection, data) =
                                    try_ready!(read . poll (  ));
                                let message =
                                    protobuf::parse_from_bytes(data.as_ref()).unwrap();
                                let acc = data.into_inner();
                                return Ok(Async::Ready((connection, message,
                                                        acc)));
                            }
                        }
                }
            }
        }
        fn read_into_accumulator<T: Read>(connection: T, size: usize,
                                          mut acc: Vec<u8>)
         -> ReadExact<T, Window<Vec<u8>>> {
            let offset = acc.len();
            acc.resize(offset + size, 0);
            let mut window = Window::new(acc);
            window.set_start(offset);
            read_exact(connection, window)
        }
        fn compute_keys(shared_secret: &[u8], packets: &[u8])
         -> (Vec<u8>, Vec<u8>, Vec<u8>) {
            let mut data = Vec::with_capacity(100);
            let mut mac = Hmac::new(Sha1::new(), &shared_secret);
            for i in 1..6 {
                mac.input(packets);
                mac.input(&[i]);
                data.extend_from_slice(&mac.result().code());
                mac.reset();
            }
            mac = Hmac::new(Sha1::new(), &data[..20]);
            mac.input(packets);
            (mac.result().code().to_vec(), data[20..52].to_vec(),
             data[52..84].to_vec())
        }
    }
    pub use self::codec::APCodec;
    pub use self::handshake::handshake;
    use futures::{Future, Sink, Stream, BoxFuture};
    use std::io;
    use std::net::ToSocketAddrs;
    use tokio_core::net::TcpStream;
    use tokio_core::reactor::Handle;
    use tokio_core::io::Framed;
    use protobuf::{self, Message};
    use authentication::Credentials;
    use version;
    pub type Transport = Framed<TcpStream, APCodec>;
    pub fn connect<A: ToSocketAddrs>(addr: A, handle: &Handle)
     -> BoxFuture<Transport, io::Error> {
        let addr = addr.to_socket_addrs().unwrap().next().unwrap();
        let socket = TcpStream::connect(&addr, handle);
        let connection = socket.and_then(|socket| { handshake(socket) });
        connection.boxed()
    }
    pub fn authenticate(transport: Transport, credentials: Credentials,
                        device_id: String)
     -> BoxFuture<(Transport, Credentials), io::Error> {
        use protocol::authentication::{APWelcome, ClientResponseEncrypted,
                                       CpuFamily, Os};
        let packet =
            {
                let mut msg = ClientResponseEncrypted::new();
                {
                    let mut msg = msg.mut_login_credentials();
                    msg.set_username(credentials.username);
                    msg.set_typ(credentials.auth_type);
                    msg.set_auth_data(credentials.auth_data);
                    msg
                };
                {
                    let mut msg = msg.mut_system_info();
                    msg.set_cpu_family(CpuFamily::CPU_UNKNOWN);
                    msg.set_os(Os::OS_UNKNOWN);
                    msg.set_system_information_string("librespot".to_owned());
                    msg.set_device_id(device_id);
                    msg
                };
                msg.set_version_string(version::version_string());
                msg
            };
        let cmd = 171;
        let data = packet.write_to_bytes().unwrap();
        transport.send((cmd,
                        data)).and_then(|transport|
                                            {
                                                transport.into_future().map_err(|(err,
                                                                                  _stream)|
                                                                                    err)
                                            }).and_then(|(packet, transport)|
                                                            {
                                                                match packet {
                                                                    Some((172,
                                                                          data))
                                                                    => {
                                                                        let welcome_data:
                                                                                APWelcome =
                                                                            protobuf::parse_from_bytes(data.as_ref()).unwrap();
                                                                        let reusable_credentials =
                                                                            Credentials{username:
                                                                                            welcome_data.get_canonical_username().to_owned(),
                                                                                        auth_type:
                                                                                            welcome_data.get_reusable_auth_credentials_type(),
                                                                                        auth_data:
                                                                                            welcome_data.get_reusable_auth_credentials().to_owned(),};
                                                                        Ok((transport,
                                                                            reusable_credentials))
                                                                    }
                                                                    Some((173,
                                                                          _))
                                                                    =>
                                                                    panic!("Authentication failed"),
                                                                    Some((cmd,
                                                                          _))
                                                                    =>
                                                                    panic!("Unexpected packet {:?}"
                                                                           ,
                                                                           cmd),
                                                                    None =>
                                                                    panic!("EOF"),
                                                                }
                                                            }).boxed()
    }
}
pub mod spirc {
    use futures::future;
    use futures::sink::BoxSink;
    use futures::stream::BoxStream;
    use futures::sync::{oneshot, mpsc};
    use futures::{Future, Stream, Sink, Async, Poll, BoxFuture};
    use protobuf::{self, Message};
    use mercury::MercuryError;
    use player::Player;
    use mixer::Mixer;
    use session::Session;
    use util::{now_ms, SpotifyId, SeqGenerator};
    use version;
    use protocol;
    use protocol::spirc::{PlayStatus, State, MessageType, Frame, DeviceState};
    pub struct SpircTask {
        player: Player,
        mixer: Box<Mixer>,
        sequence: SeqGenerator<u32>,
        ident: String,
        device: DeviceState,
        state: State,
        subscription: BoxStream<Frame, MercuryError>,
        sender: BoxSink<Frame, MercuryError>,
        commands: mpsc::UnboundedReceiver<SpircCommand>,
        end_of_track: BoxFuture<(), oneshot::Canceled>,
        shutdown: bool,
        session: Session,
    }
    pub enum SpircCommand {
        Play,
        PlayPause,
        Pause,
        Prev,
        Next,
        VolumeUp,
        VolumeDown,
        Shutdown,
    }
    pub struct Spirc {
        commands: mpsc::UnboundedSender<SpircCommand>,
    }
    fn initial_state() -> State {
        {
            let mut msg = protocol::spirc::State::new();
            msg.set_repeat(false);
            msg.set_shuffle(false);
            msg.set_status(PlayStatus::kPlayStatusStop);
            msg.set_position_ms(0);
            msg.set_position_measured_at(0);
            msg
        }
    }
    fn initial_device_state(name: String, volume: u16) -> DeviceState {
        {
            let mut msg = DeviceState::new();
            msg.set_sw_version(version::version_string());
            msg.set_is_active(false);
            msg.set_can_play(true);
            msg.set_volume(volume as u32);
            msg.set_name(name);
            {
                let repeated = msg.mut_capabilities();
                {
                    let mut msg = repeated.push_default();
                    msg.set_typ(protocol::spirc::CapabilityType::kCanBePlayer);
                    { let repeated = msg.mut_intValue(); repeated.push(1) };
                    msg
                };
                {
                    let mut msg = repeated.push_default();
                    msg.set_typ(protocol::spirc::CapabilityType::kDeviceType);
                    { let repeated = msg.mut_intValue(); repeated.push(5) };
                    msg
                };
                {
                    let mut msg = repeated.push_default();
                    msg.set_typ(protocol::spirc::CapabilityType::kGaiaEqConnectId);
                    { let repeated = msg.mut_intValue(); repeated.push(1) };
                    msg
                };
                {
                    let mut msg = repeated.push_default();
                    msg.set_typ(protocol::spirc::CapabilityType::kSupportsLogout);
                    { let repeated = msg.mut_intValue(); repeated.push(0) };
                    msg
                };
                {
                    let mut msg = repeated.push_default();
                    msg.set_typ(protocol::spirc::CapabilityType::kIsObservable);
                    { let repeated = msg.mut_intValue(); repeated.push(1) };
                    msg
                };
                {
                    let mut msg = repeated.push_default();
                    msg.set_typ(protocol::spirc::CapabilityType::kVolumeSteps);
                    { let repeated = msg.mut_intValue(); repeated.push(64) };
                    msg
                };
                {
                    let mut msg = repeated.push_default();
                    msg.set_typ(protocol::spirc::CapabilityType::kSupportedContexts);
                    {
                        let repeated = msg.mut_stringValue();
                        repeated.push(::std::convert::Into::into("album"));
                        repeated.push(::std::convert::Into::into("playlist"));
                        repeated.push(::std::convert::Into::into("search"));
                        repeated.push(::std::convert::Into::into("inbox"));
                        repeated.push(::std::convert::Into::into("toplist"));
                        repeated.push(::std::convert::Into::into("starred"));
                        repeated.push(::std::convert::Into::into("publishedstarred"));
                        repeated.push(::std::convert::Into::into("track"))
                    };
                    msg
                };
                {
                    let mut msg = repeated.push_default();
                    msg.set_typ(protocol::spirc::CapabilityType::kSupportedTypes);
                    {
                        let repeated = msg.mut_stringValue();
                        repeated.push(::std::convert::Into::into("audio/local"));
                        repeated.push(::std::convert::Into::into("audio/track"));
                        repeated.push(::std::convert::Into::into("local"));
                        repeated.push(::std::convert::Into::into("track"))
                    };
                    msg
                };
            };
            msg
        }
    }
    impl Spirc {
        pub fn new(name: String, session: Session, player: Player,
                   mixer: Box<Mixer>) -> (Spirc, SpircTask) {
            debug!("new Spirc[{}]" , session . session_id (  ));
            let ident = session.device_id().to_owned();
            let uri =
                format!("hm://remote/3/user/{}/" , session . username (  ));
            let subscription = session.mercury().subscribe(&uri as &str);
            let subscription =
                subscription.map(|stream|
                                     stream.map_err(|_|
                                                        MercuryError)).flatten_stream();
            let subscription =
                subscription.map(|response| -> Frame
                                     {
                                         let data =
                                             response.payload.first().unwrap();
                                         protobuf::parse_from_bytes(data).unwrap()
                                     }).boxed();
            let sender =
                Box::new(session.mercury().sender(uri).with(|frame: Frame|
                                                                {
                                                                    Ok(frame.write_to_bytes().unwrap())
                                                                }));
            let (cmd_tx, cmd_rx) = mpsc::unbounded();
            let volume = 65535;
            let device = initial_device_state(name, volume);
            mixer.set_volume(volume);
            let mut task =
                SpircTask{player: player,
                          mixer: mixer,
                          sequence: SeqGenerator::new(1),
                          ident: ident,
                          device: device,
                          state: initial_state(),
                          subscription: subscription,
                          sender: sender,
                          commands: cmd_rx,
                          end_of_track: future::empty().boxed(),
                          shutdown: false,
                          session: session.clone(),};
            let spirc = Spirc{commands: cmd_tx,};
            task.hello();
            (spirc, task)
        }
        pub fn play(&self) {
            let _ =
                mpsc::UnboundedSender::send(&self.commands,
                                            SpircCommand::Play);
        }
        pub fn play_pause(&self) {
            let _ =
                mpsc::UnboundedSender::send(&self.commands,
                                            SpircCommand::PlayPause);
        }
        pub fn pause(&self) {
            let _ =
                mpsc::UnboundedSender::send(&self.commands,
                                            SpircCommand::Pause);
        }
        pub fn prev(&self) {
            let _ =
                mpsc::UnboundedSender::send(&self.commands,
                                            SpircCommand::Prev);
        }
        pub fn next(&self) {
            let _ =
                mpsc::UnboundedSender::send(&self.commands,
                                            SpircCommand::Next);
        }
        pub fn volume_up(&self) {
            let _ =
                mpsc::UnboundedSender::send(&self.commands,
                                            SpircCommand::VolumeUp);
        }
        pub fn volume_down(&self) {
            let _ =
                mpsc::UnboundedSender::send(&self.commands,
                                            SpircCommand::VolumeDown);
        }
        pub fn shutdown(&self) {
            let _ =
                mpsc::UnboundedSender::send(&self.commands,
                                            SpircCommand::Shutdown);
        }
    }
    impl Future for SpircTask {
        type
        Item
        =
        ();
        type
        Error
        =
        ();
        fn poll(&mut self) -> Poll<(), ()> {
            loop  {
                let mut progress = false;
                if !self.shutdown {
                    match self.subscription.poll().unwrap() {
                        Async::Ready(Some(frame)) => {
                            progress = true;
                            self.handle_frame(frame);
                        }
                        Async::Ready(None) =>
                        panic!("subscription terminated"),
                        Async::NotReady => (),
                    }
                    match self.commands.poll().unwrap() {
                        Async::Ready(Some(command)) => {
                            progress = true;
                            self.handle_command(command);
                        }
                        Async::Ready(None) => (),
                        Async::NotReady => (),
                    }
                    match self.end_of_track.poll() {
                        Ok(Async::Ready(())) => {
                            progress = true;
                            self.handle_end_of_track();
                        }
                        Ok(Async::NotReady) => (),
                        Err(oneshot::Canceled) => {
                            self.end_of_track = future::empty().boxed()
                        }
                    }
                }
                let poll_sender = self.sender.poll_complete().unwrap();
                if self.shutdown && poll_sender.is_ready() {
                    return Ok(Async::Ready(()));
                }
                if !progress { return Ok(Async::NotReady); }
            }
        }
    }
    impl SpircTask {
        fn handle_command(&mut self, cmd: SpircCommand) {
            let active = self.device.get_is_active();
            match cmd {
                SpircCommand::Play => {
                    if active {
                        self.handle_play();
                        self.notify(None);
                    } else {
                        CommandSender::new(self,
                                           MessageType::kMessageTypePlay).send();
                    }
                }
                SpircCommand::PlayPause => {
                    if active {
                        self.handle_play_pause();
                        self.notify(None);
                    } else {
                        CommandSender::new(self,
                                           MessageType::kMessageTypePlayPause).send();
                    }
                }
                SpircCommand::Pause => {
                    if active {
                        self.handle_pause();
                        self.notify(None);
                    } else {
                        CommandSender::new(self,
                                           MessageType::kMessageTypePause).send();
                    }
                }
                SpircCommand::Prev => {
                    if active {
                        self.handle_prev();
                        self.notify(None);
                    } else {
                        CommandSender::new(self,
                                           MessageType::kMessageTypePrev).send();
                    }
                }
                SpircCommand::Next => {
                    if active {
                        self.handle_next();
                        self.notify(None);
                    } else {
                        CommandSender::new(self,
                                           MessageType::kMessageTypeNext).send();
                    }
                }
                SpircCommand::VolumeUp => {
                    if active {
                        self.handle_volume_up();
                        self.notify(None);
                    } else {
                        CommandSender::new(self,
                                           MessageType::kMessageTypeVolumeUp).send();
                    }
                }
                SpircCommand::VolumeDown => {
                    if active {
                        self.handle_volume_down();
                        self.notify(None);
                    } else {
                        CommandSender::new(self,
                                           MessageType::kMessageTypeVolumeDown).send();
                    }
                }
                SpircCommand::Shutdown => {
                    CommandSender::new(self,
                                       MessageType::kMessageTypeGoodbye).send();
                    self.shutdown = true;
                    self.commands.close();
                }
            }
        }
        fn handle_frame(&mut self, frame: Frame) {
            debug!("{:?} {:?} {} {} {}" , frame . get_typ (  ) , frame .
                   get_device_state (  ) . get_name (  ) , frame . get_ident (
                    ) , frame . get_seq_nr (  ) , frame . get_state_update_id
                   (  ));
            if frame.get_ident() == self.ident ||
                   (frame.get_recipient().len() > 0 &&
                        !frame.get_recipient().contains(&self.ident)) {
                return;
            }
            match frame.get_typ() {
                MessageType::kMessageTypeHello => {
                    self.notify(Some(frame.get_ident()));
                }
                MessageType::kMessageTypeLoad => {
                    if !self.device.get_is_active() {
                        self.device.set_is_active(true);
                        self.device.set_became_active_at(now_ms());
                    }
                    self.update_tracks(&frame);
                    if self.state.get_track().len() > 0 {
                        self.state.set_position_ms(frame.get_state().get_position_ms());
                        self.state.set_position_measured_at(now_ms() as u64);
                        let play =
                            frame.get_state().get_status() ==
                                PlayStatus::kPlayStatusPlay;
                        self.load_track(play);
                    } else {
                        self.state.set_status(PlayStatus::kPlayStatusStop);
                    }
                    self.notify(None);
                }
                MessageType::kMessageTypePlay => {
                    self.handle_play();
                    self.notify(None);
                }
                MessageType::kMessageTypePlayPause => {
                    self.handle_play_pause();
                    self.notify(None);
                }
                MessageType::kMessageTypePause => {
                    self.handle_pause();
                    self.notify(None);
                }
                MessageType::kMessageTypeNext => {
                    self.handle_next();
                    self.notify(None);
                }
                MessageType::kMessageTypePrev => {
                    self.handle_prev();
                    self.notify(None);
                }
                MessageType::kMessageTypeVolumeUp => {
                    self.handle_volume_up();
                    self.notify(None);
                }
                MessageType::kMessageTypeVolumeDown => {
                    self.handle_volume_down();
                    self.notify(None);
                }
                MessageType::kMessageTypeSeek => {
                    let position = frame.get_position();
                    self.state.set_position_ms(position);
                    self.state.set_position_measured_at(now_ms() as u64);
                    self.player.seek(position);
                    self.notify(None);
                }
                MessageType::kMessageTypeReplace => {
                    self.update_tracks(&frame);
                    self.notify(None);
                }
                MessageType::kMessageTypeVolume => {
                    let volume = frame.get_volume();
                    self.device.set_volume(volume);
                    self.mixer.set_volume(frame.get_volume() as u16);
                    self.notify(None);
                }
                MessageType::kMessageTypeNotify => {
                    if self.device.get_is_active() &&
                           frame.get_device_state().get_is_active() {
                        self.device.set_is_active(false);
                        self.state.set_status(PlayStatus::kPlayStatusStop);
                        self.player.stop();
                        self.mixer.stop();
                    }
                }
                _ => (),
            }
        }
        fn handle_play(&mut self) {
            if self.state.get_status() == PlayStatus::kPlayStatusPause {
                self.mixer.start();
                self.player.play();
                self.state.set_status(PlayStatus::kPlayStatusPlay);
                self.state.set_position_measured_at(now_ms() as u64);
            }
        }
        fn handle_play_pause(&mut self) {
            match self.state.get_status() {
                PlayStatus::kPlayStatusPlay => self.handle_pause(),
                PlayStatus::kPlayStatusPause => self.handle_play(),
                _ => (),
            }
        }
        fn handle_pause(&mut self) {
            if self.state.get_status() == PlayStatus::kPlayStatusPlay {
                self.player.pause();
                self.mixer.stop();
                self.state.set_status(PlayStatus::kPlayStatusPause);
                let now = now_ms() as u64;
                let position = self.state.get_position_ms();
                let diff = now - self.state.get_position_measured_at();
                self.state.set_position_ms(position + (diff as u32));
                self.state.set_position_measured_at(now);
            }
        }
        fn handle_next(&mut self) {
            let current_index = self.state.get_playing_track_index();
            let new_index =
                (current_index + 1) % (self.state.get_track().len() as u32);
            self.state.set_playing_track_index(new_index);
            self.state.set_position_ms(0);
            self.state.set_position_measured_at(now_ms() as u64);
            self.load_track(true);
        }
        fn handle_prev(&mut self) {
            if self.position() < 3000 {
                let current_index = self.state.get_playing_track_index();
                let new_index =
                    if current_index == 0 {
                        (self.state.get_track().len() as u32) - 1
                    } else { current_index - 1 };
                self.state.set_playing_track_index(new_index);
                self.state.set_position_ms(0);
                self.state.set_position_measured_at(now_ms() as u64);
                self.load_track(true);
            } else {
                self.state.set_position_ms(0);
                self.state.set_position_measured_at(now_ms() as u64);
                self.player.seek(0);
            }
        }
        fn handle_volume_up(&mut self) {
            let mut volume: u32 = (self.mixer.volume() as u32) + 4096;
            if volume > 65535 { volume = 65535; }
            self.device.set_volume(volume);
            self.mixer.set_volume(volume as u16);
        }
        fn handle_volume_down(&mut self) {
            let mut volume: i32 = (self.mixer.volume() as i32) - 4096;
            if volume < 0 { volume = 0; }
            self.device.set_volume(volume as u32);
            self.mixer.set_volume(volume as u16);
        }
        fn handle_end_of_track(&mut self) {
            let current_index = self.state.get_playing_track_index();
            let new_index =
                (current_index + 1) % (self.state.get_track().len() as u32);
            self.state.set_playing_track_index(new_index);
            self.state.set_position_ms(0);
            self.state.set_position_measured_at(now_ms() as u64);
            self.load_track(true);
            self.notify(None);
        }
        fn position(&mut self) -> u32 {
            let diff =
                (now_ms() as u64) - self.state.get_position_measured_at();
            self.state.get_position_ms() + (diff as u32)
        }
        fn update_tracks(&mut self, frame: &protocol::spirc::Frame) {
            let index = frame.get_state().get_playing_track_index();
            let tracks = frame.get_state().get_track();
            self.state.set_playing_track_index(index);
            self.state.set_track(tracks.into_iter().cloned().collect());
        }
        fn load_track(&mut self, play: bool) {
            let index = self.state.get_playing_track_index();
            let track =
                {
                    let gid =
                        self.state.get_track()[index as usize].get_gid();
                    SpotifyId::from_raw(gid)
                };
            let position = self.state.get_position_ms();
            let end_of_track = self.player.load(track, play, position);
            if play {
                self.state.set_status(PlayStatus::kPlayStatusPlay);
            } else { self.state.set_status(PlayStatus::kPlayStatusPause); }
            self.end_of_track = end_of_track.boxed();
        }
        fn hello(&mut self) {
            CommandSender::new(self, MessageType::kMessageTypeHello).send();
        }
        fn notify(&mut self, recipient: Option<&str>) {
            let mut cs =
                CommandSender::new(self, MessageType::kMessageTypeNotify);
            if let Some(s) = recipient { cs = cs.recipient(&s); }
            cs.send();
        }
    }
    impl Drop for SpircTask {
        fn drop(&mut self) {
            debug!("drop Spirc[{}]" , self . session . session_id (  ));
        }
    }
    struct CommandSender<'a> {
        spirc: &'a mut SpircTask,
        frame: protocol::spirc::Frame,
    }
    impl <'a> CommandSender<'a> {
        fn new(spirc: &'a mut SpircTask, cmd: MessageType) -> CommandSender {
            let frame =
                {
                    let mut msg = protocol::spirc::Frame::new();
                    msg.set_version(1);
                    msg.set_protocol_version(::std::convert::Into::into("2.0.0"));
                    msg.set_ident(spirc.ident.clone());
                    msg.set_seq_nr(spirc.sequence.get());
                    msg.set_typ(cmd);
                    msg.set_device_state(spirc.device.clone());
                    msg.set_state_update_id(now_ms());
                    msg
                };
            CommandSender{spirc: spirc, frame: frame,}
        }
        fn recipient(mut self, recipient: &'a str) -> CommandSender {
            self.frame.mut_recipient().push(recipient.to_owned());
            self
        }
        #[allow(dead_code)]
        fn state(mut self, state: protocol::spirc::State)
         -> CommandSender<'a> {
            self.frame.set_state(state);
            self
        }
        fn send(mut self) {
            if !self.frame.has_state() && self.spirc.device.get_is_active() {
                self.frame.set_state(self.spirc.state.clone());
            }
            let send = self.spirc.sender.start_send(self.frame).unwrap();
            assert!(send . is_ready (  ));
        }
    }
}
