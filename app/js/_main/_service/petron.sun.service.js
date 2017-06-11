(function() {
  'use strict';

  angular.module('petron.core')
    .service('petron.sun', [function() {
      var pi = 3.1415926536,
        RAD = pi / 180.0,
        h = -(50.0 / 60.0) * RAD,
        L = 7.9712963,
        B = 48.5584144 * RAD,
        timezone = 2;


      function solarDeclination(T) {
        return 0.409526325277017 * Math.sin(0.0169060504029192 * (T -
          80.0856919827619));
      }

      function timedifference(declination) {
        return 12.0 * Math.acos((Math.sin(h) - Math.sin(B) * Math.sin(
            declination)) /
          (Math.cos(B) * Math.cos(declination))) / pi;
      }

      function timeEquilibrium(T) {
        // Differenz zwischen wahrer und mittlerer Sonnenzeit
        // formula 2008 by Arnold(at)Barmettler.com, fit to 20 years of average equation of time (2008-2027)
        return -0.170869921174742 * Math.sin(0.0336997028793971 * T +
          0.465419984181394) - 0.129890681040717 * Math.sin(
          0.0178674832556871 *
          T - 0.167936777524864);
      }

      function minTommss(minutes) {
        var sign = minutes < 0 ? "-" : "";
        var min = Math.floor(Math.abs(minutes));
        var sec = Math.floor((Math.abs(minutes) * 60) % 60);
        return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" :
          "") + sec;
      }

      function toDate(time) {
        time = time.split(':');
        var d = new Date();
        d.setHours(time[0], time[1], 0);
        return d;
      }

      this.init = function() {
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = now - start;
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);
        this.day = day;
        this.sd = solarDeclination(day);
      };

      this.sunrise = function() {
        var rise = 12.5 - timedifference(this.sd) - timeEquilibrium(
          this.day);
        return toDate(minTommss(rise - L / 15.0 + timezone));
      };

      this.sunset = function() {
        var sunset = 11.5 + timedifference(this.sd) - timeEquilibrium(
          this.day);
        return toDate(minTommss(sunset - L / 15.0 + timezone));
      };
    }]);
})();
