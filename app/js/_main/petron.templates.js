angular.module('petron.core.templates', ['index.html', 'js/_main/_directive/daemon/petron.daemon.html', 'js/_main/_directive/filetree/audio_popout.html', 'js/_main/_directive/filetree/petron.filetree.html', 'js/_main/_directive/keyboard/layout_qwerty.html', 'js/_main/_directive/keyboard/layout_qwertz.html', 'js/_main/_template/petron.confirm.html', 'js/_main/_template/petron.content.html', 'js/_main/_template/petron.header.html', 'js/_main/_template/petron.home.html', 'js/_modules/audio_module/_template/_directive.html', 'js/_modules/audio_module/_template/add_to_playlist_modal.html', 'js/_modules/audio_module/_template/main.html', 'js/_modules/audio_module/_template/new_playlist_modal.html', 'js/_modules/audio_module/_template/playlists.html', 'js/_modules/fm_module/_template/main.html', 'js/_modules/fm_module/_template/stations.html', 'js/_modules/health_module/_template/main.html', 'js/_modules/navigation_module/_template/main.html', 'js/_modules/navigation_module/_template/map.html', 'js/_modules/navigation_module/_template/menu.html', 'js/_modules/settings_module/_template/main.html', 'js/_modules/video_module/_template/_directive.html', 'js/_modules/video_module/_template/add_to_playlist_modal.html', 'js/_modules/video_module/_template/main.html', 'js/_modules/video_module/_template/new_playlist_modal.html', 'js/_modules/video_module/_template/player.html', 'loader.html', 'vendor/angular-rangeslider-directive/example/index.html', 'vendor/AngularHammer/doc/angular.hammer.js.html', 'vendor/AngularHammer/doc/index.html', 'vendor/AngularHammer/doc/module-hmTouchEvents.html', 'vendor/hammer-time/index.html', 'vendor/hammer-time/test.html', 'vendor/jquery/speed/closest.html', 'vendor/jquery/speed/css.html', 'vendor/jquery/speed/event.html', 'vendor/jquery/speed/filter.html', 'vendor/jquery/speed/find.html', 'vendor/jquery/speed/index.html', 'vendor/jquery/speed/slice.vs.concat.html', 'vendor/jquery/test/data/ajax/unreleasedXHR.html', 'vendor/jquery/test/data/cleanScript.html', 'vendor/jquery/test/data/core/cc_on.html', 'vendor/jquery/test/data/dimensions/documentLarge.html', 'vendor/jquery/test/data/dimensions/documentSmall.html', 'vendor/jquery/test/data/event/focusElem.html', 'vendor/jquery/test/data/event/promiseReady.html', 'vendor/jquery/test/data/event/syncReady.html', 'vendor/jquery/test/data/iframe.html', 'vendor/jquery/test/data/manipulation/iframe-denied.html', 'vendor/jquery/test/data/name.html', 'vendor/jquery/test/data/offset/absolute.html', 'vendor/jquery/test/data/offset/body.html', 'vendor/jquery/test/data/offset/fixed.html', 'vendor/jquery/test/data/offset/relative.html', 'vendor/jquery/test/data/offset/scroll.html', 'vendor/jquery/test/data/offset/static.html', 'vendor/jquery/test/data/offset/table.html', 'vendor/jquery/test/data/selector/html5_selector.html', 'vendor/jquery/test/data/selector/sizzle_cache.html', 'vendor/jquery/test/data/support/bodyBackground.html', 'vendor/jquery/test/data/support/boxSizing.html', 'vendor/jquery/test/data/support/shrinkWrapBlocks.html', 'vendor/jquery/test/data/support/testElementCrash.html', 'vendor/jquery/test/data/test.html', 'vendor/jquery/test/data/test2.html', 'vendor/jquery/test/data/test3.html', 'vendor/jquery/test/delegatetest.html', 'vendor/jquery/test/hovertest.html', 'vendor/jquery/test/index.html', 'vendor/jquery/test/localfile.html', 'vendor/jquery/test/networkerror.html', 'vendor/jquery/test/readywait.html', 'vendor/mapbox-gl-leaflet/examples/basic.html', 'vendor/mapbox-gl-leaflet/examples/cluster.html', 'vendor/messageformat/doc/index.html', 'vendor/messageformat/doc/MessageFormat.formatters.html', 'vendor/messageformat/doc/MessageFormat.html', 'vendor/messageformat/doc/messageformat.js.html', 'vendor/messageformat/doc/Runtime.html', 'vendor/messageformat/example/index.html', 'vendor/sprintf/demo/angular.html', 'vendor/ui-leaflet/index.html']);

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
    "                    <a ui-sref=\"petron.navigationbox.main\" ui-sref-active=\"is-active\">\n" +
    "                        <span class=\"icon\"><i class=\"fa icon-location-arrow\"></i></span>\n" +
    "                        <span>{{ 'navigation_module' | translate }}</span>\n" +
    "                    </a>\n" +
    "                    <a ui-sref=\"petron.healthbox\" ui-sref-active=\"is-active\">\n" +
    "                        <span class=\"icon\"><i class=\"fa icon-heart\"></i></span>\n" +
    "                        <span>{{ 'health_module' | translate }}</span>\n" +
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
    "\n" +
    "    <script>\n" +
    "        if (typeof module === 'object') {\n" +
    "            window.module = module;\n" +
    "            module = undefined;\n" +
    "        }\n" +
    "    </script>\n" +
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
    "    <!-- endbower -->\n" +
    "\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/petron.templates.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/audio_module/petron.modules.audio.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/fm_module/petron.modules.fm.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/health_module/petron.modules.health.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/navigation_module/petron.modules.navigation.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/settings_module/petron.modules.settings.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/video_module/petron.modules.video.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/navigation_module/_provider/petron.navi.provider.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/fm_module/_factory/petron.tuner.factory.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/audio_module/_directive/petron.audio.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/video_module/_directive/petron.video.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/audio_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/fm_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/health_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/navigation_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/navigation_module/_controller/petron.map.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/settings_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/video_module/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_modules/petron.modules.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/petron.core.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_controller/petron.main.controller.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_directive/daemon/petron.daemon.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_directive/draggable/petron.draggable.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_directive/filetree/petron.filetree.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_directive/keyboard/petron.keyboard.directive.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"js/_main/_factory/petron.daemon.factory.js\"></script>\n" +
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
    "			<div class=\"column\">\n" +
    "				<div class=\"box has-text-centered is-vcentered\" ui-sref=\"petron.settingsbox\">\n" +
    "					<div>\n" +
    "						<span class=\"icon is-large\"><i class=\"fa icon-cog\"></i></span>\n" +
    "						<h2 class=\"title is-3\">{{ 'settings_module' | translate }}</h2>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
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
    "				<p>MENU</p>\n" +
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
    "<main class=\"container is-fluid\" ui-view=\"content\" ng-click=\"$root.left_toggle = false; $root.right_toggle = false;\"></main>\n" +
    "");
}]);

angular.module("js/_modules/audio_module/_template/_directive.html", []).run(["$templateCache", function ($templateCache) {
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
    "\n" +
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
    "	</aside>\n" +
    "\n" +
    "	<main class=\"c--audio__main column is-5\">\n" +
    "		<petron-audio></petron-audio>\n" +
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
    "			<h1 class=\"title is-2 c--obd__scanning has-text-centered\">{{ 'health.scanning' | translate}}{{ dots }}</h1>\n" +
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
    "<video class=\"c--video__player\" hm-tap=\"play()\" hm-press=\"showControls = !showControls\" hm-recognizer-options='[{\"type\": \"press\", \"time\": 500}, {\"type\":\"tap\",\"enable\": true}]'>\n" +
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
    "			<input ng-model=\"controls.time\" ng-change=\"seek()\" type=\"range\" min=\"0\" max=\"{{ controls.duration }}\" step=\"1\" />\n" +
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

angular.module("vendor/angular-rangeslider-directive/example/index.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("vendor/AngularHammer/doc/angular.hammer.js.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("vendor/AngularHammer/doc/index.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("vendor/AngularHammer/doc/module-hmTouchEvents.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("vendor/hammer-time/index.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("vendor/hammer-time/test.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("vendor/jquery/speed/closest.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/speed/closest.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "<head>\n" +
    "	<title>Test .closest() Performance</title>\n" +
    "	<script src=\"benchmark.js\"></script>\n" +
    "	<script src=\"jquery-basis.js\"></script>\n" +
    "	<script>var old = jQuery.noConflict(true);</script>\n" +
    "	<script src=\"../dist/jquery.js\"></script>\n" +
    "	<script>\n" +
    "		jQuery(function ready() {\n" +
    "			var node = $(\"#child\"), name;\n" +
    "\n" +
    "			jQuery.each([\".zoo\", \"#zoo\", \"[data-foo=zoo]\", \"#nonexistant\"], function(i, item) {\n" +
    "	setTimeout(function(){\n" +
    "					name = \"closest '\" + item + \"'\";\n" +
    "\n" +
    "		jQuery(\"#results\").append(\"<li>\" + name + \"<ul>\" +\n" +
    "						\"<li>new: \" + benchmarkString(\"$('#child').closest('\" + item + \"')\", 2500, name) + \"</li>\" +\n" +
    "						\"<li>old: \" + benchmarkString(\"old('#child').closest('\" + item + \"')\", 2500, name) + \"</li>\"\n" +
    "			+ \"</ul></li>\");\n" +
    "	}, 100);\n" +
    "			});\n" +
    "		});\n" +
    "	</script>\n" +
    "</head>\n" +
    "<body>\n" +
    "	<div>\n" +
    "		<p>Hello</p>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\">\n" +
    "			<div>\n" +
    "				<p id=\"child\">lorem ipsum</p>\n" +
    "				<p>dolor sit amet</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<ul id=\"results\"></ul>\n" +
    "</body>\n" +
    "</html>\n" +
    "\n" +
    "");
}]);

angular.module("vendor/jquery/speed/css.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/speed/css.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "<head>\n" +
    "	<title>Test Event Handling Performance</title>\n" +
    "	<script src=\"benchmark.js\"></script>\n" +
    "	<script src=\"jquery-basis.js\"></script>\n" +
    "	<script>var old = jQuery.noConflict(true);</script>\n" +
    "	<script src=\"../dist/jquery.js\"></script>\n" +
    "	<script>\n" +
    "	var num = 400;\n" +
    "\n" +
    "	jQuery(function(){\n" +
    "		var p = old(\"p\");\n" +
    "		var s = (new Date).getTime();\n" +
    "\n" +
    "		for ( var n = 0; n < 5; n++ ) {\n" +
    "			for ( var i = 0; i < num; i++ ) {\n" +
    "				p.css(\"position\");\n" +
    "				p.css(\"top\");\n" +
    "				p.css(\"left\");\n" +
    "				p.css(\"display\");\n" +
    "			}\n" +
    "		}\n" +
    "\n" +
    "		var oldNum = (new Date).getTime() - s;\n" +
    "\n" +
    "		p = jQuery(\"p\");\n" +
    "		s = (new Date).getTime();\n" +
    "\n" +
    "		for ( var n = 0; n < 5; n++ ) {\n" +
    "			for ( var i = 0; i < num; i++ ) {\n" +
    "				p.css(\"position\");\n" +
    "				p.css(\"top\");\n" +
    "				p.css(\"left\");\n" +
    "				p.css(\"display\");\n" +
    "			}\n" +
    "		}\n" +
    "\n" +
    "		var curNum = (new Date).getTime() - s;\n" +
    "\n" +
    "		jQuery(\"#num\").text( old.fn.jquery + \": \" + oldNum + \" \" + jQuery.fn.jquery + \": \" + curNum );\n" +
    "	});\n" +
    "\n" +
    "	jQuery(function(){\n" +
    "		var p = old(\"p\");\n" +
    "		var s = (new Date).getTime();\n" +
    "\n" +
    "		for ( var n = 0; n < 5; n++ ) {\n" +
    "			for ( var i = 0; i < num; i++ ) {\n" +
    "				p.css(\"position\", \"relative\");\n" +
    "				p.css(\"top\", 15);\n" +
    "				p.css(\"left\", 15);\n" +
    "				p.css(\"display\", \"block\");\n" +
    "			}\n" +
    "		}\n" +
    "\n" +
    "		var oldNum = (new Date).getTime() - s;\n" +
    "\n" +
    "		p = jQuery(\"p\");\n" +
    "		s = (new Date).getTime();\n" +
    "\n" +
    "		for ( var n = 0; n < 5; n++ ) {\n" +
    "			for ( var i = 0; i < num; i++ ) {\n" +
    "				p.css(\"position\", \"relative\");\n" +
    "				p.css(\"top\", 15);\n" +
    "				p.css(\"left\", 15);\n" +
    "				p.css(\"display\", \"block\");\n" +
    "			}\n" +
    "		}\n" +
    "\n" +
    "		var curNum = (new Date).getTime() - s;\n" +
    "\n" +
    "		jQuery(\"#num2\").text( old.fn.jquery + \": \" + oldNum + \" \" + jQuery.fn.jquery + \": \" + curNum );\n" +
    "	});\n" +
    "	</script>\n" +
    "	<style>p { position: absolute; top: 5px; left: 5px; }</style>\n" +
    "</head>\n" +
    "<body>\n" +
    "	<p><strong>Getting Values:</strong> <span id=\"num\">Loading...</span></p>\n" +
    "	<p><strong>Setting Values:</strong> <span id=\"num2\">Loading...</span></p>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/speed/event.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/speed/event.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "<head>\n" +
    "	<title>Test Event Handling Performance</title>\n" +
    "	<script src=\"benchmark.js\"></script>\n" +
    "	<script src=\"jquery-basis.js\"></script>\n" +
    "	<script>var old = jQuery.noConflict(true);</script>\n" +
    "	<script src=\"../dist/jquery.js\"></script>\n" +
    "	<script>\n" +
    "	jQuery(function(){\n" +
    "	\n" +
    "	});\n" +
    "\n" +
    "	var events = [], num = 400, exec = false;\n" +
    "\n" +
    "	jQuery(document).mousemove(function(e){\n" +
    "		if ( exec ) {\n" +
    "			return;\n" +
    "		}\n" +
    "\n" +
    "		if ( events.length >= num ) {\n" +
    "			exec = true;\n" +
    "			var s = (new Date).getTime();\n" +
    "\n" +
    "			for ( var n = 0; n < 5; n++ ) {\n" +
    "				for ( var i = 0; i < num; i++ ) {\n" +
    "					old.event.handle.call( document, events[i] );\n" +
    "				}\n" +
    "			}\n" +
    "\n" +
    "			var oldNum = (new Date).getTime() - s;\n" +
    "\n" +
    "			s = (new Date).getTime();\n" +
    "\n" +
    "			for ( var n = 0; n < 5; n++ ) {\n" +
    "				for ( var i = 0; i < num; i++ ) {\n" +
    "					jQuery.event.handle.call( document, events[i] );\n" +
    "				}\n" +
    "			}\n" +
    "\n" +
    "			var curNum = (new Date).getTime() - s;\n" +
    "\n" +
    "			jQuery(\"#num\").text( old.fn.jquery + \": \" + oldNum + \" \" + jQuery.fn.jquery + \": \" + curNum );\n" +
    "\n" +
    "			jQuery(this).unbind( \"mousemove\", e.handler );\n" +
    "\n" +
    "		} else {\n" +
    "			events.push( e.originalEvent );\n" +
    "			jQuery(\"#num\").text( events.length + \" / \" + num );\n" +
    "		}\n" +
    "	});\n" +
    "	</script>\n" +
    "</head>\n" +
    "<body>\n" +
    "	<p>Move the mouse, please!</p>\n" +
    "	<p id=\"num\"></p>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/speed/filter.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/speed/filter.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "<head>\n" +
    "	<title>Test .filter() Performance</title>\n" +
    "	<script src=\"benchmark.js\"></script>\n" +
    "	<script src=\"jquery-basis.js\"></script>\n" +
    "	<script>var old = jQuery.noConflict(true);</script>\n" +
    "	<script src=\"../dist/jquery.js\"></script>\n" +
    "	<script>\n" +
    "		jQuery(function ready() {\n" +
    "			var node = $(\"#child\"), name;\n" +
    "\n" +
    "			jQuery.each([\".zoo\", \"#zoo\", \"[data-foo=zoo]\", \"#nonexistant\"], function(i, item) {\n" +
    "	setTimeout(function(){\n" +
    "					name = \"filter '\" + item + \"'\";\n" +
    "		jQuery(\"#results\").append(\"<li>\" + name + \"<ul>\" +\n" +
    "						\"<li>new: \" + benchmarkString(\"$('div').filter('\" + item + \"')\", 100, name) + \"</li>\" +\n" +
    "						\"<li>old: \" + benchmarkString(\"old('div').filter('\" + item + \"')\", 100, name) + \"</li>\" +\n" +
    "			\"</ul></li>\");\n" +
    "		jQuery(\"#results\").append(\"<li>single \" + name + \"<ul>\" +\n" +
    "						\"<li>new: \" + benchmarkString(\"$('#nonexistant').filter('\" + item + \"')\", 1000, name) + \"</li>\" +\n" +
    "						\"<li>old: \" + benchmarkString(\"old('#nonexistant').filter('\" + item + \"')\", 1000, name) + \"</li>\" +\n" +
    "			\"</ul></li>\");\n" +
    "	}, 100);\n" +
    "			});\n" +
    "		});\n" +
    "	</script>\n" +
    "</head>\n" +
    "<body>\n" +
    "	<div>\n" +
    "		<p>Hello</p>\n" +
    "		<div class=\"zoo\" id=\"nonexistant\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "	</div>\n" +
    "	<ul id=\"results\"></ul>\n" +
    "</body>\n" +
    "</html>\n" +
    "\n" +
    "");
}]);

