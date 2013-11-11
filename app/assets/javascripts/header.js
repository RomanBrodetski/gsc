// $( window ).on( "scroll", function(){

//   $( "#header" ).addClass("scroll")

// })

var $document = $(document),
    $element = $('#header'),
    className = 'scroll';

$document.scroll(function() {
  $element.toggleClass(className, $document.scrollTop() >= 50);
});
