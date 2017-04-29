angular.module('petron.core.templates', ['index.html', 'js/_main/_directive/daemon/petron.daemon.html', 'js/_main/_directive/filetree/audio_popout.html', 'js/_main/_directive/filetree/petron.filetree.html', 'js/_main/_directive/keyboard/layout_qwerty.html', 'js/_main/_directive/keyboard/layout_qwertz.html', 'js/_main/_directive/volume/petron.volume-indicator.html', 'js/_main/_template/petron.confirm.html', 'js/_main/_template/petron.content.html', 'js/_main/_template/petron.header.html', 'js/_main/_template/petron.home.html', 'js/_modules/audio_module/_template/_directive.html', 'js/_modules/audio_module/_template/add_to_playlist_modal.html', 'js/_modules/audio_module/_template/main.html', 'js/_modules/audio_module/_template/new_playlist_modal.html', 'js/_modules/audio_module/_template/playlists.html', 'js/_modules/fm_module/_template/main.html', 'js/_modules/fm_module/_template/stations.html', 'js/_modules/health_module/_template/main.html', 'js/_modules/navigation_module/_template/main.html', 'js/_modules/navigation_module/_template/map.html', 'js/_modules/navigation_module/_template/menu.html', 'js/_modules/phone_module/_template/calls.html', 'js/_modules/phone_module/_template/main.html', 'js/_modules/phone_module/_template/messages.html', 'js/_modules/settings_module/_template/main.html', 'js/_modules/video_module/_template/_directive.html', 'js/_modules/video_module/_template/add_to_playlist_modal.html', 'js/_modules/video_module/_template/main.html', 'js/_modules/video_module/_template/new_playlist_modal.html', 'js/_modules/video_module/_template/player.html', 'loader.html']);

angular.module("index.html", []).run(["$templateCache", function ($templateCache) {
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
    "    <link rel=\"stylesheet\" href=\"../app/vendor/leaflet/dist/leaflet.css\" />\n" +
    "    <link rel=\"stylesheet\" href=\"../app/vendor/mapbox-gl-js/mapbox-gl.css\" />\n" +
    "    <link rel=\"stylesheet\" href=\"../app/vendor/sweetalert2/dist/sweetalert2.css\" />\n" +
    "    <!-- endbower -->\n" +
    "\n" +
    "    <link rel=\"stylesheet\" href=\"css/petron.css\">\n" +
    "</head>\n" +
    "\n" +
    "<body ng-app=\"petron\" ng-cloak=\"\" hm-swipeup=\"$root.goHome\" hm-panend=\"setVolume\" hm-panstart=\"getVolume\" hm-pan=\"volumeIndicator\" hm-recognizer-options='[{\"type\": \"swipeup\", \"treshold\": 400},{\"type\":\"pan\",\"enable\": true, \"directions\": \"DIRECTION_VERTICAL\", \"threshold\": 50, \"pointers\": 2 }]'>\n" +
    "    <div class=\"petron-wrap\" ng-class=\"{'show-left-menu': $root.left_toggle, 'show-right-menu': $root.right_toggle, 'c--volume-indicator__blur': showVolumeIndicator}\">\n" +
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
    "                    <a ui-sref=\"petron.navigationbox.main\" ui-sref-active=\"is-active\">\n" +
    "                        <span class=\"icon\"><i class=\"fa icon-location-arrow\"></i></span>\n" +
    "                        <span>{{ 'navigation_module' | translate }}</span>\n" +
    "                    </a>\n" +
    "                    <a ui-sref=\"petron.healthbox\" ui-sref-active=\"is-active\">\n" +
    "                        <span class=\"icon\"><i class=\"fa icon-heart\"></i></span>\n" +
    "                        <span>{{ 'health_module' | translate }}</span>\n" +
    "                    </a>\n" +
    "                    <a ui-sref=\"petron.phonebox.main\" ui-sref-active=\"is-active\" ng-if=\"phoneConnected\">\n" +
    "                        <span class=\"icon\"><i class=\"fa icon-phone\"></i></span>\n" +
    "                        <span>{{ 'phone_module' | translate }}</span>\n" +
    "                    </a>\n" +
    "                    <a ui-sref=\"petron.settingsbox\" ui-sref-active=\"is-active\">\n" +
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
    "    <petron-keyboard layout=\"{{ settings.keyboard }}\"></petron-keyboard>\n" +
    "    <petron-volume-indicator></petron-volume-indicator>\n" +
    "    <script>\n" +
    "        if (typeof module === 'object') {\n" +
    "            window.module = module;\n" +
    "            module = undefined;\n" +
    "        }\n" +
    "    </script>\n" +
    "\n" +
    "    <!-- bower:js -->\n" +
    "    <script src=\"../app/vendor/jquery/jquery.js\"></script>\n" +
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
    "    <script src=\"../app/vendor/angular-simple-logger/dist/angular-simple-logger.js\"></script>\n" +
    "    <script src=\"../app/vendor/leaflet/dist/leaflet-src.js\"></script>\n" +
    "    <script src=\"../app/vendor/ui-leaflet/dist/ui-leaflet.js\"></script>\n" +
    "    <script src=\"../app/vendor/mapbox-gl-js/mapbox-gl.js\"></script>\n" +
    "    <script src=\"../app/vendor/mapbox-gl-leaflet/leaflet-mapbox-gl.js\"></script>\n" +
    "    <script src=\"../app/vendor/sprintf/src/sprintf.js\"></script>\n" +
    "    <script src=\"../app/vendor/angular-translate-loader-partial/angular-translate-loader-partial.js\"></script>\n" +
    "    <script src=\"../app/vendor/polyline/src/polyline.js\"></script>\n" +
    "    <script src=\"../app/vendor/angular-dynamic-locale/src/tmhDynamicLocale.js\"></script>\n" +
    "    <script src=\"../app/vendor/es6-promise/es6-promise.js\"></script>\n" +
    "    <script src=\"../app/vendor/sweetalert2/dist/sweetalert2.js\"></script>\n" +
    "    <script src=\"../app/vendor/ngSweetAlert2/SweetAlert2.js\"></script>\n" +
    "    <script src=\"../app/vendor/range-touch/range-touch.js\"></script>\n" +
    "    <!-- endbower -->\n" +
    "\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/petron.templates.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/audio_module/petron.modules.audio.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/fm_module/petron.modules.fm.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/health_module/petron.modules.health.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/navigation_module/petron.modules.navigation.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/phone_module/petron.modules.phone.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/settings_module/petron.modules.settings.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/video_module/petron.modules.video.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/navigation_module/_provider/petron.navi.provider.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/fm_module/_factory/petron.tuner.factory.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/audio_module/_directive/petron.audio.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/audio_module/_directive/petron.bluetooth.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/video_module/_directive/petron.video.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/audio_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/fm_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/health_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/navigation_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/navigation_module/_controller/petron.map.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/phone_module/_controller/petron.call.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/phone_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/phone_module/_controller/petron.sms.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/settings_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/video_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/petron.modules.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/petron.core.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_directive/daemon/petron.daemon.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_directive/draggable/petron.draggable.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_directive/filetree/petron.filetree.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_directive/keyboard/petron.keyboard.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_directive/volume/petron.volume-indicator.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_factory/petron.daemon.factory.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_factory/petron.phony.factory.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_factory/petron.playlist.factory.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_filter/petron.buildTime.filter.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_filter/petron.frequency.filter.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_filter/petron.trust.filter.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_filter/petron.unit.filter.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_service/petron.fs.service.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_service/petron.storage.service.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/petron.config.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/petron.core.routes.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/petron.js\"></script>\n" +
    "\n" +
    "    <script>\n" +
    "        if (window.module) module = window.module;\n" +
    "    </script>\n" +
    "</body>\n" +
    "\n" +
    "</html>");
}]);

