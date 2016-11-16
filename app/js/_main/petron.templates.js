angular.module('petron.core.templates', ['_main/_template/petron.header.html', '_main/_template/petron.home.html', 'index.html', 'js/_main/_directive/daemon/petron.daemon.html', 'js/_main/_directive/filetree/audio_popout.html', 'js/_main/_directive/filetree/petron.filetree.html', 'js/_main/_template/petron.confirm.html', 'js/_main/_template/petron.header.html', 'js/_main/_template/petron.home.html', 'js/_modules/audio_module/_template/_directive.html', 'js/_modules/audio_module/_template/add_to_playlist_modal.html', 'js/_modules/audio_module/_template/main.html', 'js/_modules/audio_module/_template/new_playlist_modal.html', 'js/_modules/audio_module/_template/playlists.html', 'js/_modules/fm_module/_template/main.html', 'js/_modules/fm_module/_template/stations.html', 'js/_modules/navigation_module/_template/main.html', 'js/_modules/video_module/_template/_directive.html', 'js/_modules/video_module/_template/add_to_playlist_modal.html', 'js/_modules/video_module/_template/layout.html', 'js/_modules/video_module/_template/main.html', 'js/_modules/video_module/_template/new_playlist_modal.html', 'js/_modules/video_module/_template/player.html', 'loader.html', 'vendor/angular-rangeslider-directive/example/index.html', 'vendor/AngularHammer/doc/angular.hammer.js.html', 'vendor/AngularHammer/doc/index.html', 'vendor/AngularHammer/doc/module-hmTouchEvents.html', 'vendor/hammer-time/index.html', 'vendor/hammer-time/test.html', 'vendor/messageformat/doc/index.html', 'vendor/messageformat/doc/MessageFormat.formatters.html', 'vendor/messageformat/doc/MessageFormat.html', 'vendor/messageformat/doc/messageformat.js.html', 'vendor/messageformat/doc/Runtime.html', 'vendor/messageformat/example/index.html']);

angular.module("_main/_template/petron.header.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_main/_template/petron.header.html",
    "<div class=\"columns\">\n" +
    "	<div class=\"column is-1\">\n" +
    "		<span class=\"icon is-large\" ui-sref=\"home\">\n" +
    "			<i class=\"fa icon-home\"></i>\n" +
    "		</span>\n" +
    "	</div>\n" +
    "	<div class=\"column is-5\">\n" +
    "		<h3 class=\"title is-3\">{{ 'petron' | translate }} - {{ title | translate }}</h3>\n" +
    "	</div>\n" +
    "	<div class=\"column is-6 has-text-right\">\n" +
    "		<h4 class=\"title is-4\">{{ date | date:'dd.MM.yyyy HH:mm'}}</h4>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("_main/_template/petron.home.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_main/_template/petron.home.html",
    "<div class=\"hero is-fullheight is-medium\">\n" +
    "	<div class=\"hero-head\">\n" +
    "		<div class=\"container is-fluid\" ui-view=\"header\"></div>\n" +
    "	</div>\n" +
    "	<div class=\"hero-body\">\n" +
    "		<div class=\"container is-fluid\" ui-view=\"content\">\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"hero-foot\">\n" +
    "		<div class=\"tabs\">\n" +
    "			<div class=\"container is-fluid\">\n" +
    "				<ul class=\"c--tabs__menu\">\n" +
    "					<li ui-sref=\"\" ui-sref-active=\"is-active\">\n" +
    "						<span class=\"icon is-large\">\n" +
    "							<i class=\"fa icon-radio\"></i>\n" +
    "						</span>\n" +
    "						<div>{{ 'radio_module' | translate }}</div>\n" +
    "					</li>\n" +
    "					<li ui-sref=\"petron.audiobox.main\" ui-sref-active=\"is-active\">\n" +
    "						<span class=\"icon is-large\">\n" +
    "							<i class=\"fa icon-notes\"></i>\n" +
    "						</span>\n" +
    "						<div>{{ 'music_module' | translate }}</div>\n" +
    "					</li>\n" +
    "					<li ui-sref=\"petron.videobox.main\" ui-sref-active=\"is-active\">\n" +
    "						<span class=\"icon is-large\">\n" +
    "							<i class=\"fa icon-video\"></i>\n" +
    "						</span>\n" +
    "						<div>{{ 'video_module' | translate }}</div>\n" +
    "					</li>\n" +
    "					<li ui-sref=\"\" ui-sref-active=\"is-active\">\n" +
    "						<span class=\"icon is-large\">\n" +
    "							<i class=\"fa icon-location-arrow\"></i>\n" +
    "						</span>\n" +
    "						<div>{{ 'navigation_module' | translate }}</div>\n" +
    "					</li>\n" +
    "					<li ui-sref=\"\" ui-sref-active=\"is-active\">\n" +
    "						<span class=\"icon is-large\">\n" +
    "							<i class=\"fa icon-spanner\"></i>\n" +
    "						</span>\n" +
    "						<div>{{ 'health_module' | translate }}</div>\n" +
    "					</li>\n" +
    "					<li ui-sref=\"\" ui-sref-active=\"is-active\">\n" +
    "						<span class=\"icon is-large\">\n" +
    "							<i class=\"fa icon-cog\"></i>\n" +
    "						</span>\n" +
    "						<div>{{ 'settings_module' | translate }}</div>\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
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
    "    <link rel=\"stylesheet\" href=\"../app/vendor/ng-dialog/css/ngDialog.css\" />\n" +
    "    <link rel=\"stylesheet\" href=\"../app/vendor/ng-dialog/css/ngDialog-theme-default.css\" />\n" +
    "    <link rel=\"stylesheet\" href=\"../app/vendor/angular-rangeslider-directive/angular-range-slider.css\" />\n" +
    "    <!-- endbower -->\n" +
    "\n" +
    "    <link rel=\"stylesheet\" href=\"css/petron.css\">\n" +
    "</head>\n" +
    "\n" +
    "<body ng-app=\"petron\" ng-cloak>\n" +
    "    <div class=\"petron-wrap\" ng-class=\"{'show-left-menu': $root.left_toggle, 'show-right-menu': $root.right_toggle}\">\n" +
    "        <div class=\"menu-wrap is-left\">\n" +
    "            <nav class=\"menu\">\n" +
    "                <div class=\"nav-list\">\n" +
    "                    <a ui-sref=\"petron.fmbox\" ui-sref-active=\"is-active\">\n" +
    "                        <span class=\"icon\"><i class=\"fa icon-radio\"></i></span>\n" +
    "                        <span>{{ 'radio_module' | translate }}</span>\n" +
    "                    </a>\n" +
    "                    <a ui-sref=\"petron.audiobox\" ui-sref-active=\"is-active\">\n" +
    "                        <span class=\"icon\"><i class=\"fa icon-notes\"></i></span>\n" +
    "                        <span>{{ 'music_module' | translate }}</span>\n" +
    "                    </a>\n" +
    "                    <a ui-sref=\"petron.videobox.main\" ui-sref-active=\"is-active\">\n" +
    "                        <span class=\"icon\"><i class=\"fa icon-video\"></i></span>\n" +
    "                        <span>{{ 'video_module' | translate }}</span>\n" +
    "                    </a>\n" +
    "                    <a ui-sref=\"petron\" ui-sref-active=\"is-active\">\n" +
    "                        <span class=\"icon\"><i class=\"fa icon-location-arrow\"></i></span>\n" +
    "                        <span>{{ 'navigation_module' | translate }}</span>\n" +
    "                    </a>\n" +
    "                    <a ui-sref=\"petron\" ui-sref-active=\"is-active\">\n" +
    "                        <span class=\"icon\"><i class=\"fa icon-heart\"></i></span>\n" +
    "                        <span>{{ 'health_module' | translate }}</span>\n" +
    "                    </a>\n" +
    "                    <a ui-sref=\"petron\" ui-sref-active=\"is-active\">\n" +
    "                        <span class=\"icon\"><i class=\"fa icon-cog\"></i></span>\n" +
    "                        <span>{{ 'settings_module' | translate }}</span>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </nav>\n" +
    "            <span class=\"icon is-medium close-button\" ng-click=\"$root.left_toggle = false;\">\n" +
    "					<i class=\"fa icon-times\"></i>\n" +
    "				</span>\n" +
    "        </div>\n" +
    "        <div class=\"container\" ui-view>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"menu-wrap is-right\" ng-if=\"rightMenuShow\">\n" +
    "            <nav class=\"menu\">\n" +
    "                <div class=\"nav-list\" ui-view=\"right-menu\">\n" +
    "                </div>\n" +
    "            </nav>\n" +
    "            <span class=\"icon is-medium close-button\" ng-click=\"$root.right_toggle = false;\">\n" +
    "			      <i class=\"fa icon-times\"></i>\n" +
    "  				</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <petron-daemon ng-if=\"$root.daemon.active\" petron-draggable></petron-daemon>\n" +
    "\n" +
    "    <!-- bower:js -->\n" +
    "    <script src=\"../app/vendor/angular/angular.js\"></script>\n" +
    "    <script src=\"../app/vendor/angular-ui-router/release/angular-ui-router.js\"></script>\n" +
    "    <script src=\"../app/vendor/angular-electron/angular-electron.js\"></script>\n" +
    "    <script src=\"../app/vendor/angular-sanitize/angular-sanitize.js\"></script>\n" +
    "    <script src=\"../app/vendor/angular-translate/angular-translate.js\"></script>\n" +
    "    <script src=\"../app/vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.js\"></script>\n" +
    "    <script src=\"../app/vendor/ng-dialog/js/ngDialog.js\"></script>\n" +
    "    <script src=\"../app/vendor/messageformat/messageformat.js\"></script>\n" +
    "    <script src=\"../app/vendor/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.js\"></script>\n" +
    "    <script src=\"../app/vendor/async/dist/async.js\"></script>\n" +
    "    <script src=\"../app/vendor/angular-rangeslider-directive/src/angular-range-slider.js\"></script>\n" +
    "    <script src=\"../app/vendor/hammerjs/hammer.js\"></script>\n" +
    "    <script src=\"../app/vendor/AngularHammer/angular.hammer.js\"></script>\n" +
    "    <script src=\"../app/vendor/hammer-time/hammer-time.js\"></script>\n" +
    "    <!-- endbower -->\n" +
    "\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/petron.templates.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/audio_module/petron.modules.audio.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/fm_module/petron.modules.fm.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/health_module/petron.modules.health.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/navigation_module/petron.modules.navigation.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/settings_module/petron.modules.settings.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/video_module/petron.modules.video.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/fm_module/_factory/petron.tuner.factory.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/audio_module/_directive/petron.audio.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/video_module/_directive/petron.video.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/audio_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/fm_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/navigation_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/video_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/petron.modules.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/petron.core.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_directive/daemon/petron.daemon.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_directive/draggable/petron.draggable.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_directive/filetree/petron.filetree.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_factory/petron.daemon.factory.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_factory/petron.playlist.factory.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_filter/petron.buildTime.filter.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_filter/petron.frequency.filter.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_filter/petron.trust.filter.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_service/petron.fs.service.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_service/petron.storage.service.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/petron.config.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/petron.core.routes.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/petron.js\"></script>\n" +
    "</body>\n" +
    "\n" +
    "</html>");
}]);

