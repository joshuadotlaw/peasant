var Jesse = new function() {

  var bigCookieEl = document.getElementById('bigCookie');
  var goldenCookieEl = document.getElementById('goldenCookie');

  var bigCookieClicker = 0;
  var goldenCookieClicker = 0;

  var stopBigCookieClicker = function() {

    if (bigCookieClicker > 0) {
      clearInterval(bigCookieClicker);
      bigCookieClicker = 0;
      console.log('Big cookie clicker stopped.');
    }

  };

  var startBigCookieClicker = function(interval) {

    interval = typeof interval !== 'undefined' ? interval : 5;

    stopBigCookieClicker();

    bigCookieClicker = setInterval(function() {
      bigCookieEl.click();
    }, interval);

    console.log('Big cookie clicker started: ' + interval + 'ms interval.');

  };

  var stopGoldenCookieClicker = function() {

    if (goldenCookieClicker > 0) {
      clearInterval(goldenCookieClicker);
      goldenCookieClicker = 0;
      console.log('Golden cookie clicker stopped.');
    }

  };

  var startGoldenCookieClicker = function(interval) {

    interval = typeof interval !== 'undefined' ? interval : 3000;

    stopGoldenCookieClicker();

    goldenCookieClicker = setInterval(function() {
      if (Game.goldenCookie.life > 0) {
        goldenCookieEl.click();
      }
    }, interval);

    console.log('Golden cookie clicker started.');

  };

  this.bake = function(interval) {

    interval = typeof interval !== 'undefined' ? interval : 5;

    if (interval === 0) {
      stopBigCookieClicker();
    } else {
      startBigCookieClicker(interval);
    }

  };

  this.hunt = function() {

    if (goldenCookieClicker > 0) {
      stopGoldenCookieClicker();
    } else {
      startGoldenCookieClicker();
    }

  };

}