angular.module("vendor/jquery/speed/find.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/speed/find.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "<head>\n" +
    "	<title>Test .find() Performance</title>\n" +
    "	<script src=\"benchmark.js\"></script>\n" +
    "	<script src=\"jquery-basis.js\"></script>\n" +
    "	<script>var old = jQuery.noConflict(true);</script>\n" +
    "	<script src=\"../dist/jquery.js\"></script>\n" +
    "	<script>\n" +
    "		jQuery(function ready() {\n" +
    "			var node = $(\"#child\"), name;\n" +
    "\n" +
    "			jQuery.each([\".zoo\", \"#zoo\", \"[data-foo=zoo]\", \"#nonexistant\"], function(i, item) {\n" +
    "	setTimeout(function(){\n" +
    "					name = \"find '\" + item + \"'\";\n" +
    "		jQuery(\"#results\").append(\"<li>rooted \" + name + \"<ul>\" +\n" +
    "						\"<li>new: \" + benchmarkString(\"$('body').find('\" + item + \"')\", 250, name) + \"</li>\" +\n" +
    "						\"<li>old: \" + benchmarkString(\"old('body').find('\" + item + \"')\", 250, name) + \"</li>\" +\n" +
    "			\"</ul></li>\");\n" +
    "	}, 100);\n" +
    "			});\n" +
    "		});\n" +
    "	</script>\n" +
    "</head>\n" +
    "<body>\n" +
    "	<div>\n" +
    "		<p>Hello</p>\n" +
    "		<div class=\"zoo\" id=\"nonexistant\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "		<div class=\"zoo\" id=\"zoo\" data-foo=\"bar\"><div></div></div>\n" +
    "	</div>\n" +
    "	<ul id=\"results\"></ul>\n" +
    "</body>\n" +
    "</html>\n" +
    "\n" +
    "");
}]);

angular.module("vendor/jquery/speed/index.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/speed/index.html",
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n" +
    "	\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
    "\n" +
    "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\">\n" +
    "<head>\n" +
    "	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"/>\n" +
    "	<title>Speed Test</title>\n" +
    "	<script src=\"jquery-basis.js\" type=\"text/javascript\"></script>\n" +
    "	<script src=\"../dist/jquery.js\" type=\"text/javascript\"></script>\n" +
    "	<script type=\"text/javascript\">jQuery.noConflict();</script>\n" +
    "	<link rel=\"stylesheet\" href=\"benchmarker.css\" type=\"text/css\" media=\"screen\" />\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "\n" +
    "<h1>Speed Test</h1>\n" +
    "<div id=\"badid\"></div>\n" +
    "<div id=\"time-test\">\n" +
    "<p>Using the following selector expressions (<input type=\"text\" id=\"times\" maxlength=\"5\" size=\"5\" value=\"20\"/> times each):</p>\n" +
    "<p>NOTE: Number shown is an average.</p>\n" +
    "<div class=\"buttons\">\n" +
    "	<button class=\"selectAll\">Select All</button>\n" +
    "	<button class=\"deselectAll\">Deselect All</button>\n" +
    "\n" +
    "	<button class=\"runTests\">Run Tests</button>\n" +
    "	<button class=\"retryTies\">Retry Ties</button>\n" +
    "</div>\n" +
    "<table cellspacing=\"0\">\n" +
    "	<thead>\n" +
    "		<tr>\n" +
    "			<th>Run?</th>\n" +
    "			<th>Test</th>\n" +
    "\n" +
    "		</tr>\n" +
    "	</thead>\n" +
    "	<tfoot>\n" +
    "		<tr>\n" +
    "			 <th></th>\n" +
    "			 <th></th>\n" +
    "		</tr>\n" +
    "		<tr>\n" +
    "			 <th></th>\n" +
    "\n" +
    "			 <th></th>\n" +
    "		 </tr>\n" +
    "	</tfoot>\n" +
    "	<tbody>\n" +
    "		<tr>\n" +
    "			<td></td>\n" +
    "			<td></td>\n" +
    "		</tr>\n" +
    "	</tbody>\n" +
    "\n" +
    "</table>\n" +
    "\n" +
    "	<div class=\"buttons\">\n" +
    "	<button class=\"selectAll\">Select All</button>\n" +
    "	<button class=\"deselectAll\">Deselect All</button>\n" +
    "	<button class=\"runTests\">Run Tests</button>\n" +
    "	<button class=\"retryTies\">Retry Ties</button>\n" +
    "	<button id=\"addTest\">+</button>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div style=\"display:none;\"><div id=\"page\"><div id=\"masthead\"><div id=\"mastheadhd\"></div><div id=\"mastheadbd\"><div class=\"mastheadbd\"><div id=\"eyebrow\"><ul id=\"ypromo\"><li><a id=\"sethomepage\" href=\"\"><strong>Make Y! your home page</strong></a></li><li id=\"toolbar\"><a id=\"dtba\" href=\"\"><span id=\"tba\">Get</span> Yahoo! Toolbar</a></li></ul><div id=\"ffhpcx\"></div><div id=\"headline\"><span><a href=\"\">How much home can you afford?</a></span></div></div><h1><img src=\"blank.gif\" border=0 width=232 height=44 alt=\"Yahoo!\" id=\"ylogo\"></h1><div id=\"searchwrapper\"><form name=\"sf1\" id=\"search\" action=\"r/sx/*-http://search.yahoo.com/search\"><fieldset><legend>Yahoo! Search</legend><ul id=\"vsearchtabs\"><li class=\"first on\"><a href=\"\">Web</a></li><li><a href=\"\">Images</a></li><li><a href=\"\">Video</a></li><li><a href=\"\">Local</a></li><li><a href=\"\">Shopping</a></li><li class=\"last ignore\"><dl id=\"vsearchm\"><dt><a id=\"vsearchmore\" href=\"\">More</a></dt><dd id=\"vslist\"></dd></dl></li></ul><div id=\"sbox\"><label id=\"searchlabel\" for=\"p\">Search:</label><div class=\"outer_search_container\"><div id=\"search_container\" class=\"search_container\"><img src=\"blank.gif\" id=\"searchother_e2e\" alt=\"\"><div id=\"searchIE\"><div id=\"searchmw1\" class=\"iemw\"></div></div><div class=\"fixfloat searchbox_container\"><div id=\"searchbox\"><input class=\"plong inputtext\" type=\"text\" id=\"p\" name=\"p\" accesskey=\"s\"></div><span id=\"searchbtn\"><input type=\"submit\" id=\"searchsubmit\" class=\"btn-more-2\" value=\"Web Search\"></span></div></div><div id=\"e2eClass\" class=\"e2e\"><div class=\"e2eTween\"></div><div id=\"e2e\"><div id=\"e2econtent\"><div id=\"e2e_intl\"></div><div class=\"ac_container\"><div id=\"e2einfo\"></div><div id=\"ac_container\"></div><div id=\"e2escroll\"></div></div></div><a title=\"toggle search suggestions\" id=\"e2etoggle\" href=\"\" onclick=\"return false;\"><img src=\"blank.gif\" id=\"searchtoggle_e2e\" alt=\"toggle search suggestions\"></a></div></div></div><input type=\"hidden\" name=\"fr\" value=\"yfp\"><input type=\"hidden\" name=\"toggle\" value=\"1\"><input type=\"hidden\" name=\"cop\" value=\"mss\"><input type=\"hidden\" name=\"ei\" value=\"UTF-8\"></div><div id=\"sboxfooter\"></div></fieldset></form></div><div class=\"mh_footer\"><div id=\"doors\"><h3 class=\"a11y\">Popular Yahoo! Properties</h3><ul id=\"doors-links\" class=\"fixfloat\"><li class=\"first\"><strong>Yahoo! Home</strong></li><li class=\"middle\"><a href=r/i1 title=\"Go to My Yahoo!\">My Yahoo!</a></li><li class=\"last\"></li></ul></div><div id=\"pagesettingscx\"><span id=\"navbardate\"><cite class=\"timestamp\">&nbsp;</cite></span><a href=\"\" id=\"editpage\">Page Options</a><div id=\"pagesettings\"><div class=\"bd\"><span><div class=\"iemw\"></div><div id=\"pscolors\"><h4>Color:</h4><ol id=\"themes\"><li><a href=\"\" id=\"t1\" class=\"on\" title=\"Ocean\">Ocean</a></li><li><a href=\"\" id=\"t4\"  title=\"Tangerine\">Tangerine</a></li><li><a href=\"\" id=\"t3\"  title=\"Violet\">Violet</a></li><li><a href=\"\" id=\"t2\"  title=\"Oyster\">Oyster</a></li><li><a href=\"\" id=\"t5\"  title=\"Grass\">Grass</a></li><li><a href=\"\" id=\"t7\"  title=\"Pink\">Pink</a></li></ol></div><a id=\"sizetogglelink\" href=\"\">Switch to narrow layout</a><a id=\"myyahoolink\" href=\"\">Want more ways to customize <span>your home page?</span><span class=\"trymyyahoo\">Try My Yahoo! &#187;</span></a></span></div></div></div></div></div></div><div id=\"mastheadft\"></div></div><div id=\"colcx\"><div id=\"left\"><div id=\"trough\" class=\"md\"><div class=\"bd\"><div id=\"trough-cols\" class=\"fixfloat\"><ul id=\"trough-1\" class=\"col1\"><li><a style=\"background-position:-400px -120px\" href=\"\">Answers</a></li><li><a style=\"background-position:-400px -440px\" href=\"\">Autos</a></li><li><a style=\"background-position:0 -761px\" href=\"\">Finance</a></li><li><a style=\"background-position:0 -1600px\" href=\"\">Games</a></li><li><a style=\"background-position:0 -1400px\" href=\"\">Groups</a></li><li><a style=\"background-position:0 -439px\" href=\"\">HotJobs</a></li><li><a style=\"background-position:0 -600px\" href=\"\">Maps</a></li><li><a style=\"background-position:0 -161px\" href=\"\">Mobile Web</a></li><li><a style=\"background-position:0 -561px;display:inline\" href=\"\">Movies</a> | <a class=\"trough_tv\" href=\"\">TV</a></li><li><a style=\"background-position:0 -1562px\" href=\"\">Music</a></li><li><a style=\"background-position:-400px -1119px\" href=\"\">OMG</a></li><li class=\"highlight\"><a style=\"background-position:0 -40px\" href=\"\">Personals</a></li><li><a style=\"background-position:-400px -161px\" href=\"\">Real Estate<small class=\"updated\"></small></a></li><li><a style=\"background-position:-400px -1321px\" href=\"\">Shine</a></li><li><a style=\"background-position:0 -1640px\" href=\"\">Shopping</a></li><li><a style=\"background-position:0 -800px\" href=\"\">Sports</a></li><li><a style=\"background-position:0 -79px\" href=\"\">Travel</a></li><li><a style=\"background-position:0 -121px\" href=\"\">Yellow Pages</a></li></ul></div><span id=\"allyservicescx\"><a href=\"\" id=\"allyservices\" class=\"btn-more-2\" title=\"View the complete list of Yahoo! Services\">More Yahoo! Services</a></span></div></div><div class=\"md minimantle\"><div id=\"smallbiz\" class=\"md-sub\"><div class=\"hd\"><h2><a href=\"\">Small Business</a></h2></div><ul id=\"smallbiz-links\"><li><a href=\"\">Get a Web Site</a></li><li><a href=\"\">Domain Names</a></li><li><a href=\"\">Sell Online</a></li><li><a href=\"\">Search Ads</a></li></ul></div></div><div class=\"md minimantle\"><div id=\"advertising\" class=\"md-sub\"><div class=\"hd\"><h2><a href=\"\">Featured Services</a></h2></div><ul id=\"advertising-links\"><li><a href=\"\">Downloads</a></li><li><a href=\"\">Health</a></li><li><a href=\"\">Kids</a></li><li><a href=\"\">GeoCities</a></li><li><a href=\"\">Mail Plus</a></li><li><a href=\"\">Y! International</a></li></ul></div></div></div><div id=\"rightcx\"><div id=\"middle\"><div class=\"colpadding\"><div id=\"today\" class=\"md featured1\"><div class=\"hd tabs\"><h3 class=\"a11y\">Featured Navigation</h3><ul id=\"todaytabs\"><li class=\"on first\"><em><a hidefocus=\"true\" id=\"featured1\" href=\"\">Featured</a></em><span class=\"pipe\"></span></li><li class=\"tab2\"><em><a hidefocus=\"true\" id=\"entertainment1\" href=\"\">Entertainment</a></em><span class=\"pipe\"></span></li><li class=\"tab3\"><em><a hidefocus=\"true\" id=\"sports1\" href=\"\">Sports</a></em><span class=\"pipe\"></span></li><li class=\"last\"><em><a hidefocus=\"true\" id=\"money1\" href=\"\">Video</a></em><span class=\"pipe\"></span></li></ul></div><div id=\"todayvideo\"></div><div id=\"todaybd\" class=\"bd\"><cite class=\"timestamp\">&nbsp;</cite><span id=\"featured1ct\" class=\"current\"><div id=\"featured1main\"><a href=s/1014544><img src=\"blank.gif\" width=\"154\" height=\"115\" alt=\"Renee Zellweger (Steve Granitz/WireImage)\"></a><span><h3><a href=s/1014544>Worst dressed at the Globes</a></h3><p>Renee's look is a mess, and Miley's gown is a mistake. <a class=more href=s/1014544>&#187; See bad outfits</a></p><ul><li><a class=slideshow href=s/1014545>Best dressed</a></li><li><a class=slideshow href=s/1014546>Stunning couples</a></li><li><a class=video href=s/1014547>Watch Brangelina diss Ryan Seacrest</a></li><li><a class=bullet href=s/1014548>Outrageous moments</a></li><li><a class=bullet href=s/1014549>Big winners</a></li></ul></span></div></span><span id=\"featured2ct\"></span><span id=\"featured3ct\"></span><span id=\"featured4ct\"></span><span id=\"entertainment1ct\"></span><span id=\"entertainment2ct\"></span><span id=\"entertainment3ct\"></span><span id=\"entertainment4ct\"></span><span id=\"sports1ct\"></span><span id=\"sports2ct\"></span><span id=\"sports3ct\"></span><span id=\"sports4ct\"></span><span id=\"money1ct\"></span><span id=\"money2ct\"></span><span id=\"money3ct\"></span><span id=\"money4ct\"></span></div><div id=\"todayft\" class=\"ft\"><span id=\"footer1\" class=\"current\"><ul id=\"todaystories1\"><li id=\"featured1|106537\" class=\"on\"><a href=s/1014556><img src=\"blank.gif\" alt=\"\" width=\"29\" height=\"21\">See the worst-dressed stars at Golden Globes</a></li><li id=\"featured2|106533\"><a href=s/1014475><img src=\"blank.gif\" alt=\"\" width=\"29\" height=\"21\">Obama: Dog search down to two breeds</a></li><li id=\"featured3|106522\"><a href=s/1014275><img src=\"blank.gif\" alt=\"\" width=\"29\" height=\"21\">Eagles star gets penalty for 'phone call'</a></li><li id=\"featured4|106538\"><a href=s/1014566><img src=\"blank.gif\" alt=\"\" width=\"29\" height=\"21\">Teen sends 14,528 texts in one month</a></li></ul><div id=\"more-featured\" class=\"btn-more\"><b>&#187;</b> More:<a class=\"first\" href=\"\">Featured</a><a class=\"last\" href=\"\">Buzz</a></div></span><span id=\"footer2\"></span><span id=\"footer3\"></span><span id=\"footer4\"></span></div></div><div id=\"adwest\" class=\"ad\"></div><div id=\"news\" class=\"md\"><div class=\"hd tabs\"><h3 class=\"a11y\">News Navigation</h3><ul id=\"newstabs\"><li class=\"on first\"><em><a hidefocus=\"true\" id=\"inthenews2\" href=\"\">News</a></em><span class=\"pipe\"></span></li><li class=\"tab2\"><em><a hidefocus=\"true\" id=\"worldnews\" href=\"\">World</a></em><span class=\"pipe\"></span></li><li class=\"tab3\"><em><a hidefocus=\"true\" id=\"localnews\" href=\"\">Local</a></em><span class=\"pipe\"></span></li><li class=\"last\"><em><a hidefocus=\"true\" id=\"finsnews\" href=\"\">Finance</a></em><span class=\"pipe\"></span></li></ul></div><div id=\"newsbd\" class=\"bd\"><span id=\"inthenews2ct\" class=\"current\"><h2 class=\"a11y\">In the News</h2><div id=\"newstop\"><cite class=\"timestamp\">&nbsp;</cite>&#149;&nbsp;<a href=s/1014558>Obama advises Bush to request remaining $350B of bailout</a><br>&#149;&nbsp;<a href=s/1014502>Bush defends his presidency in final news conference</a><br>&#149;&nbsp;<a href=s/1014534>More than 900 Gazans dead as Israel continues attacks</a><br>&#149;&nbsp;<a href=s/1014517>Openly gay Episcopal bishop to say prayer at inaugural event</a><br>&#149;&nbsp;<a href=s/1014567>NYC judge allows Bernard Madoff to remain free on bail</a><br>&#149;&nbsp;<a href=s/1014516>British PM backing Prince Harry after racist remark</a><br>&#149;&nbsp;<a class=video style=\"background-position:-3px -48px;font:normal 100% arial;\" href=s/1014537 onclick=\"window.open('s/1014537','playerWindow','width=793,height=608,scrollbars=no');return false;\">Brothers separated at birth reunite after 80 years</a><br><ul id=\"more-news\" class=\"btn-more\"><li class=\"first\"><b>&#187;</b> More:</li><li><a href=r/xn>News</a></li><li><a href=r/me>Popular</a></li><li class=\"last\"><a href=r/z0>Politics</a></li></ul></div><div id=\"newsft\"><div id=\"newsbottom\"><div id=\"finance-data\"><div id=\"markets\"><h3><a href=\"\">Markets:</a></h3><ul><li><strong><a href=\"\">Dow: </a><span class=\"down\">-1.0%</span></strong></li><li><strong><a href=\"\">Nasdaq: </a><span class=\"down\">-1.7%</span></strong></li></ul></div><div id=\"quotes\"><form name=\"fq\" id=\"fq\" action=\"r/f4/*-http://finance.yahoo.com/q\"><fieldset><legend>Yahoo! Finance</legend>     <a href=\"\">Real-Time Quotes:</a><input accesskey=\"q\" class=\"inputtext\" type=\"text\" id=\"s\" name=\"s\" size=\"5\" title=\"Enter ticker symbol\" /><input type=\"submit\" class=\"submit\" value=\"Go\" /></fieldset></form></div></div><div id=\"news-sponsor\"><a href=\"\"><img src=\"blank.gif\" border=0 width=165 height=15 title=\"Switch to Scottrade\"></a></div></div></div></span><span id=\"worldnewsct\"></span><span id=\"localnewsct\"></span><span id=\"finsnewsct\"></span></div></div><div id=\"marketplace\" class=\"md\"><div class=\"hd\"><h2><a href=\"\" name=\"marketplace\">Marketplace</a></h2></div><div id=\"marketplacebd\" class=\"bd\"><table border=0 cellpadding=0 cellspacing=0 width=\"100%\"><tr><td valign=top><a href=\"\"><img src=\"blank.gif\" width=70 height=50 border=0></a></td><td width=8>&nbsp;</td><td valign=top><font face=arial size=-1><a href=\"\">Why online college is rocking:</a><br>1) Accredited Associates, Bachelor&#39;s, Master&#39;s, MBA degrees 2) Some jobs pay tuition <a href=\"\">3) Top schools online.</a></font></td></tr></table><hr size=1 noshade><a href=\"\">A bad credit score is 600 or below. Click here to see yours online in just 2 easy steps for $0. By Experian&reg;</a><hr size=1 noshade><a href=\"\">GEICO Car Insurance -</a> You could save over $500 on car insurance. <a href=\"\">Get a fast, free quote.</a><hr size=1 noshade><a href=\"\">100+ credit cards from 9 of the top 10 issuers. Instant approvals. Choose the right card for you. LendingTree&reg;</a></div></div></div></div><div id=\"right\"><div class=\"colpadding\"><div id=\"pa\" class=\"md\"><div id=\"pabd\"><div id=\"patop\"><ul id=\"reg\" class=\"so\"><li class=\"mailstatus\">Check your mail status: <a href=\"\">Sign In</a></li><li id=\"signup\">Free mail: <a href=\"\">Sign Up</a></li></ul></div><div id=\"patabs\"><ul id=\"tabs1\" class=\"patabs first\"><li id=\"mail\" class=\"first\"><div><h4><a id=\"pamail\" accesskey=\"m\" href=\"\"><span class=\"icon\">Mail</span></a></h4></div></li><li id=\"messenger\"><div><h4><a id=\"pamsgr\" href=\"\"><span class=\"icon\">Messenger</span></a></h4></div></li><li id=\"games\" class=\"last\"><div><h4><a id=\"pagames\" href=\"\"><span class=\"icon\">Puzzles</span></a></h4></div></li></ul><div id=\"tabs1previewdiv\" class=\"papreviewdiv\"></div><ul id=\"tabs2\" class=\"patabs last\"><li id=\"weather\" class=\"first\"><div><h4><a id=\"paweather\" href=\"\"><span class=\"icon\">Weather</span></a></h4></div></li><li id=\"events\"><div><h4><a id=\"paevents\" href=\"\"><span class=\"icon\">Events</span></a></h4></div></li><li id=\"horoscope\" class=\"last\"><div><h4><a id=\"pahoroscope\" href=\"\"><span class=\"icon\">Horoscopes</span></a></h4></div></li></ul><div id=\"tabs2previewdiv\" class=\"papreviewdiv\"></div></div></div></div><div id=\"ad\" class=\"ad\"><table cellspacing=0 cellpadding=0 border=0 width=100%><tr><td align=center><a href=\"\" target=\"_top\"><img src=\"blank.gif\" alt=\"\" width=300 height=250 border=0></a></td></tr><tr><td align=center><br><font face=\"verdana\" size=\"-2\"><a href=\"\" target=\"_blank\">Ad Feedback</a></font></td></tr></table></div><div id=\"mantlecx\"><div id=\"mantle\"><div id=\"mantle2\" class=\"md\"><div class=\"hd\"><h2><a href=\"\">Inside Yahoo! HotJobs</a></h2>	</div><div class=\"bd\"><a href=\"\"><img src=\"blank.gif\" height=\"68\" width=\"92\" alt=\"Yahoo! HotJobs\" border=\"0\"></a><h3><a href=\"\">Great companies hiring now</a></h3><ul><li><a href=\"\">Careers with bright futures</a></li><li><a href=\"\">Low-stress jobs that pay</a></li><li><a href=\"\">Super-easy career changes</a></li><li><a href=\"\">How to find a job right for you</a></li></ul></div></div></div></div><div id=\"pulse\" class=\"md\"><div class=\"hd\"><h2>Pulse - What Yahoos Are Into</h2></div><div id=\"pulsebd\" class=\"bd\"><h3>Star Searches: Most Popular Actors</h3><a href=s/1013525/*-http://movies.yahoo.com/movie/contributor/1800043966><img src=\"blank.gif\" alt=\"Alyssa Milano (Steve Granitz, WireImage.com)\" width=\"139\" height=\"119\"></a><ol><li class=\"tt1\"><a href=s/1013525/*-http://movies.yahoo.com/movie/contributor/1800043966>Alyssa Milano</a></li><li class=\"tt2\"><a href=s/1013526/*-http://movies.yahoo.com/movie/contributor/1800018965>Brad Pitt</a></li><li class=\"tt3\"><a href=s/1013527/*-http://movies.yahoo.com/movie/contributor/1804705919>Anne Hathaway</a></li><li class=\"tt4\"><a href=s/1013528/*-http://movies.yahoo.com/movie/contributor/1800424122>Ziyi Zhang</a></li><li class=\"tt5\"><a href=s/1013529/*-http://movies.yahoo.com/movie/contributor/1800019484>Charlize Theron</a></li><li class=\"tt6\"><a href=s/1013530/*-http://movies.yahoo.com/movie/contributor/1800019485>Johnny Depp</a></li></ol></div><a class=btn-more href=s/1013531/*-http://movies.yahoo.com>&#187; More Yahoo! Movies</a></div><div id=\"popsearch\" class=\"md\"><div class=\"hd\"><h2>Today&#039;s Top Searches</h2></div><div id=\"popsearchbd\" class=\"bd\"><ol start=1><li><a href=\"\">Odette Yustman</a></li><li><a href=\"\">Kate Hudson</a></li><li><a href=\"\">Ana Ortiz</a></li><li><a href=\"\">Weight Loss Tips</a></li><li><a href=\"\">Kimberley Locke</a></li></ol><ol start=6><li><a href=\"\">Rod Blagojevich</a></li><li><a href=\"\">2009 Jeep Commander</a></li><li><a href=\"\">Attention Deficit...</a></li><li><a href=\"\">Snoring</a></li><li><a href=\"\">New Orleans Vacations</a></li></ol></div></div></div></div></div></div><div id=\"footer\" class=\"md\"><ul id=\"flist2\"><li class=\"first\"><a href=\"\">Advertise with Us</a></li><li><a href=\"\">Search Marketing</a></li><li><a href=\"\">Privacy Policy</a></li><li><a href=\"\">Terms of Service</a></li><li><a href=r/ad>Suggest a Site</a></li><li><a href=\"\">Yahoo! en Espa&ntilde;ol</a></li><li><a href=\"\">Send Feedback</a></li><li class=\"last\"><a href=\"\">Help</a></li></ul><ul id=\"copyright\"><li class=\"first\">Copyright &copy; 2009 Yahoo! Inc. All rights reserved.</li><li class=\"first\"><a href=\"\">Copyright/IP Policy</a></li><li><a href=\"\">Company Info</a></li><li><a href=\"\">Participate in Research</a></li><li><a href=\"\">Jobs</a></li></ul></div></div> <div id=\"yblthm_sip\" style=\"display:none\"></div></div>\n" +
    "	<script type=\"text/javascript\" charset=\"utf-8\">\n" +
    "				jQuery.benchmarker = {libraries: [\"$\", \"jQuery\"]};\n" +
    "	</script>\n" +
    "\n" +
    "	<script type=\"text/javascript\" src=\"benchmarker.js\"></script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/speed/slice.vs.concat.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/speed/slice.vs.concat.html",
    "<script type=\"text/javascript\">\n" +
    "(function(){\n" +
    "	// Conclusions:\n" +
    "	// slice() is a little faster than concat() except on Chrome\n" +
    "	// This clone() is slower on FF & IE but takes 50% on Safari & Chrome\n" +
    "\n" +
    "	var SIZE = 1e4,\n" +
    "		LOOPS = 500;\n" +
    "	\n" +
    "	var arr = new Array(SIZE);\n" +
    "	for ( var i=arr.length-1; i >= 0; --i )\n" +
    "		arr[i] = 0;\n" +
    "\n" +
    "	var t = new Date;\n" +
    "	for ( i=0; i < LOOPS; i++ )\n" +
    "		arr.slice(0);\n" +
    "	var tslice = new Date - t;\n" +
    "	\n" +
    "	t = new Date;\n" +
    "	for ( i=0; i < LOOPS; i++ )\n" +
    "		arr.concat();\n" +
    "	var tconcat = new Date - t;\n" +
    "	\n" +
    "	// clone() is just to see how fast built-ins are\n" +
    "	t = new Date;\n" +
    "	for ( i=0; i < LOOPS; i++ )\n" +
    "		clone(arr);\n" +
    "	var tclone = new Date - t;\n" +
    "	\n" +
    "	alert([\n" +
    "		'slice:'+tslice,\n" +
    "		'concat:'+tconcat,\n" +
    "		'clone:'+tclone\n" +
    "	].join('\\n'));\n" +
    "	\n" +
    "	\n" +
    "	function clone(arr){\n" +
    "		var i = arr.length,\n" +
    "			copy = new Array(i);\n" +
    "			\n" +
    "		while (i--)\n" +
    "			copy[i] = arr[i];\n" +
    "			\n" +
    "		return copy;\n" +
    "	}\n" +
    "})();\n" +
    "</script>");
}]);