angular.module("js/_main/_directive/daemon/petron.daemon.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_main/_directive/daemon/petron.daemon.html",
    "<div class=\"c--daemon__container\">\n" +
    "	<video ng-if=\"daemon.type === 'video'\" class=\"c--video__player\" autoplay>\n" +
    "		<source ng-repeat=\"file in video.player.playlist.tracks\" ng-if=\"video.player.playlist.tracks && file.play\" ng-src=\"{{ file.path }}\" type=\"video/{{ file.type}}\">\n" +
    "	</video>\n" +
    "	<audio ng-if=\"daemon.type === 'audio'\" class=\"c--audio__player\" ng-click=\"audio.player.play()\">\n" +
    "		<source ng-repeat=\"file in audio.player.playlist.tracks\" ng-if=\"audio.player.playlist.tracks && file.play\" ng-src=\"{{ file.path }}\" type=\"audio/{{ file.type}}\">\n" +
    "	</audio>\n" +
    "</div>\n" +
    "");
}]);

angular.module("js/_main/_directive/filetree/audio_popout.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_main/_directive/filetree/audio_popout.html",
    "<section class=\"c--audio__popout\">\n" +
    "	<div class=\"columns is-vcentered c--audio__track\">\n" +
    "		<div class=\"column is-narrow\">\n" +
    "			<figure class=\"image is-48x48\">\n" +
    "				<img ng-if=\"file.image\" ng-src=\"{{ 'data:image/' + file.image_type + ';base64,' + file.image }}\" alt=\"{{ file.artist }}\">\n" +
    "				<img ng-if=\"!file.image\" src=\"./images/music_cover_ph.svg\" alt=\"\">\n" +
    "			</figure>\n" +
    "		</div>\n" +
    "		<div class=\"column\">\n" +
    "			<p>{{ file.title }}</p>\n" +
    "			<p><small>{{ 'audio_popout.by_artist' | translate }} {{ file.artist }}</small></p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"columns\" ng-click=\"play(file)\">\n" +
    "		<div class=\"column c--audio__option\">\n" +
    "				<span class=\"icon is-small\">\n" +
    "					<i class=\"fa icon-media-play\"></i>\n" +
    "				</span>\n" +
    "				{{ 'audio_popout.button_play_now' | translate }}\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"columns\" ng-click=\"addToQueue(file)\">\n" +
    "		<div class=\"column c--audio__option\">\n" +
    "			<span class=\"icon is-small\">\n" +
    "				<i class=\"fa icon-th-list\"></i>\n" +
    "			</span>\n" +
    "			{{ 'audio_popout.button_add_to_queue' | translate }}\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"columns\" ng-click=\"addToPlaylist(file)\">\n" +
    "		<div class=\"column c--audio__option\">\n" +
    "			<span class=\"icon is-small\">\n" +
    "				<i class=\"fa icon-plus\"></i>\n" +
    "			</span>\n" +
    "			{{ 'audio_popout.button_add_to_playlist' | translate }}\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</section>\n" +
    "");
}]);

angular.module("js/_main/_directive/filetree/petron.filetree.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_main/_directive/filetree/petron.filetree.html",
    "<ul class=\"c--filetree__list\" ng-if=\"files\">\n" +
    "	<li ng-if=\"parent.parent\" hm-tap=\"openParent(parent)\">\n" +
    "		<div class=\"columns is-vcentered\">\n" +
    "			<div class=\"column is-narrow is-paddingless\">\n" +
    "				<figure class=\"image is-32x32\">\n" +
    "					<span class=\"icon is-medium\" >\n" +
    "						<i class=\"fa icon-folder\"></i>\n" +
    "					</span>\n" +
    "				</figure>\n" +
    "			</div>\n" +
    "			<div class=\"column c--filetree__name\">\n" +
    "				<div class=\"columns\">\n" +
    "					<div class=\"column\">\n" +
    "						..\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</li>\n" +
    "	<li ng-repeat=\"file in files | orderBy:[orderFunc, ((type !== 'playlist') ? 'name' : '')]\" ng-click=\"open(file, $index)\" hm-press=\"popout\" hm-tap=\"open(file, $index)\" hm-recognizer-options='[{\"type\": \"press\", \"time\": 500}]' ng-class=\"{'is-active': file.play && type === 'playlist'}\">\n" +
    "		<div class=\"columns is-vcentered\">\n" +
    "			<div class=\"column is-narrow is-paddingless\">\n" +
    "				<figure class=\"image is-32x32\">\n" +
    "				  <img ng-src=\"{{ 'data:image/' + file.image_type + ';base64,' + file.image }}\" alt=\"\" ng-if=\"file.image\">\n" +
    "					<span class=\"icon is-medium\" ng-if=\"!file.image\">\n" +
    "						<i class=\"fa\" ng-class=\"{'icon-folder': file.type === 'folder', 'icon-video-outline': (file.type !== 'folder' && file.type !== 'playlist' && (type == 'video' ||  type == 'playlist')), 'icon-playlist': file.type === 'playlist', 'icon-notes': file.type !== 'folder' && file.type !== 'playlist' && (type == 'audio' || type == 'playlist') }\"></i>\n" +
    "					</span>\n" +
    "				</figure>\n" +
    "			</div>\n" +
    "			<div class=\"column c--filetree__name\">\n" +
    "				<div class=\"columns\">\n" +
    "					<div class=\"column\">\n" +
    "						{{ file.artist || file.name }}\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"columns c--filetree__title\" ng-if=\"file.title\">\n" +
    "					<div class=\"column\">\n" +
    "						{{ file.title }} {{ (file.album) ? '- ' + file.album : '' }}\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"column is-narrow has-text-right c--filetree__meta\" ng-if=\"file.type !== 'folder' && type === 'video'\">\n" +
    "				<span> {{ file.duration | buildTime:true }}</span>\n" +
    "			</div>\n" +
    "			<div class=\"column is-narrow has-text-right c--filetree__meta\" ng-if=\"file.type !== 'folder' && type === 'video'\">\n" +
    "				<span class=\"meta__hd\" ng-class=\"{'is-HD': file.hd}\">HD</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("js/_main/_template/petron.confirm.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_main/_template/petron.confirm.html",
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

angular.module("js/_main/_template/petron.header.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_main/_template/petron.header.html",
    "<div class=\"columns is-vcentered\">\n" +
    "	<div class=\"column has-text-left\">\n" +
    "		<span class=\"left-menu-toggle\" ng-click=\"$root.left_toggle = !$root.left_toggle\">\n" +
    "			<span class=\"icon\"><i class=\"fa icon-th-menu\"></i></span>\n" +
    "			<p>MENU</p>\n" +
    "		</span>\n" +
    "	</div>\n" +
    "	<div class=\"column has-text-centered\">\n" +
    "		{{ date | date:'dd. MMMM yyyy - HH:mm'}} {{ 'clock_unit' | translate }}\n" +
    "	</div>\n" +
    "	<div class=\"column has-text-right\">\n" +
    "		<span class=\"right-menu-toggle\" ng-click=\"$root.right_toggle = !$root.right_toggle\" ng-if=\"rightMenuShow\">\n" +
    "			<p>{{ $root.rightMenuLabel | translate }}</p>\n" +
    "			<span class=\"icon\"><i class=\"fa icon-th-menu\"></i></span>\n" +
    "		</span>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("js/_main/_template/petron.home.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_main/_template/petron.home.html",
    "<header class=\"container is-fluid\" ui-view=\"header\">\n" +
    "	<div class=\"columns is-vcentered\">\n" +
    "		<div class=\"column has-text-left\">\n" +
    "			<span class=\"left-menu-toggle\" ng-click=\"$root.left_toggle = !$root.left_toggle\">\n" +
    "				<span class=\"icon\"><i class=\"fa icon-th-menu\"></i></span>\n" +
    "				<p>MENU</p>\n" +
    "			</span>\n" +
    "		</div>\n" +
    "		<div class=\"column has-text-centered\">\n" +
    "			{{ date | date:'dd. MMMM yyyy - HH:mm'}} {{ 'clock_unit' | translate }}\n" +
    "		</div>\n" +
    "		<div class=\"column has-text-right\">\n" +
    "			<span class=\"right-menu-toggle\" ng-click=\"$root.right_toggle = !$root.right_toggle\" ng-if=\"rightMenuShow\">\n" +
    "				<p>{{ $root.rightMenuLabel | translate }}</p>\n" +
    "				<span class=\"icon\"><i class=\"fa icon-th-menu\"></i></span>\n" +
    "			</span>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</header>\n" +
    "<main class=\"container is-fluid\" ui-view=\"content\"></main>\n" +
    "");
}]);

