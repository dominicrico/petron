#!/bin/bash
set -e

DIR=~/spotify-connect-web-chroot

if [ "$1" == "install" ]; then
        mkdir -p $DIR
        cd $DIR
        curl -L https://github.com/Fornoth/spotify-connect-web/releases/download/0.0.3-alpha/spotify-connect-web_0.0.3-alpha_chroot.tar.gz | sudo tar xz
else
        trap "sudo umount $DIR/dev $DIR/proc" EXIT
        sudo mount --bind /dev $DIR/dev
        sudo mount -t proc proc $DIR/proc/
	sudo cp /etc/resolv.conf $DIR/etc/
        sudo chroot $DIR /bin/bash -c "cd /usr/src/app && python main.py $*"
fi
