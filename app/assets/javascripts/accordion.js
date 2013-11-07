(function($) {
    
  var allPanels = $('.accordion > dd').hide();
    
  $('.accordion > dt').click(function() {
    // allPanels.slideUp();
    $(this).toggleClass("opened").next().slideToggle();
    return false;
  });

})(jQuery);