angular.module("js/_main/_directive/daemon/petron.daemon.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("js/_main/_directive/filetree/audio_popout.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("js/_main/_directive/filetree/petron.filetree.html", []).run(["$templateCache", function ($templateCache) {
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
    "	<li ng-repeat=\"file in files | orderBy:[orderFunc, ((type !== 'playlist') ? 'name' : '')]\" ng-click=\"open(file, $index)\" hm-press=\"popout\" hm-tap=\"open(file, $index)\" hm-recognizer-options='[{\"type\": \"press\", \"time\": 500}]' ng-class=\"{'is-active': file.play && (type === 'playlist' || type === 'audio_playlist'), 'not-found': file.not_found && (type === 'playlist' || type === 'audio_playlist')}\">\n" +
    "		<div class=\"columns is-vcentered\">\n" +
    "			<div class=\"column is-narrow is-paddingless\">\n" +
    "				<figure class=\"image is-32x32\">\n" +
    "				  <img ng-src=\"{{ 'data:image/' + file.image_type + ';base64,' + file.image }}\" alt=\"\" ng-if=\"file.image\">\n" +
    "					<span class=\"icon is-medium\" ng-if=\"!file.image\">\n" +
    "						<i class=\"fa\" ng-class=\"{'icon-folder': file.type === 'folder', 'icon-video-outline': file.type !== 'folder' && file.type !== 'playlist' && type === 'video', 'icon-playlist': file.type === 'playlist', 'icon-notes': file.type !== 'folder' && file.type !== 'playlist' && (type == 'audio' || type == 'audio_playlist') }\"></i>\n" +
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

angular.module("js/_main/_directive/keyboard/layout_qwerty.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_main/_directive/keyboard/layout_qwerty.html",
    "<ul id=\"keyboard\">\n" +
    "	<li class=\"symbol\"><span class=\"off\">`</span><span class=\"on\">~</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">1</span><span class=\"on\">!</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">2</span><span class=\"on\">@</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">3</span><span class=\"on\">#</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">4</span><span class=\"on\">$</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">5</span><span class=\"on\">%</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">6</span><span class=\"on\">^</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">7</span><span class=\"on\">&amp;</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">8</span><span class=\"on\">*</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">9</span><span class=\"on\">(</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">0</span><span class=\"on\">)</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">-</span><span class=\"on\">_</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">=</span><span class=\"on\">+</span></li>\n" +
    "	<li class=\"delete lastitem\">{{ 'keyboard.delete' | translate }}</li>\n" +
    "	<li class=\"tab\">Tab</li>\n" +
    "	<li class=\"letter\">q</li>\n" +
    "	<li class=\"letter\">w</li>\n" +
    "	<li class=\"letter\">e</li>\n" +
    "	<li class=\"letter\">r</li>\n" +
    "	<li class=\"letter\">t</li>\n" +
    "	<li class=\"letter\">y</li>\n" +
    "	<li class=\"letter\">u</li>\n" +
    "	<li class=\"letter\">i</li>\n" +
    "	<li class=\"letter\">o</li>\n" +
    "	<li class=\"letter\">p</li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">[</span><span class=\"on\">{</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">]</span><span class=\"on\">}</span></li>\n" +
    "	<li class=\"symbol lastitem\"><span class=\"off\">\\</span><span class=\"on\">|</span></li>\n" +
    "	<li class=\"capslock\">{{ 'keyboard.caps_lock' | translate }}</li>\n" +
    "	<li class=\"letter\">a</li>\n" +
    "	<li class=\"letter\">s</li>\n" +
    "	<li class=\"letter\">d</li>\n" +
    "	<li class=\"letter\">f</li>\n" +
    "	<li class=\"letter\">g</li>\n" +
    "	<li class=\"letter\">h</li>\n" +
    "	<li class=\"letter\">j</li>\n" +
    "	<li class=\"letter\">k</li>\n" +
    "	<li class=\"letter\">l</li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">;</span><span class=\"on\">:</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">'</span><span class=\"on\">&quot;</span></li>\n" +
    "	<li class=\"return lastitem\">{{ 'keyboard.return' | translate }}</li>\n" +
    "	<li class=\"left-shift\">Shift</li>\n" +
    "	<li class=\"letter\">z</li>\n" +
    "	<li class=\"letter\">x</li>\n" +
    "	<li class=\"letter\">c</li>\n" +
    "	<li class=\"letter\">v</li>\n" +
    "	<li class=\"letter\">b</li>\n" +
    "	<li class=\"letter\">n</li>\n" +
    "	<li class=\"letter\">m</li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">,</span><span class=\"on\">&lt;</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">.</span><span class=\"on\">&gt;</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">/</span><span class=\"on\">?</span></li>\n" +
    "	<li class=\"right-shift lastitem\">Shift</li>\n" +
    "	<li class=\"space lastitem\">&nbsp;</li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("js/_main/_directive/keyboard/layout_qwertz.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_main/_directive/keyboard/layout_qwertz.html",
    "<ul id=\"keyboard\">\n" +
    "	<li class=\"symbol\"><span class=\"off\">`</span><span class=\"on\">^</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">1</span><span class=\"on\">!</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">2</span><span class=\"on\">\"</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">3</span><span class=\"on\">§</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">4</span><span class=\"on\">$</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">5</span><span class=\"on\">%</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">6</span><span class=\"on\">&amp;</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">7</span><span class=\"on\">/</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">8</span><span class=\"on\">(</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">9</span><span class=\"on\">)</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">0</span><span class=\"on\">=</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">ß</span><span class=\"on\">?</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">´</span><span class=\"on\">`</span></li>\n" +
    "	<li class=\"delete lastitem\">{{ 'keyboard.delete' | translate }}</li>\n" +
    "	<li class=\"tab\">Tab</li>\n" +
    "	<li class=\"letter\">q</li>\n" +
    "	<li class=\"letter\">w</li>\n" +
    "	<li class=\"letter\">e</li>\n" +
    "	<li class=\"letter\">r</li>\n" +
    "	<li class=\"letter\">t</li>\n" +
    "	<li class=\"letter\">z</li>\n" +
    "	<li class=\"letter\">u</li>\n" +
    "	<li class=\"letter\">i</li>\n" +
    "	<li class=\"letter\">o</li>\n" +
    "	<li class=\"letter\">p</li>\n" +
    "	<li class=\"letter\">ü</li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">+</span><span class=\"on\">*</span></li>\n" +
    "	<li class=\"symbol lastitem\"><span class=\"off\">#</span><span class=\"on\">'</span></li>\n" +
    "	<li class=\"capslock\">{{ 'keyboard.caps_lock' | translate }}</li>\n" +
    "	<li class=\"letter\">a</li>\n" +
    "	<li class=\"letter\">s</li>\n" +
    "	<li class=\"letter\">d</li>\n" +
    "	<li class=\"letter\">f</li>\n" +
    "	<li class=\"letter\">g</li>\n" +
    "	<li class=\"letter\">h</li>\n" +
    "	<li class=\"letter\">j</li>\n" +
    "	<li class=\"letter\">k</li>\n" +
    "	<li class=\"letter\">l</li>\n" +
    "	<li class=\"letter\">ö</li>\n" +
    "	<li class=\"letter\">ä</li>\n" +
    "	<li class=\"return lastitem\">{{ 'keyboard.return' | translate }}</li>\n" +
    "	<li class=\"left-shift\">Shift</li>\n" +
    "	<li class=\"letter\">y</li>\n" +
    "	<li class=\"letter\">x</li>\n" +
    "	<li class=\"letter\">c</li>\n" +
    "	<li class=\"letter\">v</li>\n" +
    "	<li class=\"letter\">b</li>\n" +
    "	<li class=\"letter\">n</li>\n" +
    "	<li class=\"letter\">m</li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">,</span><span class=\"on\">;</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">.</span><span class=\"on\">:</span></li>\n" +
    "	<li class=\"symbol\"><span class=\"off\">-</span><span class=\"on\">_</span></li>\n" +
    "	<li class=\"right-shift lastitem\">Shift</li>\n" +
    "	<li class=\"space lastitem\">&nbsp;</li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("js/_main/_directive/volume/petron.volume-indicator.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_main/_directive/volume/petron.volume-indicator.html",
    "<div class=\"c--volume-indicator\" ng-show=\"showVolumeIndicator\">\n" +
    "	<span class=\"c--volume-indicator__value\" style=\"top: {{ (100 - volume) }}%;\">{{ volume }}</span>\n" +
    "</div>\n" +
    "");
}]);

angular.module("js/_main/_template/petron.confirm.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("js/_main/_template/petron.content.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_main/_template/petron.content.html",
    "<section class=\"columns u--max-height__100 u--margin-top__none c--home\">\n" +
    "	<div class=\"column\">\n" +
    "		<div class=\"columns\">\n" +
    "			<div class=\"column\">\n" +
    "				<div class=\"box has-text-centered is-vcentered\" ui-sref=\"petron.fmbox\">\n" +
    "					<div>\n" +
    "						<span class=\"icon is-large\"><i class=\"fa icon-radio\"></i></span>\n" +
    "						<h2 class=\"title is-3\">{{ 'radio_module' | translate }}</h2>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"column\">\n" +
    "				<div class=\"box has-text-centered is-vcentered\" ui-sref=\"petron.audiobox\">\n" +
    "					<div>\n" +
    "						<span class=\"icon is-large\"><i class=\"fa icon-notes\"></i></span>\n" +
    "						<h2 class=\"title is-3\">{{ 'music_module' | translate }}</h2>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"column\">\n" +
    "				<div class=\"box has-text-centered is-vcentered\" ui-sref=\"petron.videobox.main\">\n" +
    "					<div>\n" +
    "						<span class=\"icon is-large\"><i class=\"fa icon-video\"></i></span>\n" +
    "						<h2 class=\"title is-3\">{{ 'video_module' | translate }}</h2>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"columns\">\n" +
    "			<div class=\"column\">\n" +
    "				<div class=\"box has-text-centered is-vcentered\" ui-sref=\"petron.navigationbox.main\">\n" +
    "					<div>\n" +
    "						<span class=\"icon is-large\"><i class=\"fa icon-location-arrow\"></i></span>\n" +
    "						<h2 class=\"title is-3\">{{ 'navigation_module' | translate }}</h2>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"column\">\n" +
    "				<div class=\"box has-text-centered is-vcentered\" ui-sref=\"petron.healthbox\">\n" +
    "					<div>\n" +
    "						<span class=\"icon is-large\"><i class=\"fa icon-heart\"></i></span>\n" +
    "						<h2 class=\"title is-3\">{{ 'health_module' | translate }}</h2>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"column\" ng-if=\"!phoneConnected\">\n" +
    "				<div class=\"box has-text-centered is-vcentered\" ui-sref=\"petron.settingsbox\">\n" +
    "					<div>\n" +
    "						<span class=\"icon is-large\"><i class=\"fa icon-cog\"></i></span>\n" +
    "						<h2 class=\"title is-3\">{{ 'settings_module' | translate }}</h2>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "      </div>\n" +
    "      <div class=\"column\" ng-if=\"phoneConnected\">\n" +
    "				<div class=\"box has-text-centered is-vcentered\" ui-sref=\"petron.phonebox.main\">\n" +
    "					<div>\n" +
    "						<span class=\"icon is-large\"><i class=\"fa icon-phone\"></i></span>\n" +
    "						<h2 class=\"title is-3\">{{ 'phone_module' | translate }}</h2>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "      </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("js/_main/_template/petron.header.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_main/_template/petron.header.html",
    "<div class=\"columns is-vcentered\">\n" +
    "	<div class=\"column has-text-left\">\n" +
    "		<span class=\"left-menu-toggle\" ng-click=\"$root.left_toggle = !$root.left_toggle\" ng-if=\"$root.leftMenuShow\">\n" +
    "			<span class=\"icon\"><i class=\"fa icon-th-menu\"></i></span>\n" +
    "			<p>MENU</p>\n" +
    "		</span>\n" +
    "	</div>\n" +
    "	<div class=\"column has-text-centered\">\n" +
    "		{{ date | date:settings.clock}} {{ 'clock_unit' | translate }}\n" +
    "    <span class=\"header-indicator\" ng-show=\"$root.phoneConnected\"><i class=\"icon-phone\"></i></span>\n" +
    "    <span ng-show=\"$root.bluetooth\"><i class=\"icon-phone\"></i></span>\n" +
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

angular.module("js/_main/_template/petron.home.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_main/_template/petron.home.html",
    "<header class=\"container is-fluid\" ui-view=\"header\">\n" +
    "	<div class=\"columns is-vcentered\">\n" +
    "		<div class=\"column has-text-left\">\n" +
    "			<span class=\"left-menu-toggle\" ng-click=\"$root.left_toggle = !$root.left_toggle\" ng-if=\"$root.leftMenuShow\">\n" +
    "				<span class=\"icon\"><i class=\"fa icon-th-menu\"></i></span>\n" +
    "				<p>Menu</p>\n" +
    "			</span>\n" +
    "		</div>\n" +
    "		<div class=\"column has-text-centered\">\n" +
    "			{{ $root.leftMenuShow }} {{ date | date:settings.clock}} {{ 'clock_unit' | translate }}\n" +
    "		</div>\n" +
    "		<div class=\"column has-text-right\">\n" +
    "			<span class=\"right-menu-toggle\" ng-click=\"$root.right_toggle = !$root.right_toggle\" ng-if=\"rightMenuShow\">\n" +
    "				<p>{{ $root.rightMenuLabel | translate }}</p>\n" +
    "				<span class=\"icon\"><i class=\"fa icon-th-menu\"></i></span>\n" +
    "			</span>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</header>\n" +
    "\n" +
    "<main class=\"container is-fluid\" ui-view=\"content\" ng-click=\"$root.right_toggle = false; $root.left_toggle = false;\"></main>\n" +
    "");
}]);

