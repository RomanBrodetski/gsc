// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$("#clock_msk").jClocksGMT({offset: '+4'});
$("#clock_lon").jClocksGMT({offset: '0'});
$("#clock_sha").jClocksGMT({offset: '+8'});
$("#clock_ny").jClocksGMT({offset: '-4'});


// $(window).scroll(function() {
//     var startValue = 70; // scrollTop value when to start incrementing
//     var stopValue = 300; // scrollTop value when to stop incrementing
//     var scrollTop = $(window).scrollTop();
//     if (scrollTop > startValue && scrollTop <= stopValue)
//         $(".number").text((((scrollTop-startValue)/(stopValue-startValue))*100).toFixed(0));
//     else if (scrollTop <= startValue)
//         $(".number").text(0);
//     else if (scrollTop >= stopValue)
//         $(".number").text(100);
// });
