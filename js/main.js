$(window).on("load", function () {
  $(".loader")
    .delay(200)
    .fadeOut(2000, function () {
      $("body").css("overflow", "auto");
    });
});

$(document).ready(function () {
    "use strict";
    let isRtl = $('html[lang="ar"]').length > 0;
// when click to responsive btn show ul and overlay
    $(".nav-btn").click(function() {
      $(this).addClass('active');
      $(".nav-links").addClass('active');
      $(".nav-overlay").addClass('show')
    })

    // when i click on overlay remove class show and remove ul

    $(".nav-overlay").click(function() {
      $(".nav-btn").removeClass('active');
      $(".nav-links").removeClass('active');
      $(".nav-overlay").removeClass('show')
    })
    
    // select-2
    $('.select-plugin').select2({
      dir: isRtl ? "rtl" : "ltr"
  });

  $('.select').select2({
      dir: isRtl ? "rtl" : "ltr"
  });

  $(".without-search").select2({
    minimumResultsForSearch: Infinity,
  });

  $(':input[type="number"]').on("input", function() {
    var nonNumReg = /[^0-9]/g
    $(this).val($(this).val().replace(nonNumReg, ''));
  })

    // fixed nav
    let isFixed = function () {
      $(".header").addClass("with-banner");
      if ($(window).scrollTop() > 70) {
        $(".header").addClass("fixed");
      } else {
        $(".header").removeClass("fixed");
      }
  
      if ($(window).scrollTop() > 70) {
        $(".header").addClass("fixed");
        $(".top-header").addClass("unactive");
  
      } else {
        $(".header").removeClass("fixed");
        $(".top-header").removeClass("unactive");
  
      }
    };
  
    isFixed();
  
    $(window).on("scroll", function () {
      isFixed();
    });

    $(".brand-slider").owlCarousel({
      items: 5,
      loop: true,
      rtl: isRtl,
      margin: 10,
      nav: false,
      stagePadding: 0,
      autoplay: true,
      slideTransition: "linear",
      autoplayTimeout: 3000,
      autoplaySpeed: 3000,
      autoplayHoverPause: true,
      dots: false,
      nav: false,
      responsive: {
        320: {
          items: 2,
        },
  
        768: {
          items: 3,
        },
  
        1024: {
          items: 4,
        },
  
        1440: {
          items: 5,
        },
      },
    });
    
});