angular.module("js/_modules/audio_module/_template/_directive.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/audio_module/_template/_directive.html",
    "<div class=\"columns\">\n" +
    "	<div class=\"column has-text-centered c--audio__title\">\n" +
    "		<h1 class=\"title is-4\">\n" +
    "			{{ playlist.tracks[current].title || btAudio.Title }}\n" +
    "		</h1>\n" +
    "\n" +
    "		<h2 class=\"subtitle is-6\">\n" +
    "			{{ playlist.tracks[current].artist || btAudio.Artist }} {{ (playlist.tracks[current].album || btAudio.Album) ? '- ' + (playlist.tracks[current].album  || btAudio.Album) : '' }}\n" +
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
    "		<input ng-model=\"controls.time\" onchange=\"angular.element(this).scope().seek()\" type=\"range\" min=\"0\" max=\"{{ controls.duration }}\" step=\"1\" />\n" +
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
    "<audio class=\"c--audio__player\" preload=\"auto\">\n" +
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

angular.module("js/_modules/audio_module/_template/add_to_playlist_modal.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("js/_modules/audio_module/_template/main.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/audio_module/_template/main.html",
    "<section class=\"columns u--max-height__100 u--margin-top__none\">\n" +
    "\n" +
    "	<aside class=\"c--filetree column is-7\">\n" +
    "		<div class=\"columns\" ng-if=\"$root.phoneConnected\">\n" +
    "			<div class=\"column\" ng-click=\"useLocal()\">{{ 'use_local_audio' | translate }}</div>\n" +
    "			<div class=\"column\" ng-click=\"useBluetooth()\">{{ 'use_bluetooth_audio' | translate }}</div>\n" +
    "		</div>\n" +
    "		<div class=\"tabs\">\n" +
    "		  <ul class=\"is-left\">\n" +
    "		    <li ng-click=\"visibleFileTree = 'files'\" ng-class=\"{'is-active': visibleFileTree === 'files'}\">\n" +
    "		      <a>\n" +
    "		        <span class=\"icon is-small\"><i class=\"fa icon-folder\"></i></span>\n" +
    "		        <span>{{ 'treeview_files' | translate }}</span>\n" +
    "		      </a>\n" +
    "		    </li>\n" +
    "		    <li ng-click=\"visibleFileTree = 'playlist'\" ng-class=\"{'is-active': !visibleFileTree || visibleFileTree === 'playlist'}\">\n" +
    "		      <a>\n" +
    "		        <span class=\"icon is-small\"><i class=\"fa icon-th-list\"></i></span>\n" +
    "		        <span>{{ 'treeview_playlist' | translate }}</span>\n" +
    "		      </a>\n" +
    "		    </li>\n" +
    "		  </ul>\n" +
    "			<ul class=\"is-right\" ng-show=\"visibleFileTree === 'files'\">\n" +
    "				<li ng-click=\"func.playAll($root.files)\">\n" +
    "					<a>\n" +
    "		        <span class=\"icon is-small\"><i class=\"fa icon-media-play\"></i></span>\n" +
    "		        <span>{{ 'treeview_playall' | translate }}</span>\n" +
    "		      </a>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "\n" +
    "		<petron-filetree class=\"has-tabs\" files=\"files\" func=\"func\" type=\"audio\" ng-show=\"visibleFileTree === 'files'\"></petron-filetree>\n" +
    "		<petron-filetree class=\"has-tabs\" files=\"audio.queue.tracks\" func=\"func\" type=\"audio_playlist\" ng-show=\"!visibleFileTree || visibleFileTree === 'playlist'\"></petron-filetree>\n" +
    "		<h4 ng-if=\"(visibleFileTree === 'files' && !files.length) || ((!visibleFileTree || visibleFileTree === 'playlist') && !audio.queue.tracks.length)\">{{ 'no_files' | translate }}</h4>\n" +
    "	</aside>\n" +
    "\n" +
    "	<main class=\"c--audio__main column is-5\" ng-if=\"localMusic\">\n" +
    "		<petron-audio></petron-audio>\n" +
    "	</main>\n" +
    "  <main class=\"c--audio__main column\" ng-if=\"btMusic\">\n" +
    "		<petron-bluetooth-audio></petron-bluetooth-audio>\n" +
    "	</main>\n" +
    "\n" +
    "</section>\n" +
    "");
}]);