angular.module("vendor/jquery/test/data/ajax/unreleasedXHR.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/ajax/unreleasedXHR.html",
    "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\n" +
    "<html>\n" +
    "<head>\n" +
    "<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">\n" +
    "<title>Attempt to block tests because of dangling XHR requests (IE)</title>\n" +
    "<script src=\"../../jquery.js\"></script>\n" +
    "<script type=\"text/javascript\">\n" +
    "window.onunload = function() {};\n" +
    "jQuery(function() {\n" +
    "	setTimeout(function() {\n" +
    "		var parent = window.parent;\n" +
    "		document.write(\"\");\n" +
    "		parent.iframeCallback();\n" +
    "	}, 200 );\n" +
    "	var number = 50;\n" +
    "	while( number-- ) {\n" +
    "		jQuery.ajax(\"../name.php?wait=600\");\n" +
    "	}\n" +
    "});\n" +
    "</script>\n" +
    "</head>\n" +
    "<body>\n" +
    "<!-- empty body -->\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/cleanScript.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/cleanScript.html",
    "<script>\n" +
    "<!--\n" +
    "ok( true, \"script within html comments executed\" );\n" +
    "-->\n" +
    "</script>\n" +
    "<script>\n" +
    "<![CDATA[\n" +
    "ok( true, \"script within CDATA executed\" );\n" +
    "]]>\n" +
    "</script>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/core/cc_on.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/core/cc_on.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n" +
    "	<script>\n" +
    "		var cc_on = false,\n" +
    "			errors = [];\n" +
    "/*@cc_on\n" +
    "		cc_on = true;\n" +
    "@*/\n" +
    "		window.onerror = function( errorMessage, filePath, lineNumber ) {\n" +
    "			errors.push( errorMessage );\n" +
    "		};\n" +
    "	</script>\n" +
    "	<script src=\"../../jquery.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "	<script>\n" +
    "		window.parent.iframeCallback( cc_on, errors, jQuery );\n" +
    "	</script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/dimensions/documentLarge.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/dimensions/documentLarge.html",
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
    "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\" dir=\"ltr\" id=\"html\">\n" +
    "<head>\n" +
    "	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n" +
    "	<style>\n" +
    "		body {\n" +
    "			width: 1000px;\n" +
    "			height: 1000px;\n" +
    "		}\n" +
    "	</style>\n" +
    "</head>\n" +
    "<body>\n" +
    "	<div>\n" +
    "		<script src=\"../../jquery.js\"></script>\n" +
    "	</div>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/dimensions/documentSmall.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/dimensions/documentSmall.html",
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
    "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\" dir=\"ltr\" id=\"html\">\n" +
    "<head>\n" +
    "	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n" +
    "	<style>\n" +
    "		html {\n" +
    "			/**\n" +
    "			 * we need to null out border-width, because it causes bug #3838\n" +
    "			 * and until we drop IE6, this test will fail in IE6 if we didn't\n" +
    "			 * special case this situation.\n" +
    "			 **/\n" +
    "			border-width: 0;\n" +
    "		}\n" +
    "	</style>\n" +
    "</head>\n" +
    "<body>\n" +
    "	<div>\n" +
    "		<script src=\"../../jquery.js\"></script>\n" +
    "	</div>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/event/focusElem.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/event/focusElem.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "<head>\n" +
    "	<meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\">\n" +
    "	<title>.focus() (activeElement access #13393)</title>\n" +
    "\n" +
    "	<script src=\"../../jquery.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "	<a href=\"#\" id=\"frame-link\"></a>\n" +
    "	<script>\n" +
    "		jQuery(\"#frame-link\").focus();\n" +
    "		window.parent.iframeCallback( true );\n" +
    "	</script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/event/promiseReady.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/event/promiseReady.html",
    "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\n" +
    "<html>\n" +
    "<head>\n" +
    "<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">\n" +
    "<title>Test case for jQuery ticket #11470</title>\n" +
    "<script src=\"../../jquery.js\"></script>\n" +
    "<script type=\"text/javascript\">\n" +
    "jQuery.when( jQuery.ready ).done(function() {\n" +
    "	jQuery(\"body\").append(\"<div>modifying DOM</div>\");\n" +
    "	window.parent.iframeCallback( $(\"div\").text() === \"modifying DOM\" );\n" +
    "});\n" +
    "</script>\n" +
    "</head>\n" +
    "<body>\n" +
    "<!-- empty body -->\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/event/syncReady.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/event/syncReady.html",
    "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\n" +
    "<html>\n" +
    "<head>\n" +
    "<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">\n" +
    "<title>Test case for jQuery ticket #10067</title>\n" +
    "<script src=\"../../jquery.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "\n" +
    "<script type=\"text/javascript\">\n" +
    "jQuery( document ).ready(function () {\n" +
    "	window.parent.iframeCallback( jQuery('#container').length === 1 );\n" +
    "});\n" +
    "</script>\n" +
    "\n" +
    "<!-- external resources that come before elements trick\n" +
    "	oldIE into thinking the dom is ready, but it's not...\n" +
    "	leaving this check here for future trailblazers to attempt\n" +
    "	fixing this...-->\n" +
    "<script type=\"text/javascript\" src=\"longLoadScript.php?sleep=1\"></script>\n" +
    "<div id=\"container\" style=\"height: 300px\"></div>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/iframe.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/iframe.html",
    "<html>\n" +
    "	<head>\n" +
    "		<title>iframe</title>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div><span>span text</span></div>\n" +
    "	</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/manipulation/iframe-denied.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/manipulation/iframe-denied.html",
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<meta charset=utf-8 />\n" +
    "		<title>body</title>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div id=\"qunit-fixture\"></div>\n" +
    "		<script src=\"../../jquery.js\"></script>\n" +
    "		<script>\n" +
    "			var script = document.getElementsByTagName( \"script\" )[ 0 ],\n" +
    "				div = document.createElement( \"div\" ),\n" +
    "				src = \"http://\" + window.parent.externalHost,\n" +
    "				success = true,\n" +
    "				error = \"\";\n" +
    "\n" +
    "			script.parentNode.appendChild( div );\n" +
    "			div.innerHTML = \"<iframe name=\\\"test\\\" src=\\\"\" + src + \"\\\">\";\n" +
    "\n" +
    "			jQuery(function() {\n" +
    "				try {\n" +
    "					jQuery( \"<div>hello<div>world</div>!</div>\" ).appendTo( \"#qunit-fixture\" );\n" +
    "				} catch( e ) {\n" +
    "					success = false;\n" +
    "					error = e;\n" +
    "				}\n" +
    "\n" +
    "				window.parent.iframeCallback({\n" +
    "					status: success,\n" +
    "					description: \"buildFragment sets the context without throwing an exception\" +\n" +
    "						( error ? \": \" + error : \"\" )\n" +
    "				});\n" +
    "			});\n" +
    "		</script>\n" +
    "	</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/name.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/name.html",
    "ERROR <script type=\"text/javascript\">ok( true, \"name.html retrieved\" );</script>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/offset/absolute.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/offset/absolute.html",
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n" +
    "	\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\">\n" +
    "		<title>absolute</title>\n" +
    "		<style type=\"text/css\" media=\"screen\">\n" +
    "			body { margin: 1px; padding: 5px; }\n" +
    "			div.absolute { position: absolute; margin: 1px; border: 2px solid #000; padding: 5px; width: 100px; height: 100px; background: #fff; }\n" +
    "			#absolute-1 { top: 0; left: 0; }\n" +
    "				#absolute-1-1 { top: 1px; left: 1px; }\n" +
    "					#absolute-1-1-1 { top: 1px; left: 1px; }\n" +
    "			#absolute-2 { top: 19px; left: 19px; }\n" +
    "			#marker { position: absolute; border: 2px solid #000; width: 50px; height: 50px; background: #ccc; }\n" +
    "			p.instructions { position: absolute; bottom: 0; }\n" +
    "			#positionTest { position: absolute; }\n" +
    "		</style>\n" +
    "		<script src=\"../../jquery.js\"></script>\n" +
    "		<script type=\"text/javascript\" charset=\"utf-8\">\n" +
    "			jQuery(function($) {\n" +
    "				$('.absolute').click(function() {\n" +
    "					$('#marker').css( $(this).offset() );\n" +
    "					var pos = $(this).position();\n" +
    "					$(this).css({ top: pos.top, left: pos.left });\n" +
    "					return false;\n" +
    "				});\n" +
    "			});\n" +
    "		</script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div id=\"absolute-1\" class=\"absolute\">absolute-1\n" +
    "			<div id=\"absolute-1-1\" class=\"absolute\">absolute-1-1\n" +
    "				<div id=\"absolute-1-1-1\" class=\"absolute\">absolute-1-1-1</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div id=\"absolute-2\" class=\"absolute\">absolute-2</div>\n" +
    "		<div id=\"positionTest\">Has absolute position but no values set for the location ('auto').</div>\n" +
    "		<div id=\"marker\"></div>\n" +
    "		<p class=\"instructions\">Click the white box to move the marker to it. Clicking the box also changes the position to absolute (if not already) and sets the position according to the position method.</p>\n" +
    "	</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/offset/body.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/offset/body.html",
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n" +
    "	\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\">\n" +
    "		<title>body</title>\n" +
    "		<style type=\"text/css\" media=\"screen\">\n" +
    "			body { margin: 1px; padding: 5px; position: relative }\n" +
    "			#marker { position: absolute; border: 2px solid #000; width: 50px; height: 50px; background: #ccc; }\n" +
    "			#firstElement { width: 50px; height: 50px; background: green; }\n" +
    "		</style>\n" +
    "		<script src=\"../../jquery.js\"></script>\n" +
    "		<script type=\"text/javascript\" charset=\"utf-8\">\n" +
    "			jQuery(function($) {\n" +
    "				$('body').click(function() {\n" +
    "					$('#marker').css( $(this).offset() );\n" +
    "					return false;\n" +
    "				});\n" +
    "			});\n" +
    "		</script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div id=\"firstElement\"></div>\n" +
    "		<div id=\"marker\"></div>\n" +
    "	</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/offset/fixed.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/offset/fixed.html",
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n" +
    "	\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\">\n" +
    "		<title>fixed</title>\n" +
    "		<style type=\"text/css\" media=\"screen\">\n" +
    "			body { margin: 1px; padding: 5px; }\n" +
    "			div.fixed { position: fixed; margin: 1px; border: 2px solid #000; padding: 5px; width: 100px; height: 100px; background: #fff; overflow: hidden; }\n" +
    "			#fixed-1 { top: 0; left: 0; }\n" +
    "			#fixed-2 { top: 20px; left: 20px; }\n" +
    "			#forceScroll { width: 5000px; height: 5000px; }\n" +
    "			#marker { position: absolute; border: 2px solid #000; width: 50px; height: 50px; background: #ccc; }\n" +
    "		</style>\n" +
    "		<script src=\"../../jquery.js\"></script>\n" +
    "		<script type=\"text/javascript\" charset=\"utf-8\">\n" +
    "			jQuery(function($) {\n" +
    "				window.scrollTo(1000,1000);\n" +
    "				$('.fixed').click(function() {\n" +
    "					$('#marker').css( $(this).offset() );\n" +
    "					return false;\n" +
    "				});\n" +
    "			});\n" +
    "		</script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div id=\"fixed-1\" class=\"fixed\"></div>\n" +
    "		<div id=\"fixed-2\" class=\"fixed\"></div>\n" +
    "		<div id=\"fixed-no-top-left\" class=\"fixed\"></div>\n" +
    "		<div id=\"forceScroll\"></div>\n" +
    "		<div id=\"marker\"></div>\n" +
    "		<p class=\"instructions\">Click the white box to move the marker to it.</p>\n" +
    "	</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/offset/relative.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/offset/relative.html",
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n" +
    "	\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\">\n" +
    "		<title>relative</title>\n" +
    "		<style type=\"text/css\" media=\"screen\">\n" +
    "			body { margin: 1px; padding: 5px; }\n" +
    "			div.relative { position: relative; top: 0; left: 0; margin: 1px; border: 2px solid #000; padding: 5px; width: 100px; height: 100px; background: #fff; overflow: hidden; }\n" +
    "			#relative-2 { top: 20px; left: 20px; }\n" +
    "			#marker { position: absolute; border: 2px solid #000; width: 50px; height: 50px; background: #ccc; }\n" +
    "		</style>\n" +
    "		<script src=\"../../jquery.js\"></script>\n" +
    "		<script type=\"text/javascript\" charset=\"utf-8\">\n" +
    "			jQuery(function($) {\n" +
    "				$('.relative').click(function() {\n" +
    "					$('#marker').css( $(this).offset() );\n" +
    "					var pos = $(this).position();\n" +
    "					$(this).css({ position: 'absolute', top: pos.top, left: pos.left });\n" +
    "					return false;\n" +
    "				});\n" +
    "			});\n" +
    "		</script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div id=\"relative-1\" class=\"relative\"><div id=\"relative-1-1\" class=\"relative\"><div id=\"relative-1-1-1\" class=\"relative\"></div></div></div>\n" +
    "		<div id=\"relative-2\" class=\"relative\"></div>\n" +
    "		<div id=\"marker\"></div>\n" +
    "		<p class=\"instructions\">Click the white box to move the marker to it. Clicking the box also changes the position to absolute (if not already) and sets the position according to the position method.</p>\n" +
    "	</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/offset/scroll.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/offset/scroll.html",
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n" +
    "	\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\">\n" +
    "		<title>scroll</title>\n" +
    "		<style type=\"text/css\" media=\"screen\">\n" +
    "			body { margin: 1px; padding: 5px; }\n" +
    "			div.scroll { position: relative; margin: 1px; border: 2px solid #000; padding: 5px; width: 100px; height: 100px; background: #fff; overflow: auto; }\n" +
    "			#scroll-1 { top: 0; left: 0; }\n" +
    "				#scroll-1-1 { top: 1px; left: 1px; }\n" +
    "					#scroll-1-1-1 { top: 1px; left: 1px; }\n" +
    "			#forceScroll { width: 5000px; height: 5000px; }\n" +
    "			#marker { position: absolute; border: 2px solid #000; width: 50px; height: 50px; background: #ccc; }\n" +
    "		</style>\n" +
    "		<script src=\"../../jquery.js\"></script>\n" +
    "		<script type=\"text/javascript\" charset=\"utf-8\">\n" +
    "			jQuery(function($) {\n" +
    "				window.scrollTo(1000,1000);\n" +
    "				$('#scroll-1')[0].scrollLeft = 5;\n" +
    "				$('#scroll-1')[0].scrollTop = 5;\n" +
    "				$('.scroll').click(function() {\n" +
    "					$('#marker').css( $(this).offset() );\n" +
    "					return false;\n" +
    "				});\n" +
    "			});\n" +
    "		</script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div id=\"scroll-1\" class=\"scroll\">\n" +
    "			<div id=\"scroll-1-1\" class=\"scroll\">\n" +
    "				<div id=\"scroll-1-1-1\" class=\"scroll\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div id=\"forceScroll\"></div>\n" +
    "		<div id=\"marker\"></div>\n" +
    "		<p class=\"instructions\">Click the white box to move the marker to it.</p>\n" +
    "	</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/offset/static.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/offset/static.html",
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n" +
    "	\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\">\n" +
    "		<title>static</title>\n" +
    "		<style type=\"text/css\" media=\"screen\">\n" +
    "			body { margin: 1px; padding: 5px; }\n" +
    "			div.static { position: static; top: 0; left: 0; margin: 1px; border: 2px solid #000; padding: 5px; width: 100px; height: 100px; background: #fff; overflow: hidden; }\n" +
    "			#static-2 { top: 20px; left: 20px; }\n" +
    "			#marker { position: absolute; border: 2px solid #000; width: 50px; height: 50px; background: #ccc; }\n" +
    "		</style>\n" +
    "		<script src=\"../../jquery.js\"></script>\n" +
    "		<script type=\"text/javascript\" charset=\"utf-8\">\n" +
    "			jQuery(function($) {\n" +
    "				$('.static').click(function() {\n" +
    "					$('#marker').css( $(this).offset() );\n" +
    "					var pos = $(this).position();\n" +
    "					$(this).css({ position: 'absolute', top: pos.top, left: pos.left });\n" +
    "					return false;\n" +
    "				});\n" +
    "			});\n" +
    "		</script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<div id=\"static-1\" class=\"static\"><div id=\"static-1-1\" class=\"static\"><div id=\"static-1-1-1\" class=\"static\"></div></div></div>\n" +
    "		<div id=\"static-2\" class=\"static\"></div>\n" +
    "		<div id=\"marker\"></div>\n" +
    "		<p class=\"instructions\">Click the white box to move the marker to it. Clicking the box also changes the position to absolute (if not already) and sets the position according to the position method.</p>\n" +
    "	</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/offset/table.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/offset/table.html",
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n" +
    "	\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
    "<html>\n" +
    "	<head>\n" +
    "		<meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\">\n" +
    "		<title>table</title>\n" +
    "		<style type=\"text/css\" media=\"screen\">\n" +
    "			body { margin: 1px; padding: 5px; }\n" +
    "			table { border: 2px solid #000; }\n" +
    "			th, td { border: 1px solid #000; width: 100px; height: 100px; }\n" +
    "			#marker { position: absolute; border: 2px solid #000; width: 50px; height: 50px; background: #ccc; }\n" +
    "		</style>\n" +
    "		<script src=\"../../jquery.js\"></script>\n" +
    "		<script type=\"text/javascript\" charset=\"utf-8\">\n" +
    "			jQuery(function($) {\n" +
    "				$('table, th, td').click(function() {\n" +
    "					$('#marker').css( $(this).offset() );\n" +
    "					return false;\n" +
    "				});\n" +
    "			});\n" +
    "		</script>\n" +
    "	</head>\n" +
    "	<body>\n" +
    "		<table id=\"table-1\">\n" +
    "			<thead>\n" +
    "				<tr valign=\"top\">\n" +
    "					<th id=\"th-1\">th-1</th>\n" +
    "					<th id=\"th-2\">th-2</th>\n" +
    "					<th id=\"th-3\">th-3</th>\n" +
    "				</tr>\n" +
    "			</thead>\n" +
    "			<tbody>\n" +
    "				<tr valign=\"top\">\n" +
    "					<td id=\"td-1\">td-1</td>\n" +
    "					<td id=\"td-2\">td-2</td>\n" +
    "					<td id=\"td-3\">td-3</td>\n" +
    "				</tr>\n" +
    "			</tbody>\n" +
    "		</table>\n" +
    "		<div id=\"marker\"></div>\n" +
    "		<p class=\"instructions\">Click the white box to move the marker to it.</p>\n" +
    "	</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/selector/html5_selector.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/selector/html5_selector.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "<head>\n" +
    "	<meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\">\n" +
    "	<title>jQuery selector - attributes</title>\n" +
    "\n" +
    "	<script src=\"../../jquery.js\"></script>\n" +
    "\n" +
    "	<script id=\"script1\"\n" +
    "			defer\n" +
    "			async></script>\n" +
    "\n" +
    "	<script type=\"text/javascript\">\n" +
    "		document.createElement('video');\n" +
    "		document.createElement('audio');\n" +
    "		document.createElement('article');\n" +
    "		document.createElement('details');\n" +
    "	</script>\n" +
    "</head>\n" +
    "<body>\n" +
    "	<img id=\"img1\"\n" +
    "		 ismap>\n" +
    "\n" +
    "	<hr id=\"hr1\"\n" +
    "		noshade>\n" +
    "\n" +
    "	<form id=\"form1\"\n" +
    "		  name=\"formName\"\n" +
    "		  novalidate\n" +
    "		  formnovalidate>\n" +
    "		<input type=\"text\" id=\"text1\"\n" +
    "			   tabindex=\"1\"\n" +
    "			   name=\"name\"\n" +
    "			   required\n" +
    "			   autofocus\n" +
    "			   readonly>\n" +
    "		<textarea id=\"textarea1\"\n" +
    "				  noresize></textarea>\n" +
    "	</form>\n" +
    "\n" +
    "	<table>\n" +
    "		<tr><td id=\"td1\"\n" +
    "				nowrap></td></tr>\n" +
    "	</table>\n" +
    "\n" +
    "	<iframe id=\"iframe1\"\n" +
    "			src=\"iframe.html\"\n" +
    "			seamless></iframe>\n" +
    "\n" +
    "	<style id=\"style1\"\n" +
    "		   scoped></style>\n" +
    "\n" +
    "	<ol id=\"ol1\"\n" +
    "		reversed></ol>\n" +
    "\n" +
    "	<article id=\"article1\"\n" +
    "			 pubdate></article>\n" +
    "\n" +
    "	<details id=\"details1\"\n" +
    "			 open></details>\n" +
    "\n" +
    "	<div id=\"div1\"\n" +
    "		 nowrap\n" +
    "		 hidden\n" +
    "		 itemscope\n" +
    "		 draggable=\"true\"\n" +
    "		 contenteditable=\"true\"\n" +
    "		 aria-disabled=\"true\">\n" +
    "		<p>My name is <span id=\"span1\"\n" +
    "							spellcheck=\"true\"\n" +
    "							itemprop=\"name\">Elizabeth</span>.</p>\n" +
    "	</div>\n" +
    "\n" +
    "	<audio id=\"audio1\"\n" +
    "		   muted></audio>\n" +
    "\n" +
    "	<video id=\"video1\"\n" +
    "		   loop\n" +
    "		   controls\n" +
    "		   autoplay\n" +
    "		   autobuffer></video>\n" +
    "\n" +
    "	<map id=\"map1\">\n" +
    "		<area id=\"area1\"\n" +
    "			  nohref\n" +
    "			  shape=\"default\">\n" +
    "	</map>\n" +
    "\n" +
    "	<input id=\"check1\"\n" +
    "		   type=\"checkbox\"\n" +
    "		   disabled\n" +
    "		   checked>\n" +
    "\n" +
    "	<select id=\"select1\"\n" +
    "			multiple>\n" +
    "		<option id=\"option1\"\n" +
    "				selected\n" +
    "				value=\"blar\">blar</option>\n" +
    "	</select>\n" +
    "\n" +
    "	<dl id=\"dl\"\n" +
    "		compact>\n" +
    "		<dt>Term</dt><dd>This is the first definition in compact format.</dd>\n" +
    "		<dt>Term</dt><dd>This is the second definition in compact format.</dd>\n" +
    "	</dl>\n" +
    "\n" +
    "	<object id=\"object1\"\n" +
    "			declare></object>\n" +
    "\n" +
    "	<marquee id=\"marquee1\"\n" +
    "			 direction=\"up\"\n" +
    "			 truespeed>Scrolling text (non-standard)</marquee>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/selector/sizzle_cache.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/selector/sizzle_cache.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "<head>\n" +
    "	<meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\">\n" +
    "	<title>jQuery selector - sizzle cache</title>\n" +
    "\n" +
    "	<script src=\"../../jquery.js\"></script>\n" +
    "	<script>\n" +
    "		document.write(\n" +
    "			\"<script>var $cached = jQuery.noConflict(true);<\\x2Fscript>\" +\n" +
    "			\"<script src='\" + document.getElementById(\"jquery-js\").src + \"?overwrite'><\\x2Fscript>\"\n" +
    "		);\n" +
    "	</script>\n" +
    "\n" +
    "</head>\n" +
    "<body>\n" +
    "	<div class=\"test\">\n" +
    "		<a href=\"#\" id=\"collision\">Worlds collide</a>\n" +
    "	</div>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/support/bodyBackground.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/support/bodyBackground.html",
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
    "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\" dir=\"ltr\" id=\"html\">\n" +
    "<head>\n" +
    "	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n" +
    "	<style>\n" +
    "		body {\n" +
    "			background: #000000;\n" +
    "		}\n" +
    "\n" +
    "		div {\n" +
    "			padding: 15px;\n" +
    "			border: 1px solid #999;\n" +
    "			display: inline;\n" +
    "			margin:8px;\n" +
    "		}\n" +
    "	</style>\n" +
    "</head>\n" +
    "<body>\n" +
    "	<div>\n" +
    "		<script src=\"../../jquery.js\"></script>\n" +
    "	</div>\n" +
    "	<script>\n" +
    "		jQuery(function() {\n" +
    "			window.parent.iframeCallback( jQuery( \"body\" ).css( \"backgroundColor\" ), jQuery.support );\n" +
    "		});\n" +
    "	</script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/support/boxSizing.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/support/boxSizing.html",
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "	<meta charset=\"utf-8\">\n" +
    "	<style>\n" +
    "		body {\n" +
    "			zoom: 0.87;\n" +
    "		}\n" +
    "	</style>\n" +
    "</head>\n" +
    "<body>\n" +
    "<script src=\"../../jquery.js\"></script>\n" +
    "<script>\n" +
    "	jQuery(function() {\n" +
    "		window.parent.iframeCallback( jQuery.support.boxSizing );\n" +
    "	});\n" +
    "</script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/support/shrinkWrapBlocks.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/support/shrinkWrapBlocks.html",
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
    "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\" dir=\"ltr\" id=\"html\">\n" +
    "<head>\n" +
    "	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n" +
    "	<style>\n" +
    "		* {\n" +
    "			-webkit-box-sizing: border-box;\n" +
    "			-moz-box-sizing:    border-box;\n" +
    "			box-sizing:         border-box;\n" +
    "		}\n" +
    "	</style>\n" +
    "</head>\n" +
    "<body>\n" +
    "	<div>\n" +
    "		<script src=\"../../jquery.js\"></script>\n" +
    "	</div>\n" +
    "	<script>\n" +
    "		jQuery(function() {\n" +
    "			window.parent.iframeCallback( jQuery.support.shrinkWrapBlocks );\n" +
    "		});\n" +
    "	</script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/support/testElementCrash.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/support/testElementCrash.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n" +
    "	<style>\n" +
    "		body {\n" +
    "			background: url('../1x1.jpg');\n" +
    "		}\n" +
    "	</style>\n" +
    "	<script src=\"../../jquery.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "	<script>\n" +
    "		window.parent.iframeCallback();\n" +
    "	</script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/test.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/test.html",
    "html text<br/>\n" +
    "<script type=\"text/javascript\">/* <![CDATA[ */\n" +
    "testFoo = \"foo\"; jQuery('#foo').html('foo');\n" +
    "ok( true, \"test.html executed\" );\n" +
    "/* ]]> */</script>\n" +
    "<script src=\"data/test.js\"></script>\n" +
    "blabla\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/test2.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/test2.html",
    "<script type=\"text/javascript\">\n" +
    "var testFoo = \"foo\";\n" +
    "jQuery('#foo').html('foo');\n" +
    "ok( true, \"test2.html executed\" );\n" +
    "</script>\n" +
    "");
}]);

