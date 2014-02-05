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
    $("#menu a + ul > li").has("ul").addClass("has-menu-right");
    $("#menu > ul > li").has("ul").addClass("has-menu");

    $("#menu > ul > li").each(function(){
      $(this).children('ul').css("min-width", $(this).width());
    });
    $("#menu ul > li").hover(
      function () {
        $('ul').stop(true, true);
        $(this).addClass('select_link');
        $(this).children('ul ul a + ul').css("left", $(this).width());
        $(this).children('ul').slideDown('medium');
      },
      function () {
        $('ul').stop(true, true)
        $(this).children('ul').slideUp('medium');
        $(this).removeClass('select_link')
      }
    );

    $('.cabinet').appendTo($('.menu > ul > li.last'))

    $('.menu > ul > li.last').hover(
      function(){
        $('.cabinet').stop(true, true);
        $('.cabinet').slideDown('menium');

      },
      function(){
        $('.cabinet').stop(true, true);
        $('.cabinet').slideUp('menium');

      }
    )

    $('.menu > ul > li.last > a').on('click', function() {
      return false;
    })
  });