angular.module("js/_modules/audio_module/_template/new_playlist_modal.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("js/_modules/audio_module/_template/playlists.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/audio_module/_template/playlists.html",
    "<a ng-click=\"newPlaylist()\">\n" +
    "	<span class=\"icon\">\n" +
    "		<i class=\"fa icon-plus\"></i>\n" +
    "	</span>\n" +
    "	<span>{{ 'create_new_playlist' | translate }}</span>\n" +
    "</a>\n" +
    "\n" +
    "<a ng-repeat=\"list in audio.playlists\" hm-tap=\"func.play(list.name)\" hm-press=\"removePlaylist(list.name)\" hm-recognizer-options='[{\"type\": \"press\", \"time\": 500}, {\"type\":\"tap\",\"enable\": true}]'>\n" +
    "	<span class=\"icon\">\n" +
    "		<i class=\"fa icon-th-list\"></i>\n" +
    "	</span>\n" +
    "	<span>{{ list.name }}</span>\n" +
    "</a>\n" +
    "\n" +
    "<span ng-if=\"!hasPlaylists(audio.playlists)\">{{ 'no_playlists' | translate }}</span>\n" +
    "");
}]);

angular.module("js/_modules/fm_module/_template/main.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("js/_modules/fm_module/_template/stations.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/fm_module/_template/stations.html",
    "<a ng-repeat=\"station in fm.stations\" ng-click=\"func.play(station)\">\n" +
    "	<span class=\"icon\">\n" +
    "		<i class=\"fa icon-heart-outline\"></i>\n" +
    "	</span>\n" +
    "	<span>{{ station.name }}</span>\n" +
    "</a>\n" +
    "\n" +
    "<span ng-show=\"!fm.stations.length\">{{ 'no_stations' | translate }}</span>\n" +
    "");
}]);