angular.module("js/_modules/audio_module/_template/_directive.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/audio_module/_template/_directive.html",
    "<div class=\"columns\">\n" +
    "	<div class=\"column has-text-centered c--audio__title\">\n" +
    "		<h1 class=\"title is-4\">\n" +
    "			{{ playlist.tracks[current].title }}\n" +
    "		</h1>\n" +
    "\n" +
    "		<h2 class=\"subtitle is-6\">\n" +
    "			{{ playlist.tracks[current].artist }} {{ (playlist.tracks[current].album) ? '- ' + playlist.tracks[current].album : '' }}\n" +
    "		</h2>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"columns\">\n" +
    "	<div class=\"column is-8 is-offset-2\">\n" +
    "		<figure class=\"image is-square\">\n" +
    "		  <img ng-if=\"playlist.tracks[current].image\" ng-src=\"{{ 'data:image/' + playlist.tracks[current].image_type + ';base64,' + playlist.tracks[current].image }}\" alt=\"\">\n" +
    "		  <img ng-if=\"!playlist.tracks[current].image\" src=\"./images/music_cover_ph.svg\" alt=\"\">\n" +
    "		</figure>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"columns\">\n" +
    "	<div class=\"column has-text-centered\">\n" +
    "		<section class=\"c--audio__controls\">\n" +
    "			<button class=\"button\" ng-click=\"shuffle()\" ng-class=\"{'is-active': controls.shuffle}\">\n" +
    "				<i class=\"icon-shuffle\"></i>\n" +
    "			</button>\n" +
    "			<button class=\"button c--audio__controls-l\" ng-click=\"previous()\">\n" +
    "				<i class=\"icon-media-rewind\"></i>\n" +
    "			</button>\n" +
    "			<button class=\"button c--audio__controls-xl\" ng-click=\"play()\" ng-class=\"{'is-active': controls.play}\">\n" +
    "				<i class=\"icon-media-play\" ng-if=\"!controls.play\"></i>\n" +
    "				<i class=\"icon-media-pause\" ng-if=\"controls.play\"></i>\n" +
    "			</button>\n" +
    "			<button class=\"button c--audio__controls-l\" ng-click=\"next()\">\n" +
    "				<i class=\"icon-media-forward\"></i>\n" +
    "			</button>\n" +
    "			<button class=\"button\" ng-click=\"toggleRepeat()\" ng-class=\"{'is-active': controls.loop || controls.repeat}\">\n" +
    "				<i ng-class=\"{'icon-loop': controls.loop || (!controls.loop && !controls.repeat) , 'icon-repeat': controls.repeat}\"></i>\n" +
    "			</button>\n" +
    "		</section>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"columns c--audio__timetrack\">\n" +
    "	<div class=\"column has-text-centered\">\n" +
    "		<input id=\"timetracker\" ng-model=\"controls.time\" ng-change=\"seek()\" type=\"range\" min=\"0\" max=\"{{ controls.duration }}\" step=\"1\" />\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"columns c--audio__time\">\n" +
    "	<div class=\"column has-text-left\">\n" +
    "		{{ controls.time | buildTime }}\n" +
    "	</div>\n" +
    "	<div class=\"column has-text-right\">\n" +
    "		{{ controls.duration | buildTime }}\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<audio class=\"c--audio__player\" preload=\"auto\" ng-click=\"play()\">\n" +
    "	<source ng-repeat=\"file in playlist.tracks\" ng-if=\"playlist.tracks && file.play\" ng-src=\"{{ file.path }}\" type=\"audio/{{ file.type}}\">\n" +
    "</audio>\n" +
    "<!--\n" +
    "<button class=\"button\" ng-click=\"player.audio.daemonize()\">\n" +
    "	<i class=\"icon-home\"></i>\n" +
    "</button>\n" +
    "\n" +
    "\n" +
    "<i class=\"icon-volume-down\"></i>\n" +
    "<input ng-model=\"player.audio.controls.volume\" ng-change=\"player.audio.setVolume()\" type=\"range\" min=\"0\" max=\"1\" step=\"0.01\" />\n" +
    "<i class=\"icon-volume-up\"></i>\n" +
    "\n" +
    "<section class=\"c--audio__playlist\">\n" +
    "	<ul>\n" +
    "		<li ng-repeat=\"file in player.audio.playlist\" ng-click=\"player.audio.playFile($index)\">{{ file.name }}</li>\n" +
    "	</ul>\n" +
    "</section>\n" +
    "-->\n" +
    "");
}]);

angular.module("js/_modules/audio_module/_template/add_to_playlist_modal.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/audio_module/_template/add_to_playlist_modal.html",
    "<section class=\"c--audio__popout\">\n" +
    "	<div class=\"columns is-vcentered c--audio__track\">\n" +
    "		<div class=\"column is-narrow\">\n" +
    "			<figure class=\"image is-48x48\">\n" +
    "				<img ng-if=\"file.image\" ng-src=\"{{ 'data:image/' + file.image_type + ';base64,' + file.image }}\" alt=\"{{ file.artist }}\">\n" +
    "				<img ng-if=\"!file.image\" src=\"./images/music_cover_ph.svg\" alt=\"\">\n" +
    "			</figure>\n" +
    "		</div>\n" +
    "		<div class=\"column\">\n" +
    "			<p>{{ file.title }}</p>\n" +
    "			<p><small>{{ 'audio_popout.by_artist' | translate }} {{ file.artist }}</small></p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"columns c--audio__popout--playlists\">\n" +
    "		<div class=\"column\">\n" +
    "			<ul>\n" +
    "				<li ng-click=\"useList('create_new')\">\n" +
    "					<span class=\"icon is-small\">\n" +
    "						<i class=\"fa icon-plus\"></i>\n" +
    "					</span> {{ 'create_new_playlist' | translate }}\n" +
    "				</li>\n" +
    "				<li ng-repeat=\"pl in $parent.playlists\" ng-click=\"useList(pl.name)\">\n" +
    "					<span class=\"icon is-small\">\n" +
    "						<i class=\"fa icon-th-list\"></i>\n" +
    "					</span> {{ pl.name }}\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("js/_modules/audio_module/_template/main.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/audio_module/_template/main.html",
    "<section class=\"columns u--max-height__100 u--margin-top__none\">\n" +
    "\n" +
    "	<aside class=\"c--filetree column is-7\">\n" +
    "\n" +
    "		<div class=\"tabs\">\n" +
    "		  <ul class=\"is-left\">\n" +
    "		    <li ng-click=\"visibileFileTree = 'files'\" ng-class=\"{'is-active': visibileFileTree === 'files'}\">\n" +
    "		      <a>\n" +
    "		        <span class=\"icon is-small\"><i class=\"fa icon-folder\"></i></span>\n" +
    "		        <span>{{ 'treeview_files' | translate }}</span>\n" +
    "		      </a>\n" +
    "		    </li>\n" +
    "		    <li ng-click=\"visibileFileTree = 'playlist'\" ng-class=\"{'is-active': !visibileFileTree || visibileFileTree === 'playlist'}\">\n" +
    "		      <a>\n" +
    "		        <span class=\"icon is-small\"><i class=\"fa icon-th-list\"></i></span>\n" +
    "		        <span>{{ 'treeview_playlist' | translate }}</span>\n" +
    "		      </a>\n" +
    "		    </li>\n" +
    "		  </ul>\n" +
    "			<ul class=\"is-right\" ng-show=\"visibileFileTree === 'files'\">\n" +
    "				<li ng-click=\"func.playAll($root.files)\">\n" +
    "					<a>\n" +
    "		        <span class=\"icon is-small\"><i class=\"fa icon-media-play\"></i></span>\n" +
    "		        <span>{{ 'treeview_playall' | translate }}</span>\n" +
    "		      </a>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "\n" +
    "		<petron-filetree class=\"has-tabs\" files=\"files\" func=\"func\" type=\"audio\" ng-show=\"visibileFileTree === 'files'\"></petron-filetree>\n" +
    "		<petron-filetree class=\"has-tabs\" files=\"audio.queue.tracks\" func=\"func\" type=\"playlist\" ng-show=\"!visibileFileTree || visibileFileTree === 'playlist'\"></petron-filetree>\n" +
    "	</aside>\n" +
    "\n" +
    "	<main class=\"c--audio__main column is-5\">\n" +
    "		<petron-audio></petron-audio>\n" +
    "	</main>\n" +
    "\n" +
    "</section>\n" +
    "");
}]);

angular.module("js/_modules/audio_module/_template/new_playlist_modal.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/audio_module/_template/new_playlist_modal.html",
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

angular.module("js/_modules/audio_module/_template/playlists.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/audio_module/_template/playlists.html",
    "<a ng-click=\"newPlaylist()\">\n" +
    "	<span class=\"icon\">\n" +
    "		<i class=\"fa icon-plus\"></i>\n" +
    "	</span>\n" +
    "	<span>{{ 'create_new_playlist' | translate }}</span>\n" +
    "</a>\n" +
    "\n" +
    "<a ng-repeat=\"list in audio.playlists\" ng-click=\"func.play(list.name)\">\n" +
    "	<span class=\"icon\">\n" +
    "		<i class=\"fa icon-th-list\"></i>\n" +
    "	</span>\n" +
    "	<span>{{ list.name }}</span>\n" +
    "</a>\n" +
    "");
}]);

angular.module("js/_modules/fm_module/_template/main.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/fm_module/_template/main.html",
    "<section class=\"columns u--max-height__100 u--margin-top__none\">\n" +
    "\n" +
    "	<main class=\"c--fm__main column\">\n" +
    "		<div class=\"columns\">\n" +
    "			<section class=\"column c--fm__display\">\n" +
    "				<div class=\"columns\">\n" +
    "					<div class=\"column is-10 is-offset-1\">\n" +
    "						<span class=\"icon\">\n" +
    "							<i class=\"fa icon-heart-outline\"></i>\n" +
    "						</span>\n" +
    "						<h1 class=\"is-1 title\" ng-bind-html=\"frequency.current | frequency\">\n" +
    "						</h1>\n" +
    "						<span class=\"frequency\">\n" +
    "							MHz\n" +
    "						</span>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"columns\">\n" +
    "					<div class=\"column\">\n" +
    "						<h2 class=\"is-2 title\">\n" +
    "							SWR3\n" +
    "						</h2>\n" +
    "						<p class=\"marquee\">\n" +
    "							<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente atque hic labore veniam</span>\n" +
    "						</p>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</section>\n" +
    "		</div>\n" +
    "		<div class=\"columns is-vcentered c--fm__channels\">\n" +
    "			<div class=\"column is-narrow\" ng-click=\"freqDown()\">\n" +
    "				<span class=\"icon is-large\"><i class=\"fa icon-media-rewind\"></i></span>\n" +
    "			</div>\n" +
    "			<div class=\"column c--fm__frequency\">\n" +
    "				<input ng-model=\"frequency.current\" type=\"range\" min=\"{{ frequency.min }}\"  max=\"{{ frequency.max }}\" step=\"0.05\">\n" +
    "				<ul class=\"c--range__labels\">\n" +
    "				  <li ng-repeat=\"label in rangeLabels track by $index\" ng-class=\"{'is-seperator': (label % 1) === 0, 'is-seperator-5': (label % 5) === 0}\">\n" +
    "				  	<span class=\"is-label\" ng-if=\"(label % 5) === 0\">\n" +
    "				  		{{ label }}\n" +
    "				  	</span>\n" +
    "				  </li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "			<div class=\"column is-narrow\" ng-click=\"freqUp()\">\n" +
    "				<span class=\"icon is-large\"><i class=\"fa icon-media-forward\"></i></span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</main>\n" +
    "\n" +
    "</section>\n" +
    "");
}]);

angular.module("js/_modules/fm_module/_template/stations.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/fm_module/_template/stations.html",
    "<a ng-repeat=\"station in fm.stations\" ng-click=\"func.play(station)\">\n" +
    "	<span class=\"icon\">\n" +
    "		<i class=\"fa icon-heart-outline\"></i>\n" +
    "	</span>\n" +
    "	<span>{{ station.name }}</span>\n" +
    "</a>\n" +
    "");
}]);

angular.module("js/_modules/navigation_module/_template/main.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/navigation_module/_template/main.html",
    "<div class=\"map\"></div>\n" +
    "");
}]);

