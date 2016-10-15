angular.module('petron.core.templates', ['_main/_directive/audioplayer/petron.audioplayer.html', '_main/_directive/daemon/petron.daemon.html', '_main/_directive/filetree/petron.filetree.html', '_main/_directive/videoplayer/petron.videoplayer.html', '_main/_template/petron.confirm.html', '_main/_template/petron.header.html', '_main/_template/petron.home.html', '_modules/audio_module/_template/add_to_playlist_modal.html', '_modules/audio_module/_template/layout.html', '_modules/audio_module/_template/main.html', '_modules/audio_module/_template/new_playlist_modal.html', '_modules/audio_module/_template/player.html', '_modules/navigation_module/_template/main.html', '_modules/video_module/_template/add_to_playlist_modal.html', '_modules/video_module/_template/layout.html', '_modules/video_module/_template/main.html', '_modules/video_module/_template/new_playlist_modal.html', '_modules/video_module/_template/player.html', '_vendor/messageformat/doc/index.html', '_vendor/messageformat/doc/MessageFormat.formatters.html', '_vendor/messageformat/doc/MessageFormat.html', '_vendor/messageformat/doc/messageformat.js.html', '_vendor/messageformat/doc/Runtime.html', '_vendor/messageformat/example/index.html', 'index.html', 'loader.html']);

angular.module("_main/_directive/audioplayer/petron.audioplayer.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_main/_directive/audioplayer/petron.audioplayer.html",
    "<audio class=\"c--audio__player\" autoplay ng-click=\"player.audio.play()\">\n" +
    "	<source ng-repeat=\"file in player.audio.playlist\" ng-if=\"player.audio.playlist && file.play\" ng-src=\"{{ file.path }}\" type=\"audio/{{ file.type}}\">\n" +
    "</audio>\n" +
    "<section class=\"c--audio__controls\">\n" +
    "	<button class=\"button\" ng-click=\"player.audio.daemonize()\">\n" +
    "		<i class=\"icon-home\"></i>\n" +
    "	</button>\n" +
    "	<button class=\"button\" ng-click=\"player.audio.prev()\">\n" +
    "		<i class=\"icon-media-rewind\"></i>\n" +
    "	</button>\n" +
    "	<button class=\"button\" ng-click=\"player.audio.play()\">\n" +
    "		<i class=\"icon-media-play\" ng-if=\"player.audio.showPlay\"></i>\n" +
    "		<i class=\"icon-media-pause\" ng-if=\"!player.audio.showPlay\"></i>\n" +
    "	</button>\n" +
    "	<button class=\"button\" ng-click=\"player.audio.next()\">\n" +
    "		<i class=\"icon-media-forward\"></i>\n" +
    "	</button>\n" +
    "	<button class=\"button\" ng-click=\"player.audio.loop()\" ng-class=\"{'is-primary': player.audio.controls.loop}\">\n" +
    "		<i class=\"icon-loop\"></i>\n" +
    "	</button>\n" +
    "	<button class=\"button\" ng-click=\"player.audio.shuffle()\" ng-class=\"{'is-primary': player.audio.controls.shuffle}\">\n" +
    "		<i class=\"icon-shuffle\"></i>\n" +
    "	</button>\n" +
    "	<button class=\"button\" ng-click=\"player.audio.repeat()\" ng-class=\"{'is-primary': player.audio.controls.repeat}\">\n" +
    "		<i class=\"icon-repeat\"></i>\n" +
    "	</button>\n" +
    "	<input ng-model=\"player.audio.controls.currentTime\" ng-change=\"player.audio.setTime()\" type=\"range\" min=\"0\" max=\"{{ player.audio.controls.duration }}\" step=\"1\" /> {{ player.audio.controls.currentTime | buildTime }}\n" +
    "	<strong>{{ playler.audio.playlist[playler.audio.currentIndex].name }}</strong><br>\n" +
    "	<i class=\"icon-volume-down\"></i>\n" +
    "	<input ng-model=\"player.audio.controls.volume\" ng-change=\"player.audio.setVolume()\" type=\"range\" min=\"0\" max=\"1\" step=\"0.01\" />\n" +
    "	<i class=\"icon-volume-up\"></i>\n" +
    "</section>\n" +
    "<section class=\"c--audio__playlist\">\n" +
    "	<ul>\n" +
    "		<li ng-repeat=\"file in player.audio.playlist\" ng-click=\"player.audio.playFile($index)\">{{ file.name }}</li>\n" +
    "	</ul>\n" +
    "</section>\n" +
    "");
}]);

angular.module("_main/_directive/daemon/petron.daemon.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_main/_directive/daemon/petron.daemon.html",
    "<div class=\"c--daemon__container\">\n" +
    "	<video ng-if=\"daemon.type === 'video'\" class=\"c--video__player\" autoplay>\n" +
    "		<source ng-repeat=\"file in player.video.playlist\" ng-if=\"player.video.playlist && file.play\" ng-src=\"{{ file.path }}\" type=\"video/{{ file.type}}\">\n" +
    "	</video>\n" +
    "	<audio ng-if=\"daemon.type === 'audio'\" class=\"c--audio__player\" autoplay ng-click=\"player.audio.play()\">\n" +
    "		<source ng-repeat=\"file in player.audio.playlist\" ng-if=\"player.audio.playlist && file.play\" ng-src=\"{{ file.path }}\" type=\"audio/{{ file.type}}\">\n" +
    "	</audio>\n" +
    "</div>\n" +
    "");
}]);

angular.module("_main/_directive/filetree/petron.filetree.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_main/_directive/filetree/petron.filetree.html",
    "<ul ng-if=\"files\">\n" +
    "	<li ng-repeat=\"file in files\">\n" +
    "		<span ng-click=\"open(file)\" class=\"is-vcentered\">\n" +
    "			<span class=\"icon\">\n" +
    "				<i class=\"fa\" ng-class=\"{'icon-folder': file.type === 'folder', 'icon-video-outline': (file.type !== 'folder' && file.type !== 'playlist'), 'icon-playlist': file.type === 'playlist'}\"></i>\n" +
    "			</span>\n" +
    "			{{ file.name }}\n" +
    "		</span>\n" +
    "		<button ng-if=\"file.type !== 'folder' && file.type !== 'playlist'\" class=\"button\" ng-click=\"func.addToQueue(file)\">{{ 'filetree.add_to_queue' | translate }}</button>\n" +
    "		<button ng-if=\"file.type !== 'folder' && file.type !== 'playlist'\" class=\"button\" ng-click=\"func.addToPlaylist(file)\">{{ 'filetree.add_to_playlist' | translate }}</button>\n" +
    "		<petron-filetree files=\"file.childs\" func=\"func\" ng-show=\"file.show\"></petron-filetree>\n" +
    "	</li>\n" +
    "	<li ng-if=\"!files || files.length < 1\">\n" +
    "		<strong>{{ 'no_file' |translate }}</strong>\n" +
    "	</li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("_main/_directive/videoplayer/petron.videoplayer.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_main/_directive/videoplayer/petron.videoplayer.html",
    "<video class=\"c--video__player\" autoplay ng-click=\"player.video.videoPlay()\">\n" +
    "	<source ng-repeat=\"file in player.video.playlist\" ng-if=\"player.video.playlist && file.play\" ng-src=\"{{ file.path }}\" type=\"video/{{ file.type}}\">\n" +
    "</video>\n" +
    "<section class=\"c--video__controls\">\n" +
    "	<button class=\"button\" ng-click=\"player.video.daemonize()\">\n" +
    "		<i class=\"icon-home\"></i>\n" +
    "	</button>\n" +
    "	<button class=\"button\" ng-click=\"player.video.videoPrev()\">\n" +
    "		<i class=\"icon-media-rewind\"></i>\n" +
    "	</button>\n" +
    "	<button class=\"button\" ng-click=\"player.video.videoPlay()\">\n" +
    "		<i class=\"icon-media-play\" ng-if=\"player.video.showPlay\"></i>\n" +
    "		<i class=\"icon-media-pause\" ng-if=\"!player.video.showPlay\"></i>\n" +
    "	</button>\n" +
    "	<button class=\"button\" ng-click=\"player.video.videoNext()\">\n" +
    "		<i class=\"icon-media-forward\"></i>\n" +
    "	</button>\n" +
    "	<button class=\"button\" ng-click=\"player.video.videoLoop()\" ng-class=\"{'is-primary': player.video.controls.loop}\">\n" +
    "		<i class=\"icon-loop\"></i>\n" +
    "	</button>\n" +
    "	<button class=\"button\" ng-click=\"player.video.videoShuffle()\" ng-class=\"{'is-primary': player.video.controls.shuffle}\">\n" +
    "		<i class=\"icon-shuffle\"></i>\n" +
    "	</button>\n" +
    "	<button class=\"button\" ng-click=\"player.video.videoRepeat()\" ng-class=\"{'is-primary': player.video.controls.repeat}\">\n" +
    "		<i class=\"icon-repeat\"></i>\n" +
    "	</button>\n" +
    "	<input ng-model=\"player.video.controls.currentTime\" ng-change=\"player.video.setTime()\" type=\"range\" min=\"0\" max=\"{{ player.video.controls.duration }}\" step=\"1\" /> {{ player.video.controls.currentTime | buildTime }}\n" +
    "	<strong>{{ player.video.playlist[player.video.currentIndex].name }}</strong><br>\n" +
    "	<i class=\"icon-volume-down\"></i>\n" +
    "	<input ng-model=\"player.video.controls.volume\" ng-change=\"player.video.setVolume()\" type=\"range\" min=\"0\" max=\"1\" step=\"0.01\" />\n" +
    "	<i class=\"icon-volume-up\"></i>\n" +
    "</section>\n" +
    "<section class=\"c--video__playlist\">\n" +
    "	<ul>\n" +
    "		<li ng-repeat=\"file in player.video.playlist\" ng-click=\"player.video.playFile($index)\">{{ file.name }}</li>\n" +
    "	</ul>\n" +
    "</section>\n" +
    "");
}]);

