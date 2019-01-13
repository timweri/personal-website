//=require plugins/prevent-console-errors.js
//=require ../../../node_modules/jquery/dist/jquery.min.js
//=require plugins/TweenMax.min.js
//=require plugins/TextPlugin.min.js
//=require plugins/ScrollMagic.min.js
//=require plugins/animation.gsap.min.js
//=require plugins/animation.velocity.min.js
//=require plugins/debug.addIndicators.min.js
//=require plugins/slick.min.js
//=require plugins/delaunay.js
//=require plugins/fullpage.min.js
//=require plugins/scrolloverflow.min.js
//=require scripts/BackgroundAnimation.js
//=require scripts/PinBackgroundMagicScroll.js
//=require scripts/HeaderNameAnimation.js
//=require scripts/RecentWorkSlick.js
//=require scripts/FullPage.js

$(function() {

  //Breakpoint Checker
  //source: https://www.lullabot.com/articles/importing-css-breakpoints-into-javascript

  var breakpoint = {};
  breakpoint.refreshValue = function() {
    this.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
  };

  $(window).resize(function() {
    breakpoint.refreshValue();
    // Do other things on breakpoint refresh here
  }).resize();

});
