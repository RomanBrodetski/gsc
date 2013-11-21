var initTop = 237

$(function(){
   $("html").niceScroll();
 }
  );

$(document).scroll(function() {
  var scroll = $(document).scrollTop();
  var lineHeight = 70;
  var imgHeight = 36;
  var animation = $( "#header" )
  var animation_img = $('#logo img')

  // $('#slider').css('top', $(document).scrollTop() / 1.3);
  // $('.slider-content').animate('top', initTop - $(document).scrollTop() / 2.4)

  $('.slider-content').animate('opacity', (450 - $(document).scrollTop()) / 450 )

  if (scroll >= 15) {
    // animation_img = animation_img.stop().animate({ 'height': [ 30, 'swing']}, 70)
    animation = animation.stop().animate({ "line-height": [ 50, 'swing']}, 70);
  }
  else {
    // animation_img = animation_img.stop().animate({ 'height': [ 36, 'swing']}, 70)
    animation = animation.stop().animate({ "line-height": [ 70, 'swing']}, 70);
  }
});