angular.module("_main/_template/petron.confirm.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_main/_template/petron.confirm.html",
    "<div class=\"columns\">\n" +
    "	<div class=\"column\">\n" +
    "		<h3 class=\"title is-4\">\n" +
    "			{{ title | translate }}\n" +
    "		</h3>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"columns\">\n" +
    "	<div class=\"column\">\n" +
    "		<p>{{ text | translate}}</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"columns\">\n" +
    "	<div class=\"column\">\n" +
    "		<button class=\"button\" ng-click=\"confirm()\">{{ ((button) ? button : 'modal.button_confirm')  | translate }}</button>\n" +
    "		<button class=\"button\" ng-click=\"closeThisDialog()\">{{ 'modal.button_cancel' | translate }}</button>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("_main/_template/petron.header.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_main/_template/petron.header.html",
    "<section class=\"section\">\n" +
    "	<div class=\"container is-fluid\">\n" +
    "		<div class=\"columns\">\n" +
    "			<div class=\"column is-1\">\n" +
    "				<span class=\"icon is-large\" ui-sref=\"home\">\n" +
    "					<i class=\"fa icon-home\"></i>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "			<div class=\"column is-5\">\n" +
    "				<h3 class=\"title is-3\">{{ 'petron' | translate }} - {{ title | translate }}</h3>\n" +
    "			</div>\n" +
    "			<div class=\"column is-6 has-text-right\">\n" +
    "				<h4 class=\"title is-4\">{{ date | date:'dd.MM.yyyy HH:mm'}}</h4>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("_main/_template/petron.home.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_main/_template/petron.home.html",
    "<div class=\"hero is-fullheight\">\n" +
    "	<div class=\"hero-body\">\n" +
    "		<div class=\"container is-fluid\">\n" +
    "			<div class=\"columns\">\n" +
    "				<div class=\"column has-text-centered\">\n" +
    "					<h1 class=\"title is-1\">\n" +
    "						{{ 'petron' | translate }}\n" +
    "					</h1>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"columns\">\n" +
    "				<div class=\"column is-6\" ui-sref=\"radiobox.main\">\n" +
    "					<h2 class=\"title is-2 is-vcentered\">\n" +
    "						<span class=\"icon is-large\">\n" +
    "							<i class=\"fa icon-radio\"></i>\n" +
    "						</span>\n" +
    "						{{ 'radio_module' | translate }}\n" +
    "					</h2>\n" +
    "				</div>\n" +
    "				<div class=\"column is-6\" ui-sref=\"navigationbox.main\">\n" +
    "					<h2 class=\"title is-2 is-vcentered is-aligned-right\">\n" +
    "						{{ 'navigation_module' | translate }}\n" +
    "						<span class=\"icon is-large\">\n" +
    "							<i class=\"fa icon-location-arrow\"></i>\n" +
    "						</span>\n" +
    "					</h2>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"columns\">\n" +
    "				<div class=\"column is-6\" ui-sref=\"audiobox.main\">\n" +
    "					<h2 class=\"title is-2 is-vcentered\">\n" +
    "						<span class=\"icon is-large\">\n" +
    "							<i class=\"fa icon-notes\"></i>\n" +
    "						</span>\n" +
    "						{{ 'music_module' | translate }}\n" +
    "					</h2>\n" +
    "				</div>\n" +
    "				<div class=\"column is-6\" ui-sref=\"healthbox.main\">\n" +
    "					<h2 class=\"title is-2 is-vcentered is-aligned-right\">\n" +
    "						{{ 'health_module' | translate }}\n" +
    "						<span class=\"icon is-large\">\n" +
    "							<i class=\"fa icon-spanner\"></i>\n" +
    "						</span>\n" +
    "					</h2>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"columns\">\n" +
    "				<div class=\"column is-6 \" ui-sref=\"videobox.main\">\n" +
    "					<h2 class=\"title is-2 is-vcentered\">\n" +
    "						<span class=\"icon is-large\">\n" +
    "							<i class=\"fa icon-video\"></i>\n" +
    "						</span>\n" +
    "						{{ 'video_module' | translate }}\n" +
    "					</h2>\n" +
    "				</div>\n" +
    "				<div class=\"column is-6\" ui-sref=\"settingbox.main\">\n" +
    "					<h2 class=\"title is-2 is-2 is-vcentered is-aligned-right\">\n" +
    "						{{ 'settings_module' | translate }}\n" +
    "						<span class=\"icon is-large\">\n" +
    "							<i class=\"fa icon-cog\"></i>\n" +
    "						</span>\n" +
    "					</h2>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("_modules/audio_module/_template/add_to_playlist_modal.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_modules/audio_module/_template/add_to_playlist_modal.html",
    "<div class=\"columns\">\n" +
    "	<div class=\"column\">\n" +
    "		<h3 class=\"title is-4\">\n" +
    "			{{ 'add_to_playlist_modal_title' | translate }}\n" +
    "		</h3>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"columns\">\n" +
    "	<div class=\"column\">\n" +
    "		<label for=\"paylist\">{{ 'choose_playlist_label' | translate }}</label>\n" +
    "		<select name=\"playlist\" id=\"playlist\" ng-model=\"usePlaylist\">\n" +
    "			<option value=\"create_new\" selected>{{ 'create_new_playlist' | translate }}</option>\n" +
    "      <option ng-repeat=\"option in $parent.playlists\" value=\"{{ option.name }}\">{{ option.name | translate }}</option>\n" +
    "    </select>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"columns\">\n" +
    "	<div class=\"column\">\n" +
    "		<button class=\"button\" ng-click=\"addToPlaylist()\">{{ 'modal.button_save' | translate }}</button>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("_modules/audio_module/_template/layout.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_modules/audio_module/_template/layout.html",
    "<header ui-view=\"header\" class=\"c--header\"></header>\n" +
    "<main ui-view=\"main\" class=\"c--main\"></main>\n" +
    "<footer ui-view=\"footer\" class=\"c--footer\"></footer>\n" +
    "");
}]);

angular.module("_modules/audio_module/_template/main.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_modules/audio_module/_template/main.html",
    "<button class=\"button\" ng-click=\"newPlaylist()\">{{ 'new_playlist' | translate }}</button>\n" +
    "<button class=\"button\" ui-sref=\"audiobox.player\" ng-disabled=\"queue.tracks === undefined || queue.tracks.length < 1\">{{ 'play' | translate }}</button>\n" +
    "\n" +
    "<hr>\n" +
    "<petron-filetree files=\"files\" func=\"func\" show=\"true\"></petron-filetree>\n" +
    "<hr>\n" +
    "\n" +
    "<ul>\n" +
    "	<li ng-repeat=\"list in playlists\">\n" +
    "		<span ng-click=\"func.play(list.name)\" class=\"is-vcentered\">\n" +
    "			<span class=\"icon\">\n" +
    "				<i class=\"fa icon-playlist\"></i>\n" +
    "			</span>\n" +
    "			{{ list.name }}\n" +
    "		</span>\n" +
    "		<button class=\"button\" ng-click=\"removePlaylist(list.name, $index)\">{{ 'delete_playlist' | translate }}</button>\n" +
    "	</li>\n" +
    "</ul>\n" +
    "\n" +
    "<button class=\"button\" ng-click=\"clearCurrentQueue()\">{{ 'clear_queue_playlists' | translate }}</button>\n" +
    "<button class=\"button\" ng-click=\"deleteAllPlaylists()\">{{ 'delete_all_playlists' | translate }}</button>\n" +
    "");
}]);

angular.module("_modules/audio_module/_template/new_playlist_modal.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_modules/audio_module/_template/new_playlist_modal.html",
    "<div class=\"columns\">\n" +
    "	<div class=\"column\">\n" +
    "		<h3 class=\"title is-4\">\n" +
    "			{{ 'new_playlist_modal_title' | translate }}\n" +
    "		</h3>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"columns\">\n" +
    "	<div class=\"column\">\n" +
    "		<input type=\"text\" class=\"input\" ng-model=\"name\" placeholder=\"{{ 'new_playlist_modal_ph' | translate }}\">\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"columns\">\n" +
    "	<div class=\"column\">\n" +
    "		<button class=\"button\" ng-click=\"savePlaylist()\">{{ 'modal.button_save' | translate }}</button>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("_modules/audio_module/_template/player.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_modules/audio_module/_template/player.html",
    "<petron-audio playlist=\"playlist\"></petron-audio>\n" +
    "");
}]);

angular.module("_modules/navigation_module/_template/main.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_modules/navigation_module/_template/main.html",
    "<div class=\"map\"></div>\n" +
    "");
}]);

angular.module("_modules/video_module/_template/add_to_playlist_modal.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_modules/video_module/_template/add_to_playlist_modal.html",
    "<div class=\"columns\">\n" +
    "	<div class=\"column\">\n" +
    "		<h3 class=\"title is-4\">\n" +
    "			{{ 'add_to_playlist_modal_title' | translate }}\n" +
    "		</h3>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"columns\">\n" +
    "	<div class=\"column\">\n" +
    "		<label for=\"paylist\">{{ 'choose_playlist_label' | translate }}</label>\n" +
    "		<select name=\"playlist\" id=\"playlist\" ng-model=\"usePlaylist\">\n" +
    "			<option value=\"create_new\" selected>{{ 'create_new_playlist' | translate }}</option>\n" +
    "      <option ng-repeat=\"option in $parent.playlists\" value=\"{{ option.name }}\">{{ option.name | translate }}</option>\n" +
    "    </select>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"columns\">\n" +
    "	<div class=\"column\">\n" +
    "		<button class=\"button\" ng-click=\"addToPlaylist()\">{{ 'modal.button_save' | translate }}</button>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("_modules/video_module/_template/layout.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_modules/video_module/_template/layout.html",
    "<header ui-view=\"header\" class=\"c--header\"></header>\n" +
    "<main ui-view=\"main\" class=\"c--main\"></main>\n" +
    "<footer ui-view=\"footer\" class=\"c--footer\"></footer>\n" +
    "");
}]);

angular.module("_modules/video_module/_template/main.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_modules/video_module/_template/main.html",
    "<button class=\"button\" ng-click=\"newPlaylist()\">{{ 'new_playlist' | translate }}</button>\n" +
    "<button class=\"button\" ui-sref=\"videobox.player\" ng-disabled=\"queue.tracks === undefined || queue.tracks.length < 1\">{{ 'play' | translate }}</button>\n" +
    "\n" +
    "<hr>\n" +
    "<petron-filetree files=\"files\" func=\"func\" show=\"true\"></petron-filetree>\n" +
    "<hr>\n" +
    "\n" +
    "<ul>\n" +
    "	<li ng-repeat=\"list in playlists\">\n" +
    "		<span ng-click=\"func.play(list.name)\" class=\"is-vcentered\">\n" +
    "			<span class=\"icon\">\n" +
    "				<i class=\"fa icon-playlist\"></i>\n" +
    "			</span>\n" +
    "			{{ list.name }}\n" +
    "		</span>\n" +
    "		<button class=\"button\" ng-click=\"removePlaylist(list.name, $index)\">{{ 'delete_playlist' | translate }}</button>\n" +
    "	</li>\n" +
    "</ul>\n" +
    "\n" +
    "<button class=\"button\" ng-click=\"clearCurrentQueue()\">{{ 'clear_queue_playlists' | translate }}</button>\n" +
    "<button class=\"button\" ng-click=\"deleteAllPlaylists()\">{{ 'delete_all_playlists' | translate }}</button>\n" +
    "");
}]);

angular.module("_modules/video_module/_template/new_playlist_modal.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_modules/video_module/_template/new_playlist_modal.html",
    "<div class=\"columns\">\n" +
    "	<div class=\"column\">\n" +
    "		<h3 class=\"title is-4\">\n" +
    "			{{ 'new_playlist_modal_title' | translate }}\n" +
    "		</h3>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"columns\">\n" +
    "	<div class=\"column\">\n" +
    "		<input type=\"text\" class=\"input\" ng-model=\"name\" placeholder=\"{{ 'new_playlist_modal_ph' | translate }}\">\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"columns\">\n" +
    "	<div class=\"column\">\n" +
    "		<button class=\"button\" ng-click=\"savePlaylist()\">{{ 'modal.button_save' | translate }}</button>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("_modules/video_module/_template/player.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_modules/video_module/_template/player.html",
    "<petron-video playlist=\"playlist\"></petron-video>\n" +
    "");
}]);

angular.module("_vendor/messageformat/doc/index.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_vendor/messageformat/doc/index.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>JSDoc: Home</title>\n" +
    "\n" +
    "    <script src=\"scripts/prettify/prettify.js\"> </script>\n" +
    "    <script src=\"scripts/prettify/lang-css.js\"> </script>\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n" +
    "    <![endif]-->\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"styles/prettify-tomorrow.css\">\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"styles/jsdoc-default.css\">\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "\n" +
    "<div id=\"main\">\n" +
    "\n" +
    "    <h1 class=\"page-title\">Home</h1>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "    <h3> </h3>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<section>\n" +
    "\n" +
    "<header>\n" +
    "    \n" +
    "        <h2>messageformat.js</h2>\n" +
    "        \n" +
    "    \n" +
    "</header>\n" +
    "\n" +
    "<article>\n" +
    "    <div class=\"container-overview\">\n" +
    "    \n" +
    "        \n" +
    "            <div class=\"description\"><p>messageformat.js - ICU PluralFormat + SelectFormat for JavaScript</p></div>\n" +
    "        \n" +
    "\n" +
    "        \n" +
    "\n" +
    "\n" +
    "<dl class=\"details\">\n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-version\">Version:</dt>\n" +
    "    <dd class=\"tag-version\"><ul class=\"dummy\"><li>0.3.1</li></ul></dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-author\">Author:</dt>\n" +
    "    <dd class=\"tag-author\">\n" +
    "        <ul>\n" +
    "            <li>Alex Sexton - @SlexAxton, Eemeli Aro</li>\n" +
    "        </ul>\n" +
    "    </dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-copyright\">Copyright:</dt>\n" +
    "    <dd class=\"tag-copyright\"><ul class=\"dummy\"><li>2012-2016 Alex Sexton, Eemeli Aro, and Contributors</li></ul></dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-license\">License:</dt>\n" +
    "    <dd class=\"tag-license\"><ul class=\"dummy\"><li>To use or fork, MIT. To contribute back, Dojo CLA</li></ul></dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-source\">Source:</dt>\n" +
    "    <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n" +
    "        <a href=\"messageformat.js.html\">messageformat.js</a>, <a href=\"messageformat.js.html#line1\">line 1</a>\n" +
    "    </li></ul></dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</dl>\n" +
    "\n" +
    "\n" +
    "        \n" +
    "    \n" +
    "    </div>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "     \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</article>\n" +
    "\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<nav>\n" +
    "    <h2><a href=\"index.html\">Home</a></h2><h3>Classes</h3><ul><li><a href=\"MessageFormat.html\">MessageFormat</a></li><li><a href=\"Runtime.html\">Runtime</a></li></ul><h3>Namespaces</h3><ul><li><a href=\"MessageFormat.formatters.html\">formatters</a></li></ul>\n" +
    "</nav>\n" +
    "\n" +
    "<br class=\"clear\">\n" +
    "\n" +
    "<footer>\n" +
    "    Documentation generated by <a href=\"https://github.com/jsdoc3/jsdoc\">JSDoc 3.4.0</a> on Sat Feb 20 2016 18:21:43 GMT+0200 (EET)\n" +
    "</footer>\n" +
    "\n" +
    "<script> prettyPrint(); </script>\n" +
    "<script src=\"scripts/linenumber.js\"> </script>\n" +
    "</body>\n" +
    "</html>");
}]);