angular.module("js/_modules/video_module/_template/_directive.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/video_module/_template/_directive.html",
    "<video class=\"c--video__player\" hm-tap=\"play()\" hm-press=\"showControls = !showControls\" hm-recognizer-options='[{\"type\": \"press\", \"time\": 500}]'>\n" +
    "	<source ng-repeat=\"file in playlist.tracks\" ng-if=\"playlist.tracks && file.play\" ng-src=\"{{ file.path }}\" type=\"video/{{ file.type}}\">\n" +
    "</video>\n" +
    "<section class=\"c--video__controls c--controls__top\" ng-class=\"{'c--controls__show': showControls}\" hm-tap=\"resetInterval\">\n" +
    "	<div class=\"columns is-vcentered\">\n" +
    "		<div class=\"column\">\n" +
    "			<h3 class=\"title is-5\">{{ playlist.tracks[current].name }}</h3>\n" +
    "		</div>\n" +
    "		<div class=\"column is-narrow has-text-right\" ng-click=\"daemonize()\">\n" +
    "			<span class=\"icon\">\n" +
    "				<i class=\"fa icon-times\"></i>\n" +
    "			</span>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "<section class=\"c--video__controls c--controls__bottom\" ng-class=\"{'c--controls__show': showControls}\" hm-tap=\"resetInterval\">\n" +
    "\n" +
    "	<button class=\"button c--video__controls-l\" ng-click=\"prev()\">\n" +
    "		<i class=\"icon-media-rewind\"></i>\n" +
    "	</button>\n" +
    "	<button class=\"button c--video__controls-xl\" ng-click=\"play()\" ng-class=\"{'is-active': controls.play}\">\n" +
    "		<i class=\"icon-media-play\" ng-if=\"!controls.play\"></i>\n" +
    "		<i class=\"icon-media-pause\" ng-if=\"controls.play\"></i>\n" +
    "	</button>\n" +
    "\n" +
    "	<button class=\"button c--video__controls-l\" ng-click=\"next()\">\n" +
    "		<i class=\"icon-media-forward\"></i>\n" +
    "	</button>\n" +
    "\n" +
    "	<div class=\"columns c--audio__timetrack\">\n" +
    "		<div class=\"column has-text-centered\">\n" +
    "			<input ng-model=\"controls.time\" ng-change=\"setTime()\" type=\"range\" min=\"0\" max=\"{{ controls.duration }}\" step=\"1\" />\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"columns c--audio__time\">\n" +
    "		<div class=\"column has-text-left\">\n" +
    "			{{ controls.time | buildTime }}\n" +
    "		</div>\n" +
    "		<div class=\"column has-text-right\">\n" +
    "			{{ controls.duration | buildTime }}\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</section>\n" +
    "");
}]);

angular.module("js/_modules/video_module/_template/add_to_playlist_modal.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/video_module/_template/add_to_playlist_modal.html",
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

angular.module("js/_modules/video_module/_template/layout.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/video_module/_template/layout.html",
    "<main ui-view=\"main\" class=\"c--main\"></main>\n" +
    "");
}]);

angular.module("js/_modules/video_module/_template/main.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/video_module/_template/main.html",
    "<petron-filetree files=\"files\" func=\"func\" show=\"true\" type=\"video\"></petron-filetree>\n" +
    "\n" +
    "\n" +
    "<!--\n" +
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
    "-->\n" +
    "");
}]);

