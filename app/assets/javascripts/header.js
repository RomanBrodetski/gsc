

$(document).scroll(function() {
  var scroll = $(document).scrollTop();
  var lineHeight = 70;
  var imgHeight = 36;
  var animation = $( "#header" )
  var animation_img = $('#logo img')
  
  $('#slider').css('top',$(document).scrollTop() / 1.3);
  
  if (scroll >= 10) {
    animation_img = animation_img.stop().animate({ 'height': [ 30]}, 50)
    animation = animation.stop().animate({ "line-height": [ 40]}, 50);
  }
  else {
    animation_img = animation_img.stop().animate({ 'height': [ 36]}, 50)
    animation = animation.stop().animate({ "line-height": [ 70]}, 50);
  }
});