angular.module("_vendor/messageformat/doc/MessageFormat.formatters.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_vendor/messageformat/doc/MessageFormat.formatters.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>JSDoc: Namespace: formatters</title>\n" +
    "\n" +
    "    <script src=\"scripts/prettify/prettify.js\"> </script>\n" +
    "    <script src=\"scripts/prettify/lang-css.js\"> </script>\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n" +
    "    <![endif]-->\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"styles/prettify-tomorrow.css\">\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"styles/jsdoc-default.css\">\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "\n" +
    "<div id=\"main\">\n" +
    "\n" +
    "    <h1 class=\"page-title\">Namespace: formatters</h1>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<section>\n" +
    "\n" +
    "<header>\n" +
    "    \n" +
    "        <h2>\n" +
    "            <span class=\"ancestors\"><a href=\"MessageFormat.html\">MessageFormat</a>.</span>formatters</h2>\n" +
    "        \n" +
    "    \n" +
    "</header>\n" +
    "\n" +
    "<article>\n" +
    "    <div class=\"container-overview\">\n" +
    "    \n" +
    "        \n" +
    "            <div class=\"description\"><p>Default number formatting functions in the style of ICU's\n" +
    " <a href=\"http://icu-project.org/apiref/icu4j/com/ibm/icu/text/MessageFormat.html\">simpleArg syntax</a>\n" +
    " implemented using the\n" +
    " <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl\">Intl</a>\n" +
    " object defined by ECMA-402.</p>\n" +
    "<p> <strong>Note</strong>: Intl is not defined in default Node until 0.11.15 / 0.12.0, so\n" +
    " earlier versions require a <a href=\"https://www.npmjs.com/package/intl\">polyfill</a>.\n" +
    " Therefore MessageFormat.withIntlSupport needs to be true for these\n" +
    " functions to be available for inclusion in the output.</p></div>\n" +
    "        \n" +
    "\n" +
    "        \n" +
    "\n" +
    "\n" +
    "    <h5 class=\"subsection-title\">Properties:</h5>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "<table class=\"props\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        \n" +
    "        <th>Name</th>\n" +
    "        \n" +
    "\n" +
    "        <th>Type</th>\n" +
    "\n" +
    "        \n" +
    "\n" +
    "        \n" +
    "\n" +
    "        <th class=\"last\">Description</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "\n" +
    "    <tbody>\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>number</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">function</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>Represent a number as an integer, percent or currency value</p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>date</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">function</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>Represent a date as a full/long/default/short string</p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>time</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">function</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>Represent a time as a full/long/default/short string</p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "    </tbody>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<dl class=\"details\">\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-source\">Source:</dt>\n" +
    "    <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n" +
    "        <a href=\"messageformat.js.html\">messageformat.js</a>, <a href=\"messageformat.js.html#line126\">line 126</a>\n" +
    "    </li></ul></dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-see\">See:</dt>\n" +
    "    <dd class=\"tag-see\">\n" +
    "        <ul>\n" +
    "            <li><a href=\"MessageFormat.html#setIntlSupport\">MessageFormat#setIntlSupport</a></li>\n" +
    "        </ul>\n" +
    "    </dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</dl>\n" +
    "\n" +
    "\n" +
    "        \n" +
    "            <h3>Examples</h3>\n" +
    "            \n" +
    "    <pre class=\"prettyprint\"><code>var mf = new MessageFormat('en').setIntlSupport(true);\n" +
    "mf.currency = 'EUR';\n" +
    "var cf = mf.compile('The total is {V,number,currency}.');\n" +
    "\n" +
    "cf({ V: 5.5 })\n" +
    "// 'The total is €5.50.'</code></pre>\n" +
    "\n" +
    "    <pre class=\"prettyprint\"><code>var mf = new MessageFormat('en', null, {number: MessageFormat.number});\n" +
    "mf.currency = 'EUR';\n" +
    "var cf = mf.compile('The total is {V,number,currency}.');\n" +
    "\n" +
    "cf({ V: 5.5 })\n" +
    "// 'The total is €5.50.'</code></pre>\n" +
    "\n" +
    "        \n" +
    "    \n" +
    "    </div>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "     \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</article>\n" +
    "\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<nav>\n" +
    "    <h2><a href=\"index.html\">Home</a></h2><h3>Classes</h3><ul><li><a href=\"MessageFormat.html\">MessageFormat</a></li><li><a href=\"Runtime.html\">Runtime</a></li></ul><h3>Namespaces</h3><ul><li><a href=\"MessageFormat.formatters.html\">formatters</a></li></ul>\n" +
    "</nav>\n" +
    "\n" +
    "<br class=\"clear\">\n" +
    "\n" +
    "<footer>\n" +
    "    Documentation generated by <a href=\"https://github.com/jsdoc3/jsdoc\">JSDoc 3.4.0</a> on Sat Feb 20 2016 18:21:44 GMT+0200 (EET)\n" +
    "</footer>\n" +
    "\n" +
    "<script> prettyPrint(); </script>\n" +
    "<script src=\"scripts/linenumber.js\"> </script>\n" +
    "</body>\n" +
    "</html>");
}]);