angular.module("js/_modules/video_module/_template/new_playlist_modal.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/video_module/_template/new_playlist_modal.html",
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

angular.module("js/_modules/video_module/_template/player.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/video_module/_template/player.html",
    "<petron-video></petron-video>\n" +
    "");
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
    "    <link rel=\"stylesheet\" href=\"../app/vendor/ng-dialog/css/ngDialog.css\" />\n" +
    "    <link rel=\"stylesheet\" href=\"../app/vendor/ng-dialog/css/ngDialog-theme-default.css\" />\n" +
    "    <link rel=\"stylesheet\" href=\"../app/vendor/angular-rangeslider-directive/angular-range-slider.css\" />\n" +
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

angular.module("vendor/angular-rangeslider-directive/example/index.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("vendor/angular-rangeslider-directive/example/index.html",
    "<!DOCTYPE html>\n" +
    "<html id=\"ng-app\" data-ng-app=\"app\">\n" +
    "\n" +
    "<head>\n" +
    "    <title>Angular Range Slider Examples</title>\n" +
    "    <link rel=\"stylesheet\" href=\"http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css\">\n" +
    "    <link rel=\"stylesheet\" href=\"../angular-range-slider.css\">\n" +
    "    <script src=\"http://ajax.googleapis.com/ajax/libs/angularjs/1.3.11/angular.min.js\"></script>\n" +
    "    <script src=\"../angular-range-slider.min.js\"></script>\n" +
    "    <script src=\"controllers.js\"></script>\n" +
    "</head>\n" +
    "\n" +
    "<body data-ng-controller=\"AppController\">\n" +
    "\n" +
    "    <div class=\"container\" style=\"margin-top: 100px;\">\n" +
    "        <section class=\"row\">\n" +
    "            <div class=\"col-md-6 col-md-offset-3\">\n" +
    "                <h1>Single Slider Example</h1>\n" +
    "                <p>Value: {{items[0].value}}</p>\n" +
    "                <div data-range-slider\n" +
    "                     data-floor=\"100\"\n" +
    "                     data-ceiling=\"1000\"\n" +
    "                     data-step=\"50\"\n" +
    "                     data-precision=\"2\"\n" +
    "                     data-highlight=\"left\"\n" +
    "                     data-ng-model=\"items[0].value\"></div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "\n" +
    "        <section class=\"row\">\n" +
    "            <div class=\"col-md-6 col-md-offset-3\">\n" +
    "                <h1>Range Slider Example</h1>\n" +
    "                <p>Value 1: {{items[1].value}}</p>\n" +
    "                <p>Value 2: {{items[2].value}}</p>\n" +
    "                <div data-range-slider\n" +
    "                     data-floor=\"100\"\n" +
    "                     data-ceiling=\"1000\"\n" +
    "                     data-dragstop=\"true\"\n" +
    "                     data-ng-model-low=\"items[1].value\"\n" +
    "                     data-ng-model-high=\"items[2].value\"></div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/AngularHammer/doc/angular.hammer.js.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("vendor/AngularHammer/doc/angular.hammer.js.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>JSDoc: Source: angular.hammer.js</title>\n" +
    "    \n" +
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
    "    \n" +
    "    <h1 class=\"page-title\">Source: angular.hammer.js</h1>\n" +
    "    \n" +
    "    \n" +
    "\n" +
    "\n" +
    "    \n" +
    "    <section>\n" +
    "        <article>\n" +
    "            <pre class=\"prettyprint source\"><code>// ---- Angular Hammer ----\n" +
    "\n" +
    "// Copyright (c) 2014 Ryan S Mullins &lt;ryan@ryanmullins.org>\n" +
    "// Licensed under the MIT Software License\n" +
    "\n" +
    "(function (window, angular, Hammer) {\n" +
    "  'use strict';\n" +
    "\n" +
    "  // Checking to make sure Hammer and Angular are defined\n" +
    "\n" +
    "  if (typeof angular === 'undefined') {\n" +
    "    if (typeof require !== 'undefined' && require) {\n" +
    "      try {\n" +
    "        angular = require('angular');\n" +
    "      } catch (e) {\n" +
    "        return console.log('ERROR: Angular Hammer could not require() a reference to angular');\n" +
    "      }\n" +
    "    } else if (typeof window.angular !== 'undefined') {\n" +
    "      angular = window.angular;\n" +
    "    } else {\n" +
    "      return console.log('ERROR: Angular Hammer could not find or require() a reference to angular');\n" +
    "    }\n" +
    "  }\n" +
    "\n" +
    "  if (typeof Hammer === 'undefined') {\n" +
    "    if (typeof require !== 'undefined' && require) {\n" +
    "      try {\n" +
    "        Hammer = require('hammerjs');\n" +
    "      } catch (e) {\n" +
    "        return console.log('ERROR: Angular Hammer could not require() a reference to Hammer');\n" +
    "      }\n" +
    "    } else if (typeof window.Hammer !== 'undefined') {\n" +
    "      Hammer = window.Hammer;\n" +
    "    } else {\n" +
    "      return console.log('ERROR: Angular Hammer could not find or require() a reference to Hammer');\n" +
    "    }\n" +
    "  }\n" +
    "\n" +
    "  /**\n" +
    "   * Mapping of the gesture event names with the Angular attribute directive\n" +
    "   * names. Follows the form: &lt;directiveName>:&lt;eventName>.\n" +
    "   *\n" +
    "   * @type {Array}\n" +
    "   */\n" +
    "  var gestureTypes = [\n" +
    "    'hmCustom:custom',\n" +
    "    'hmSwipe:swipe',\n" +
    "    'hmSwipeleft:swipeleft',\n" +
    "    'hmSwiperight:swiperight',\n" +
    "    'hmSwipeup:swipeup',\n" +
    "    'hmSwipedown:swipedown',\n" +
    "    'hmPan:pan',\n" +
    "    'hmPanstart:panstart',\n" +
    "    'hmPanmove:panmove',\n" +
    "    'hmPanend:panend',\n" +
    "    'hmPancancel:pancancel',\n" +
    "    'hmPanleft:panleft',\n" +
    "    'hmPanright:panright',\n" +
    "    'hmPanup:panup',\n" +
    "    'hmPandown:pandown',\n" +
    "    'hmPress:press',\n" +
    "    'hmPressup:pressup',\n" +
    "    'hmRotate:rotate',\n" +
    "    'hmRotatestart:rotatestart',\n" +
    "    'hmRotatemove:rotatemove',\n" +
    "    'hmRotateend:rotateend',\n" +
    "    'hmRotatecancel:rotatecancel',\n" +
    "    'hmPinch:pinch',\n" +
    "    'hmPinchstart:pinchstart',\n" +
    "    'hmPinchmove:pinchmove',\n" +
    "    'hmPinchend:pinchend',\n" +
    "    'hmPinchcancel:pinchcancel',\n" +
    "    'hmPinchin:pinchin',\n" +
    "    'hmPinchout:pinchout',\n" +
    "    'hmTap:tap',\n" +
    "    'hmDoubletap:doubletap'\n" +
    "  ];\n" +
    "\n" +
    "  // ---- Module Definition ----\n" +
    "\n" +
    "  /**\n" +
    "   * @module hmTouchEvents\n" +
    "   * @description Angular.js module for adding Hammer.js event listeners to HTML\n" +
    "   * elements using attribute directives\n" +
    "   * @requires angular\n" +
    "   * @requires hammer\n" +
    "   */\n" +
    "  angular.module('hmTouchEvents', []);\n" +
    "\n" +
    "  /**\n" +
    "   * Iterates through each gesture type mapping and creates a directive for\n" +
    "   * each of the\n" +
    "   *\n" +
    "   * @param  {String} type Mapping in the form of &lt;directiveName>:&lt;eventName>\n" +
    "   * @return None\n" +
    "   */\n" +
    "  angular.forEach(gestureTypes, function (type) {\n" +
    "    var directive = type.split(':'),\n" +
    "        directiveName = directive[0],\n" +
    "        eventName = directive[1];\n" +
    "\n" +
    "    angular.module('hmTouchEvents')\n" +
    "      .directive(directiveName, ['$parse', '$window', function ($parse, $window) {\n" +
    "        return {\n" +
    "          'restrict' : 'A',\n" +
    "          'link' : function (scope, element, attrs) {\n" +
    "\n" +
    "            // Check for Hammer and required functionality\n" +
    "            // If no Hammer, maybe bind tap and doubletap to click and dblclick\n" +
    "\n" +
    "            if (!Hammer || !$window.addEventListener) {\n" +
    "              if (directiveName === 'hmTap') {\n" +
    "                element.bind('click', handler);\n" +
    "              }\n" +
    "\n" +
    "              if (directiveName === 'hmDoubletap') {\n" +
    "                element.bind('dblclick', handler);\n" +
    "              }\n" +
    "\n" +
    "              return;\n" +
    "            }\n" +
    "\n" +
    "            var hammer = element.data('hammer'),\n" +
    "                managerOpts = angular.fromJson(attrs.hmManagerOptions),\n" +
    "                recognizerOpts = angular.fromJson(attrs.hmRecognizerOptions);\n" +
    "\n" +
    "\n" +
    "            // Check for a manager, make one if needed and destroy it when\n" +
    "            // the scope is destroyed\n" +
    "\n" +
    "            if (!hammer) {\n" +
    "              hammer = new Hammer.Manager(element[0], managerOpts);\n" +
    "              element.data('hammer', hammer);\n" +
    "              scope.$on('$destroy', function () {\n" +
    "                hammer.destroy();\n" +
    "              });\n" +
    "            }\n" +
    "\n" +
    "            // Instantiate the handler\n" +
    "\n" +
    "            var handlerName = attrs[directiveName],\n" +
    "                handlerExpr = $parse(handlerName),\n" +
    "                handler = function (event) {\n" +
    "                  var phase = scope.$root.$$phase,\n" +
    "                      recognizer = hammer.get(event.type);\n" +
    "\n" +
    "                  event.element = element;\n" +
    "\n" +
    "                  if (recognizer) {\n" +
    "                    if (recognizer.options.preventDefault) {\n" +
    "                      event.preventDefault();\n" +
    "                    }\n" +
    "\n" +
    "                    if (recognizer.options.stopPropagation) {\n" +
    "                      event.srcEvent.stopPropagation();\n" +
    "                    }\n" +
    "                  }\n" +
    "\n" +
    "                  if (phase === '$apply' || phase === '$digest') {\n" +
    "                    callHandler();\n" +
    "                  } else {\n" +
    "                    scope.$apply(callHandler);\n" +
    "                  }\n" +
    "\n" +
    "                  function callHandler () {\n" +
    "                    var fn = handlerExpr(scope, {'$event':event});\n" +
    "\n" +
    "                    if (fn) {\n" +
    "                      fn.call(scope, event);\n" +
    "                    }\n" +
    "                  }\n" +
    "                };\n" +
    "\n" +
    "            // Setting up the recognizers based on the supplied options\n" +
    "\n" +
    "            if (angular.isArray(recognizerOpts)) {\n" +
    "              // The recognizer options may be stored in an array. In this\n" +
    "              // case, Angular Hammer iterates through the array of options\n" +
    "              // trying to find an occurrence of the options.type in the event\n" +
    "              // name. If it find the type in the event name, it applies those\n" +
    "              // options to the recognizer for events with that name. If it\n" +
    "              // does not find the type in the event name it moves on.\n" +
    "\n" +
    "              angular.forEach(recognizerOpts, function (options) {\n" +
    "                if (directiveName === 'hmCustom') {\n" +
    "                  eventName = options.event;\n" +
    "                } else {\n" +
    "                  if (!options.type) {\n" +
    "                    options.type = getRecognizerTypeFromeventName(eventName);\n" +
    "                  }\n" +
    "\n" +
    "                  if (options.event) {\n" +
    "                    delete options.event;\n" +
    "                  }\n" +
    "                }\n" +
    "\n" +
    "                if (directiveName === 'hmCustom' ||\n" +
    "                    eventName.indexOf(options.type) > -1) {\n" +
    "                  setupRecognizerWithOptions(\n" +
    "                    hammer,\n" +
    "                    applyManagerOptions(managerOpts, options),\n" +
    "                    element);\n" +
    "                }\n" +
    "              });\n" +
    "            } else if (angular.isObject(recognizerOpts)) {\n" +
    "              // Recognizer options may be stored as an object. In this case,\n" +
    "              // Angular Hammer checks to make sure that the options type\n" +
    "              // property is found in the event name. If the options are\n" +
    "              // designated for this general type of event, Angular Hammer\n" +
    "              // applies the options directly to the manager instance for\n" +
    "              // this element.\n" +
    "\n" +
    "              if (directiveName === 'hmCustom') {\n" +
    "                eventName = recognizerOpts.event;\n" +
    "              } else {\n" +
    "                  if (!recognizerOpts.type) {\n" +
    "                    recognizerOpts.type = getRecognizerTypeFromeventName(eventName);\n" +
    "                  }\n" +
    "\n" +
    "                  if (recognizerOpts.event) {\n" +
    "                    delete recognizerOpts.event;\n" +
    "                  }\n" +
    "              }\n" +
    "\n" +
    "              if (directiveName === 'hmCustom' ||\n" +
    "                  eventName.indexOf(recognizerOpts.type) > -1) {\n" +
    "                setupRecognizerWithOptions(\n" +
    "                  hammer,\n" +
    "                  applyManagerOptions(managerOpts, recognizerOpts),\n" +
    "                  element);\n" +
    "              }\n" +
    "            } else if (directiveName !== 'hmCustom') {\n" +
    "              // If no options are supplied, or the supplied options do not\n" +
    "              // match any of the above conditions, Angular Hammer sets up\n" +
    "              // the default options that a manager instantiated using\n" +
    "              // Hammer() would have.\n" +
    "\n" +
    "              recognizerOpts = {\n" +
    "                'type': getRecognizerTypeFromeventName(eventName)\n" +
    "              };\n" +
    "\n" +
    "              if (directiveName === 'hmDoubletap') {\n" +
    "                recognizerOpts.event = eventName;\n" +
    "                recognizerOpts.taps = 2;\n" +
    "\n" +
    "                if (hammer.get('tap')) {\n" +
    "                  recognizerOpts.recognizeWith = 'tap';\n" +
    "                }\n" +
    "              }\n" +
    "\n" +
    "              if (recognizerOpts.type.indexOf('pan') > -1 &&\n" +
    "                  hammer.get('swipe')) {\n" +
    "                recognizerOpts.recognizeWith = 'swipe';\n" +
    "              }\n" +
    "\n" +
    "              if (recognizerOpts.type.indexOf('pinch') > -1 &&\n" +
    "                  hammer.get('rotate')) {\n" +
    "                recognizerOpts.recognizeWith = 'rotate';\n" +
    "              }\n" +
    "\n" +
    "              setupRecognizerWithOptions(\n" +
    "                hammer,\n" +
    "                applyManagerOptions(managerOpts, recognizerOpts),\n" +
    "                element);\n" +
    "            } else {\n" +
    "              eventName = null;\n" +
    "            }\n" +
    "\n" +
    "            if (eventName) {\n" +
    "              hammer.on(eventName, handler);\n" +
    "            }\n" +
    "          }\n" +
    "        };\n" +
    "      }]);\n" +
    "  });\n" +
    "\n" +
    "  // ---- Private Functions -----\n" +
    "\n" +
    "  /**\n" +
    "   * Adds a gesture recognizer to a given manager. The type of recognizer to\n" +
    "   * add is determined by the value of the options.type property.\n" +
    "   *\n" +
    "   * @param {Object}  manager Hammer.js manager object assigned to an element\n" +
    "   * @param {Object}  options Options that define the recognizer to add\n" +
    "   * @return {Object} Reference to the new gesture recognizer, if successful,\n" +
    "   *                  null otherwise.\n" +
    "   */\n" +
    "  function addRecognizer (manager, options) {\n" +
    "    if (!manager || !options || !options.type) { return null; }\n" +
    "\n" +
    "    var recognizer;\n" +
    "\n" +
    "    if (options.type.indexOf('pan') > -1) {\n" +
    "      recognizer = new Hammer.Pan(options);\n" +
    "    } else if (options.type.indexOf('pinch') > -1) {\n" +
    "      recognizer = new Hammer.Pinch(options);\n" +
    "    } else if (options.type.indexOf('press') > -1) {\n" +
    "      recognizer = new Hammer.Press(options);\n" +
    "    } else if (options.type.indexOf('rotate') > -1) {\n" +
    "      recognizer = new Hammer.Rotate(options);\n" +
    "    } else if (options.type.indexOf('swipe') > -1) {\n" +
    "      recognizer = new Hammer.Swipe(options);\n" +
    "    } else {\n" +
    "      recognizer = new Hammer.Tap(options);\n" +
    "    }\n" +
    "\n" +
    "    manager.add(recognizer);\n" +
    "    return recognizer;\n" +
    "  }\n" +
    "\n" +
    "  /**\n" +
    "   * Applies certain manager options to individual recognizer options.\n" +
    "   *\n" +
    "   * @param  {Object} managerOpts    Manager options\n" +
    "   * @param  {Object} recognizerOpts Recognizer options\n" +
    "   * @return None\n" +
    "   */\n" +
    "  function applyManagerOptions (managerOpts, recognizerOpts) {\n" +
    "    if (managerOpts) {\n" +
    "      recognizerOpts.preventGhosts = managerOpts.preventGhosts;\n" +
    "    }\n" +
    "\n" +
    "    return recognizerOpts;\n" +
    "  }\n" +
    "\n" +
    "  /**\n" +
    "   * Extracts the type of recognizer that should be instantiated from a given\n" +
    "   * event name. Used only when no recognizer options are provided.\n" +
    "   *\n" +
    "   * @param  {String} eventName Name to derive the recognizer type from\n" +
    "   * @return {string}           Type of recognizer that fires events with that name\n" +
    "   */\n" +
    "  function getRecognizerTypeFromeventName (eventName) {\n" +
    "    if (eventName.indexOf('pan') > -1) {\n" +
    "      return 'pan';\n" +
    "    } else if (eventName.indexOf('pinch') > -1) {\n" +
    "      return 'pinch';\n" +
    "    } else if (eventName.indexOf('press') > -1) {\n" +
    "      return 'press';\n" +
    "    } else if (eventName.indexOf('rotate') > -1) {\n" +
    "      return 'rotate';\n" +
    "    } else if (eventName.indexOf('swipe') > -1) {\n" +
    "      return 'swipe';\n" +
    "    } else {\n" +
    "      return 'tap';\n" +
    "    }\n" +
    "  }\n" +
    "\n" +
    "  /**\n" +
    "   * Applies the passed options object to the appropriate gesture recognizer.\n" +
    "   * Recognizers are created if they do not already exist. See the README for a\n" +
    "   * description of the options object that can be passed to this function.\n" +
    "   *\n" +
    "   * @param  {Object} manager Hammer.js manager object assigned to an element\n" +
    "   * @param  {Object} options Options applied to a recognizer managed by manager\n" +
    "   * @return None\n" +
    "   */\n" +
    "  function setupRecognizerWithOptions (manager, options, element) {\n" +
    "    if (!manager || !options) { return; }\n" +
    "\n" +
    "    var recognizer = manager.get(options.type);\n" +
    "\n" +
    "    if (!recognizer) {\n" +
    "      recognizer = addRecognizer(manager, options);\n" +
    "    }\n" +
    "\n" +
    "    if (!options.directions) {\n" +
    "      if (options.type === 'pan' || options.type === 'swipe') {\n" +
    "        options.directions = 'DIRECTION_ALL';\n" +
    "      } else if (options.type.indexOf('left') > -1) {\n" +
    "        options.directions = 'DIRECTION_LEFT';\n" +
    "      } else if (options.type.indexOf('right') > -1) {\n" +
    "        options.directions = 'DIRECTION_RIGHT';\n" +
    "      } else if (options.type.indexOf('up') > -1) {\n" +
    "        options.directions = 'DIRECTION_UP';\n" +
    "      } else if (options.type.indexOf('down') > -1) {\n" +
    "        options.directions = 'DIRECTION_DOWN';\n" +
    "      } else {\n" +
    "        options.directions = '';\n" +
    "      }\n" +
    "    }\n" +
    "\n" +
    "    options.direction = parseDirections(options.directions);\n" +
    "    recognizer.set(options);\n" +
    "\n" +
    "    if (options.recognizeWith) {\n" +
    "      if (!manager.get(options.recognizeWith)){\n" +
    "        addRecognizer(manager, {type:options.recognizeWith});\n" +
    "      }\n" +
    "\n" +
    "      recognizer.recognizeWith(manager.get(options.recognizeWith));\n" +
    "    }\n" +
    "\n" +
    "    if (options.dropRecognizeWith && manager.get(options.dropRecognizeWith)) {\n" +
    "      recognizer.dropRecognizeWith(manager.get(options.dropRecognizeWith));\n" +
    "    }\n" +
    "\n" +
    "    if (options.requireFailure) {\n" +
    "      if (!manager.get(options.requireFailure)){\n" +
    "        addRecognizer(manager, {type:options.requireFailure});\n" +
    "      }\n" +
    "\n" +
    "      recognizer.requireFailure(manager.get(options.requireFailure));\n" +
    "    }\n" +
    "\n" +
    "    if (options.dropRequireFailure && manager.get(options.dropRequireFailure)) {\n" +
    "      recognizer.dropRequireFailure(manager.get(options.dropRequireFailure));\n" +
    "    }\n" +
    "\n" +
    "    if (options.preventGhosts && element) {\n" +
    "      preventGhosts(element);\n" +
    "    }\n" +
    "  }\n" +
    "\n" +
    "  /**\n" +
    "   * Parses the value of the directions property of any Angular Hammer options\n" +
    "   * object and converts them into the standard Hammer.js directions values.\n" +
    "   *\n" +
    "   * @param  {String} dirs Direction names separated by '|' characters\n" +
    "   * @return {Number}      Hammer.js direction value\n" +
    "   */\n" +
    "  function parseDirections (dirs) {\n" +
    "    var directions = 0;\n" +
    "\n" +
    "    angular.forEach(dirs.split('|'), function (direction) {\n" +
    "      if (Hammer.hasOwnProperty(direction)) {\n" +
    "        directions = directions | Hammer[direction];\n" +
    "      }\n" +
    "    });\n" +
    "\n" +
    "    return directions;\n" +
    "  }\n" +
    "\n" +
    "  // ---- Preventing Ghost Clicks ----\n" +
    "\n" +
    "  /**\n" +
    "   * Modified from: https://gist.github.com/jtangelder/361052976f044200ea17\n" +
    "   *\n" +
    "   * Prevent click events after a touchend.\n" +
    "   *\n" +
    "   * Inspired/copy-paste from this article of Google by Ryan Fioravanti\n" +
    "   * https://developers.google.com/mobile/articles/fast_buttons#ghost\n" +
    "   */\n" +
    "\n" +
    "  function preventGhosts (element) {\n" +
    "    if (!element) { return; }\n" +
    "\n" +
    "    var coordinates = [],\n" +
    "        threshold = 25,\n" +
    "        timeout = 2500;\n" +
    "\n" +
    "    if ('ontouchstart' in window) {\n" +
    "      element[0].addEventListener('touchstart', resetCoordinates, true);\n" +
    "      element[0].addEventListener('touchend', registerCoordinates, true);\n" +
    "      element[0].addEventListener('click', preventGhostClick, true);\n" +
    "      element[0].addEventListener('mouseup', preventGhostClick, true);\n" +
    "    }\n" +
    "\n" +
    "    /**\n" +
    "     * prevent clicks if they're in a registered XY region\n" +
    "     * @param {MouseEvent} ev\n" +
    "     */\n" +
    "    function preventGhostClick (ev) {\n" +
    "      for (var i = 0; i &lt; coordinates.length; i++) {\n" +
    "        var x = coordinates[i][0];\n" +
    "        var y = coordinates[i][1];\n" +
    "\n" +
    "        // within the range, so prevent the click\n" +
    "        if (Math.abs(ev.clientX - x) &lt; threshold &&\n" +
    "            Math.abs(ev.clientY - y) &lt; threshold) {\n" +
    "          ev.stopPropagation();\n" +
    "          ev.preventDefault();\n" +
    "          break;\n" +
    "        }\n" +
    "      }\n" +
    "    }\n" +
    "\n" +
    "    /**\n" +
    "     * reset the coordinates array\n" +
    "     */\n" +
    "    function resetCoordinates () {\n" +
    "      coordinates = [];\n" +
    "    }\n" +
    "\n" +
    "    /**\n" +
    "     * remove the first coordinates set from the array\n" +
    "     */\n" +
    "    function popCoordinates () {\n" +
    "      coordinates.splice(0, 1);\n" +
    "    }\n" +
    "\n" +
    "    /**\n" +
    "     * if it is an final touchend, we want to register it's place\n" +
    "     * @param {TouchEvent} ev\n" +
    "     */\n" +
    "    function registerCoordinates (ev) {\n" +
    "      // touchend is triggered on every releasing finger\n" +
    "      // changed touches always contain the removed touches on a touchend\n" +
    "      // the touches object might contain these also at some browsers (firefox os)\n" +
    "      // so touches - changedTouches will be 0 or lower, like -1, on the final touchend\n" +
    "      if(ev.touches.length - ev.changedTouches.length &lt;= 0) {\n" +
    "        var touch = ev.changedTouches[0];\n" +
    "        coordinates.push([touch.clientX, touch.clientY]);\n" +
    "\n" +
    "        setTimeout(popCoordinates, timeout);\n" +
    "      }\n" +
    "    }\n" +
    "  }\n" +
    "})(window, window.angular, window.Hammer);\n" +
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
    "    <h2><a href=\"index.html\">Index</a></h2><h3>Modules</h3><ul><li><a href=\"module-hmTouchEvents.html\">hmTouchEvents</a></li></ul>\n" +
    "</nav>\n" +
    "\n" +
    "<br clear=\"both\">\n" +
    "\n" +
    "<footer>\n" +
    "    Documentation generated by <a href=\"https://github.com/jsdoc3/jsdoc\">JSDoc 3.2.2</a> on Wed Jan 14 2015 15:21:01 GMT-0500 (EST)\n" +
    "</footer>\n" +
    "\n" +
    "<script> prettyPrint(); </script>\n" +
    "<script src=\"scripts/linenumber.js\"> </script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/AngularHammer/doc/index.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("vendor/AngularHammer/doc/index.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>JSDoc: Index</title>\n" +
    "    \n" +
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
    "    \n" +
    "    <h1 class=\"page-title\">Index</h1>\n" +
    "    \n" +
    "    \n" +
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
    "</div>\n" +
    "\n" +
    "<nav>\n" +
    "    <h2><a href=\"index.html\">Index</a></h2><h3>Modules</h3><ul><li><a href=\"module-hmTouchEvents.html\">hmTouchEvents</a></li></ul>\n" +
    "</nav>\n" +
    "\n" +
    "<br clear=\"both\">\n" +
    "\n" +
    "<footer>\n" +
    "    Documentation generated by <a href=\"https://github.com/jsdoc3/jsdoc\">JSDoc 3.2.2</a> on Wed Jan 14 2015 15:21:01 GMT-0500 (EST)\n" +
    "</footer>\n" +
    "\n" +
    "<script> prettyPrint(); </script>\n" +
    "<script src=\"scripts/linenumber.js\"> </script>\n" +
    "</body>\n" +
    "</html>");
}]);