angular.module("vendor/jquery/test/data/test3.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/data/test3.html",
    "<div class=\"user\">This is a user</div>\n" +
    "<div class=\"user\">This is a user</div>\n" +
    "<div class=\"teacher\">This is a teacher</div>\n" +
    "");
}]);

angular.module("vendor/jquery/test/delegatetest.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/delegatetest.html",
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "<title>Event Delegation Tests</title>\n" +
    "<script src=\"jquery.js\"></script>\n" +
    "<style>\n" +
    "table {\n" +
    "	border-collapse: collapse;\n" +
    "	empty-cells: show;\n" +
    "}\n" +
    "th {\n" +
    "	text-align: left;\n" +
    "}\n" +
    "thead td {\n" +
    "	width: 11%;\n" +
    "}\n" +
    "tbody td {\n" +
    "	background: #fed;\n" +
    "}\n" +
    "th, td {\n" +
    "	border: 1px solid #bbb;\n" +
    "}\n" +
    "</style>\n" +
    "</head>\n" +
    "<body>\n" +
    "<h2>Delegate Tests (<span id=\"fileversion\">x</span>)</h2>\n" +
    "\n" +
    "<table id=\"changes\">\n" +
    "<thead>\n" +
    "	<tr>\n" +
    "		<th>\n" +
    "			Controls:\n" +
    "		</th>\n" +
    "		<td id=\"select-one\">\n" +
    "			<select>\n" +
    "				<option value='one1'>one1</option>\n" +
    "				<option value='one2'>one2</option>\n" +
    "				<option value='one3'>one3</option>\n" +
    "			</select>\n" +
    "			<select>\n" +
    "				<option value='two1'>two1</option>\n" +
    "				<option value='two2' selected=\"selected\">two2</option>\n" +
    "				<option value='two3'>two3</option>\n" +
    "			</select>\n" +
    "		</td>\n" +
    "		<td id=\"select-mult\">\n" +
    "			<select multiple=\"multiple\">\n" +
    "				<option value='multi1'>multi1</option>\n" +
    "				<option value='multi2'>multi2</option>\n" +
    "				<option value='multi3'>multi3</option>\n" +
    "			</select>\n" +
    "		</td>\n" +
    "		<td id=\"checkbox\">\n" +
    "			<input type=\"checkbox\" name=\"mycheckbox\" id=\"check1\"/>\n" +
    "			<label for=\"check1\">check1</label><br/>\n" +
    "			<input type=\"checkbox\" name=\"mycheckbox\" id=\"check2\"/>\n" +
    "			<label for=\"check2\">check2</label><br />\n" +
    "			<input type=\"checkbox\" name=\"mycheckbox\" id=\"check3\" disabled=\"disabled\"/>\n" +
    "			<label for=\"check3\">check3</label>\n" +
    "		</td>\n" +
    "		<td id=\"radio\">\n" +
    "			<input type=\"radio\" name=\"myradio\" id=\"radio1\"/>\n" +
    "			<label for=\"radio1\">Radio1</label><br/>\n" +
    "			<input type=\"radio\" name=\"myradio\" id=\"radio2\"/>\n" +
    "			<label for=\"radio2\">Radio2</label><br />\n" +
    "			<input type=\"radio\" name=\"myradio\" id=\"radio3\" disabled=\"disabled\"/>\n" +
    "			<label for=\"radio3\">Radio3</label>\n" +
    "		</td>\n" +
    "		<td id=\"file\">\n" +
    "			<input class=\"file_test\" id=\"file1\" type=\"file\"/>\n" +
    "		</td>\n" +
    "		<td id=\"text\">\n" +
    "			<input class='test' value='' id='input' size='10' />\n" +
    "			<input class='test' value='test' id='input2' size='10' readonly=\"readonly\" />\n" +
    "		</td>\n" +
    "		<td id=\"textarea\">\n" +
    "			<textarea rows='2'></textarea>\n" +
    "		</td>\n" +
    "		<td id=\"button\">\n" +
    "			<button name=\"mybutton1\" id=\"button1\">Button</button><br />\n" +
    "			<button name=\"mybutton2\" id=\"button2\"><span>Button w/ child</span></button><br />\n" +
    "			<button name=\"mybutton3\" id=\"button3\" disabled=\"disabled\">Button Disabled</button><br />\n" +
    "			<button name=\"mybutton4\" id=\"button4\" disabled=\"disabled\"><span disabled=\"disabled\">Button, child Disabled</span></button><br />\n" +
    "		</td>\n" +
    "	</tr>\n" +
    "</thead>\n" +
    "<tbody>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "<p>NOTE: Only IE supports propertychange, beforeactivate, beforedeactivate; buttons do not support change events.</p>\n" +
    "\n" +
    "<h2>Submit Tests</h2>\n" +
    "<table>\n" +
    "	<tr>\n" +
    "		<td>\n" +
    "			Submit each:\n" +
    "		</td>\n" +
    "		<td>\n" +
    "			<form action=\"\" id=\"text_submit\">\n" +
    "				<input class='test' type='text' value='Key Return To Submit'/>\n" +
    "			</form>\n" +
    "		</td>\n" +
    "		<td>\n" +
    "			<form action=\"\" id=\"password_submit\">\n" +
    "				<input class='test' type='password' value=''/>\n" +
    "			</form>\n" +
    "		</td>\n" +
    "		<td>\n" +
    "			<form action=\"\" id=\"submit_submit\">\n" +
    "				<input type='submit' value=\"Click Me To Submit\" />\n" +
    "			</form>\n" +
    "		</td>\n" +
    "		<td>$(document).bind('submit')</td>\n" +
    "	</tr>\n" +
    "	<tr>\n" +
    "		<td>Results:</td>\n" +
    "		<td id='textSubmit' class=\"red\">TEXT</td>\n" +
    "		<td id='passwordSubmit' class=\"red\">PASSWORD</td>\n" +
    "		<td id='submitSubmit' class=\"red\">BUTTON</td>\n" +
    "		<td id='boundSubmit' class=\"red\">DOCUMENT</td>\n" +
    "	</tr>\n" +
    "</table>\n" +
    "\n" +
    "	<form id=\"autosub\"><input type=submit name=subme /></form>\n" +
    "\n" +
    "<script type='text/javascript'>\n" +
    "\n" +
    "$(\"#fileversion\").text($.fn.jquery);\n" +
    "\n" +
    "// Try an auto-submit, it should only fire once\n" +
    "$(function(){\n" +
    "	var triggered = false;\n" +
    "	$(\"#autosub input\").trigger(\"keypress\");\n" +
    "	$(\"body\").on(\"submit\", \"#autosub\", function( e ){\n" +
    "		e.preventDefault();\n" +
    "		e.stopPropagation();\n" +
    "		if ( triggered ) {\n" +
    "			alert(\"autosubmit FAIL\");\n" +
    "		}\n" +
    "		triggered = true;\n" +
    "	});\n" +
    "	$(\"#autosub\").submit().remove();\n" +
    "});\n" +
    "\n" +
    "// Events we want to track in row-order\n" +
    "var events = \"bind-change live-change onX-change bind-propertychange live-beforeactivate live-focusin bind-focus live-beforedeactivate live-focusout bind-blur live-click live-keydown\".split(\" \"),\n" +
    "	counter = 0;\n" +
    "	blinker = function(event){\n" +
    "		if ( !counter ) {\n" +
    "			$(\"#changes tbody td\").text(\"\");\n" +
    "		}\n" +
    "		var $el = event.data,\n" +
    "			prev = $el.text();\n" +
    "		prev = prev? prev +\" | \" : \"\";\n" +
    "		return $el\n" +
    "			.text(prev + ++counter+\" \" + (this.value.replace(/^on$/,\"\") || this.id || this.checked || \"\"))\n" +
    "			.css(\"backgroundColor\",\"#0f0\")\n" +
    "			.delay(800)\n" +
    "			.queue(function(next){\n" +
    "				$el.css(\"backgroundColor\",\"#afa\");\n" +
    "				--counter;\n" +
    "				next();\n" +
    "			});\n" +
    "	};\n" +
    "\n" +
    "for ( var i=0; i < events.length; i++ ) {\n" +
    "	var m = events[i].split(\"-\"),\n" +
    "		api = m[0],\n" +
    "		type = m[1],\n" +
    "		$row = $(\"<tr><th>\"+type+\" \"+api+\"</th></tr>\");\n" +
    "\n" +
    "	$(\"#changes thead td\").each(function(){\n" +
    "		var id = \"#\"+this.id,\n" +
    "			$cell = $('<td></td>');\n" +
    "		if ( api == \"onX\" ) {\n" +
    "			$(this).find(\"input, button, select, textarea\").each(function(){\n" +
    "				this[\"on\"+type] = function(e){ e = $.event.fix(e||event); e.data = $cell; blinker.call(this, e); };\n" +
    "			});\n" +
    "		} else if ( api == \"bind\" ) {\n" +
    "			$(this).find(\"input, button, select, textarea\").bind(type, $cell, blinker);\n" +
    "		} else {\n" +
    "			$(id+\" input,\"+id+\" button,\"+id+\" select,\"+id+\" textarea\").live(type, $cell, blinker);\n" +
    "		}\n" +
    "		$row.append($cell);\n" +
    "	});\n" +
    "	$(\"#changes tbody\").append($row);\n" +
    "}\n" +
    "\n" +
    "// Ensure that cloned elements get the delegated event magic; this is\n" +
    "// implementation-specific knowledge but otherwise impossible to test.\n" +
    "// The beforeactivate event attaches a direct-bound change event.\n" +
    "// (Only care about the live change for this third select element.)\n" +
    "var sel1 = $(\"#select-one select:first-child\");\n" +
    "if ( typeof(sel1[0].fireEvent) !== \"undefined\" ) {\n" +
    "	sel1.trigger( \"beforeactivate\" ).clone().appendTo(\"#select-one\");\n" +
    "	//alert($(\"#select-one select\").map(function(){ return this._change_attached || \"undef\"; }).get().join(\"|\"));\n" +
    "}\n" +
    "\n" +
    "jQuery.fn.blink = function(){\n" +
    "	return this\n" +
    "		.css(\"backgroundColor\",\"green\")\n" +
    "		.text( (parseInt(this.text(), 10) || 0) + 1 )\n" +
    "		.delay(700).queue(function(next){\n" +
    "			jQuery(this).css(\"backgroundColor\",\"#afa\");\n" +
    "			next();\n" +
    "		});\n" +
    "};\n" +
    "\n" +
    "jQuery.fn.addSubmitTest = function( id, prevent ) {\n" +
    "	return this.live(\"submit\", function(e){\n" +
    "		if ( prevent ) {\n" +
    "				e.preventDefault();\n" +
    "		}\n" +
    "		jQuery(id).blink();\n" +
    "	});\n" +
    "};\n" +
    "\n" +
    "$(\"#text_submit\").addSubmitTest(\"#textSubmit\", true);\n" +
    "$(\"#password_submit\").addSubmitTest(\"#passwordSubmit\", true);\n" +
    "$(\"#submit_submit\").addSubmitTest(\"#submitSubmit\", true);\n" +
    "$(\"#prog_submit\").addSubmitTest(\"#submitSubmit\", true);\n" +
    "$(document).bind(\"submit\", function(){\n" +
    "	jQuery(\"#boundSubmit\").blink();\n" +
    "});\n" +
    "\n" +
    "</script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/hovertest.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/hovertest.html",
    "<html>\n" +
    "<head>\n" +
    "<title>Hover tests</title>\n" +
    "<script src=\"jquery.js\"></script>\n" +
    "<style>\n" +
    "/* Remove body dimensions so we can test enter/leave to surrounding browser chrome */\n" +
    "body, html {\n" +
    "	border: 0;\n" +
    "	margin: 0;\n" +
    "	padding: 0;\n" +
    "}\n" +
    "p {\n" +
    "	margin: 2px 0;\n" +
    "}\n" +
    ".hover-box {\n" +
    "	background: #f33;\n" +
    "	padding: 3px;\n" +
    "	margin: 10px 40px 20px 0;\n" +
    "}\n" +
    ".hover-status {\n" +
    "	background: #f66;\n" +
    "	padding: 1px;\n" +
    "}\n" +
    ".hover-inside {\n" +
    "	background: #6f6;\n" +
    "	padding: 1px;\n" +
    "	margin: 8px auto;\n" +
    "	width: 40%;\n" +
    "	text-align: center;\n" +
    "}\n" +
    "</style>\n" +
    " </head>\n" +
    " <body>\n" +
    "	<h2>Hover (mouse{over,out,enter,leave}) Tests</h2>\n" +
    "	<p>Be sure to try moving the mouse out of the browser via the left side on each test.</p>\n" +
    "	<div id=\"wrapper\">\n" +
    "\n" +
    "	<div id=\"hoverbox\" class=\"hover-box\">\n" +
    "		<div class=\"hover-status\">\n" +
    "			<button>Activate</button>\n" +
    "			.hover() in/out: <span class=\"ins\">0</span> / <span class=\"outs\">0</span>\n" +
    "		</div>\n" +
    "		<div class=\"hover-inside\">\n" +
    "			Mouse over here should NOT trigger the counter.\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div id=\"liveenterbox\" class=\"hover-box\">\n" +
    "		<div class=\"hover-status\">\n" +
    "			<button>Activate</button>\n" +
    "			Live enter/leave: <span class=\"ins\">0</span> / <span class=\"outs\">0</span>\n" +
    "		</div>\n" +
    "		<div class=\"hover-inside\">\n" +
    "			Mouse over here should NOT trigger the counter.\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div id=\"delegateenterbox\" class=\"hover-box\">\n" +
    "		<div class=\"hover-status\">\n" +
    "			<button>Activate</button>\n" +
    "			Delegated enter/leave: <span class=\"ins\">0</span> / <span class=\"outs\">0</span>\n" +
    "		</div>\n" +
    "		<div class=\"hover-inside\">\n" +
    "			Mouse over here should NOT trigger the counter.\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div id=\"overbox\" class=\"hover-box\">\n" +
    "		<div class=\"hover-status\">\n" +
    "			<button>Activate</button>\n" +
    "			Bind over/out: <span class=\"ins\">0</span> / <span class=\"outs\">0</span>\n" +
    "		</div>\n" +
    "		<div class=\"hover-inside\">\n" +
    "			Mouse over here SHOULD trigger the counter.\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div id=\"liveoverbox\" class=\"hover-box\">\n" +
    "		<div class=\"hover-status\">\n" +
    "			<button>Activate</button>\n" +
    "			Live over/out: <span class=\"ins\">0</span> / <span class=\"outs\">0</span>\n" +
    "		</div>\n" +
    "		<div class=\"hover-inside\">\n" +
    "			Mouse over here SHOULD trigger the counter.\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div id=\"delegateoverbox\" class=\"hover-box\">\n" +
    "		<div class=\"hover-status\">\n" +
    "			<button>Activate</button>\n" +
    "			Delegated over/out: <span class=\"ins\">0</span> / <span class=\"outs\">0</span>\n" +
    "		</div>\n" +
    "		<div class=\"hover-inside\">\n" +
    "			Mouse over here SHOULD trigger the counter.\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	</div> <!-- wrapper -->\n" +
    "\n" +
    "<script>\n" +
    "\n" +
    "$(function(){\n" +
    "\n" +
    "	var x,\n" +
    "		countIns = function() {\n" +
    "			var d = $(this).data();\n" +
    "			$(\"span.ins\", this).text(++d.ins);\n" +
    "		},\n" +
    "		countOuts = function() {\n" +
    "			var d = $(this).data();\n" +
    "			$(\"span.outs\", this).text(++d.outs);\n" +
    "		};\n" +
    "\n" +
    "	// Tests can be activated separately or in combination to check for interference\n" +
    "\n" +
    "	$(\"#hoverbox button\").click(function(){\n" +
    "		$(\"#hoverbox\")\n" +
    "			.data({ ins: 0, outs: 0 })\n" +
    "			.hover( countIns, countOuts );\n" +
    "		$(this).remove();\n" +
    "	});\n" +
    "	$(\"#delegateenterbox button\").click(function(){\n" +
    "		$(\"html\")\n" +
    "			.find(\"#delegateenterbox\").data({ ins: 0, outs: 0 }).end()\n" +
    "			.delegate(\"#delegateenterbox\", \"mouseenter\", countIns )\n" +
    "			.delegate(\"#delegateenterbox\", \"mouseleave\", countOuts );\n" +
    "		$(this).remove();\n" +
    "	});\n" +
    "	$(\"#liveenterbox button\").click(function(){\n" +
    "		$(\"#liveenterbox\")\n" +
    "			.data({ ins: 0, outs: 0 })\n" +
    "			.live(\"mouseenter\", countIns )\n" +
    "			.live(\"mouseleave\", countOuts );\n" +
    "		$(this).remove();\n" +
    "	});\n" +
    "\n" +
    "	$(\"#overbox button\").click(function(){\n" +
    "		$(\"#overbox\")\n" +
    "			.data({ ins: 0, outs: 0 })\n" +
    "			.bind(\"mouseover\", countIns )\n" +
    "			.bind(\"mouseout\", countOuts );\n" +
    "		$(this).remove();\n" +
    "	});\n" +
    "	$(\"#liveoverbox button\").click(function(){\n" +
    "		$(\"#liveoverbox\")\n" +
    "			.data({ ins: 0, outs: 0 })\n" +
    "			.live(\"mouseover\", countIns )\n" +
    "			.live(\"mouseout\", countOuts );\n" +
    "		$(this).remove();\n" +
    "	});\n" +
    "	$(\"#delegateoverbox button\").click(function(){\n" +
    "		$(document)\n" +
    "			.find(\"#delegateoverbox\").data({ ins: 0, outs: 0 }).end()\n" +
    "			.delegate(\"#delegateoverbox\", \"mouseover\", countIns )\n" +
    "			.delegate(\"#delegateoverbox\", \"mouseout\", countOuts );\n" +
    "		$(this).remove();\n" +
    "	});\n" +
    "});\n" +
    "\n" +
    "</script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/index.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/index.html",
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
    "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\" dir=\"ltr\" id=\"html\">\n" +
    "<head>\n" +
    "	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n" +
    "	<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />\n" +
    "	<title>jQuery Test Suite</title>\n" +
    "	<link rel=\"Stylesheet\" media=\"screen\" href=\"qunit/qunit/qunit.css\" />\n" +
    "	<link rel=\"Stylesheet\" media=\"screen\" href=\"data/testsuite.css\" />\n" +
    "	<!-- Includes -->\n" +
    "\n" +
    "	<!-- Allows us to fetch submodule tests when using a no-ajax build -->\n" +
    "	<script src=\"data/jquery-1.9.1.ajax_xhr.min.js\"></script>\n" +
    "\n" +
    "	<script src=\"data/testinit.js\"></script>\n" +
    "\n" +
    "	<script src=\"qunit/qunit/qunit.js\"></script>\n" +
    "	<script>\n" +
    "		(function() {\n" +
    "			var src = \"../dist/jquery.min.js\";\n" +
    "\n" +
    "			// Config parameter to use minified jQuery\n" +
    "			QUnit.config.urlConfig.push({\n" +
    "				id: \"dev\",\n" +
    "				label: \"Load unminified\",\n" +
    "				tooltip: \"Load the development (unminified) jQuery file\"\n" +
    "			});\n" +
    "			if ( QUnit.urlParams.dev ) {\n" +
    "				src = \"../dist/jquery.js\";\n" +
    "			}\n" +
    "\n" +
    "			// Config parameter to force basic code paths\n" +
    "			QUnit.config.urlConfig.push({\n" +
    "				id: \"basic\",\n" +
    "				label: \"Bypass optimizations\",\n" +
    "				tooltip: \"Force use of the most basic code by disabling native querySelectorAll; contains; compareDocumentPosition\"\n" +
    "			});\n" +
    "			if ( QUnit.urlParams.basic ) {\n" +
    "				document.querySelectorAll = null;\n" +
    "				document.documentElement.contains = null;\n" +
    "				document.documentElement.compareDocumentPosition = null;\n" +
    "			}\n" +
    "\n" +
    "			// Load jQuery\n" +
    "			document.write( \"<script id='jquery-js' src='\" + src + \"'><\\x2Fscript>\" );\n" +
    "		})();\n" +
    "	</script>\n" +
    "	<script src=\"data/testrunner.js\"></script>\n" +
    "\n" +
    "	<script src=\"unit/core.js\"></script>\n" +
    "	<script src=\"unit/callbacks.js\"></script>\n" +
    "	<script src=\"unit/deferred.js\"></script>\n" +
    "	<script src=\"unit/support.js\"></script>\n" +
    "	<script src=\"unit/data.js\"></script>\n" +
    "	<script src=\"unit/queue.js\"></script>\n" +
    "	<script src=\"unit/attributes.js\"></script>\n" +
    "	<script src=\"unit/event.js\"></script>\n" +
    "	<script src=\"unit/selector.js\"></script>\n" +
    "	<script src=\"unit/traversing.js\"></script>\n" +
    "	<script src=\"unit/manipulation.js\"></script>\n" +
    "	<script src=\"unit/wrap.js\"></script>\n" +
    "	<script src=\"unit/css.js\"></script>\n" +
    "	<script src=\"unit/serialize.js\"></script>\n" +
    "	<script src=\"unit/ajax.js\"></script>\n" +
    "	<script src=\"unit/effects.js\"></script>\n" +
    "	<script src=\"unit/offset.js\"></script>\n" +
    "	<script src=\"unit/dimensions.js\"></script>\n" +
    "	<script src=\"unit/deprecated.js\"></script>\n" +
    "	<script src=\"unit/exports.js\"></script>\n" +
    "\n" +
    "	<!-- Subproject tests must be last because they replace our test fixture -->\n" +
    "	<script>\n" +
    "		testSubproject( \"Sizzle\", \"../src/sizzle/test/\", /^unit\\/.*\\.js$/ );\n" +
    "	</script>\n" +
    "\n" +
    "	<script>\n" +
    "		// html5shiv, enabling HTML5 elements to be used with jQuery\n" +
    "		( \"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup \" +\n" +
    "			\"mark meter nav output progress section summary time video\"\n" +
    "		).replace(/\\w+/g, function(n) {\n" +
    "			document.createElement(n);\n" +
    "		});\n" +
    "	</script>\n" +
    "</head>\n" +
    "\n" +
    "<body id=\"body\">\n" +
    "	<div id=\"qunit\"></div>\n" +
    "\n" +
    "	<!-- Test HTML -->\n" +
    "	<!-- this iframe is outside the #qunit-fixture so it won't reload constantly wasting time, but it means the tests must be \"safe\" and clean up after themselves -->\n" +
    "	<iframe id=\"loadediframe\" name=\"loadediframe\" style=\"display:none;\" src=\"data/iframe.html\"></iframe>\n" +
    "	<dl id=\"dl\" style=\"position:absolute;top:-32767px;left:-32767px;width:1px;\">\n" +
    "	<div id=\"qunit-fixture\">\n" +
    "		<p id=\"firstp\">See <a id=\"simon1\" href=\"http://simon.incutio.com/archive/2003/03/25/#getElementsBySelector\" rel=\"bookmark\">this blog entry</a> for more information.</p>\n" +
    "		<p id=\"ap\">\n" +
    "			Here are some links in a normal paragraph: <a id=\"google\" href=\"http://www.google.com/\" title=\"Google!\">Google</a>,\n" +
    "			<a id=\"groups\" href=\"http://groups.google.com/\" class=\"GROUPS\">Google Groups (Link)</a>.\n" +
    "			This link has <code><a href=\"http://smin\" id=\"anchor1\">class=\"blog\"</a></code>:\n" +
    "			<a href=\"http://diveintomark.org/\" class=\"blog\" hreflang=\"en\" id=\"mark\">diveintomark</a>\n" +
    "\n" +
    "		</p>\n" +
    "		<div id=\"foo\">\n" +
    "			<p id=\"sndp\">Everything inside the red border is inside a div with <code>id=\"foo\"</code>.</p>\n" +
    "			<p lang=\"en\" id=\"en\">This is a normal link: <a id=\"yahoo\" href=\"http://www.yahoo.com/\" class=\"blogTest\">Yahoo</a></p>\n" +
    "			<p id=\"sap\">This link has <code><a href=\"#2\" id=\"anchor2\">class=\"blog\"</a></code>: <a href=\"http://simon.incutio.com/\" class=\"blog link\" id=\"simon\">Simon Willison's Weblog</a></p>\n" +
    "\n" +
    "		</div>\n" +
    "		<div id=\"nothiddendiv\" style=\"height:1px;background:white;\" class=\"nothiddendiv\">\n" +
    "			<div id=\"nothiddendivchild\"></div>\n" +
    "		</div>\n" +
    "		<span id=\"name+value\"></span>\n" +
    "		<p id=\"first\">Try them out:</p>\n" +
    "		<ul id=\"firstUL\"></ul>\n" +
    "		<ol id=\"empty\"></ol>\n" +
    "		<form id=\"form\" action=\"formaction\">\n" +
    "			<label for=\"action\" id=\"label-for\">Action:</label>\n" +
    "			<input type=\"text\" name=\"action\" value=\"Test\" id=\"text1\" maxlength=\"30\"/>\n" +
    "			<input type=\"text\" name=\"text2\" value=\"Test\" id=\"text2\" disabled=\"disabled\"/>\n" +
    "			<input type=\"radio\" name=\"radio1\" id=\"radio1\" value=\"on\"/>\n" +
    "\n" +
    "			<input type=\"radio\" name=\"radio2\" id=\"radio2\" checked=\"checked\"/>\n" +
    "			<input type=\"checkbox\" name=\"check\" id=\"check1\" checked=\"checked\"/>\n" +
    "			<input type=\"checkbox\" id=\"check2\" value=\"on\"/>\n" +
    "\n" +
    "			<input type=\"hidden\" name=\"hidden\" id=\"hidden1\"/>\n" +
    "			<input type=\"text\" style=\"display:none;\" name=\"foo[bar]\" id=\"hidden2\"/>\n" +
    "\n" +
    "			<input type=\"text\" id=\"name\" name=\"name\" value=\"name\" />\n" +
    "			<input type=\"search\" id=\"search\" name=\"search\" value=\"search\" />\n" +
    "\n" +
    "			<button id=\"button\" name=\"button\" type=\"button\">Button</button>\n" +
    "\n" +
    "			<textarea id=\"area1\" maxlength=\"30\">foobar</textarea>\n" +
    "\n" +
    "			<select name=\"select1\" id=\"select1\">\n" +
    "				<option id=\"option1a\" class=\"emptyopt\" value=\"\">Nothing</option>\n" +
    "				<option id=\"option1b\" value=\"1\">1</option>\n" +
    "				<option id=\"option1c\" value=\"2\">2</option>\n" +
    "				<option id=\"option1d\" value=\"3\">3</option>\n" +
    "			</select>\n" +
    "			<select name=\"select2\" id=\"select2\">\n" +
    "				<option id=\"option2a\" class=\"emptyopt\" value=\"\">Nothing</option>\n" +
    "				<option id=\"option2b\" value=\"1\">1</option>\n" +
    "				<option id=\"option2c\" value=\"2\">2</option>\n" +
    "				<option id=\"option2d\" selected=\"selected\" value=\"3\">3</option>\n" +
    "			</select>\n" +
    "			<select name=\"select3\" id=\"select3\" multiple=\"multiple\">\n" +
    "				<option id=\"option3a\" class=\"emptyopt\" value=\"\">Nothing</option>\n" +
    "				<option id=\"option3b\" selected=\"selected\" value=\"1\">1</option>\n" +
    "				<option id=\"option3c\" selected=\"selected\" value=\"2\">2</option>\n" +
    "				<option id=\"option3d\" value=\"3\">3</option>\n" +
    "				<option id=\"option3e\">no value</option>\n" +
    "			</select>\n" +
    "			<select name=\"select4\" id=\"select4\" multiple=\"multiple\">\n" +
    "				<optgroup disabled=\"disabled\">\n" +
    "					<option id=\"option4a\" class=\"emptyopt\" value=\"\">Nothing</option>\n" +
    "					<option id=\"option4b\" disabled=\"disabled\" selected=\"selected\" value=\"1\">1</option>\n" +
    "					<option id=\"option4c\" selected=\"selected\" value=\"2\">2</option>\n" +
    "				</optgroup>\n" +
    "				<option selected=\"selected\" disabled=\"disabled\" id=\"option4d\" value=\"3\">3</option>\n" +
    "				<option id=\"option4e\">no value</option>\n" +
    "			</select>\n" +
    "			<select name=\"select5\" id=\"select5\">\n" +
    "				<option id=\"option5a\" value=\"3\">1</option>\n" +
    "				<option id=\"option5b\" value=\"2\">2</option>\n" +
    "				<option id=\"option5c\" value=\"1\" data-attr=\"\">3</option>\n" +
    "			</select>\n" +
    "\n" +
    "			<object id=\"object1\" codebase=\"stupid\">\n" +
    "				<param name=\"p1\" value=\"x1\" />\n" +
    "				<param name=\"p2\" value=\"x2\" />\n" +
    "			</object>\n" +
    "\n" +
    "			<span id=\"台北Táiběi\"></span>\n" +
    "			<span id=\"台北\" lang=\"中文\"></span>\n" +
    "			<span id=\"utf8class1\" class=\"台北Táiběi 台北\"></span>\n" +
    "			<span id=\"utf8class2\" class=\"台北\"></span>\n" +
    "			<span id=\"foo:bar\" class=\"foo:bar\"></span>\n" +
    "			<span id=\"test.foo[5]bar\" class=\"test.foo[5]bar\"></span>\n" +
    "\n" +
    "			<foo_bar id=\"foobar\">test element</foo_bar>\n" +
    "		</form>\n" +
    "		<b id=\"floatTest\">Float test.</b>\n" +
    "		<iframe id=\"iframe\" name=\"iframe\"></iframe>\n" +
    "		<form id=\"lengthtest\">\n" +
    "			<input type=\"text\" id=\"length\" name=\"test\"/>\n" +
    "			<input type=\"text\" id=\"idTest\" name=\"id\"/>\n" +
    "		</form>\n" +
    "		<table id=\"table\"></table>\n" +
    "\n" +
    "		<form id=\"name-tests\">\n" +
    "			<!-- Inputs with a grouped name attribute. -->\n" +
    "			<input name=\"types[]\" id=\"types_all\" type=\"checkbox\" value=\"all\" />\n" +
    "			<input name=\"types[]\" id=\"types_anime\" type=\"checkbox\" value=\"anime\" />\n" +
    "			<input name=\"types[]\" id=\"types_movie\" type=\"checkbox\" value=\"movie\" />\n" +
    "		</form>\n" +
    "\n" +
    "		<form id=\"testForm\" action=\"#\" method=\"get\">\n" +
    "			<textarea name=\"T3\" rows=\"2\" cols=\"15\">?\n" +
    "Z</textarea>\n" +
    "			<input type=\"hidden\" name=\"H1\" value=\"x\" />\n" +
    "			<input type=\"hidden\" name=\"H2\" />\n" +
    "			<input name=\"PWD\" type=\"password\" value=\"\" />\n" +
    "			<input name=\"T1\" type=\"text\" />\n" +
    "			<input name=\"T2\" type=\"text\" value=\"YES\" readonly=\"readonly\" />\n" +
    "			<input type=\"checkbox\" name=\"C1\" value=\"1\" />\n" +
    "			<input type=\"checkbox\" name=\"C2\" />\n" +
    "			<input type=\"radio\" name=\"R1\" value=\"1\" />\n" +
    "			<input type=\"radio\" name=\"R1\" value=\"2\" />\n" +
    "			<input type=\"text\" name=\"My Name\" value=\"me\" />\n" +
    "			<input type=\"reset\" name=\"reset\" value=\"NO\" />\n" +
    "			<select name=\"S1\">\n" +
    "				<option value=\"abc\">ABC</option>\n" +
    "				<option value=\"abc\">ABC</option>\n" +
    "				<option value=\"abc\">ABC</option>\n" +
    "			</select>\n" +
    "			<select name=\"S2\" multiple=\"multiple\" size=\"3\">\n" +
    "				<option value=\"abc\">ABC</option>\n" +
    "				<option value=\"abc\">ABC</option>\n" +
    "				<option value=\"abc\">ABC</option>\n" +
    "			</select>\n" +
    "			<select name=\"S3\">\n" +
    "				<option selected=\"selected\">YES</option>\n" +
    "			</select>\n" +
    "			<select name=\"S4\">\n" +
    "				<option value=\"\" selected=\"selected\">NO</option>\n" +
    "			</select>\n" +
    "			<input type=\"submit\" name=\"sub1\" value=\"NO\" />\n" +
    "			<input type=\"submit\" name=\"sub2\" value=\"NO\" />\n" +
    "			<input type=\"image\" name=\"sub3\" value=\"NO\" />\n" +
    "			<button name=\"sub4\" type=\"submit\" value=\"NO\">NO</button>\n" +
    "			<input name=\"D1\" type=\"text\" value=\"NO\" disabled=\"disabled\" />\n" +
    "			<input type=\"checkbox\" checked=\"checked\" disabled=\"disabled\" name=\"D2\" value=\"NO\" />\n" +
    "			<input type=\"radio\" name=\"D3\" value=\"NO\" checked=\"checked\" disabled=\"disabled\" />\n" +
    "			<select name=\"D4\" disabled=\"disabled\">\n" +
    "				<option selected=\"selected\" value=\"NO\">NO</option>\n" +
    "			</select>\n" +
    "			<input id=\"list-test\" type=\"text\" />\n" +
    "			<datalist id=\"datalist\">\n" +
    "				<option value=\"option\"></option>\n" +
    "			</datalist>\n" +
    "		</form>\n" +
    "		<div id=\"moretests\">\n" +
    "			<form>\n" +
    "				<div id=\"checkedtest\" style=\"display:none;\">\n" +
    "					<input type=\"radio\" name=\"checkedtestradios\" checked=\"checked\"/>\n" +
    "					<input type=\"radio\" name=\"checkedtestradios\" value=\"on\"/>\n" +
    "					<input type=\"checkbox\" name=\"checkedtestcheckboxes\" checked=\"checked\"/>\n" +
    "					<input type=\"checkbox\" name=\"checkedtestcheckboxes\" />\n" +
    "				</div>\n" +
    "			</form>\n" +
    "			<div id=\"nonnodes\"><span id=\"nonnodesElement\">hi</span> there <!-- mon ami --></div>\n" +
    "			<div id=\"t2037\">\n" +
    "				<div><div class=\"hidden\">hidden</div></div>\n" +
    "			</div>\n" +
    "			<div id=\"t6652\">\n" +
    "				<div></div>\n" +
    "			</div>\n" +
    "			<div id=\"no-clone-exception\"><object><embed></embed></object></div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div id=\"tabindex-tests\">\n" +
    "			<ol id=\"listWithTabIndex\" tabindex=\"5\">\n" +
    "				<li id=\"foodWithNegativeTabIndex\" tabindex=\"-1\">Rice</li>\n" +
    "				<li id=\"foodNoTabIndex\">Beans</li>\n" +
    "				<li>Blinis</li>\n" +
    "				<li>Tofu</li>\n" +
    "			</ol>\n" +
    "\n" +
    "			<div id=\"divWithNoTabIndex\">I'm hungry. I should...</div>\n" +
    "			<span>...</span><a href=\"#\" id=\"linkWithNoTabIndex\">Eat lots of food</a><span>...</span> |\n" +
    "			<span>...</span><a href=\"#\" id=\"linkWithTabIndex\" tabindex=\"2\">Eat a little food</a><span>...</span> |\n" +
    "			<span>...</span><a href=\"#\" id=\"linkWithNegativeTabIndex\" tabindex=\"-1\">Eat no food</a><span>...</span>\n" +
    "			<span>...</span><a id=\"linkWithNoHrefWithNoTabIndex\">Eat a burger</a><span>...</span>\n" +
    "			<span>...</span><a id=\"linkWithNoHrefWithTabIndex\" tabindex=\"1\">Eat some funyuns</a><span>...</span>\n" +
    "			<span>...</span><a id=\"linkWithNoHrefWithNegativeTabIndex\" tabindex=\"-1\">Eat some funyuns</a><span>...</span>\n" +
    "			<input id=\"inputWithoutTabIndex\"/>\n" +
    "			<button id=\"buttonWithoutTabIndex\"></button>\n" +
    "			<textarea id=\"textareaWithoutTabIndex\"></textarea>\n" +
    "			<menu type=\"popup\">\n" +
    "				<menuitem id=\"menuitemWithoutTabIndex\" command=\"submitbutton\" default/>\n" +
    "			</menu>\n" +
    "		</div>\n" +
    "\n" +
    "		<div id=\"liveHandlerOrder\">\n" +
    "			<span id=\"liveSpan1\"><a href=\"#\" id=\"liveLink1\"></a></span>\n" +
    "			<span id=\"liveSpan2\"><a href=\"#\" id=\"liveLink2\"></a></span>\n" +
    "		</div>\n" +
    "\n" +
    "		<div id=\"siblingTest\">\n" +
    "			<em id=\"siblingfirst\">1</em>\n" +
    "			<em id=\"siblingnext\">2</em>\n" +
    "			<em id=\"siblingthird\">\n" +
    "				<em id=\"siblingchild\">\n" +
    "					<em id=\"siblinggrandchild\">\n" +
    "						<em id=\"siblinggreatgrandchild\"></em>\n" +
    "					</em>\n" +
    "				</em>\n" +
    "			</em>\n" +
    "			<span id=\"siblingspan\"></span>\n" +
    "		</div>\n" +
    "		<div id=\"fx-test-group\" style=\"position: absolute; width: 1px; height: 1px; overflow: hidden;\">\n" +
    "			<div id=\"fx-queue\" name=\"test\">\n" +
    "				<div id=\"fadein\" class='chain-test' name='div'>fadeIn<div>fadeIn</div></div>\n" +
    "				<div id=\"fadeout\" class='chain-test chain-test-out'>fadeOut<div>fadeOut</div></div>\n" +
    "\n" +
    "				<div id=\"show\" class='chain-test'>show<div>show</div></div>\n" +
    "				<div id=\"hide\" class='chain-test chain-test-out'>hide<div>hide</div></div>\n" +
    "				<div id=\"easehide\" class='chain-test chain-test-out'>hide<div>hide</div></div>\n" +
    "\n" +
    "				<div id=\"togglein\" class='chain-test'>togglein<div>togglein</div></div>\n" +
    "				<div id=\"toggleout\" class='chain-test chain-test-out'>toggleout<div>toggleout</div></div>\n" +
    "				<div id=\"easetoggleout\" class='chain-test chain-test-out'>toggleout<div>toggleout</div></div>\n" +
    "\n" +
    "				<div id=\"slideup\" class='chain-test'>slideUp<div>slideUp</div></div>\n" +
    "				<div id=\"slidedown\" class='chain-test chain-test-out'>slideDown<div>slideDown</div></div>\n" +
    "				<div id=\"easeslideup\" class='chain-test'>slideUp<div>slideUp</div></div>\n" +
    "\n" +
    "				<div id=\"slidetogglein\" class='chain-test'>slideToggleIn<div>slideToggleIn</div></div>\n" +
    "				<div id=\"slidetoggleout\" class='chain-test chain-test-out'>slideToggleOut<div>slideToggleOut</div></div>\n" +
    "\n" +
    "				<div id=\"fadetogglein\" class='chain-test'>fadeToggleIn<div>fadeToggleIn</div></div>\n" +
    "				<div id=\"fadetoggleout\" class='chain-test chain-test-out'>fadeToggleOut<div>fadeToggleOut</div></div>\n" +
    "\n" +
    "				<div id=\"fadeto\" class='chain-test'>fadeTo<div>fadeTo</div></div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div id=\"fx-tests\"></div>\n" +
    "			<span id=\"display\"></span>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	</dl>\n" +
    "	<map name=\"imgmap\" id=\"imgmap\">\n" +
    "		<area shape=\"rect\" coords=\"0,0,200,50\">\n" +
    "	</map>\n" +
    "\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/localfile.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/localfile.html",
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
    "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\" dir=\"ltr\" id=\"html\">\n" +
    "<head>\n" +
    "	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n" +
    "	<title>jQuery Local File Test</title>\n" +
    "	<!-- Includes -->\n" +
    "	<script src=\"jquery.js\"></script>\n" +
    "	<style>\n" +
    "		.error { color: red; }\n" +
    "		.success { color: green; }\n" +
    "	</style>\n" +
    "</head>\n" +
    "<body>\n" +
    "	<h1>jQuery Local File Test</h1>\n" +
    "	<h2>\n" +
    "		Introduction\n" +
    "	</h2>\n" +
    "	<ul>\n" +
    "		<li>\n" +
    "			Access this file using the \"file:\" protocol,\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			two green \"OK\" strings must appear below,\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			Empty local files will issue errors, it's a known limitation.\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "	<h2>\n" +
    "		Results\n" +
    "	</h2>\n" +
    "	<ul>\n" +
    "		<li>\n" +
    "			Success:\n" +
    "			<span id=\"success\">\n" +
    "			</span>\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			Error:\n" +
    "			<span id=\"error\">\n" +
    "			</span>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "	<h2>\n" +
    "		Logs:\n" +
    "	</h2>\n" +
    "	<ul id=\"log\">\n" +
    "	</ul>\n" +
    "	<script>\n" +
    "		var logUL = jQuery( \"#log\" );\n" +
    "		function doLog( message, args ) {\n" +
    "			jQuery( \"<li />\").appendTo( logUL ).text( message + ': \"' + Array.prototype.join.call( args, '\" - \"' ) + '\"' );\n" +
    "		}\n" +
    "		jQuery.ajax( \"./data/badjson.js\" , {\n" +
    "			context: jQuery( \"#success\" ),\n" +
    "			dataType: \"text\"\n" +
    "		}).success(function( data, _, xhr ) {\n" +
    "			doLog( \"Success (\" + xhr.status + \")\" , arguments );\n" +
    "			this.addClass( data ? \"success\" : \"error\" ).text( \"OK\" );\n" +
    "		}).error(function( xhr ) {\n" +
    "			doLog( \"Success (\" + xhr.status + \")\" , arguments );\n" +
    "			this.addClass( \"error\" ).text( \"FAIL\" );\n" +
    "		});\n" +
    "		jQuery.ajax( \"./data/doesnotexist.ext\" , {\n" +
    "			context: jQuery( \"#error\" ),\n" +
    "			dataType: \"text\"\n" +
    "		}).error(function( xhr ) {\n" +
    "			doLog( \"Error (\" + xhr.status + \")\" , arguments );\n" +
    "			this.addClass( \"success\" ).text( \"OK\" );\n" +
    "		}).success(function( data, _, xhr ) {\n" +
    "			doLog( \"Error (\" + xhr.status + \")\" , arguments );\n" +
    "			this.addClass( \"error\" ).text( \"FAIL\" );\n" +
    "		});\n" +
    "	</script>\n" +
    "</body>\n" +
    "");
}]);

