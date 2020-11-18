$(function () {
  // Mobile All menu
  var menu = $(".menu_list > li > a");
  menu.click(function () {
    var subMenu = $(this).next("ul");
    if (subMenu.is(":visible")) {
      subMenu.slideUp();
    } else {
      subMenu.slideDown();
    }
  });

  // All menu
  var hamburger = $(".hamburger");
  var close = $(".menu .close");
  var menu = $(".menu");
  hamburger.click(function () {
    menu.show();
  });
  close.click(function () {
    menu.hide();
  });

  // header
  var header = $(".header");
  var goTop = $(".go_top");
  $(window).scroll(function () {
    var scrollTopValue = $(document).scrollTop();
    if (scrollTopValue > 0) {
      header.addClass("active");
    } else {
      header.removeClass("active");
    }

    if (scrollTopValue > 900) {
      goTop.fadeIn();
    } else {
      goTop.fadeOut();
    }
  });

  goTop.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });
});