angular.module("vendor/AngularHammer/doc/module-hmTouchEvents.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("vendor/AngularHammer/doc/module-hmTouchEvents.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>JSDoc: Module: hmTouchEvents</title>\n" +
    "    \n" +
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
    "    \n" +
    "    <h1 class=\"page-title\">Module: hmTouchEvents</h1>\n" +
    "    \n" +
    "    \n" +
    "\n" +
    "\n" +
    "\n" +
    "<section>\n" +
    "    \n" +
    "<header>\n" +
    "    <h2>\n" +
    "    hmTouchEvents\n" +
    "    </h2>\n" +
    "    \n" +
    "</header>  \n" +
    "\n" +
    "<article>\n" +
    "    <div class=\"container-overview\">\n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "        \n" +
    "            <div class=\"description\"><p>Angular.js module for adding Hammer.js event listeners to HTML\n" +
    "elements using attribute directives</p></div>\n" +
    "        \n" +
    "        \n" +
    "        \n" +
    "<dl class=\"details\">\n" +
    "    \n" +
    "        \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "\n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    <dt class=\"tag-source\">Source:</dt>\n" +
    "    <dd class=\"tag-source\"><ul class=\"dummy\"><li>\n" +
    "        <a href=\"angular.hammer.js.html\">angular.hammer.js</a>, <a href=\"angular.hammer.js.html#line81\">line 81</a>\n" +
    "    </li></ul></dd>\n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "</dl>\n" +
    "\n" +
    "        \n" +
    "        \n" +
    "    \n" +
    "    </div>\n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "        <h3 class=\"subsection-title\">Requires</h3>\n" +
    "        \n" +
    "        <ul>\n" +
    "            <li>module:angular</li>\n" +
    "        \n" +
    "            <li>module:hammer</li>\n" +
    "        </ul>\n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "</article>\n" +
    "\n" +
    "</section>  \n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<nav>\n" +
    "    <h2><a href=\"index.html\">Index</a></h2><h3>Modules</h3><ul><li><a href=\"module-hmTouchEvents.html\">hmTouchEvents</a></li></ul>\n" +
    "</nav>\n" +
    "\n" +
    "<br clear=\"both\">\n" +
    "\n" +
    "<footer>\n" +
    "    Documentation generated by <a href=\"https://github.com/jsdoc3/jsdoc\">JSDoc 3.2.2</a> on Wed Jan 14 2015 15:21:01 GMT-0500 (EST)\n" +
    "</footer>\n" +
    "\n" +
    "<script> prettyPrint(); </script>\n" +
    "<script src=\"scripts/linenumber.js\"> </script>\n" +
    "</body>\n" +
    "</html>");
}]);

