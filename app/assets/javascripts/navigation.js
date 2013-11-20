  // $(function() {
  //   $(".menu li").on('mouseover', function(i){

  //     p = $(i.target).closest('li').find('ul').show()

  //     p.css($(i.target).closest('li').offset())
  //     p.css('min-width', $(i.target).closest('li').width())
  //     p.css('margin-top', 37)
  //   })
  //   $(".menu li").on('mouseout', function(event){

  //       var e = event.toElement || event.relatedTarget;
  //       if ($(e).closest('.menu>ul>li')[0] == $(event.target).closest('.menu>ul>li')[0]) {
  //          return;
  //       }
  //   })
    // });
    // $('.menu ul ul').hide()

  $(document).ready(function () {

    $("#menu > ul > li").each(function(){
      $(this).children('ul').css("min-width", $(this).width());
      // $(this).children('a + ul').css("left", $(this).width());
    })
    $("#menu ul ul a + ul").each(function(){
      $(this).css("left", $(this).parent().width());
    })
    $("#menu ul > li").hover(
  function () {
    $(this).children('ul').stop(true, true).slideDown('medium');
  },
  function () {
    $(this).children('ul').stop(true, true).slideUp('medium');
  }
);

//      $(".file_menu li").hover(
//   function () {
//      $(this).children("ul").slideDown('medium');
//   },
//   function () {
//     $(this).children("ul").slideUp('medium');
//   }
// );
});
