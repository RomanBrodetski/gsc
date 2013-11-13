(function($) {
    
  var allPanels = $('.accordion > dd').hide();
    
  $('.accordion > dt').click(function() {
    // allPanels.slideUp();
    $(this).toggleClass("opened").next().slideToggle();
    return false;
  });

  //  var allPanels = $('.accordion > li:nth-child(2n)').hide();
    
  // $('.accordion > li:nth-child(2n+1)').click(function() {
  //   // allPanels.slideUp();
  //   $(this).toggleClass("opened").next().slideToggle();
  //   return false;
  // });

})(jQuery);