angular.module("js/_modules/health_module/_template/main.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/health_module/_template/main.html",
    "<section class=\"columns u--max-height__100 u--margin-top__none c--health\">\n" +
    "	<div class=\"c--obd__message\" ng-if=\"!isConnected && !hasError\">\n" +
    "			<h1 class=\"title is-3 c--obd__scanning has-text-centered\">{{ 'health.scanning' | translate}}{{ dots }}</h1>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"columns c--obd-container  has-text-centered\" ng-if=\"hasError && !isConnected\">\n" +
    "		<h2 class=\"title is-3 c--obd__error\">{{ 'health.scan_error' | translate}}</h2>\n" +
    "		<button class=\"button button is-outlined is-primary\" ng-click=\"connectToOBD()\">{{ 'health.reconnect' | translate }}</button>\n" +
    "	</div>\n" +
    "	<div class=\"column\" ng-if=\"!hasError\">\n" +
    "		<div class=\"columns\">\n" +
    "			<div class=\"column is-vcentered\">\n" +
    "\n" +
    "						<span class=\"door-lock fr closed\">\n" +
    "							<i class=\"icon-lock-closed\"></i>\n" +
    "						</span>\n" +
    "						<span class=\"door-lock br open\">\n" +
    "							<i class=\"icon-lock-open\"></i>\n" +
    "						</span>\n" +
    "						<img src=\"images/car.svg\" alt=\"\">\n" +
    "						<span class=\"door-lock trunk closed\">\n" +
    "							<i class=\"icon-lock-closed\"></i>\n" +
    "						</span>\n" +
    "						<span class=\"door-lock bl open\">\n" +
    "							<i class=\"icon-lock-open\"></i>\n" +
    "						</span>\n" +
    "						<span class=\"door-lock fl open\">\n" +
    "							<i class=\"icon-lock-open\"></i>\n" +
    "						</span>\n" +
    "\n" +
    "			</div>\n" +
    "			<div class=\"column\">\n" +
    "				<div class=\"columns\">\n" +
    "					<div class=\"column\">\n" +
    "						<div class=\"box\">\n" +
    "							<h5>{{ 'health.speedmeter' | translate }}</h5>\n" +
    "							<h2>{{ speed | unit:settings.distance:0 }}<small>{{ (settings.distance !== 'mi') ? 'km/h' : 'mph' }}</small></h2>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"column\">\n" +
    "						<div class=\"box\" ng-class=\"{'has-alert': (tacho >= 5000)}\">\n" +
    "							<h5>{{ 'health.tachometer' | translate }}</h5>\n" +
    "							<h2>{{ tacho }}<small>RPM</small></h2>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"columns\">\n" +
    "					<div class=\"column\">\n" +
    "						<div class=\"box\" ng-class=\"{'has-alert': (battery1 <= 15)}\">\n" +
    "							<h5>{{ 'health.battery_1' | translate }}</h5>\n" +
    "							<h2>{{ battery1 }}<small>%</small></h2>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"column\">\n" +
    "						<div class=\"box\" ng-class=\"{'has-alert': (battery2 <= 15)}\">\n" +
    "							<h5>{{ 'health.battery_2' | translate }}</h5>\n" +
    "							<h2>{{ battery2 }}<small>%</small></h2>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"columns\">\n" +
    "					<div class=\"column\">\n" +
    "						<div class=\"box\">\n" +
    "							<h5>{{ 'health.lights' | translate }}</h5>\n" +
    "							<h2>{{ ((lights) ? 'on' : 'off') | translate}}</h2>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"column\">\n" +
    "						<div class=\"box\">\n" +
    "							<h5>{{ 'health.fuel' | translate }}</h5>\n" +
    "							<h2>{{ consumption | unit:settings.fuel }}<small>{{ (settings.fuel !== 'gal') ? 'l' : 'gal' }}</small></h2>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("js/_modules/navigation_module/_template/main.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/navigation_module/_template/main.html",
    "<section class=\"columns u--max-height__100 u--margin-top__none c--navi\">\n" +
    "	<div class=\"column\">\n" +
    "		<div class=\"columns\" ng-if=\"!showFullAddress\">\n" +
    "			<div class=\"column is-7 is-vcentered u--margin__auto\">\n" +
    "				<span class=\"icon is-medium\" ng-click=\"stepBack()\"><i class=\"fa icon-chevron-left\"></i></span>\n" +
    "				<p class=\"control has-addons has-icon\">\n" +
    "					<input class=\"input c--navi__input\"  placeholder=\"{{ 'navi.' + ph[addressPart] | translate }}\" type=\"text\" ng-model=\"model[addressPart]\" autocomplete=\"off\">\n" +
    "					<i class=\"fa icon-location\"></i>\n" +
    "				</p>\n" +
    "				<span class=\"icon is-medium\" ng-click=\"addToAddress()\"><i class=\"fa icon-chevron-right\"></i></span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"columns\">\n" +
    "			<div class=\"column is-8 is-offset-2\">\n" +
    "				<ul class=\"c--navi__autocomplete\">\n" +
    "					<li ng-repeat=\"r in results\" ng-click=\"addToAddress(r)\">\n" +
    "						<span class=\"icon\">\n" +
    "							<i class=\"fa icon-{{ ((r.properties.osm_value !== 'yes') ? r.properties.osm_value : r.properties.osm_key) }}\"></i>\n" +
    "						</span> {{ r.properties.name || r.properties.street }} {{ ((r.properties.name) ? '' : r.properties.housenumber) }}\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"columns\" ng-if=\"showFullAddress\">\n" +
    "			<div class=\"column has-text-centered\">\n" +
    "				<div class=\"columns\">\n" +
    "					<div class=\"column is-8 is-offset-2\">\n" +
    "						<h3 class=\"title is-3 u--margin-top__40\">\n" +
    "							{{ nav.country | translate }}, {{ nav.city}}, {{ nav.street}}\n" +
    "						</h3>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"columns\">\n" +
    "					<div class=\"column is-8 is-offset-2\">\n" +
    "						<h5 class=\"subtitle u--margin-top__40\">\n" +
    "							{{ 'navi.should_start_routing' | translate }}\n" +
    "						</h5>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"columns\">\n" +
    "					<div class=\"column is-8 is-offset-2\">\n" +
    "						<div class=\"control is-grouped u--margin-top__40\">\n" +
    "						  <p class=\"control\">\n" +
    "								<a class=\"button\">\n" +
    "									{{ 'navi.save_favourite_btn' | translate }}\n" +
    "								</a>\n" +
    "						  </p>\n" +
    "						  <p class=\"control\">\n" +
    "						    <a class=\"button is-danger\" ng-click=\"resetDestination()\">\n" +
    "						      {{ 'navi.new_dest_btn' | translate }}\n" +
    "						    </a>\n" +
    "						  </p>\n" +
    "						  <p class=\"control\">\n" +
    "								<a class=\"button is-primary\" ng-click=\"startRouting()\">\n" +
    "									{{ 'navi.start_routing_btn' | translate }}\n" +
    "								</a>\n" +
    "						  </p>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</section>\n" +
    "");
}]);