angular.module("vendor/hammer-time/index.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("vendor/hammer-time/index.html",
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
    "	<meta charset=\"utf-8\">\n" +
    "	<title>Hammer Time</title>\n" +
    "	<link href='http://fonts.googleapis.com/css?family=Hammersmith+One' rel='stylesheet' type='text/css'>\n" +
    "	<link href=\"demo.css\" rel=\"stylesheet\" type=\"text/css\">\n" +
    "	<script src=\"hammer-time.js\"></script>\n" +
    "	<script src=\"https://code.jquery.com/jquery-1.11.3.js\"></script>\n" +
    "	<script>\n" +
    "	$(function(){\n" +
    "		var upEvent = window.PointerEvent ? \"pointerup\" : ( ( 'ontouchstart' in window ) || window.DocumentTouch && document instanceof DocumentTouch ) ? \"touchend\" : \"mouseup\";\n" +
    "		$( \".target\" ).on( upEvent, function( e ) {\n" +
    "			this.startTime = Date.now();\n" +
    "			$( this ).find( \".output\" ).html( e.type + \": \" + this.startTime + \"<br>\");\n" +
    "		} );\n" +
    "		$( \".target\" ).on( \"click\", function( e ) {\n" +
    "			var now = Date.now();\n" +
    "			var clickTime = now - this.startTime;\n" +
    "			var target = $( this );\n" +
    "			var status = clickTime < 100 ? \"\" : clickTime < 300 ? \"warning\" : \"failure\"\n" +
    "\n" +
    "			target.find( \".click-gauge\" )\n" +
    "				.attr( \"value\", clickTime )\n" +
    "				.removeClass( \"failure success\" )\n" +
    "				.addClass( status );\n" +
    "			target.find( \".click-time-output\" ).text( clickTime + \"ms\" );\n" +
    "			target.find( \".output\" ).append( \"click: \" + now + \"<br>\");\n" +
    "			$( this ).addClass( \"clicked\" );\n" +
    "			setTimeout( function() {\n" +
    "				$( this ).removeClass( \"clicked\" );\n" +
    "			}.bind( this ), 1000 )\n" +
    "\n" +
    "		} );\n" +
    "	});\n" +
    "	</script>\n" +
    "</head>\n" +
    "<body>\n" +
    "<div class=\"body-wrap\">\n" +
    "<h1 class=\"title\">Hammer Time!</h1>\n" +
    "<img class=\"hero\" alt=\"Thors Hammer crashing down\" src=\"http://33.media.tumblr.com/85d64e2f846797ab471480cff3f33d4b/tumblr_mzms7yMfum1s75u1lo2_500.gif\">\n" +
    "<h2 class=\"title-2\">On your click times!</h2>\n" +
    "<h4>Response time on user actions is important</h4>\n" +
    "\n" +
    "<p>Keeping visual response to under 100ms means your users will not notice the delay. The UI will feel quick and responsive giving users the impression they are doing the work instead of the application. Try the boxes below to see the response time on mobile devices.</p>\n" +
    "<p>The first box uses <code>touch-action:none;</code> to remove the 300ms delay. The second box has no <code>touch-action</code> property set. On touch screens you will see a noticeable difference in the response time of the background and in the outputing of the end vs click events.</p>\n" +
    "\n" +
    "<div id=\"wrap\">\n" +
    "	<div class=\"target-wrap\" id=\"target\">\n" +
    "		<div class=\"target\" style=\"touch-action: none;\">\n" +
    "			<code>style=\"touch-action: none;\"</code><br>\n" +
    "			Click Time: <span class=\"click-time-output\">0ms</span>\n" +
    "			<progress class=\"click-gauge\" max=\"500\" value=\"0\"></progress>\n" +
    "			<span class=\"output\"></span>\n" +
    "			<div class=\"hit-target\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"target-wrap\">\n" +
    "		<div class=\"target\">\n" +
    "			<code>style=\"\"</code><br>\n" +
    "			Click Time: <span class=\"click-time-output\">0ms</span>\n" +
    "			<progress class=\"click-gauge\" max=\"500\" value=\"0\"></progress>\n" +
    "			<span class=\"output\"></span>\n" +
    "			<div class=\"hit-target\" style=\"\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<p>The <code>touch-action</code> css property is part of the Pointer Events spec <a href=\"http://www.w3.org/TR/pointerevents/#the-touch-action-css-property\">http://www.w3.org/TR/pointerevents/#the-touch-action-css-property</a>\n" +
    "<p>Unfourtanitly not all common browsers support touch action yet ( <a href=\"http://caniuse.com/#feat=css-touch-action\">caniuse</a> ) so hammer-time works by partially polyfills this property. The only supported value is <code>none</code>, <code>manipulation</code>, or <code>auto</code></p>\n" +
    "\n" +
    "<h3>Advantages...</h3>\n" +
    "<ul>\n" +
    "	<li>Size Hammer-time is very very small only 417 bytes gzipped</li>\n" +
    "	<li>Easy to use no special libraries or events to bind. Hammer-time just speeds up the native events so you can use your favorite event library like jQuery or just plain old <code>addEventListener</code></li>\n" +
    "	<li>Based on real standards, Hammer-time is a polyfill so it is a complete noop on browsers which support native <code>touch-action</code></li>\n" +
    "	<li>Avoids target mismatches between the <code>touchend</code> and <code>click</code> events</li>\n" +
    "</ul>\n" +
    "<h3>Gotchas...</h3>\n" +
    "<ul>\n" +
    "	<li><b>Only works when applied directly to the style attribute on an element not to a stylesheet</b></li>\n" +
    "	<li>Does not prevent scrolling or other behivors which happen on move or double tap zoom</li>\n" +
    "	<li>You cannot set the touch-action property via `element.style[ touch-action ]` browsers that do not support touch action will ignore this</li>\n" +
    "	<li>Removing the touch-action property from an existing element is not supported, Hammer-time has no way of knowing the difference between you removing the property and it being removed as a result or browser sanitization. Instead of removng the property completely simply change it to the default value of auto</li>\n" +
    "	<li>Direct manipulation of the style property in a loop on elements with touch-action set from JavaScript ( JS animations for example ) should be avoided. Because of how browsers sanitize the style attribute when setting properties we use a mutation observe to restore the the touch action property when it is removed</li>\n" +
    "	<li>To properly support IE10 you need to add both <code>touch-action</code> and <code>-ms-touch-action</code>\n" +
    "</ul>\n" +
    "\n" +
    "<cite>To read more about UI response times and how this effects user experience see <a href=\"http://www.nngroup.com/articles/response-times-3-important-limits/\">http://www.nngroup.com/articles/response-times-3-important-limits/</a></cite>\n" +
    "</div>\n" +
    "</body>\n" +
    "</html>");
}]);

