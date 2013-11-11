$(document).scroll(function() {
  $('#slider').css('top',$(document).scrollTop() / 1.3);
  var scroll = $(document).scrollTop();
  var padd = 20

  if (scroll <= 15 && scroll >= 0) {
    $('#header').css('padding-top', padd-scroll + "px").css('padding-bottom', padd-scroll + "px");
  }
});
