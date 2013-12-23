// script for slider

// $("#slider .next").on("click", function(){
//   $("#slider li.active").removeClass("active").next().addClass("active");
// });

// $("#slider .prev").on("click", function(){
//   $("#slider li.active").removeClass("active").prev().addClass("active");
// })


$(document).ready(function(){
  $('.bxslider').bxSlider({
    speed: 1300,
    auto: true,
    pause: 6000,
    autoDelay: 1000,
  });
  $('.bxslider1').bxSlider({
    speed: 1300,
    auto: true,
    pause: 6000,
    autoDelay: 1000,
    mode: 'fade'
  });

});