angular.module("_vendor/messageformat/doc/MessageFormat.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_vendor/messageformat/doc/MessageFormat.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>JSDoc: Class: MessageFormat</title>\n" +
    "\n" +
    "    <script src=\"scripts/prettify/prettify.js\"> </script>\n" +
    "    <script src=\"scripts/prettify/lang-css.js\"> </script>\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n" +
    "    <![endif]-->\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"styles/prettify-tomorrow.css\">\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"styles/jsdoc-default.css\">\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "\n" +
    "<div id=\"main\">\n" +
    "\n" +
    "    <h1 class=\"page-title\">Class: MessageFormat</h1>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<section>\n" +
    "\n" +
    "<header>\n" +
    "    \n" +
    "        <h2>MessageFormat</h2>\n" +
    "        \n" +
    "    \n" +
    "</header>\n" +
    "\n" +
    "<article>\n" +
    "    <div class=\"container-overview\">\n" +
    "    \n" +
    "        \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    <h4 class=\"name\" id=\"MessageFormat\"><span class=\"type-signature\"></span>new MessageFormat<span class=\"signature\">(locale<span class=\"signature-attributes\">opt</span>, pluralFunc<span class=\"signature-attributes\">opt</span>, formatters<span class=\"signature-attributes\">opt</span>)</span><span class=\"type-signature\"></span></h4>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"description\">\n" +
    "    <p>Create a new message formatter</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <h5>Parameters:</h5>\n" +
    "    \n" +
    "\n" +
    "<table class=\"params\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        \n" +
    "        <th>Name</th>\n" +
    "        \n" +
    "\n" +
    "        <th>Type</th>\n" +
    "\n" +
    "        \n" +
    "        <th>Attributes</th>\n" +
    "        \n" +
    "\n" +
    "        \n" +
    "        <th>Default</th>\n" +
    "        \n" +
    "\n" +
    "        <th class=\"last\">Description</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "\n" +
    "    <tbody>\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>locale</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">string</span>\n" +
    "|\n" +
    "\n" +
    "<span class=\"param-type\">Array.&lt;string></span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "                    &lt;optional><br>\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "                <td class=\"default\">\n" +
    "                \n" +
    "                    \"en\"\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>The locale to use, with fallbacks</p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>pluralFunc</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">function</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "                    &lt;optional><br>\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "                <td class=\"default\">\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>Optional custom pluralization function</p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>formatters</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">Array.&lt;function()></span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "                    &lt;optional><br>\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "                <td class=\"default\">\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>Optional custom formatting functions</p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "    </tbody>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<dl class=\"details\">\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-source\">Source:</dt>\n" +
    "    <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n" +
    "        <a href=\"messageformat.js.html\">messageformat.js</a>, <a href=\"messageformat.js.html#line51\">line 51</a>\n" +
    "    </li></ul></dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</dl>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    \n" +
    "    </div>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "     \n" +
    "\n" +
    "    \n" +
    "        <h3 class=\"subsection-title\">Namespaces</h3>\n" +
    "\n" +
    "        <dl>\n" +
    "            <dt><a href=\"MessageFormat.formatters.html\">formatters</a></dt>\n" +
    "            <dd></dd>\n" +
    "        </dl>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "        <h3 class=\"subsection-title\">Members</h3>\n" +
    "\n" +
    "        \n" +
    "            \n" +
    "<h4 class=\"name\" id=\".plurals\"><span class=\"type-signature\">(static) </span>plurals<span class=\"type-signature\"> :Object.&lt;string, function()></span></h4>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"description\">\n" +
    "    <p>Pluralization functions from\n" +
    " <a href=\"http://github.com/eemeli/make-plural.js\">make-plural</a></p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <h5>Type:</h5>\n" +
    "    <ul>\n" +
    "        <li>\n" +
    "            \n" +
    "<span class=\"param-type\">Object.&lt;string, function()></span>\n" +
    "\n" +
    "\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<dl class=\"details\">\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-source\">Source:</dt>\n" +
    "    <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n" +
    "        <a href=\"messageformat.js.html\">messageformat.js</a>, <a href=\"messageformat.js.html#line89\">line 89</a>\n" +
    "    </li></ul></dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</dl>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "        \n" +
    "    \n" +
    "\n" +
    "    \n" +
    "        <h3 class=\"subsection-title\">Methods</h3>\n" +
    "\n" +
    "        \n" +
    "            \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    <h4 class=\"name\" id=\"compile\"><span class=\"type-signature\"></span>compile<span class=\"signature\">(messages, opt<span class=\"signature-attributes\">opt</span>)</span><span class=\"type-signature\"> &rarr; {function}</span></h4>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"description\">\n" +
    "    <p>Compile messages into an executable function with clean string\n" +
    " representation.</p>\n" +
    "<p> If <code>messages</code> is a single string including ICU MessageFormat declarations,\n" +
    " <code>opt</code> is ignored and the returned function takes a single Object parameter\n" +
    " <code>d</code> representing each of the input's defined variables. The returned\n" +
    " function will be defined in a local scope that includes all the required\n" +
    " runtime variables.</p>\n" +
    "<p> If <code>messages</code> is a map of keys to strings, or a map of namespace keys to\n" +
    " such key/string maps, the returned function will fill the specified global\n" +
    " with javascript functions matching the structure of the input. In such use,\n" +
    " the result of <code>compile()</code> may be serialized using its <code>toString()</code> method,\n" +
    " including all required runtime function definitions. If <code>opt.global</code> is\n" +
    " null, calling the output function will return the object itself.</p>\n" +
    "<p> Together, the input parameters should match the following patterns:</p>\n" +
    "<pre class=\"prettyprint source lang-js\"><code> messages = &quot;string&quot; || { key0: &quot;string0&quot;, key1: &quot;string1&quot;, ... } || {\n" +
    "   ns0: { key0: &quot;string0&quot;, key1: &quot;string1&quot;, ...  },\n" +
    "   ns1: { key0: &quot;string0&quot;, key1: &quot;string1&quot;, ...  },\n" +
    "   ...\n" +
    " }\n" +
    "\n" +
    " opt = null || {\n" +
    "   locale: null || {\n" +
    "     ns0: &quot;lc0&quot; || [ &quot;lc0&quot;, ... ],\n" +
    "     ns1: &quot;lc1&quot; || [ &quot;lc1&quot;, ... ],\n" +
    "     ...\n" +
    "   },\n" +
    "   global: null || &quot;module.exports&quot; || &quot;exports&quot; || &quot;i18n&quot; || ...\n" +
    " }</code></pre>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <h5>Parameters:</h5>\n" +
    "    \n" +
    "\n" +
    "<table class=\"params\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        \n" +
    "        <th>Name</th>\n" +
    "        \n" +
    "\n" +
    "        <th>Type</th>\n" +
    "\n" +
    "        \n" +
    "        <th>Attributes</th>\n" +
    "        \n" +
    "\n" +
    "        \n" +
    "        <th>Default</th>\n" +
    "        \n" +
    "\n" +
    "        <th class=\"last\">Description</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "\n" +
    "    <tbody>\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>messages</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">string</span>\n" +
    "|\n" +
    "\n" +
    "<span class=\"param-type\">Object</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "                <td class=\"default\">\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>The input message(s) to be compiled, in ICU MessageFormat</p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>opt</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">Object</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "                    &lt;optional><br>\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "                <td class=\"default\">\n" +
    "                \n" +
    "                    {}\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>Options controlling output for non-simple intput</p>\n" +
    "                <h6>Properties</h6>\n" +
    "                \n" +
    "\n" +
    "<table class=\"params\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        \n" +
    "        <th>Name</th>\n" +
    "        \n" +
    "\n" +
    "        <th>Type</th>\n" +
    "\n" +
    "        \n" +
    "        <th>Attributes</th>\n" +
    "        \n" +
    "\n" +
    "        \n" +
    "        <th>Default</th>\n" +
    "        \n" +
    "\n" +
    "        <th class=\"last\">Description</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "\n" +
    "    <tbody>\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>locale</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">Object</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "                    &lt;optional><br>\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "                <td class=\"default\">\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>The locales to use for the messages, with a\n" +
    "    structure matching that of <code>messages</code></p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>global</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">string</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "                    &lt;optional><br>\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "                <td class=\"default\">\n" +
    "                \n" +
    "                    \"\"\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>The global variable that the output\n" +
    "    function should use, or a null string for none. &quot;exports&quot; and\n" +
    "    &quot;module.exports&quot; are recognised as special cases.</p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "    </tbody>\n" +
    "</table>\n" +
    "\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "    </tbody>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<dl class=\"details\">\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-source\">Source:</dt>\n" +
    "    <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n" +
    "        <a href=\"messageformat.js.html\">messageformat.js</a>, <a href=\"messageformat.js.html#line499\">line 499</a>\n" +
    "    </li></ul></dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</dl>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<h5>Returns:</h5>\n" +
    "\n" +
    "        \n" +
    "<div class=\"param-desc\">\n" +
    "    <p>The first match found for the given locale(s)</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<dl>\n" +
    "    <dt>\n" +
    "        Type\n" +
    "    </dt>\n" +
    "    <dd>\n" +
    "        \n" +
    "<span class=\"param-type\">function</span>\n" +
    "\n" +
    "\n" +
    "    </dd>\n" +
    "</dl>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "    <h5>Examples</h5>\n" +
    "    \n" +
    "    <pre class=\"prettyprint\"><code>var mf = new MessageFormat('en');\n" +
    "var cf = mf.compile('A {TYPE} example.');\n" +
    "\n" +
    "cf({ TYPE: 'simple' })\n" +
    "// 'A simple example.'\n" +
    "\n" +
    "cf.toString()\n" +
    "// 'function (d) { return \"A \" + d.TYPE + \" example.\"; }'</code></pre>\n" +
    "\n" +
    "    <pre class=\"prettyprint\"><code>var fs = require('fs');\n" +
    "var mf = new MessageFormat('en');\n" +
    "var msgSet = {\n" +
    "  a: 'A {TYPE} example.',\n" +
    "  b: 'This has {COUNT, plural, one{one member} other{# members}}.'\n" +
    "};\n" +
    "var cfSet = mf.compile(msgSet, { global: 'module.exports' });\n" +
    "var str = cfSet.toString().replace(/^[^{]*{/, '').replace(/}\\s*$/, '').trim();\n" +
    "fs.writeFileSync('messages.js', str);\n" +
    "...\n" +
    "var messages = require('./messages');\n" +
    "\n" +
    "messages.a({ TYPE: 'more complex' })\n" +
    "// 'A more complex example.'\n" +
    "\n" +
    "messages.b({ COUNT: 2 })\n" +
    "// 'This has 2 members.'</code></pre>\n" +
    "\n" +
    "    <pre class=\"prettyprint\"><code>var mf = new MessageFormat('en');\n" +
    "mf.runtime.pluralFuncs.fi = MessageFormat.plurals.fi;\n" +
    "mf.compile({\n" +
    "  en: { a: 'A {TYPE} example.',\n" +
    "        b: 'This is the {COUNT, selectordinal, one{#st} two{#nd} few{#rd} other{#th}} example.' },\n" +
    "  fi: { a: '{TYPE} esimerkki.',\n" +
    "        b: 'Tämä on {COUNT, selectordinal, other{#.}} esimerkki.' }\n" +
    "}, {\n" +
    "  locale: { en: 'en', fi: 'fi' },\n" +
    "  global: 'i18n'\n" +
    "})(this);\n" +
    "\n" +
    "i18n.en.b({ COUNT: 3 })\n" +
    "// 'This is the 3rd example.'\n" +
    "\n" +
    "i18n.fi.b({ COUNT: 3 })\n" +
    "// 'Tämä on 3. esimerkki.'</code></pre>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        \n" +
    "            \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    <h4 class=\"name\" id=\"setBiDiSupport\"><span class=\"type-signature\"></span>setBiDiSupport<span class=\"signature\">(enable<span class=\"signature-attributes\">opt</span>)</span><span class=\"type-signature\"> &rarr; {<a href=\"MessageFormat.html\">MessageFormat</a>}</span></h4>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"description\">\n" +
    "    <p>Enable or disable the addition of Unicode control characters to all input\n" +
    " to preserve the integrity of the output when mixing LTR and RTL text.</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <h5>Parameters:</h5>\n" +
    "    \n" +
    "\n" +
    "<table class=\"params\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        \n" +
    "        <th>Name</th>\n" +
    "        \n" +
    "\n" +
    "        <th>Type</th>\n" +
    "\n" +
    "        \n" +
    "        <th>Attributes</th>\n" +
    "        \n" +
    "\n" +
    "        \n" +
    "        <th>Default</th>\n" +
    "        \n" +
    "\n" +
    "        <th class=\"last\">Description</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "\n" +
    "    <tbody>\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>enable</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">boolean</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "                    &lt;optional><br>\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "                <td class=\"default\">\n" +
    "                \n" +
    "                    true\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "    </tbody>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<dl class=\"details\">\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-source\">Source:</dt>\n" +
    "    <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n" +
    "        <a href=\"messageformat.js.html\">messageformat.js</a>, <a href=\"messageformat.js.html#line174\">line 174</a>\n" +
    "    </li></ul></dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-see\">See:</dt>\n" +
    "    <dd class=\"tag-see\">\n" +
    "        <ul>\n" +
    "            <li><a href=\"http://cldr.unicode.org/development/development-process/design-proposals/bidi-handling-of-structured-text\">http://cldr.unicode.org/development/development-process/design-proposals/bidi-handling-of-structured-text</a></li>\n" +
    "        </ul>\n" +
    "    </dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</dl>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<h5>Returns:</h5>\n" +
    "\n" +
    "        \n" +
    "<div class=\"param-desc\">\n" +
    "    <p>The MessageFormat instance, to allow for chaining</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<dl>\n" +
    "    <dt>\n" +
    "        Type\n" +
    "    </dt>\n" +
    "    <dd>\n" +
    "        \n" +
    "<span class=\"param-type\"><a href=\"MessageFormat.html\">MessageFormat</a></span>\n" +
    "\n" +
    "\n" +
    "    </dd>\n" +
    "</dl>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "    <h5>Example</h5>\n" +
    "    \n" +
    "    <pre class=\"prettyprint\"><code>// upper case stands for RTL characters, output is shown as rendered\n" +
    "var mf = new MessageFormat('en');\n" +
    "\n" +
    "mf.compile('{0} >> {1} >> {2}')(['first', 'SECOND', 'THIRD']);\n" +
    "// 'first >> THIRD &lt;&lt; SECOND'\n" +
    "\n" +
    "mf.setBiDiSupport(true);\n" +
    "mf.compile('{0} >> {1} >> {2}')(['first', 'SECOND', 'THIRD']);\n" +
    "// 'first >> SECOND >> THIRD'</code></pre>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        \n" +
    "            \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    <h4 class=\"name\" id=\"setIntlSupport\"><span class=\"type-signature\"></span>setIntlSupport<span class=\"signature\">(enable<span class=\"signature-attributes\">opt</span>)</span><span class=\"type-signature\"> &rarr; {<a href=\"MessageFormat.html\">MessageFormat</a>}</span></h4>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"description\">\n" +
    "    <p>Enable or disable support for the default formatters, which require the\n" +
    " <code>Intl</code> object. Note that this can't be autodetected, as the environment\n" +
    " in which the formatted text is compiled into Javascript functions is not\n" +
    " necessarily the same environment in which they will get executed.</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <h5>Parameters:</h5>\n" +
    "    \n" +
    "\n" +
    "<table class=\"params\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        \n" +
    "        <th>Name</th>\n" +
    "        \n" +
    "\n" +
    "        <th>Type</th>\n" +
    "\n" +
    "        \n" +
    "        <th>Attributes</th>\n" +
    "        \n" +
    "\n" +
    "        \n" +
    "        <th>Default</th>\n" +
    "        \n" +
    "\n" +
    "        <th class=\"last\">Description</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "\n" +
    "    <tbody>\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>enable</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">boolean</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "                    &lt;optional><br>\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "                <td class=\"default\">\n" +
    "                \n" +
    "                    true\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "    </tbody>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<dl class=\"details\">\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-source\">Source:</dt>\n" +
    "    <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n" +
    "        <a href=\"messageformat.js.html\">messageformat.js</a>, <a href=\"messageformat.js.html#line199\">line 199</a>\n" +
    "    </li></ul></dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-see\">See:</dt>\n" +
    "    <dd class=\"tag-see\">\n" +
    "        <ul>\n" +
    "            <li><a href=\"MessageFormat.formatters.html\">MessageFormat.formatters</a></li>\n" +
    "        </ul>\n" +
    "    </dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</dl>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<h5>Returns:</h5>\n" +
    "\n" +
    "        \n" +
    "<div class=\"param-desc\">\n" +
    "    <p>The MessageFormat instance, to allow for chaining</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<dl>\n" +
    "    <dt>\n" +
    "        Type\n" +
    "    </dt>\n" +
    "    <dd>\n" +
    "        \n" +
    "<span class=\"param-type\"><a href=\"MessageFormat.html\">MessageFormat</a></span>\n" +
    "\n" +
    "\n" +
    "    </dd>\n" +
    "</dl>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "    <h5>Example</h5>\n" +
    "    \n" +
    "    <pre class=\"prettyprint\"><code>// Intl is not defined in default Node until 0.11.15 / 0.12.0\n" +
    "var Intl = require('intl');\n" +
    "var mf = new MessageFormat('en').setIntlSupport(true);\n" +
    "mf.currency = 'EUR';\n" +
    "\n" +
    "mf.compile('The total is {V,number,currency}.')({ V: 5.5 });\n" +
    "// 'The total is €5.50.'</code></pre>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        \n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</article>\n" +
    "\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<nav>\n" +
    "    <h2><a href=\"index.html\">Home</a></h2><h3>Classes</h3><ul><li><a href=\"MessageFormat.html\">MessageFormat</a></li><li><a href=\"Runtime.html\">Runtime</a></li></ul><h3>Namespaces</h3><ul><li><a href=\"MessageFormat.formatters.html\">formatters</a></li></ul>\n" +
    "</nav>\n" +
    "\n" +
    "<br class=\"clear\">\n" +
    "\n" +
    "<footer>\n" +
    "    Documentation generated by <a href=\"https://github.com/jsdoc3/jsdoc\">JSDoc 3.4.0</a> on Sat Feb 20 2016 18:21:44 GMT+0200 (EET)\n" +
    "</footer>\n" +
    "\n" +
    "<script> prettyPrint(); </script>\n" +
    "<script src=\"scripts/linenumber.js\"> </script>\n" +
    "</body>\n" +
    "</html>");
}]);