angular.module("vendor/hammer-time/test.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("vendor/hammer-time/test.html",
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
    "	<meta charset=\"utf-8\">\n" +
    "	<title>Hammer Time</title>\n" +
    "	<link href=\"demo.css\" rel=\"stylesheet\" type=\"text/css\">\n" +
    "	<style>\n" +
    "	.target-wrap {\n" +
    "		display: block;\n" +
    "		margin: 1em;\n" +
    "	}\n" +
    "	.target {\n" +
    "		height: 250px;\n" +
    "		margin: 0;\n" +
    "		font-size: .8em;\n" +
    "	}\n" +
    "	.pass {\n" +
    "		background: green !important;\n" +
    "	}\n" +
    "	.hit-target {\n" +
    "\n" +
    "		display: block;\n" +
    "	}\n" +
    "	.ui-listview,\n" +
    "		.ui-listview > li {\n" +
    "			margin: 0;\n" +
    "			padding: 0;\n" +
    "			list-style: none;\n" +
    "		}\n" +
    "		.ui-content .ui-listview{\n" +
    "			margin: -1em;\n" +
    "		}\n" +
    "		.ui-listview > li {\n" +
    "			display: block;\n" +
    "			position: relative;\n" +
    "			overflow: visible;\n" +
    "		}\n" +
    "		.ui-listview > li > a.ui-btn {\n" +
    "			margin: 0;\n" +
    "			display: block;\n" +
    "			position: relative;\n" +
    "			text-align: left;\n" +
    "			text-overflow: ellipsis;\n" +
    "			overflow: hidden;\n" +
    "			white-space: nowrap;\n" +
    "		}\n" +
    "		.ui-listview > li > a.ui-btn {\n" +
    "			border-width: 1px 0 0 0;\n" +
    "			border-style: solid;\n" +
    "		}\n" +
    "\n" +
    "		.ui-listview > li h1 {\n" +
    "			font-size: 1em;\n" +
    "			font-weight: bold;\n" +
    "			display: block;\n" +
    "			margin: .45em 0;\n" +
    "			text-overflow: ellipsis;\n" +
    "			overflow: hidden;\n" +
    "			white-space: nowrap;\n" +
    "		}\n" +
    "		body,\n" +
    "		.ui-btn {\n" +
    "			font-size: 1em;\n" +
    "			line-height: 1.3;\n" +
    "			font-family: sans-serif;\n" +
    "		}\n" +
    "		.ui-btn {\n" +
    "			font-weight: bold;\n" +
    "			border-width: 1px;\n" +
    "			border-style: solid;\n" +
    "		}\n" +
    "		.ui-btn:link {\n" +
    "			text-decoration: none !important;\n" +
    "		}\n" +
    "\n" +
    "	 .ui-page-theme-a .ui-bar-inherit {\n" +
    "			background: #e9e9e9;\n" +
    "			border-color: #ddd;\n" +
    "			color: #333;\n" +
    "			text-shadow: 0 1px 0 #eee;\n" +
    "			font-weight: bold;\n" +
    "		}\n" +
    "		.ui-page-theme-a {\n" +
    "			background: #f9f9f9;\n" +
    "			border-color: #bbb;\n" +
    "			color: #333;\n" +
    "			text-shadow: 0 1px 0 #f3f3f3;\n" +
    "		}\n" +
    "\n" +
    "		.ui-body-a {\n" +
    "			border-width: 1px;\n" +
    "			border-style: solid;\n" +
    "		}\n" +
    "		.ui-page-theme-a a:visited {\n" +
    "				color: #3388cc;\n" +
    "		}\n" +
    "		.ui-page-theme-a {\n" +
    "			color: #005599;\n" +
    "		}\n" +
    "		.ui-page-theme-a a:active {\n" +
    "			color: #005599;\n" +
    "		}\n" +
    "		.ui-page-theme-a .ui-btn,\n" +
    "		.ui-page-theme-a .ui-btn:visited{\n" +
    "			background: #f6f6f6;\n" +
    "			border-color: #ddd;\n" +
    "			color: #333 ;\n" +
    "			text-shadow: 0 1px 0 #f3f3f3;\n" +
    "		}\n" +
    "		.ui-header .ui-title{\n" +
    "			font-size: 1em;\n" +
    "			min-height: 1.1em;\n" +
    "			text-align: center;\n" +
    "			display: block;\n" +
    "			margin: 0 30%;\n" +
    "			padding: .7em 0;\n" +
    "			text-overflow: ellipsis;\n" +
    "			overflow: hidden;\n" +
    "			white-space: nowrap;\n" +
    "			outline: 0 !important;\n" +
    "		}\n" +
    "	</style>\n" +
    "	<script src=\"hammer-time.js\"></script>\n" +
    "	<script src=\"https://code.jquery.com/jquery-1.11.3.js\"></script>\n" +
    "	<script>\n" +
    "	$(function(){\n" +
    "		var upEvent = window.PointerEvent ? \"pointerup\" : ( ( 'ontouchstart' in window ) || window.DocumentTouch && document instanceof DocumentTouch ) ? \"touchend\" : \"mouseup\";\n" +
    "		$( \".target\" ).on( upEvent, function( e ) {\n" +
    "			this.startTime = Date.now();\n" +
    "			$( this ).find( \".output\" ).html( e.type + \": \" + this.startTime + \"<br>\");\n" +
    "		} );\n" +
    "		$( \".target.basic\" ).on( \"click\", function( e ) {\n" +
    "			var now = Date.now();\n" +
    "			var clickTime = now - this.startTime;\n" +
    "			var target = $( this );\n" +
    "			var status = clickTime < 100 ? \"\" : clickTime < 300 ? \"warning\" : \"failure\"\n" +
    "\n" +
    "			target.find( \".click-gauge\" )\n" +
    "				.attr( \"value\", clickTime )\n" +
    "				.removeClass( \"failure success\" )\n" +
    "				.addClass( status );\n" +
    "			target.find( \".click-time-output\" ).text( clickTime + \"ms\" );\n" +
    "			target.find( \".output\" ).append( \"click: \" + now + \"<br>\");\n" +
    "			if ( status === \"\" && !target.hasClass( \"expect-fail\" ) ) {\n" +
    "				$( this ).addClass( \"pass\" );\n" +
    "			} else if ( status === \"failure\" && target.hasClass( \"expect-fail\" ) ) {\n" +
    "				$( this ).addClass( \"pass\" );\n" +
    "			}\n" +
    "\n" +
    "		} );\n" +
    "		$( \"#link-test\" ).on( \"click\", function(){\n" +
    "			var that = this;\n" +
    "			setTimeout( function(){\n" +
    "				if ( window.location.hash === \"#pass\" ) {\n" +
    "					$( that ).parent().addClass( \"pass\" );\n" +
    "				}\n" +
    "			}, 100 );\n" +
    "		});\n" +
    "		$( \"#focus-test\" ).on( \"click\", function(){\n" +
    "			var that = this;\n" +
    "			setTimeout( function(){\n" +
    "				if ( $( that ).is( \":focus\" ) ) {\n" +
    "					$( that ).parent().addClass( \"pass\" );\n" +
    "				}\n" +
    "			}, 100 );\n" +
    "		});\n" +
    "		$( \".ui-btn\" ).on( \"click\", function( e ) {\n" +
    "			e.preventDefault();\n" +
    "			console.log( \"zoom\" );\n" +
    "			$( this ).addClass( \"pass\" );\n" +
    "		} );\n" +
    "	});\n" +
    "	</script>\n" +
    "</head>\n" +
    "<body class=\"ui-page-theme-a\">\n" +
    "<h1>Hammer Time - Manual Test Suite</h1>\n" +
    "<h3>Basic Usage with none/auto/manipulation\n" +
    "<div class=\"target-wrap\" id=\"target\">\n" +
    "	<div class=\"target basic\" style=\"touch-action: none;\">\n" +
    "		<code>style=\"touch-action: none;\"</code><br>\n" +
    "		Click Time: <span class=\"click-time-output\">0ms</span>\n" +
    "		<progress class=\"click-gauge\" max=\"500\" value=\"0\"></progress>\n" +
    "		<span class=\"output\"></span>\n" +
    "		<div class=\"hit-target\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"target-wrap\">\n" +
    "	<div class=\"target basic\" style=\"touch-action: manipulation;\">\n" +
    "		<code>style=\"touch-action: manipulation;\"</code><br>\n" +
    "		Click Time: <span class=\"click-time-output\">0ms</span>\n" +
    "		<progress class=\"click-gauge\" max=\"500\" value=\"0\"></progress>\n" +
    "		<span class=\"output\"></span>\n" +
    "		<div class=\"hit-target\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"target-wrap\">\n" +
    "	<div class=\"target basic expect-fail\">\n" +
    "		<code>style=\"\"</code><br>\n" +
    "		Click Time: <span class=\"click-time-output\">0ms</span>\n" +
    "		<progress class=\"click-gauge\" max=\"500\" value=\"0\"></progress>\n" +
    "		<span class=\"output\"></span>\n" +
    "		<div class=\"hit-target\" style=\"\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"target-wrap\">\n" +
    "	<div class=\"target basic expect-fail\" style=\"touch-action: auto;\">\n" +
    "		<code>style=\"touch-action: auto\"</code><br>\n" +
    "		Click Time: <span class=\"click-time-output\">0ms</span>\n" +
    "		<progress class=\"click-gauge\" max=\"500\" value=\"0\"></progress>\n" +
    "		<span class=\"output\"></span>\n" +
    "		<div class=\"hit-target\" style=\"\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"target-wrap\">\n" +
    "	<div class=\"target\">\n" +
    "		<h5>Native link behivor</h5>\n" +
    "		<a href=\"#pass\" id=\"link-test\" class=\"hit-target\" style=\"touch-action:none\"></a>\n" +
    "	</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"target-wrap\">\n" +
    "	<div class=\"target\">\n" +
    "		<h5>Keyboard Focus</h5>\n" +
    "		<input id=\"focus-test\" style=\"touch-action:none\">\n" +
    "	</div>\n" +
    "</div>\n" +
    "<ul class=\"ui-listview\">\n" +
    "<li><a class=\"ui-btn\" href=\"#fail\" style=\"touch-action: manipulation;\"><h1>Manipulation</h1></a></li>\n" +
    "<li><a class=\"ui-btn\" href=\"#fail\" style=\"touch-action: manipulation;\"><h1>Manipulation</h1></a></li>\n" +
    "<li><a class=\"ui-btn\" href=\"#fail\" style=\"touch-action: manipulation;\"><h1>Manipulation</h1></a></li>\n" +
    "<li><a class=\"ui-btn\" href=\"#fail\" style=\"touch-action: manipulation;\"><h1>Manipulation</h1></a></li>\n" +
    "<li><a class=\"ui-btn\" href=\"#fail\" style=\"touch-action: manipulation;\"><h1>Manipulation</h1></a></li>\n" +
    "<li><a class=\"ui-btn expect-fail\" href=\"#fail\" style=\"touch-action: None;\"><h1>None</h1></a></li>\n" +
    "<li><a class=\"ui-btn expect-fail\" href=\"#fail\" style=\"touch-action: none;\"><h1>None</h1></a></li>\n" +
    "<li><a class=\"ui-btn expect-fail\" href=\"#fail\" style=\"touch-action: none;\"><h1>None</h1></a></li>\n" +
    "<li><a class=\"ui-btn expect-fail\" href=\"#fail\" style=\"touch-action: none;\"><h1>None</h1></a></li>\n" +
    "<li><a class=\"ui-btn\" href=\"#fail\" style=\"touch-action: manipulation;\"><h1>Manipulation</h1></a></li>\n" +
    "<li><a class=\"ui-btn\" href=\"#fail\" style=\"touch-action: manipulation;\"><h1>Manipulation</h1></a></li>\n" +
    "<li><a class=\"ui-btn\" href=\"#fail\" style=\"touch-action: manipulation;\"><h1>Manipulation</h1></a></li>\n" +
    "<li><a class=\"ui-btn\" href=\"#fail\" style=\"touch-action: manipulation;\"><h1>Manipulation</h1></a></li>\n" +
    "<li><a class=\"ui-btn\" href=\"#fail\" style=\"touch-action: manipulation;\"><h1>Manipulation</h1></a></li>\n" +
    "<li><a class=\"ui-btn\" href=\"#fail\" style=\"touch-action: manipulation;\"><h1>Manipulation</h1></a></li>\n" +
    "<li><a class=\"ui-btn\" href=\"#fail\" style=\"touch-action: manipulation;\"><h1>Manipulation</h1></a></li>\n" +
    "</ul>\n" +
    "</body>\n" +
    "</html>");
}]);

angular.module("vendor/messageformat/doc/index.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("vendor/messageformat/doc/index.html",
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

angular.module("vendor/messageformat/doc/MessageFormat.formatters.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("vendor/messageformat/doc/MessageFormat.formatters.html",
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

angular.module("vendor/messageformat/doc/MessageFormat.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("vendor/messageformat/doc/MessageFormat.html",
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

angular.module("vendor/messageformat/doc/messageformat.js.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("vendor/messageformat/doc/messageformat.js.html",
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

angular.module("vendor/messageformat/doc/Runtime.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("vendor/messageformat/doc/Runtime.html",
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

angular.module("vendor/messageformat/example/index.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("vendor/messageformat/example/index.html",
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
