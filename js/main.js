(function () {
  'use strict';
  
  /*menu toggle*/

  let menuToggle = document.querySelector(".main_menu__togle");
  let menu = document.querySelector(".main_menu");
  let overlay = document.querySelector(".overlay");
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("main_menu--open");
  });
  overlay.addEventListener("click", () => {
    menu.classList.toggle("main_menu--open");
  });

  /*smooth scrolling*/
  const isMobile = $("body").width() <= 767;
  const heightOfEditing = isMobile ? 54 : 59;

  $(".smooth_scrolling").bind("click", function() {
    const target = $(this).attr("href");
    const bl_top = $(target).offset().top - heightOfEditing;
    $("body, html").animate({ scrollTop: bl_top }, 400);
    return false;
  });

  if (isMobile) {
    $(".main_menu__list .smooth_scrolling").bind("click", function() {
      menu.classList.toggle("main_menu--open");
    });
  }

}());

//# sourceMappingURL=main.js.map
