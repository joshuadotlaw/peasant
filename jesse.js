var bigCookieEl = document.getElementById('bigCookie');
var goldenCookieEl = document.getElementById('goldenCookie');

var clicker = 0;
var looper = 0;

var Jesse = new function() {

  this.bake = function(interval) {
    interval = typeof interval !== 'undefined' ? interval : 2;
    if (clicker > 0) {
      clearInterval(clicker);
      if (interval === 0) {
        console.log('Jesse has stopped baking.');
      }
    }
    if (interval > 0) {
      clicker = setInterval(function(){bigCookieEl.click()}, interval);
      console.log('Jesse has started baking. (' + interval + 'ms interval)');
    }
  };

  this.snagThoseSpecialCookies = function() {
    if (looper > 0) {
      clearInterval(looper);
      looper = 0;
      console.log('Jesse has stopped snagging those "special" cookies.');
    } else {
      looper = setInterval(function(){goldenCookieEl.click()}, 3000);
      console.log('Jesse has started snagging those "special" cookies.');
    }
  };

};