angular.module("_vendor/messageformat/doc/messageformat.js.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_vendor/messageformat/doc/messageformat.js.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>JSDoc: Source: messageformat.js</title>\n" +
    "\n" +
    "    <script src=\"scripts/prettify/prettify.js\"> </script>\n" +
    "    <script src=\"scripts/prettify/lang-css.js\"> </script>\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n" +
    "    <![endif]-->\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"styles/prettify-tomorrow.css\">\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"styles/jsdoc-default.css\">\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "\n" +
    "<div id=\"main\">\n" +
    "\n" +
    "    <h1 class=\"page-title\">Source: messageformat.js</h1>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "\n" +
    "    \n" +
    "    <section>\n" +
    "        <article>\n" +
    "            <pre class=\"prettyprint source linenums\"><code>/** @file messageformat.js - ICU PluralFormat + SelectFormat for JavaScript\n" +
    " *\n" +
    " * @author Alex Sexton - @SlexAxton, Eemeli Aro\n" +
    " * @version 0.3.1\n" +
    " * @copyright 2012-2016 Alex Sexton, Eemeli Aro, and Contributors\n" +
    " * @license To use or fork, MIT. To contribute back, Dojo CLA  */\n" +
    "\n" +
    "\n" +
    "/** Utility function for quoting an Object's key value iff required\n" +
    " *\n" +
    " * @private  */\n" +
    "function propname(key, obj) {\n" +
    "  /* Quote the key if it contains invalid characters or is an\n" +
    "   * ECMAScript 3rd Edition reserved word.\n" +
    "   */\n" +
    "  if (/^[A-Z_$][0-9A-Z_$]*$/i.test(key) &amp;&amp;\n" +
    "     ['break', 'continue', 'delete', 'else', 'for', 'function', 'if', 'in', 'new',\n" +
    "      'return', 'this', 'typeof', 'var', 'void', 'while', 'with', 'case', 'catch',\n" +
    "      'default', 'do', 'finally', 'instanceof', 'switch', 'throw', 'try'].indexOf(key) &lt; 0) {\n" +
    "    return obj ? obj + '.' + key : key;\n" +
    "  } else {\n" +
    "    var jkey = JSON.stringify(key);\n" +
    "    return obj ? obj + '[' + jkey + ']' : jkey;\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "/** Utility formatter function for enforcing Bidi Structured Text by using UCC\n" +
    " *\n" +
    " * @private  */\n" +
    "function bidiMarkText(text, locale) {\n" +
    "  function isLocaleRTL(locale) {\n" +
    "    /* list inlined from data extracted from CLDR v27 &amp; v28\n" +
    "     * to verify/recreate, use the following:\n" +
    "     *   git clone https://github.com/unicode-cldr/cldr-misc-full.git\n" +
    "     *   cd cldr-misc-full/main/\n" +
    "     *   grep characterOrder -r . | tr '\"/' '\\t' | cut -f2,6 | grep -C4 right-to-left\n" +
    "     */\n" +
    "    var rtlLanguages = ['ar', 'ckb', 'fa', 'he', 'ks($|[^bfh])', 'lrc', 'mzn', 'pa-Arab', 'ps', 'ug', 'ur', 'uz-Arab', 'yi'];\n" +
    "    return new RegExp('^' + rtlLanguages.join('|^')).test(locale);\n" +
    "  }\n" +
    "  var mark = JSON.stringify(isLocaleRTL(locale) ? '\\u200F' : '\\u200E');\n" +
    "  return mark + ' + ' + text + ' + ' + mark;\n" +
    "}\n" +
    "\n" +
    "/** Create a new message formatter\n" +
    " *\n" +
    " * @class\n" +
    " * @param {string|string[]} [locale=\"en\"] - The locale to use, with fallbacks\n" +
    " * @param {function} [pluralFunc] - Optional custom pluralization function\n" +
    " * @param {function[]} [formatters] - Optional custom formatting functions  */\n" +
    "function MessageFormat(locale, pluralFunc, formatters) {\n" +
    "  if (!locale) {\n" +
    "    this.lc = ['en'];\n" +
    "  } else if (typeof locale == 'string') {\n" +
    "    this.lc = [];\n" +
    "    for (var l = locale; l; l = l.replace(/[-_]?[^-_]*$/, '')) this.lc.push(l);\n" +
    "  } else {\n" +
    "    this.lc = locale;\n" +
    "  }\n" +
    "  if (!pluralFunc) {\n" +
    "    if (this.lc.every(function(l){\n" +
    "      pluralFunc = MessageFormat.plurals[l];\n" +
    "      return !pluralFunc;\n" +
    "    })) {\n" +
    "      throw new Error('Plural function for locale `' + this.lc.join(',') + '` not found');\n" +
    "    }\n" +
    "  }\n" +
    "  this.runtime = new Runtime(this.lc[0], pluralFunc, formatters);\n" +
    "}\n" +
    "\n" +
    "module.exports = MessageFormat;\n" +
    "\n" +
    "\n" +
    "/** Parse an input string to its AST\n" +
    " *\n" +
    " *  Precompiled from `lib/messageformat-parser.pegjs` by\n" +
    " *  {@link http://pegjs.org/ PEG.js}. Included in MessageFormat object\n" +
    " *  to enable testing.\n" +
    " *\n" +
    " * @private  */\n" +
    "MessageFormat._parse = require('./messageformat-parser').parse;\n" +
    "\n" +
    "\n" +
    "/** Pluralization functions from\n" +
    " *  {@link http://github.com/eemeli/make-plural.js make-plural}\n" +
    " *\n" +
    " * @memberof MessageFormat\n" +
    " * @type Object.&lt;string,function>  */\n" +
    "MessageFormat.plurals = require('make-plural/plurals');\n" +
    "\n" +
    "\n" +
    "/** Default number formatting functions in the style of ICU's\n" +
    " *  {@link http://icu-project.org/apiref/icu4j/com/ibm/icu/text/MessageFormat.html simpleArg syntax}\n" +
    " *  implemented using the\n" +
    " *  {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl Intl}\n" +
    " *  object defined by ECMA-402.\n" +
    " *\n" +
    " *  **Note**: Intl is not defined in default Node until 0.11.15 / 0.12.0, so\n" +
    " *  earlier versions require a {@link https://www.npmjs.com/package/intl polyfill}.\n" +
    " *  Therefore {@link MessageFormat.withIntlSupport} needs to be true for these\n" +
    " *  functions to be available for inclusion in the output.\n" +
    " *\n" +
    " * @see MessageFormat#setIntlSupport\n" +
    " *\n" +
    " * @namespace\n" +
    " * @memberof MessageFormat\n" +
    " * @property {function} number - Represent a number as an integer, percent or currency value\n" +
    " * @property {function} date - Represent a date as a full/long/default/short string\n" +
    " * @property {function} time - Represent a time as a full/long/default/short string\n" +
    " *\n" +
    " * @example\n" +
    " * var mf = new MessageFormat('en').setIntlSupport(true);\n" +
    " * mf.currency = 'EUR';\n" +
    " * var cf = mf.compile('The total is {V,number,currency}.');\n" +
    " *\n" +
    " * cf({ V: 5.5 })\n" +
    " * // 'The total is €5.50.'\n" +
    " *\n" +
    " * @example\n" +
    " * var mf = new MessageFormat('en', null, {number: MessageFormat.number});\n" +
    " * mf.currency = 'EUR';\n" +
    " * var cf = mf.compile('The total is {V,number,currency}.');\n" +
    " *\n" +
    " * cf({ V: 5.5 })\n" +
    " * // 'The total is €5.50.'  */\n" +
    "MessageFormat.formatters = {\n" +
    "  number: function(self) {\n" +
    "    return new Function(\"v,lc,p\",\n" +
    "      \"return Intl.NumberFormat(lc,\\n\" +\n" +
    "      \"    p=='integer' ? {maximumFractionDigits:0}\\n\" +\n" +
    "      \"  : p=='percent' ? {style:'percent'}\\n\" +\n" +
    "      \"  : p=='currency' ? {style:'currency', currency:'\" + (self.currency || 'USD') + \"', minimumFractionDigits:2, maximumFractionDigits:2}\\n\" +\n" +
    "      \"  : {}).format(v)\"\n" +
    "    );\n" +
    "  },\n" +
    "  date: function(v,lc,p) {\n" +
    "    var o = {day:'numeric', month:'short', year:'numeric'};\n" +
    "    switch (p) {\n" +
    "      case 'full': o.weekday = 'long';\n" +
    "      case 'long': o.month = 'long'; break;\n" +
    "      case 'short': o.month = 'numeric';\n" +
    "    }\n" +
    "    return (new Date(v)).toLocaleDateString(lc, o)\n" +
    "  },\n" +
    "  time: function(v,lc,p) {\n" +
    "    var o = {second:'numeric', minute:'numeric', hour:'numeric'};\n" +
    "    switch (p) {\n" +
    "      case 'full': case 'long': o.timeZoneName = 'short'; break;\n" +
    "      case 'short': delete o.minute;\n" +
    "    }\n" +
    "    return (new Date(v)).toLocaleTimeString(lc, o)\n" +
    "  }\n" +
    "};\n" +
    "\n" +
    "/** Enable or disable the addition of Unicode control characters to all input\n" +
    " *  to preserve the integrity of the output when mixing LTR and RTL text.\n" +
    " *\n" +
    " * @see http://cldr.unicode.org/development/development-process/design-proposals/bidi-handling-of-structured-text\n" +
    " *\n" +
    " * @memberof MessageFormat\n" +
    " * @param {boolean} [enable=true]\n" +
    " * @returns {MessageFormat} The MessageFormat instance, to allow for chaining\n" +
    " *\n" +
    " * @example\n" +
    " * // upper case stands for RTL characters, output is shown as rendered\n" +
    " * var mf = new MessageFormat('en');\n" +
    " *\n" +
    " * mf.compile('{0} >> {1} >> {2}')(['first', 'SECOND', 'THIRD']);\n" +
    " * // 'first >> THIRD &lt;&lt; SECOND'\n" +
    " *\n" +
    " * mf.setBiDiSupport(true);\n" +
    " * mf.compile('{0} >> {1} >> {2}')(['first', 'SECOND', 'THIRD']);\n" +
    " * // 'first >> SECOND >> THIRD'  */\n" +
    "MessageFormat.prototype.setBiDiSupport = function(enable) {\n" +
    "    this.bidiSupport = !!enable || (typeof enable == 'undefined');\n" +
    "    return this;\n" +
    "};\n" +
    "\n" +
    "\n" +
    "/** Enable or disable support for the default formatters, which require the\n" +
    " *  `Intl` object. Note that this can't be autodetected, as the environment\n" +
    " *  in which the formatted text is compiled into Javascript functions is not\n" +
    " *  necessarily the same environment in which they will get executed.\n" +
    " *\n" +
    " * @see MessageFormat.formatters\n" +
    " *\n" +
    " * @memberof MessageFormat\n" +
    " * @param {boolean} [enable=true]\n" +
    " * @returns {MessageFormat} The MessageFormat instance, to allow for chaining\n" +
    " *\n" +
    " * @example\n" +
    " * // Intl is not defined in default Node until 0.11.15 / 0.12.0\n" +
    " * var Intl = require('intl');\n" +
    " * var mf = new MessageFormat('en').setIntlSupport(true);\n" +
    " * mf.currency = 'EUR';\n" +
    " *\n" +
    " * mf.compile('The total is {V,number,currency}.')({ V: 5.5 });\n" +
    " * // 'The total is €5.50.'  */\n" +
    "MessageFormat.prototype.setIntlSupport = function(enable) {\n" +
    "    this.withIntlSupport = !!enable || (typeof enable == 'undefined');\n" +
    "    return this;\n" +
    "};\n" +
    "\n" +
    "\n" +
    "/** A set of utility functions that are called by the compiled Javascript\n" +
    " *  functions, these are included locally in the output of {@link\n" +
    " *  MessageFormat#compile compile()}.\n" +
    " *\n" +
    " * @class\n" +
    " * @param {string} [locale] - The parsed locale\n" +
    " * @param {function} [pluralFunc] - Pluralization function for the locale\n" +
    " * @param {function[]} [formatters] - Optional custom formatting functions  */\n" +
    "function Runtime(locale, pluralFunc, formatters) {\n" +
    "\n" +
    "  /** Pluralization functions included in compiled output\n" +
    "   *\n" +
    "   * @instance\n" +
    "   * @type Object.&lt;string,function>  */\n" +
    "  this.pluralFuncs = {};\n" +
    "  this.pluralFuncs[locale] = pluralFunc;\n" +
    "\n" +
    "  /** Custom formatting functions called by `{var, fn[, args]*}` syntax\n" +
    "   *\n" +
    "   *  For examples, see {@link MessageFormat.formatters}\n" +
    "   *\n" +
    "   * @instance\n" +
    "   * @see MessageFormat.formatters\n" +
    "   * @type Object.&lt;string,function>  */\n" +
    "  this.fmt = {};\n" +
    "  if (formatters) for (var f in formatters) {\n" +
    "    this.fmt[f] = formatters[f];\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "Runtime.prototype = {\n" +
    "\n" +
    "  /** Utility function for `#` in plural rules\n" +
    "   *\n" +
    "   * @param {number} value - The value to operate on\n" +
    "   * @param {number} [offset=0] - An optional offset, set by the surrounding context  */\n" +
    "  number: function(value, offset) {\n" +
    "    if (isNaN(value)) throw new Error(\"'\" + value + \"' isn't a number.\");\n" +
    "    return value - (offset || 0);\n" +
    "  },\n" +
    "\n" +
    "  /** Utility function for `{N, plural|selectordinal, ...}`\n" +
    "   *\n" +
    "   * @param {number} value - The key to use to find a pluralization rule\n" +
    "   * @param {number} offset - An offset to apply to `value`\n" +
    "   * @param {function} lcfunc - A locale function from `pluralFuncs`\n" +
    "   * @param {Object.&lt;string,string>} data - The object from which results are looked up\n" +
    "   * @param {?boolean} isOrdinal - If true, use ordinal rather than cardinal rules\n" +
    "   * @returns {string} The result of the pluralization  */\n" +
    "  plural: function(value, offset, lcfunc, data, isOrdinal) {\n" +
    "    if ({}.hasOwnProperty.call(data, value)) return data[value]();\n" +
    "    if (offset) value -= offset;\n" +
    "    var key = lcfunc(value, isOrdinal);\n" +
    "    if (key in data) return data[key]();\n" +
    "    return data.other();\n" +
    "  },\n" +
    "\n" +
    "  /** Utility function for `{N, select, ...}`\n" +
    "   *\n" +
    "   * @param {number} value - The key to use to find a selection\n" +
    "   * @param {Object.&lt;string,string>} data - The object from which results are looked up\n" +
    "   * @returns {string} The result of the select statement  */\n" +
    "  select: function(value, data) {\n" +
    "    if ({}.hasOwnProperty.call(data, value)) return data[value]();\n" +
    "    return data.other()\n" +
    "  },\n" +
    "\n" +
    "  /** Custom stringifier\n" +
    "   *\n" +
    "   * @example\n" +
    "   * var mf = new MessageFormat('en');\n" +
    "   * console.log(mf.runtime.toString())\n" +
    "   * > var pluralFuncs = {\n" +
    "   * >   en: function (n, ord) {\n" +
    "   * >     var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n,\n" +
    "   * >         n10 = t0 &amp;&amp; s[0].slice(-1), n100 = t0 &amp;&amp; s[0].slice(-2);\n" +
    "   * >     if (ord) return (n10 == 1 &amp;&amp; n100 != 11) ? 'one'\n" +
    "   * >         : (n10 == 2 &amp;&amp; n100 != 12) ? 'two'\n" +
    "   * >         : (n10 == 3 &amp;&amp; n100 != 13) ? 'few'\n" +
    "   * >         : 'other';\n" +
    "   * >     return (n == 1 &amp;&amp; v0) ? 'one' : 'other';\n" +
    "   * >   }\n" +
    "   * > };\n" +
    "   * > var fmt = {};\n" +
    "   * > var number = function (value, offset) {\n" +
    "   * >   if (isNaN(value)) throw new Error(\"'\" + value + \"' isn't a number.\");\n" +
    "   * >   return value - (offset || 0);\n" +
    "   * > };\n" +
    "   * > var plural = function (value, offset, lcfunc, data, isOrdinal) {\n" +
    "   * >   if ({}.hasOwnProperty.call(data, value)) return data[value]();\n" +
    "   * >   if (offset) value -= offset;\n" +
    "   * >   var key = lcfunc(value, isOrdinal);\n" +
    "   * >   if (key in data) return data[key]();\n" +
    "   * >   return data.other();\n" +
    "   * > };\n" +
    "   * > var select = function (value, data) {\n" +
    "   * >   if ({}.hasOwnProperty.call(data, value)) return data[value]();\n" +
    "   * >   return data.other()\n" +
    "   * > };  */\n" +
    "  toString: function () {\n" +
    "    var _stringify = function(o, level) {\n" +
    "      if (typeof o != 'object') {\n" +
    "        var funcStr = o.toString().replace(/^(function )\\w*/, '$1');\n" +
    "        var indent = /([ \\t]*)\\S.*$/.exec(funcStr);\n" +
    "        return indent ? funcStr.replace(new RegExp('^' + indent[1], 'mg'), '') : funcStr;\n" +
    "      }\n" +
    "      var s = [];\n" +
    "      for (var i in o) if (i != 'toString') {\n" +
    "        if (level == 0) s.push('var ' + i + ' = ' + _stringify(o[i], level + 1) + ';\\n');\n" +
    "        else s.push(propname(i) + ': ' + _stringify(o[i], level + 1));\n" +
    "      }\n" +
    "      if (level == 0) return s.join('');\n" +
    "      if (s.length == 0) return '{}';\n" +
    "      var indent = '  '; while (--level) indent += '  ';\n" +
    "      return '{\\n' + s.join(',\\n').replace(/^/gm, indent) + '\\n}';\n" +
    "    };\n" +
    "    return _stringify(this, 0);\n" +
    "  }\n" +
    "};\n" +
    "\n" +
    "\n" +
    "/** Recursively map an AST to its resulting string\n" +
    " *\n" +
    " * @memberof MessageFormat\n" +
    " * @param ast - the Ast node for which the JS code should be generated\n" +
    " * @private  */\n" +
    "MessageFormat.prototype._precompile = function(ast, data) {\n" +
    "  data = data || { keys: {}, offset: {} };\n" +
    "  var r = [], i, tmp, args = [];\n" +
    "\n" +
    "  switch ( ast.type ) {\n" +
    "    case 'messageFormatPattern':\n" +
    "      for ( i = 0; i &lt; ast.statements.length; ++i ) {\n" +
    "        r.push(this._precompile( ast.statements[i], data ));\n" +
    "      }\n" +
    "      tmp = r.join(' + ') || '\"\"';\n" +
    "      return data.pf_count ? tmp : 'function(d) { return ' + tmp + '; }';\n" +
    "\n" +
    "    case 'messageFormatElement':\n" +
    "      data.pf_count = data.pf_count || 0;\n" +
    "      if ( ast.output ) {\n" +
    "        var ret = propname(ast.argumentIndex, 'd');\n" +
    "        return this.bidiSupport ? bidiMarkText(ret, this.lc) : ret;\n" +
    "      }\n" +
    "      else {\n" +
    "        data.keys[data.pf_count] = ast.argumentIndex;\n" +
    "        return this._precompile( ast.elementFormat, data );\n" +
    "      }\n" +
    "      return '';\n" +
    "\n" +
    "    case 'elementFormat':\n" +
    "      args = [ propname(data.keys[data.pf_count], 'd') ];\n" +
    "      switch (ast.key) {\n" +
    "        case 'select':\n" +
    "          args.push(this._precompile(ast.val, data));\n" +
    "          return 'select(' + args.join(', ') + ')';\n" +
    "        case 'selectordinal':\n" +
    "          args = args.concat([ 0, propname(this.lc[0], 'pluralFuncs'), this._precompile(ast.val, data), 1 ]);\n" +
    "          return 'plural(' + args.join(', ') + ')';\n" +
    "        case 'plural':\n" +
    "          data.offset[data.pf_count || 0] = ast.val.offset || 0;\n" +
    "          args = args.concat([ data.offset[data.pf_count] || 0, propname(this.lc[0], 'pluralFuncs'), this._precompile(ast.val, data) ]);\n" +
    "          return 'plural(' + args.join(', ') + ')';\n" +
    "        default:\n" +
    "          if (this.withIntlSupport &amp;&amp; !(ast.key in this.runtime.fmt) &amp;&amp; (ast.key in MessageFormat.formatters)) {\n" +
    "            tmp = MessageFormat.formatters[ast.key];\n" +
    "            this.runtime.fmt[ast.key] = (typeof tmp(this) == 'function') ? tmp(this) : tmp;\n" +
    "          }\n" +
    "          args.push(JSON.stringify(this.lc));\n" +
    "          if (ast.val &amp;&amp; ast.val.length) args.push(JSON.stringify(ast.val.length == 1 ? ast.val[0] : ast.val));\n" +
    "          return 'fmt.' + ast.key + '(' + args.join(', ') + ')';\n" +
    "      }\n" +
    "\n" +
    "    case 'pluralFormatPattern':\n" +
    "    case 'selectFormatPattern':\n" +
    "      data.pf_count = data.pf_count || 0;\n" +
    "      if (ast.type == 'selectFormatPattern') data.offset[data.pf_count] = 0;\n" +
    "      var needOther = true;\n" +
    "      for (i = 0; i &lt; ast.pluralForms.length; ++i) {\n" +
    "        var key = ast.pluralForms[i].key;\n" +
    "        if (key === 'other') needOther = false;\n" +
    "        var data_copy = JSON.parse(JSON.stringify(data));\n" +
    "        data_copy.pf_count++;\n" +
    "        r.push(propname(key) + ': function() { return ' + this._precompile(ast.pluralForms[i].val, data_copy) + ';}');\n" +
    "      }\n" +
    "      if (needOther) throw new Error(\"No 'other' form found in \" + ast.type + \" \" + data.pf_count);\n" +
    "      return '{ ' + r.join(', ') + ' }';\n" +
    "\n" +
    "    case 'string':\n" +
    "      return JSON.stringify(ast.val || \"\");\n" +
    "\n" +
    "    case 'octothorpe':\n" +
    "      if (!data.pf_count) return '\"#\"';\n" +
    "      args = [ propname(data.keys[data.pf_count-1], 'd') ];\n" +
    "      if (data.offset[data.pf_count-1]) args.push(data.offset[data.pf_count-1]);\n" +
    "      return 'number(' + args.join(', ') + ')';\n" +
    "\n" +
    "    default:\n" +
    "      throw new Error( 'Bad AST type: ' + ast.type );\n" +
    "  }\n" +
    "};\n" +
    "\n" +
    "/** Compile messages into an executable function with clean string\n" +
    " *  representation.\n" +
    " *\n" +
    " *  If `messages` is a single string including ICU MessageFormat declarations,\n" +
    " *  `opt` is ignored and the returned function takes a single Object parameter\n" +
    " *  `d` representing each of the input's defined variables. The returned\n" +
    " *  function will be defined in a local scope that includes all the required\n" +
    " *  runtime variables.\n" +
    " *\n" +
    " *  If `messages` is a map of keys to strings, or a map of namespace keys to\n" +
    " *  such key/string maps, the returned function will fill the specified global\n" +
    " *  with javascript functions matching the structure of the input. In such use,\n" +
    " *  the result of `compile()` may be serialized using its `toString()` method,\n" +
    " *  including all required runtime function definitions. If `opt.global` is\n" +
    " *  null, calling the output function will return the object itself.\n" +
    " *\n" +
    " *  Together, the input parameters should match the following patterns:\n" +
    " *  ```js\n" +
    " *  messages = \"string\" || { key0: \"string0\", key1: \"string1\", ... } || {\n" +
    " *    ns0: { key0: \"string0\", key1: \"string1\", ...  },\n" +
    " *    ns1: { key0: \"string0\", key1: \"string1\", ...  },\n" +
    " *    ...\n" +
    " *  }\n" +
    " *\n" +
    " *  opt = null || {\n" +
    " *    locale: null || {\n" +
    " *      ns0: \"lc0\" || [ \"lc0\", ... ],\n" +
    " *      ns1: \"lc1\" || [ \"lc1\", ... ],\n" +
    " *      ...\n" +
    " *    },\n" +
    " *    global: null || \"module.exports\" || \"exports\" || \"i18n\" || ...\n" +
    " *  }\n" +
    " *  ```\n" +
    " *\n" +
    " * @memberof MessageFormat\n" +
    " * @param {string|Object}\n" +
    " *     messages - The input message(s) to be compiled, in ICU MessageFormat\n" +
    " * @param {Object} [opt={}] - Options controlling output for non-simple intput\n" +
    " * @param {Object} [opt.locale] - The locales to use for the messages, with a\n" +
    " *     structure matching that of `messages`\n" +
    " * @param {string} [opt.global=\"\"] - The global variable that the output\n" +
    " *     function should use, or a null string for none. \"exports\" and\n" +
    " *     \"module.exports\" are recognised as special cases.\n" +
    " * @returns {function} The first match found for the given locale(s)\n" +
    " *\n" +
    " * @example\n" +
    " * var mf = new MessageFormat('en');\n" +
    " * var cf = mf.compile('A {TYPE} example.');\n" +
    " *\n" +
    " * cf({ TYPE: 'simple' })\n" +
    " * // 'A simple example.'\n" +
    " *\n" +
    " * cf.toString()\n" +
    " * // 'function (d) { return \"A \" + d.TYPE + \" example.\"; }'\n" +
    " *\n" +
    " * @example\n" +
    " * var fs = require('fs');\n" +
    " * var mf = new MessageFormat('en');\n" +
    " * var msgSet = {\n" +
    " *   a: 'A {TYPE} example.',\n" +
    " *   b: 'This has {COUNT, plural, one{one member} other{# members}}.'\n" +
    " * };\n" +
    " * var cfSet = mf.compile(msgSet, { global: 'module.exports' });\n" +
    " * var str = cfSet.toString().replace(/^[^{]*{/, '').replace(/}\\s*$/, '').trim();\n" +
    " * fs.writeFileSync('messages.js', str);\n" +
    " * ...\n" +
    " * var messages = require('./messages');\n" +
    " *\n" +
    " * messages.a({ TYPE: 'more complex' })\n" +
    " * // 'A more complex example.'\n" +
    " *\n" +
    " * messages.b({ COUNT: 2 })\n" +
    " * // 'This has 2 members.'\n" +
    " *\n" +
    " * @example\n" +
    " * var mf = new MessageFormat('en');\n" +
    " * mf.runtime.pluralFuncs.fi = MessageFormat.plurals.fi;\n" +
    " * mf.compile({\n" +
    " *   en: { a: 'A {TYPE} example.',\n" +
    " *         b: 'This is the {COUNT, selectordinal, one{#st} two{#nd} few{#rd} other{#th}} example.' },\n" +
    " *   fi: { a: '{TYPE} esimerkki.',\n" +
    " *         b: 'Tämä on {COUNT, selectordinal, other{#.}} esimerkki.' }\n" +
    " * }, {\n" +
    " *   locale: { en: 'en', fi: 'fi' },\n" +
    " *   global: 'i18n'\n" +
    " * })(this);\n" +
    " *\n" +
    " * i18n.en.b({ COUNT: 3 })\n" +
    " * // 'This is the 3rd example.'\n" +
    " *\n" +
    " * i18n.fi.b({ COUNT: 3 })\n" +
    " * // 'Tämä on 3. esimerkki.'  */\n" +
    "MessageFormat.prototype.compile = function ( messages, opt ) {\n" +
    "  var r = {}, lc0 = this.lc,\n" +
    "      compileMsg = function(self, msg) {\n" +
    "        try {\n" +
    "          var ast = MessageFormat._parse(msg);\n" +
    "          return self._precompile(ast);\n" +
    "        } catch (e) {\n" +
    "          throw new Error((ast ? 'Precompiler' : 'Parser') + ' error: ' + e.toString());\n" +
    "        }\n" +
    "      },\n" +
    "      stringify = function(r, level) {\n" +
    "        if (!level) level = 0;\n" +
    "        if (typeof r != 'object') return r;\n" +
    "        var o = [], indent = '';\n" +
    "        for (var i = 0; i &lt; level; ++i) indent += '  ';\n" +
    "        for (var k in r) o.push('\\n' + indent + '  ' + propname(k) + ': ' + stringify(r[k], level + 1));\n" +
    "        return '{' + o.join(',') + '\\n' + indent + '}';\n" +
    "      };\n" +
    "\n" +
    "  if (typeof messages == 'string') {\n" +
    "    var f = new Function(\n" +
    "        'number, plural, select, pluralFuncs, fmt',\n" +
    "        'return ' + compileMsg(this, messages));\n" +
    "    return f(this.runtime.number, this.runtime.plural, this.runtime.select,\n" +
    "        this.runtime.pluralFuncs, this.runtime.fmt);\n" +
    "  }\n" +
    "\n" +
    "  opt = opt || {};\n" +
    "\n" +
    "  for (var ns in messages) {\n" +
    "    if (opt.locale) this.lc = opt.locale[ns] &amp;&amp; [].concat(opt.locale[ns]) || lc0;\n" +
    "    if (typeof messages[ns] == 'string') {\n" +
    "      try { r[ns] = compileMsg(this, messages[ns]); }\n" +
    "      catch (e) { e.message = e.message.replace(':', ' with `' + ns + '`:'); throw e; }\n" +
    "    } else {\n" +
    "      r[ns] = {};\n" +
    "      for (var key in messages[ns]) {\n" +
    "        try { r[ns][key] = compileMsg(this, messages[ns][key]); }\n" +
    "        catch (e) { e.message = e.message.replace(':', ' with `' + key + '` in `' + ns + '`:'); throw e; }\n" +
    "      }\n" +
    "    }\n" +
    "  }\n" +
    "\n" +
    "  this.lc = lc0;\n" +
    "  var s = this.runtime.toString() + '\\n';\n" +
    "  switch (opt.global || '') {\n" +
    "    case 'exports':\n" +
    "      var o = [];\n" +
    "      for (var k in r) o.push(propname(k, 'exports') + ' = ' + stringify(r[k]));\n" +
    "      return new Function(s + o.join(';\\n'));\n" +
    "    case 'module.exports':\n" +
    "      return new Function(s + 'module.exports = ' + stringify(r));\n" +
    "    case '':\n" +
    "      return new Function(s + 'return ' + stringify(r));\n" +
    "    default:\n" +
    "      return new Function('G', s + propname(opt.global, 'G') + ' = ' + stringify(r));\n" +
    "  }\n" +
    "};\n" +
    "</code></pre>\n" +
    "        </article>\n" +
    "    </section>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<nav>\n" +
    "    <h2><a href=\"index.html\">Home</a></h2><h3>Classes</h3><ul><li><a href=\"MessageFormat.html\">MessageFormat</a></li><li><a href=\"Runtime.html\">Runtime</a></li></ul><h3>Namespaces</h3><ul><li><a href=\"MessageFormat.formatters.html\">formatters</a></li></ul>\n" +
    "</nav>\n" +
    "\n" +
    "<br class=\"clear\">\n" +
    "\n" +
    "<footer>\n" +
    "    Documentation generated by <a href=\"https://github.com/jsdoc3/jsdoc\">JSDoc 3.4.0</a> on Sat Feb 20 2016 18:21:43 GMT+0200 (EET)\n" +
    "</footer>\n" +
    "\n" +
    "<script> prettyPrint(); </script>\n" +
    "<script src=\"scripts/linenumber.js\"> </script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("_vendor/messageformat/doc/Runtime.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_vendor/messageformat/doc/Runtime.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>JSDoc: Class: Runtime</title>\n" +
    "\n" +
    "    <script src=\"scripts/prettify/prettify.js\"> </script>\n" +
    "    <script src=\"scripts/prettify/lang-css.js\"> </script>\n" +
    "    <!--[if lt IE 9]>\n" +
    "      <script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n" +
    "    <![endif]-->\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"styles/prettify-tomorrow.css\">\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"styles/jsdoc-default.css\">\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "\n" +
    "<div id=\"main\">\n" +
    "\n" +
    "    <h1 class=\"page-title\">Class: Runtime</h1>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<section>\n" +
    "\n" +
    "<header>\n" +
    "    \n" +
    "        <h2>Runtime</h2>\n" +
    "        \n" +
    "    \n" +
    "</header>\n" +
    "\n" +
    "<article>\n" +
    "    <div class=\"container-overview\">\n" +
    "    \n" +
    "        \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    <h4 class=\"name\" id=\"Runtime\"><span class=\"type-signature\"></span>new Runtime<span class=\"signature\">(locale<span class=\"signature-attributes\">opt</span>, pluralFunc<span class=\"signature-attributes\">opt</span>, formatters<span class=\"signature-attributes\">opt</span>)</span><span class=\"type-signature\"></span></h4>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"description\">\n" +
    "    <p>A set of utility functions that are called by the compiled Javascript\n" +
    " functions, these are included locally in the output of <a href=\"MessageFormat.html#compile\">compile()</a>.</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <h5>Parameters:</h5>\n" +
    "    \n" +
    "\n" +
    "<table class=\"params\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        \n" +
    "        <th>Name</th>\n" +
    "        \n" +
    "\n" +
    "        <th>Type</th>\n" +
    "\n" +
    "        \n" +
    "        <th>Attributes</th>\n" +
    "        \n" +
    "\n" +
    "        \n" +
    "\n" +
    "        <th class=\"last\">Description</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "\n" +
    "    <tbody>\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>locale</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">string</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "                    &lt;optional><br>\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>The parsed locale</p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>pluralFunc</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">function</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "                    &lt;optional><br>\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>Pluralization function for the locale</p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>formatters</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">Array.&lt;function()></span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "                    &lt;optional><br>\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>Optional custom formatting functions</p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "    </tbody>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<dl class=\"details\">\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-source\">Source:</dt>\n" +
    "    <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n" +
    "        <a href=\"messageformat.js.html\">messageformat.js</a>, <a href=\"messageformat.js.html#line213\">line 213</a>\n" +
    "    </li></ul></dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</dl>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    \n" +
    "    </div>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "     \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "        <h3 class=\"subsection-title\">Members</h3>\n" +
    "\n" +
    "        \n" +
    "            \n" +
    "<h4 class=\"name\" id=\"fmt\"><span class=\"type-signature\"></span>fmt<span class=\"type-signature\"> :Object.&lt;string, function()></span></h4>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"description\">\n" +
    "    <p>Custom formatting functions called by <code>{var, fn[, args]*}</code> syntax</p>\n" +
    "<p> For examples, see <a href=\"MessageFormat.formatters.html\">MessageFormat.formatters</a></p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <h5>Type:</h5>\n" +
    "    <ul>\n" +
    "        <li>\n" +
    "            \n" +
    "<span class=\"param-type\">Object.&lt;string, function()></span>\n" +
    "\n" +
    "\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<dl class=\"details\">\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-source\">Source:</dt>\n" +
    "    <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n" +
    "        <a href=\"messageformat.js.html\">messageformat.js</a>, <a href=\"messageformat.js.html#line229\">line 229</a>\n" +
    "    </li></ul></dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-see\">See:</dt>\n" +
    "    <dd class=\"tag-see\">\n" +
    "        <ul>\n" +
    "            <li><a href=\"MessageFormat.formatters.html\">MessageFormat.formatters</a></li>\n" +
    "        </ul>\n" +
    "    </dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</dl>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "        \n" +
    "            \n" +
    "<h4 class=\"name\" id=\"pluralFuncs\"><span class=\"type-signature\"></span>pluralFuncs<span class=\"type-signature\"> :Object.&lt;string, function()></span></h4>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"description\">\n" +
    "    <p>Pluralization functions included in compiled output</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <h5>Type:</h5>\n" +
    "    <ul>\n" +
    "        <li>\n" +
    "            \n" +
    "<span class=\"param-type\">Object.&lt;string, function()></span>\n" +
    "\n" +
    "\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<dl class=\"details\">\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-source\">Source:</dt>\n" +
    "    <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n" +
    "        <a href=\"messageformat.js.html\">messageformat.js</a>, <a href=\"messageformat.js.html#line219\">line 219</a>\n" +
    "    </li></ul></dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</dl>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "        \n" +
    "    \n" +
    "\n" +
    "    \n" +
    "        <h3 class=\"subsection-title\">Methods</h3>\n" +
    "\n" +
    "        \n" +
    "            \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    <h4 class=\"name\" id=\"number\"><span class=\"type-signature\"></span>number<span class=\"signature\">(value, offset<span class=\"signature-attributes\">opt</span>)</span><span class=\"type-signature\"></span></h4>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"description\">\n" +
    "    <p>Utility function for <code>#</code> in plural rules</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <h5>Parameters:</h5>\n" +
    "    \n" +
    "\n" +
    "<table class=\"params\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        \n" +
    "        <th>Name</th>\n" +
    "        \n" +
    "\n" +
    "        <th>Type</th>\n" +
    "\n" +
    "        \n" +
    "        <th>Attributes</th>\n" +
    "        \n" +
    "\n" +
    "        \n" +
    "        <th>Default</th>\n" +
    "        \n" +
    "\n" +
    "        <th class=\"last\">Description</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "\n" +
    "    <tbody>\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>value</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">number</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "                <td class=\"default\">\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>The value to operate on</p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>offset</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">number</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "                    &lt;optional><br>\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "                <td class=\"default\">\n" +
    "                \n" +
    "                    0\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>An optional offset, set by the surrounding context</p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "    </tbody>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<dl class=\"details\">\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-source\">Source:</dt>\n" +
    "    <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n" +
    "        <a href=\"messageformat.js.html\">messageformat.js</a>, <a href=\"messageformat.js.html#line241\">line 241</a>\n" +
    "    </li></ul></dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</dl>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "        \n" +
    "            \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    <h4 class=\"name\" id=\"plural\"><span class=\"type-signature\"></span>plural<span class=\"signature\">(value, offset, lcfunc, data, isOrdinal<span class=\"signature-attributes\">nullable</span>)</span><span class=\"type-signature\"> &rarr; {string}</span></h4>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"description\">\n" +
    "    <p>Utility function for <code>{N, plural|selectordinal, ...}</code></p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <h5>Parameters:</h5>\n" +
    "    \n" +
    "\n" +
    "<table class=\"params\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        \n" +
    "        <th>Name</th>\n" +
    "        \n" +
    "\n" +
    "        <th>Type</th>\n" +
    "\n" +
    "        \n" +
    "        <th>Attributes</th>\n" +
    "        \n" +
    "\n" +
    "        \n" +
    "\n" +
    "        <th class=\"last\">Description</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "\n" +
    "    <tbody>\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>value</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">number</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>The key to use to find a pluralization rule</p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>offset</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">number</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>An offset to apply to <code>value</code></p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>lcfunc</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">function</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>A locale function from <code>pluralFuncs</code></p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>data</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">Object.&lt;string, string></span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>The object from which results are looked up</p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>isOrdinal</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">boolean</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "                <td class=\"attributes\">\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                    &lt;nullable><br>\n" +
    "                \n" +
    "\n" +
    "                \n" +
    "                </td>\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>If true, use ordinal rather than cardinal rules</p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "    </tbody>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<dl class=\"details\">\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-source\">Source:</dt>\n" +
    "    <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n" +
    "        <a href=\"messageformat.js.html\">messageformat.js</a>, <a href=\"messageformat.js.html#line254\">line 254</a>\n" +
    "    </li></ul></dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</dl>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<h5>Returns:</h5>\n" +
    "\n" +
    "        \n" +
    "<div class=\"param-desc\">\n" +
    "    <p>The result of the pluralization</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<dl>\n" +
    "    <dt>\n" +
    "        Type\n" +
    "    </dt>\n" +
    "    <dd>\n" +
    "        \n" +
    "<span class=\"param-type\">string</span>\n" +
    "\n" +
    "\n" +
    "    </dd>\n" +
    "</dl>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "\n" +
    "        \n" +
    "            \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    <h4 class=\"name\" id=\"select\"><span class=\"type-signature\"></span>select<span class=\"signature\">(value, data)</span><span class=\"type-signature\"> &rarr; {string}</span></h4>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"description\">\n" +
    "    <p>Utility function for <code>{N, select, ...}</code></p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <h5>Parameters:</h5>\n" +
    "    \n" +
    "\n" +
    "<table class=\"params\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        \n" +
    "        <th>Name</th>\n" +
    "        \n" +
    "\n" +
    "        <th>Type</th>\n" +
    "\n" +
    "        \n" +
    "\n" +
    "        \n" +
    "\n" +
    "        <th class=\"last\">Description</th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "\n" +
    "    <tbody>\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>value</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">number</span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>The key to use to find a selection</p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "        <tr>\n" +
    "            \n" +
    "                <td class=\"name\"><code>data</code></td>\n" +
    "            \n" +
    "\n" +
    "            <td class=\"type\">\n" +
    "            \n" +
    "                \n" +
    "<span class=\"param-type\">Object.&lt;string, string></span>\n" +
    "\n" +
    "\n" +
    "            \n" +
    "            </td>\n" +
    "\n" +
    "            \n" +
    "\n" +
    "            \n" +
    "\n" +
    "            <td class=\"description last\"><p>The object from which results are looked up</p></td>\n" +
    "        </tr>\n" +
    "\n" +
    "    \n" +
    "    </tbody>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<dl class=\"details\">\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-source\">Source:</dt>\n" +
    "    <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n" +
    "        <a href=\"messageformat.js.html\">messageformat.js</a>, <a href=\"messageformat.js.html#line267\">line 267</a>\n" +
    "    </li></ul></dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</dl>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<h5>Returns:</h5>\n" +
    "\n" +
    "        \n" +
    "<div class=\"param-desc\">\n" +
    "    <p>The result of the select statement</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<dl>\n" +
    "    <dt>\n" +
    "        Type\n" +
    "    </dt>\n" +
    "    <dd>\n" +
    "        \n" +
    "<span class=\"param-type\">string</span>\n" +
    "\n" +
    "\n" +
    "    </dd>\n" +
    "</dl>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "\n" +
    "        \n" +
    "            \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    <h4 class=\"name\" id=\"toString\"><span class=\"type-signature\"></span>toString<span class=\"signature\">()</span><span class=\"type-signature\"></span></h4>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"description\">\n" +
    "    <p>Custom stringifier</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<dl class=\"details\">\n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    <dt class=\"tag-source\">Source:</dt>\n" +
    "    <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n" +
    "        <a href=\"messageformat.js.html\">messageformat.js</a>, <a href=\"messageformat.js.html#line304\">line 304</a>\n" +
    "    </li></ul></dd>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</dl>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <h5>Example</h5>\n" +
    "    \n" +
    "    <pre class=\"prettyprint\"><code>var mf = new MessageFormat('en');\n" +
    "console.log(mf.runtime.toString())\n" +
    "> var pluralFuncs = {\n" +
    ">   en: function (n, ord) {\n" +
    ">     var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n,\n" +
    ">         n10 = t0 &amp;&amp; s[0].slice(-1), n100 = t0 &amp;&amp; s[0].slice(-2);\n" +
    ">     if (ord) return (n10 == 1 &amp;&amp; n100 != 11) ? 'one'\n" +
    ">         : (n10 == 2 &amp;&amp; n100 != 12) ? 'two'\n" +
    ">         : (n10 == 3 &amp;&amp; n100 != 13) ? 'few'\n" +
    ">         : 'other';\n" +
    ">     return (n == 1 &amp;&amp; v0) ? 'one' : 'other';\n" +
    ">   }\n" +
    "> };\n" +
    "> var fmt = {};\n" +
    "> var number = function (value, offset) {\n" +
    ">   if (isNaN(value)) throw new Error(\"'\" + value + \"' isn't a number.\");\n" +
    ">   return value - (offset || 0);\n" +
    "> };\n" +
    "> var plural = function (value, offset, lcfunc, data, isOrdinal) {\n" +
    ">   if ({}.hasOwnProperty.call(data, value)) return data[value]();\n" +
    ">   if (offset) value -= offset;\n" +
    ">   var key = lcfunc(value, isOrdinal);\n" +
    ">   if (key in data) return data[key]();\n" +
    ">   return data.other();\n" +
    "> };\n" +
    "> var select = function (value, data) {\n" +
    ">   if ({}.hasOwnProperty.call(data, value)) return data[value]();\n" +
    ">   return data.other()\n" +
    "> };</code></pre>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        \n" +
    "    \n" +
    "\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</article>\n" +
    "\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<nav>\n" +
    "    <h2><a href=\"index.html\">Home</a></h2><h3>Classes</h3><ul><li><a href=\"MessageFormat.html\">MessageFormat</a></li><li><a href=\"Runtime.html\">Runtime</a></li></ul><h3>Namespaces</h3><ul><li><a href=\"MessageFormat.formatters.html\">formatters</a></li></ul>\n" +
    "</nav>\n" +
    "\n" +
    "<br class=\"clear\">\n" +
    "\n" +
    "<footer>\n" +
    "    Documentation generated by <a href=\"https://github.com/jsdoc3/jsdoc\">JSDoc 3.4.0</a> on Sat Feb 20 2016 18:21:44 GMT+0200 (EET)\n" +
    "</footer>\n" +
    "\n" +
    "<script> prettyPrint(); </script>\n" +
    "<script src=\"scripts/linenumber.js\"> </script>\n" +
    "</body>\n" +
    "</html>");
}]);

