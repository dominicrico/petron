(function() {
  'use strict';

  angular.module('petron.modules.audio')
    .directive('petronUpnpAudio', [function() {
      return {
        templateUrl: 'js/_modules/audio_module/_template/_directive_upnp.html',
        restrict: 'E',
        controller: ['$scope', '$rootScope', '$element',
          '$translatePartialLoader', '$translate', '$timeout',
          function($scope) {
            var parser = require('xml2json');
            var timeInterval;
            $scope.upnp_music = true;

            $scope.playlist = {
              tracks: []
            };
            $scope.current = 0;
            $scope.controls = {
              time: 0,
              duration: 0,
              play: true,
              shuffle: false,
              repeat: false,
              loop: false
            };

            var MediaRendererClient = require(
              'upnp-mediarenderer-client');
            // var client = new MediaRendererClient(
            //   'http://10.0.39.109:49495/description.xml');
            var client = new MediaRendererClient(
              'http://192.168.0.227:49495/description.xml');

            function timer() {
              clearInterval(timeInterval);
              timeInterval = setInterval(function() {
                $scope.controls.time += 1;
                if ($scope.controls.time >= $scope.controls.duration) {
                  getMediaInfo();
                }
              }, 1000);
            }

            function getMediaInfo() {
              client.getMediaInfo(function(err, meta) {

                var metadata = parser.toJson((meta.CurrentURIMetaData), {
                  object: true
                })['DIDL-Lite'].item;

                var dur = metadata.res.duration.split('.')[
                  0];
                dur = dur.split(':');
                var timestamp = parseInt(dur[0] * 60 * 60);
                timestamp += parseInt(dur[1] * 60);
                timestamp += parseInt(dur[2]);
                $scope.$apply(function() {
                  $scope.controls.duration = timestamp;
                });

                var request = new XMLHttpRequest();

                request.open('GET', metadata[
                  'upnp:albumArtURI'], true);
                request.responseType = 'blob';
                request.onload = function() {
                  var reader = new FileReader();
                  reader.readAsDataURL(request.response);
                  reader.onload = function(e) {
                    $scope.$apply(function() {
                      $scope.cover = e.target.result
                        .split(
                          ',')[1];
                      $scope.playlist.tracks[$scope
                          .current]
                        .image = $scope.cover;
                    });

                  };
                };
                request.send();

                $scope.track = {
                  image_type: 'jpeg',
                  image: $scope.cover,
                  title: metadata['dc:title'],
                  artist: metadata['upnp:artist'],
                  album: metadata['upnp:album']
                };

                $scope.$apply(function() {
                  $scope.playlist.tracks[$scope.current] =
                    $scope.track;
                });

                client.getPosition(function(err, position) {
                  $scope.$apply(function() {
                    $scope.controls.time = position;
                    timer();
                  });
                });

                client.callAction('AVTransport', 'GetTransportInfo', {
                    'InstanceID': 0
                  },
                  function(err, res) {
                    if (res.CurrentTransportState === 'PLAYING') {
                      $scope.controls.play = true;
                    } else {
                      $scope.controls.play = false;
                    }
                  });
              });
            }

            client.on('loading', function() {
              console.log('loading');
            });

            client.on('status', function(status) {
              client.getMediaInfo(function(err, meta) {
                if (status.TransportState === 'PLAYING') {
                  $scope.controls.play = true;
                } else {
                  $scope.controls.play = false;
                }

                if (status.CurrentTrackDuration) {
                  var dur = status.CurrentTrackDuration.split(
                    ':');
                  var timestamp = parseInt(dur[0] * 60 * 60);
                  timestamp += parseInt(dur[1] * 60);
                  timestamp += parseInt(dur[2]);
                  $scope.$apply(function() {
                    $scope.controls.duration = timestamp;
                  });
                }

                if (status.RelativeTimePosition) {
                  var dur2 = status.RelativeTimePosition.split(
                    ':');
                  var timestamp2 = parseInt(dur2[0] * 60 * 60);
                  timestamp2 += parseInt(dur2[1] * 60);
                  timestamp2 += parseInt(dur2[2]);
                  $scope.$apply(function() {
                    $scope.controls.time = timestamp2 + 1;
                    timer();
                  });
                } else {
                  client.getPosition(function(err, position) {
                    $scope.$apply(function() {
                      $scope.controls.time = position;
                      timer();
                    });
                  });
                }

                if (status.CurrentTrackMetaData || status.AVTransportURIMetaData ||
                  meta.CurrentURIMetaData) {
                  var metadata = parser.toJson((status.CurrentTrackMetaData ||
                    status.AVTransportURIMetaData || meta.CurrentURIMetaData
                  ), {
                    object: true
                  })['DIDL-Lite'].item;

                  var dur3 = metadata.res.duration.split('.')[0];
                  dur3 = dur3.split(':');
                  var timestamp3 = parseInt(dur3[0] * 60 * 60);
                  timestamp3 += parseInt(dur3[1] * 60);
                  timestamp3 += parseInt(dur3[2]);
                  $scope.$apply(function() {
                    $scope.controls.duration = timestamp3;
                  });

                  var request = new XMLHttpRequest();

                  request.open('GET', metadata[
                    'upnp:albumArtURI'], true);
                  request.responseType =
                    'blob';
                  request.onload = function() {
                    var reader = new FileReader();
                    reader.readAsDataURL(request.response);
                    reader.onload = function(e) {
                      $scope.$apply(function() {
                        $scope.cover = e.target.result
                          .split(
                            ',')[1];
                        $scope.playlist.tracks[$scope
                            .current]
                          .image = $scope.cover;
                      });

                    };
                  };
                  request.send();

                  $scope.track = {
                    image_type: 'jpeg',
                    image: $scope.cover,
                    title: metadata['dc:title'],
                    artist: metadata['upnp:artist'],
                    album: metadata['upnp:album']
                  };

                  $scope.$apply(function() {
                    $scope.playlist.tracks[$scope.current] =
                      $scope.track;
                  });
                }
              });
            });

            client.on('playing', function() {
              getMediaInfo();
              $scope.controls.play = true;
            });

            client.on('paused', function() {
              $scope.controls.play = false;
            });

            client.on('stopped', function() {
              $scope.controls.play = false;
            });

            $scope.next = function() {
              client.seek($scope.controls.duration, function(err,
                data) {
                setTimeout(function() {
                  getMediaInfo();
                }, 1500);

              });
            };

            function resetPlayMode() {
              client.normal(function(err, data) {
                console.log(err, data)
              });
              $scope.controls.shuffle = false;
              $scope.controls.repeat = false;
              $scope.controls.loop = false;
            }

            $scope.shuffle = function() {
              if ($scope.controls.shuffle) {
                resetPlayMode();
              } else {
                $scope.controls.shuffle = true;
                client.shuffle();
              }
            };

            $scope.toggleRepeat = function() {
              if (!$scope.control.loop && !$scope.controls.repeat) {
                $scope.controls.loop = true;
                $scope.controls.repeat = false;
                client.repeatAll();
              } else if ($scope.control.loop && !$scope.controls.repeat) {
                $scope.controls.loop = false;
                $scope.controls.repeat = true;
                client.repeatOne();
              } else if (!$scope.control.loop && $scope.controls.repeat) {
                resetPlayMode();
              } else {
                resetPlayMode();
              }
            };

            $scope.play = function() {
              if ($scope.controls.play) {
                client.pause();
                clearInterval(timeInterval);
              } else {
                client.play();
                timer();
              }
              $scope.controls.play = !$scope.controls.play;
            };

            client.getServiceDescription('AVTransport', function(err,
              service) {
              console.log(err, service)
            })

          }
        ]
      };
    }]);
})();
