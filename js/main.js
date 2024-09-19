$(document).ready(function () {
  //fullpage
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthpage', 'fifthpage', 'sixthpage', 'seventhpage'],
    menu: '.gnb',
    responsiveWidth: 1063,
    autoScrolling: true,
    scrollHorizontally: true,

    onLeave: function (origin, destination, direction, trigger) {
      var origin = this;

      //footer
      if (destination == 7) {
        $("#fp-nav").fadeOut();
      } else {
        $("#fp-nav").fadeIn();
      }

      //#header background
      if (destination == 2) {
        $("#header").addClass("on");
      } else if (destination == 4) {
        $("#header").addClass("on");
      }
      else {
        $("#header").removeClass("on");
      }

      if (destination == 2 || destination == 4) {
        $("#fp-nav ul li a span").addClass("change");
      } else {
        $("#fp-nav ul li a span").removeClass("change");
      }

      if (destination == 2 || destination == 4) {
        $("#header h1 a img").attr("src", "img/logo/logo_b.png");
      } else {
        $("#header h1 a img").attr("src", "img/logo/logo_w.png");
      }

      if (destination == 2) {
        $("#header .ham").addClass("black");
      } else if (destination == 4) {
        $("#header .ham").addClass("black");
      }
      else {
        $("#header .ham").removeClass("black");
      }
    }
  });

  //mgnb
  $(".mgnb_wrap").hide();
  $(".ham").click(function () {
    $(".mgnb_wrap").show();
  });
  $(".logo_btn img").click(function () {
    $(".mgnb_wrap").hide();
  });
  $(".mdepth2").hide();
  $(".mgnb > li").click(function () {
    $(this).find(".mdepth2").stop().slideDown();
    $(this).siblings().find(".mdepth2").slideUp();
  });

  $(".depth2, .depth2_bg").hide();
  $(".gnb>li").mouseenter(function () {
    $(".depth2,.depth2_bg").stop().slideDown();
  });
  $(".gnb>li").mouseleave(function () {
    $(".depth2,.depth2_bg").stop().slideUp();
  });


  //mv
  const mv = new Swiper('.mv', {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //right
  const right = new Swiper('.right', {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 1000,
    slidesPerView: 2.2,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2.6,
      },
    },
  });
  //구역 4를 떠난 후 5에 도달했을 때
  if (destination == 7) {
    $("#fp-nav").fadeOut();
  } else {
    $("#fp-nav").fadeIn();
  }

});