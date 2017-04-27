(function() {
  'use strict';

  angular.module('petron.core')
    .service('petron.fs', ['fs', 'path', 'app', '$q', '$sce', 'musicmetadata',
      'ffmpeg', 'ffprobe',
      function(
        fs, path, app, $q, $sce, mm, Ffmpeg, ffprobe) {
        //var basePath = app.getPath('home') + '/Downloads/';

        this.getAudioFiles = function(fpath) {
          var deferred = $q.defer();
          var audioSources = [];

          if (!fpath) {
            fpath = app.getPath('home') + '/Music';
          }

          var files = fs.readdirSync(fpath);

          async.each(files, function(file, done) {
            if (file.split('.').pop().match(/mp3|aac|wma|m4a/)) {
              async.waterfall([
                function(callback) {
                  var readableStream = fs.createReadStream(fpath +
                    '/' + file);
                  mm(readableStream, function(err, tags) {

                    if (err) {
                      return callback(err);
                    }

                    var img = null,
                      type = null;

                    if (tags.picture.length > 0 && tags.picture[
                        0].data) {
                      img = tags.picture[0].data.toString(
                        'base64');
                      type = tags.picture[0].format;
                    }

                    tags = {
                      artist: tags.artist[0],
                      album: tags.album,
                      title: tags.title,
                      image: img,
                      image_type: type
                    };

                    readableStream.close();
                    callback(err, tags);
                  });
                },
                function(tags, callback) {
                  if (!tags) {
                    tags = {};
                  }

                  tags.name = file.replace(/\.[^/.]+$/, "");

                  if (file.split('.').pop().match(
                      /mp3|aac|wma|m4a/)) {
                    tags.path = $sce.trustAsResourceUrl(encodeURI(
                      path.join(fpath,
                        file)));
                    tags.type = file.split('.').pop();
                  }

                  audioSources.push(tags);
                  callback(null);
                }
              ], function(err) {
                return done(err);
              });
            } else {
              if (fs.lstatSync(path.join(fpath, file)).isDirectory()) {
                var tags = {};
                tags.name = file.replace(/\.[^/.]+$/, "");
                tags.path = path.join(fpath, file);
                tags.type = 'folder';
                audioSources.push(tags);
              }
              return done(null);
            }
          }, function(err) {
            if (err) {
              return deferred.reject(err);
            }

            return deferred.resolve(audioSources);
          });

          return deferred.promise;
        };

        this.getVideoFiles = function(fpath) {
          var deferred = $q.defer();
          var videoSources = [];

          if (!fpath) {
            fpath = app.getPath('home') + '/Downloads';
          }
          var files = fs.readdirSync(fpath);

          async.each(files, function(file, done) {
            if (file.split('.').pop().match(/mp4|mpeg|avi/)) {
              async.waterfall([
                function(callback) {
                  var process = new Ffmpeg(fpath + '/' + file);
                  process.then(function(tags) {
                    var isHD = false;
                    ffprobe(fpath + '/' + file, {
                      path: '/usr/local/bin/ffprobe'
                    }, function(err, info) {
                      if (err) {
                        return callback(err);
                      }

                      var width = info.streams[0].width;
                      var height = info.streams[0].height;

                      if (width >= 1280 && height >= 720) {
                        isHD = true;
                      }

                      var img = null,
                        type = null;

                      if (tags.picture && tags.picture.length >
                        0 && tags.picture[
                          0].data) {
                        img = tags.picture[0].data.toString(
                          'base64');
                        type = tags.picture[0].format;
                      }

                      tags = {
                        artist: tags.metadata.artist[0],
                        album: tags.metadata.album,
                        title: tags.metadata.title,
                        hd: isHD,
                        duration: info.streams[0].duration,
                        image: img,
                        image_type: type
                      };

                      return callback(null, tags);
                    });
                  }, function(err) {
                    return callback(err);
                  });
                },
                function(tags, callback) {
                  if (!tags) {
                    tags = {};
                  }

                  tags.name = file.replace(/\.[^/.]+$/, "");

                  if (file.split('.').pop().match(/mp4|mpeg|avi/)) {
                    tags.path = $sce.trustAsResourceUrl(encodeURI(
                      path.join(fpath,
                        file)));
                    tags.type = file.split('.').pop();
                  }

                  videoSources.push(tags);
                  return callback(null);
                }
              ], function(err) {
                return done(err);
              });
            } else {
              if (fs.lstatSync(path.join(fpath, file)).isDirectory()) {
                var tags = {};
                tags.name = file.replace(/\.[^/.]+$/, "");
                tags.path = path.join(fpath, file);
                tags.type = 'folder';
                videoSources.push(tags);
              }
              return done(null);
            }
          }, function(err) {
            if (err) {
              return deferred.reject(err);
            }

            return deferred.resolve(videoSources);
          });

          return deferred.promise;
        };
      }
    ]);
})();
