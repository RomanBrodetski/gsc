

$(document).scroll(function() {
  var scroll = $(document).scrollTop();
  var lineHeight = 70;
  
  $('#slider').css('top',$(document).scrollTop() / 1.3);
  
  if (scroll <= 15 && scroll >= 0) {
    $('#header').css('line-height', lineHeight-scroll + "px");
  }
});