angular.module("js/_modules/navigation_module/_template/map.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/navigation_module/_template/map.html",
    "<leaflet defaults=\"defaults\" lf-center=\"center\" height=\"422px\" width=\"800px\"></leaflet>\n" +
    "<div class=\"c--routing__params columns\">\n" +
    "  <div class=\"column\">\n" +
    "    <h3 class=\"is-3 title\">\n" +
    "      {{ duration | buildTime:true }}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"column\">\n" +
    "    <h3 class=\"is-3 title\">\n" +
    "      {{ overallDistance }}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("js/_modules/navigation_module/_template/menu.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/navigation_module/_template/menu.html",
    "");
}]);

angular.module("js/_modules/phone_module/_template/calls.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/phone_module/_template/calls.html",
    "<section class=\"columns u--max-height__100 u--margin-top__none c--phone\">\n" +
    "  <div class=\"column\">\n" +
    "    <h1>Calls</h1>\n" +
    "  </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("js/_modules/phone_module/_template/main.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/phone_module/_template/main.html",
    "<section class=\"columns u--max-height__100 u--margin-top__none c--home c--phone is-vcentered\">\n" +
    "  <div class=\"column\">\n" +
    "    <div class=\"columns\">\n" +
    "      <div class=\"column is-8 is-offset-2\">\n" +
    "        <div class=\"notification is-primary\">\n" +
    "          <button class=\"delete\"></button>\n" +
    "          Du hast X neue Nachrichten und X verpasste Anrufe!\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"columns\">\n" +
    "      <div class=\"column is-4 is-offset-2\">\n" +
    "        <div class=\"box has-text-centered is-vcentered\" ui-sref=\"petron.phonebox.calls\">\n" +
    "          <div>\n" +
    "            <span class=\"icon is-large\"><i class=\"fa icon-phone\"></i></span>\n" +
    "            <h2 class=\"title is-3\">{{ 'phone.calls' | translate }}</h2>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"column is-4\">\n" +
    "        <div class=\"box has-text-centered is-vcentered\" ui-sref=\"petron.phonebox.sms\">\n" +
    "          <div>\n" +
    "            <span class=\"icon is-large\"><i class=\"fa icon-post\"></i></span>\n" +
    "            <h2 class=\"title is-3\">{{ 'phone.messages' | translate }}</h2>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("js/_modules/phone_module/_template/messages.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/phone_module/_template/messages.html",
    "<section class=\"columns u--max-height__100 u--margin-top__none c--phone\">\n" +
    "  <div class=\"column\">\n" +
    "    <h1>messages</h1>\n" +
    "  </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("js/_modules/settings_module/_template/main.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/settings_module/_template/main.html",
    "<section class=\"columns u--max-height__100 u--margin-top__none c--settings\">\n" +
    "	<div class=\"column\">\n" +
    "		<div class=\"columns is-vcentered\">\n" +
    "			<div class=\"column\">\n" +
    "				<h5 class=\"title is-5\">{{ 'settings.language' | translate }}</h5>\n" +
    "				<p>{{ 'settings.language_hint' | translate }}</p>\n" +
    "			</div>\n" +
    "			<div class=\"column has-text-right\">\n" +
    "				<span class=\"select\">\n" +
    "					<select name=\"locale\" id=\"locale\" ng-model=\"settings.locale\">\n" +
    "						<option value=\"en\">EN</option>\n" +
    "						<option value=\"de\">DE</option>\n" +
    "					</select>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"columns is-vcentered\">\n" +
    "			<div class=\"column\">\n" +
    "				<h5 class=\"title is-5\">{{ 'settings.distance' | translate }}</h5>\n" +
    "				<p>{{ 'settings.distance_hint' | translate }}</p>\n" +
    "			</div>\n" +
    "			<div class=\"column has-text-right\">\n" +
    "				<span class=\"select\">\n" +
    "					<select name=\"distance\" id=\"distance\" ng-model=\"settings.distance\">\n" +
    "						<option value=\"km\">{{ 'metric' | translate }}</option>\n" +
    "						<option value=\"mi\">{{ 'miles' | translate }}</option>\n" +
    "					</select>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"columns is-vcentered\">\n" +
    "			<div class=\"column\">\n" +
    "				<h5 class=\"title is-5\">{{ 'settings.fuel' | translate }}</h5>\n" +
    "				<p>{{ 'settings.fuel_hint' | translate }}</p>\n" +
    "			</div>\n" +
    "			<div class=\"column has-text-right\">\n" +
    "				<span class=\"select\">\n" +
    "					<select name=\"fuel\" id=\"fuel\" ng-model=\"settings.fuel\">\n" +
    "						<option value=\"l\">{{ 'liter' | translate }}</option>\n" +
    "						<option value=\"gal\">{{ 'gallons' | translate }}</option>\n" +
    "					</select>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"columns is-vcentered\">\n" +
    "			<div class=\"column\">\n" +
    "				<h5 class=\"title is-5\">{{ 'settings.clock' | translate }}</h5>\n" +
    "				<p>{{ 'settings.clock_hint' | translate }}</p>\n" +
    "			</div>\n" +
    "			<div class=\"column has-text-right\">\n" +
    "				<span class=\"select\">\n" +
    "					<select name=\"clock\" id=\"clock\" ng-model=\"settings.clock\">\n" +
    "						<option value=\"dd. MMMM yyyy - HH:mm\">{{ '24h' | translate }}</option>\n" +
    "						<option value=\"dd. MMMM yyyy - h:mm a\">{{ '12h' | translate }}</option>\n" +
    "					</select>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"columns is-vcentered\">\n" +
    "			<div class=\"column\">\n" +
    "				<h5 class=\"title is-5\">{{ 'settings.keyboard' | translate }}</h5>\n" +
    "				<p>{{ 'settings.keyboard_hint' | translate }}</p>\n" +
    "			</div>\n" +
    "			<div class=\"column has-text-right\">\n" +
    "				<span class=\"select\">\n" +
    "					<select name=\"layout\" id=\"layout\" ng-model=\"settings.keyboard\">\n" +
    "						<option value=\"qwertz\">{{ 'QWERTZ' | translate }}</option>\n" +
    "						<option value=\"qwerty\">{{ 'QWERTY' | translate }}</option>\n" +
    "					</select>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("js/_modules/video_module/_template/_directive.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/video_module/_template/_directive.html",
    "<video class=\"c--video__player\" hm-tap=\"play()\" hm-press=\"getControls()\" hm-recognizer-options='[{\"type\": \"press\", \"time\": 500, \"enable\": true}, {\"type\":\"tap\",\"enable\": true}]'>\n" +
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
    "			<input ng-model=\"controls.time\" onchange=\"angular.element(this).scope().seek()\" type=\"range\" min=\"0\" max=\"{{ controls.duration }}\" step=\"1\" />\n" +
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

angular.module("js/_modules/video_module/_template/add_to_playlist_modal.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("js/_modules/video_module/_template/main.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("js/_modules/video_module/_template/new_playlist_modal.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("js/_modules/video_module/_template/player.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("js/_modules/video_module/_template/player.html",
    "<petron-video></petron-video>\n" +
    "");
}]);

angular.module("loader.html", []).run(["$templateCache", function ($templateCache) {
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
    "    <link rel=\"stylesheet\" href=\"../app/vendor/leaflet/dist/leaflet.css\" />\n" +
    "    <link rel=\"stylesheet\" href=\"../app/vendor/mapbox-gl-js/mapbox-gl.css\" />\n" +
    "    <link rel=\"stylesheet\" href=\"../app/vendor/sweetalert2/dist/sweetalert2.css\" />\n" +
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