angular.module("vendor/jquery/test/networkerror.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/networkerror.html",
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<!--\n" +
    "	Test for #8135\n" +
    "\n" +
    "	Thanks John Firebaugh for this test page based on his gist\n" +
    "	https://gist.github.com/807090\n" +
    "\n" +
    "	Access this page through a web server, then stop said server and click the button.\n" +
    "-->\n" +
    "<head>\n" +
    "	<title>\n" +
    "		jQuery Network Error Test for Firefox\n" +
    "	</title>\n" +
    "	<style>\n" +
    "		div { margin-top: 10px; }\n" +
    "	</style>\n" +
    "	<script src=\"jquery.js\"></script>\n" +
    "	<script type=\"text/javascript\">\n" +
    "	$('button').live('click', function () {\n" +
    "		$.ajax({\n" +
    "			url: '/',\n" +
    "			error: function() {\n" +
    "				console.log( \"abort\", arguments );\n" +
    "			}\n" +
    "		}).abort();\n" +
    "		$.ajax({\n" +
    "			url: '/',\n" +
    "			error: function() {\n" +
    "				console.log( \"complete\", arguments );\n" +
    "			}\n" +
    "		});\n" +
    "		return false;\n" +
    "	})\n" +
    "	</script>\n" +
    "</head>\n" +
    "<body>\n" +
    "	<h1>\n" +
    "		jQuery Network Error Test for Firefox\n" +
    "	</h1>\n" +
    "	<div>\n" +
    "		This is a test page for\n" +
    "		<a href=\"http://bugs.jquery.com/ticket/8135\">\n" +
    "			#8135\n" +
    "		</a>\n" +
    "		which was reported in Firefox when accessing properties\n" +
    "		of an XMLHttpRequest object after a network error occurred.\n" +
    "	</div>\n" +
    "	<div>Take the following steps:</div>\n" +
    "	<ol>\n" +
    "		<li>\n" +
    "			make sure you accessed this page through a web server,\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			stop the web server,\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			open the console,\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			click this\n" +
    "			<button>button</button>\n" +
    "			,\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			wait for both requests to fail.\n" +
    "		</li>\n" +
    "	</ol>\n" +
    "	<div>\n" +
    "		Test passes if you get two log lines:\n" +
    "		<ul>\n" +
    "			<li>\n" +
    "				the first starting with \"abort\",\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				the second starting with \"complete\",\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "	<div>\n" +
    "		Test fails if the browser notifies an exception.\n" +
    "	</div>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/jquery/test/readywait.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/jquery/test/readywait.html",
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<!--\n" +
    "	Test for jQuery.holdReady. Needs to be a\n" +
    "	standalone test since it deals with DOM\n" +
    "	ready.\n" +
    "-->\n" +
    "<head>\n" +
    "	<title>\n" +
    "		jQuery.holdReady Test\n" +
    "	</title>\n" +
    "	<style>\n" +
    "		div { margin-top: 10px; }\n" +
    "		#output { background-color: green }\n" +
    "		#expectedOutput { background-color: green }\n" +
    "	</style>\n" +
    "	<script src=\"jquery.js\"></script>\n" +
    "\n" +
    "	<!-- Load the script loader that uses\n" +
    "		jQuery.readyWait -->\n" +
    "	<script src=\"data/readywaitloader.js\"></script>\n" +
    "\n" +
    "	<script type=\"text/javascript\">\n" +
    "	jQuery(function() {\n" +
    "		// The delayedMessage is defined by\n" +
    "		// the readywaitasset.js file, so the\n" +
    "		// next line will only work if this DOM\n" +
    "		// ready callback is called after readyWait\n" +
    "		// has been decremented by readywaitloader.js\n" +
    "		// If an error occurs.\n" +
    "		jQuery(\"#output\").append(delayedMessage);\n" +
    "	});\n" +
    "	</script>\n" +
    "</head>\n" +
    "<body>\n" +
    "	<h1>\n" +
    "		jQuery.holdReady Test\n" +
    "	</h1>\n" +
    "	<p>\n" +
    "		This is a test page for jQuery.readyWait and jQuery.holdReady,\n" +
    "		see\n" +
    "		<a href=\"http://bugs.jquery.com/ticket/6781\">#6781</a>\n" +
    "		and\n" +
    "		<a href=\"http://bugs.jquery.com/ticket/8803\">#8803</a>.\n" +
    "	</p>\n" +
    "	<p>\n" +
    "	Test for jQuery.holdReady, which can be used\n" +
    "	by plugins and other scripts to indicate something\n" +
    "	important to the page is still loading and needs\n" +
    "	to block the DOM ready callbacks that are registered\n" +
    "	with jQuery.\n" +
    "	</p>\n" +
    "	<p>\n" +
    "	Script loaders are the most likely kind of script\n" +
    "	to use jQuery.holdReady, but it could be used by\n" +
    "	other things like a script that loads a CSS file\n" +
    "	and wants to pause the DOM ready callbacks.\n" +
    "	</p>\n" +
    "	<p>\n" +
    "	<strong>Expected Result</strong>: The text\n" +
    "	<span id=\"expectedOutput\">It Worked!</span>\n" +
    "	appears below after about <strong>2 seconds.</strong>\n" +
    "	</p>\n" +
    "	<p>\n" +
    "	If there is an error in the console,\n" +
    "	or the text does not show up, then the test failed.\n" +
    "	</p>\n" +
    "	<div id=\"output\"></div>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/mapbox-gl-leaflet/examples/basic.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/mapbox-gl-leaflet/examples/basic.html",
    "<html>\n" +
    "<head>\n" +
    "    <title>WebGL</title>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <style>#map { width: 800px; height: 600px; }</style>\n" +
    "\n" +
    "    <!-- Leaflet -->\n" +
    "    <link rel=\"stylesheet\" href=\"http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css\" />\n" +
    "    <script src=\"http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js\"></script>\n" +
    "\n" +
    "    <!-- Mapbox GL -->\n" +
    "    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.2.1/mapbox-gl.css' rel='stylesheet' />\n" +
    "    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.2.1/mapbox-gl.js'></script>\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "<div id=\"map\"></div>\n" +
    "\n" +
    "<script src=\"../leaflet-mapbox-gl.js\"></script>\n" +
    "<script>\n" +
    "\n" +
    "var token = location.hash.replace('#', '');\n" +
    "if (!token) {\n" +
    "    token = prompt('Mapbox Access Token');\n" +
    "}\n" +
    "\n" +
    "var map = L.map('map').setView([38.912753, -77.032194], 15);\n" +
    "\n" +
    "L.marker([38.912753, -77.032194])\n" +
    "    .bindPopup(\"Hello <b>Leaflet GL</b>!<br>Whoa, it works!\")\n" +
    "    .addTo(map)\n" +
    "    .openPopup();\n" +
    "\n" +
    "var gl = L.mapboxGL({\n" +
    "    token: token,\n" +
    "    style: 'https://www.mapbox.com/mapbox-gl-styles/styles/bright-v4.json'\n" +
    "}).addTo(map);\n" +
    "\n" +
    "</script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/mapbox-gl-leaflet/examples/cluster.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/mapbox-gl-leaflet/examples/cluster.html",
    "<html>\n" +
    "<head>\n" +
    "    <title>WebGL</title>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <style>#map { width: 800px; height: 600px; }</style>\n" +
    "\n" +
    "    <!-- Leaflet -->\n" +
    "    <link rel=\"stylesheet\" href=\"http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css\" />\n" +
    "    <script src=\"http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js\"></script>\n" +
    "\n" +
    "    <!-- Mapbox GL -->\n" +
    "    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.2.1/mapbox-gl.css' rel='stylesheet' />\n" +
    "    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.2.1/mapbox-gl.js'></script>\n" +
    "\n" +
    "    <!-- Leaflet.MarkerCluster -->\n" +
    "    <script src='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster.js'></script>\n" +
    "    <link href='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/MarkerCluster.css' rel='stylesheet' />\n" +
    "    <link href='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/MarkerCluster.Default.css' rel='stylesheet' />\n" +
    "\n" +
    "    <!-- test data -->\n" +
    "    <script src=\"https://www.mapbox.com/mapbox.js/assets/data/realworld.388.js\"></script>\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "<div id=\"map\"></div>\n" +
    "\n" +
    "<script src=\"../leaflet-mapbox-gl.js\"></script>\n" +
    "<script>\n" +
    "\n" +
    "var map = L.map('map', {maxZoom: 17}).setView([-37.821, 175.219], 16);\n" +
    "\n" +
    "var token = location.hash.replace('#', '');\n" +
    "if (!token) {\n" +
    "    token = prompt('Mapbox Access Token');\n" +
    "}\n" +
    "\n" +
    "var gl = L.mapboxGL({\n" +
    "    token: token,\n" +
    "    style: 'https://www.mapbox.com/mapbox-gl-styles/styles/bright-v4.json'\n" +
    "}).addTo(map);\n" +
    "\n" +
    "var markers = L.markerClusterGroup();\n" +
    "\n" +
    "for (var i = 0; i < addressPoints.length; i++) {\n" +
    "    var a = addressPoints[i];\n" +
    "    var title = a[2];\n" +
    "    var marker = L.marker(new L.LatLng(a[0], a[1]), { title: title });\n" +
    "    marker.bindPopup(title);\n" +
    "    markers.addLayer(marker);\n" +
    "}\n" +
    "\n" +
    "map.addLayer(markers);\n" +
    "\n" +
    "</script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/messageformat/doc/index.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("vendor/messageformat/doc/MessageFormat.formatters.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("vendor/messageformat/doc/MessageFormat.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("vendor/messageformat/doc/messageformat.js.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("vendor/messageformat/doc/Runtime.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("vendor/messageformat/example/index.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("vendor/sprintf/demo/angular.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/sprintf/demo/angular.html",
    "<!doctype html>\n" +
    "<html ng-app=\"app\">\n" +
    "<head>\n" +
    "    <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.3/angular.min.js\"></script>\n" +
    "    <script src=\"../src/sprintf.js\"></script>\n" +
    "    <script src=\"../src/angular-sprintf.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "    <pre>{{ \"%+010d\"|sprintf:-123 }}</pre>\n" +
    "    <pre>{{ \"%+010d\"|vsprintf:[-123] }}</pre>\n" +
    "    <pre>{{ \"%+010d\"|fmt:-123 }}</pre>\n" +
    "    <pre>{{ \"%+010d\"|vfmt:[-123] }}</pre>\n" +
    "    <pre>{{ \"I've got %2$d apples and %1$d oranges.\"|fmt:4:2 }}</pre>\n" +
    "    <pre>{{ \"I've got %(apples)d apples and %(oranges)d oranges.\"|fmt:{apples: 2, oranges: 4} }}</pre>\n" +
    "\n" +
    "    <script>\n" +
    "        angular.module(\"app\", [\"sprintf\"])\n" +
    "    </script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("vendor/ui-leaflet/index.html", []).run(["$templateCache", function ($templateCache) {
  "use strict";
  $templateCache.put("vendor/ui-leaflet/index.html",
    "<!DOCTYPE html>\n" +
    "<html ng-app=\"mainPage\" lang=\"en\">\n" +
    "<head>\n" +
    "    <meta charset=\"UTF-8\">\n" +
    "    <!--<meta name=\"fragment\" content=\"!\">-->\n" +
    "    <meta name=\"keywords\" content=\"angularjs,leaflet,openstreetmap,javascript,directive,plugin,google maps\">\n" +
    "    <meta name=\"description\" content=\"Leaflet directive for AngularJS\">\n" +
    "    <title>Leaflet directive for AngularJS</title>\n" +
    "    <link rel=\"stylesheet\" href=\"bower_components/bootstrap/dist/css/bootstrap.min.css\">\n" +
    "    <link rel=\"stylesheet\" href=\"bower_components/leaflet/dist/leaflet.css\" />\n" +
    "    <link rel=\"stylesheet\" href=\"bower_components/highlightjs/styles/github.css\" />\n" +
    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"http://cloud.github.com/downloads/lafeber/world-flags-sprite/flags32.css\" />\n" +
    "    <link rel=\"stylesheet\" href=\"website/css/style.css\" />\n" +
    "</head>\n" +
    "\n" +
    "<body ng-cloak ng-controller=\"MainController\">\n" +
    "    <div class=\"container\" ng-controller=\"HeaderController\">\n" +
    "        <header class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "            <div class=\"navbar-header\">\n" +
    "                <a href=\"#!/\" class=\"navbar-brand\">ui-leaflet</a>\n" +
    "            </div>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li ng-class=\"{ active: activeTab == 'getting-started' || activeTab == '' }\"><a href=\"#!/getting-started\">Getting started</a></li>\n" +
    "                <li ng-class=\"{ active: activeTab == 'examples' }\"><a ng-href=\"#!/examples/simple-map\">Examples</a></li>\n" +
    "                <li ng-class=\"{ active: activeTab == 'howto-extend' }\"><a ng-href=\"#!/howto-extend\">How to extend</a></li>\n" +
    "                <li><a href=\"http://github.com/angular-ui/ui-leaflet\">Github repository</a></li>\n" +
    "            </ul>\n" +
    "        </header>\n" +
    "        <div class=\"banner\">\n" +
    "            <a class=\"forkme\" href=\"https://github.com/angular-ui/ui-leaflet\" rel=\"external\">\n" +
    "                <img src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png\" alt=\"Fork me on GitHub\">\n" +
    "            </a>\n" +
    "            <leaflet center=\"center\" defaults=\"defaults\" events=\"events\" id=\"header\"></leaflet>\n" +
    "        </div>\n" +
    "        <div class=\"bottom-banner\">\n" +
    "            <div class=\"container\">\n" +
    "                Simple to use directive for easy embedding and interacting with a map managed with the <a href=\"http://leafletjs.com/\">leaflet map library</a> on an <a href=\"http://angularjs.org\">AngularJS</a> application.\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"container content\">\n" +
    "        <ng-view></ng-view>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"container footer\">\n" +
    "        <footer role=\"contentinfo\">\n" +
    "            <p class=\"pull-right\">Page built with <a href=\"http://leafletjs.com\">LeafletJS</a>, <a href=\"http://angularjs.org/\">AngularJS</a> and <a href=\"http://getbootstrap.com/\">Bootstrap</a></p>\n" +
    "        </footer>\n" +
    "    </div>\n" +
    "\n" +
    "    <script src=\"https://maps.googleapis.com/maps/api/js?libraries=geometry&sensor=false\"></script>\n" +
    "    <script src=\"bower_components/jquery/dist/jquery.min.js\"></script>\n" +
    "    <script src=\"bower_components/leaflet/dist/leaflet.js\"></script>\n" +
    "    <script src=\"bower_components/leaflet-plugins/layer/tile/Google.js\"></script>\n" +
    "    <script src=\"bower_components/highlightjs/highlight.pack.js\"></script>\n" +
    "    <script src=\"bower_components/bootstrap/dist/js/bootstrap.min.js\"></script>\n" +
    "    <script src=\"bower_components/angular/angular.js\"></script>\n" +
    "    <script src=\"bower_components/angular-route/angular-route.min.js\"></script>\n" +
    "    <script src=\"bower_components/angular-highlightjs/angular-highlightjs.min.js\"></script>\n" +
    "    <script src=\"bower_components/angular-simple-logger/dist/angular-simple-logger.js\"></script>\n" +
    "    <script src=\"dist/ui-leaflet.js\"></script>\n" +
    "    <script src=\"website/dist/js/ui-leaflet-webpage.js\"></script>\n" +
    "</body>\n" +
    "\n" +
    "</html>\n" +
    "");
}]);
