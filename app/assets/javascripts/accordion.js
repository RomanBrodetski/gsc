(function($) {
    
  var allPanels = $('.accordion > dd').hide();
    
  $('.accordion > dt').click(function() {
    // allPanels.slideUp();
    $(this).toggleClass("opened").next().slideToggle();
    return false;
  });

})(jQuery);



 // var allPanels = $('.accordion ul > li:nth-child(2)').hide();
    
 //  $('.accordion ul > li:first-child').click(function() {
 //    // allPanels.slideUp();
 //    $(this).toggleClass("opened").next().slideToggle();
 //    return false;
 //  });