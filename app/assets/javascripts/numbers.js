$(function() {

  var done = false;
  $(document).scroll(function() {
      if (!done && $(document).scrollTop() >= 260) {
        done = true
                  $('.number').each(function(_,elem){
                      var max = parseInt($(elem).data('max'))
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
                }
  });

});


