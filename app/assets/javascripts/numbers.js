$(function() {
  $('.number').each(function(_,elem){
      var max = parseInt($(elem).html())
    $({someValue: 0}).animate({someValue: max}, {
      duration: 2000,
      easing:'swing', // can be anything
      step: function() { // called on every step
          // Update the element's text with rounded-up value:
          $(elem).text((Math.round(this.someValue)));
      },
      complete: function(){
       $(elem).text(max);
    }
    }

    );
  });
});