angular.module("_vendor/messageformat/example/index.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_vendor/messageformat/example/index.html",
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "  <head>\n" +
    "    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js\"></script>\n" +
    "    <script>document.write('<script src=\"' + (localStorage.getItem('lang') || 'en') + '/i18n.js\"><\\/script>')</script>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <div id=\"content\">\n" +
    "    </div>\n" +
    "    <input type=\"button\" value=\"en\" name=\"en\" />\n" +
    "    <input type=\"button\" value=\"fr\" name=\"fr\" />\n" +
    "    <script>\n" +
    "      $('<div>').text(window.i18n['colors'].red()).appendTo('#content');\n" +
    "      $('<div>').text(window.i18n['colors'].blue()).appendTo('#content');\n" +
    "      $('<div>').text(window.i18n['colors'].green()).appendTo('#content');\n" +
    "      $('<div>').text(window.i18n['sub/folder/plural'].test({NUM: 1})).appendTo('#content');\n" +
    "      $('<div>').text(window.i18n['sub/folder/plural'].test({NUM: 2})).appendTo('#content');\n" +
    "\n" +
    "      $('input').click(function(e){\n" +
    "        e.preventDefault();\n" +
    "        var lang = $(e.target).attr('name');\n" +
    "        localStorage.setItem('lang', lang);\n" +
    "        location.reload();\n" +
    "      });\n" +
    "    </script>\n" +
    "  </body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("index.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("index.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "\n" +
    "<head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>Petron</title>\n" +
    "\n" +
    "    <!-- bower:css -->\n" +
    "    <link rel=\"stylesheet\" href=\"../app/_vendor/bulma/css/bulma.css\" />\n" +
    "    <link rel=\"stylesheet\" href=\"../app/_vendor/ng-dialog/css/ngDialog.css\" />\n" +
    "    <link rel=\"stylesheet\" href=\"../app/_vendor/ng-dialog/css/ngDialog-theme-default.css\" />\n" +
    "    <!-- endbower -->\n" +
    "\n" +
    "    <link rel=\"stylesheet\" href=\"petron.css\">\n" +
    "</head>\n" +
    "\n" +
    "<body ng-app=\"petron\">\n" +
    "    <div ui-view>\n" +
    "        <div class=\"container\">\n" +
    "            <header>\n" +
    "                <h1>\n" +
    "                    Petron is loading...<br>\n" +
    "                    <small>All in One Car System</small>\n" +
    "                </h1>\n" +
    "\n" +
    "            </header>\n" +
    "            <section class=\"main\"></section>\n" +
    "            <footer></footer>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <petron-daemon ng-if=\"$root.daemon.active\" petron-draggable></petron-daemon>\n" +
    "\n" +
    "    <!-- bower:js -->\n" +
    "    <script src=\"../app/_vendor/angular/angular.js\"></script>\n" +
    "    <script src=\"../app/_vendor/angular-ui-router/release/angular-ui-router.js\"></script>\n" +
    "    <script src=\"../app/_vendor/angular-electron/angular-electron.js\"></script>\n" +
    "    <script src=\"../app/_vendor/angular-sanitize/angular-sanitize.js\"></script>\n" +
    "    <script src=\"../app/_vendor/angular-translate/angular-translate.js\"></script>\n" +
    "    <script src=\"../app/_vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.js\"></script>\n" +
    "    <script src=\"../app/_vendor/ng-dialog/js/ngDialog.js\"></script>\n" +
    "    <script src=\"../app/_vendor/messageformat/messageformat.js\"></script>\n" +
    "    <script src=\"../app/_vendor/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.js\"></script>\n" +
    "    <!-- endbower -->\n" +
    "\n" +
    "    <script type=\"text/javascript\" src=\"_main/petron.templates.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_modules/audio_module/petron.modules.audio.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_modules/health_module/petron.modules.health.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_modules/navigation_module/petron.modules.navigation.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_modules/settings_module/petron.modules.settings.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_modules/video_module/petron.modules.video.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_modules/audio_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_modules/navigation_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_modules/video_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_modules/petron.modules.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_main/petron.core.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_main/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_main/_directive/audioplayer/petron.audioplayer.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_main/_directive/daemon/petron.daemon.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_main/_directive/draggable/petron.draggable.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_main/_directive/filetree/petron.filetree.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_main/_directive/videoplayer/petron.videoplayer.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_main/_factory/petron.daemon.factory.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_main/_factory/petron.file.factory.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_main/_factory/petron.playlist.factory.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_main/_filter/petron.buildTime.filter.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_main/_filter/petron.trust.filter.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_main/_service/petron.fs.service.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_main/_service/petron.storage.service.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_main/petron.config.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_main/petron.core.routes.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"_main/petron.js\"></script>\n" +
    "</body>\n" +
    "\n" +
    "</html>");
}]);

angular.module("loader.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("loader.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "\n" +
    "<head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>Petron</title>\n" +
    "\n" +
    "    <!-- bower:css -->\n" +
    "    <link rel=\"stylesheet\" href=\"../app/_vendor/bulma/css/bulma.css\" />\n" +
    "    <link rel=\"stylesheet\" href=\"../app/_vendor/ng-dialog/css/ngDialog.css\" />\n" +
    "    <link rel=\"stylesheet\" href=\"../app/_vendor/ng-dialog/css/ngDialog-theme-default.css\" />\n" +
    "    <!-- endbower -->\n" +
    "\n" +
    "    <link rel=\"stylesheet\" href=\"petron.css\">\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "    <div class=\"container\">\n" +
    "        <header>\n" +
    "            <h1>\n" +
    "                Petron is loading...<br>\n" +
    "                <small>All in One Car System</small>\n" +
    "            </h1>\n" +
    "\n" +
    "        </header>\n" +
    "        <section class=\"main\"></section>\n" +
    "        <footer></footer>\n" +
    "    </div>\n" +
    "</body>\n" +
    "\n" +
    "</html>");
}]);
