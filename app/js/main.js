$(function () {
  $(".restaurants__list-items").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow:
      '<button type="button" class="slick-next"><svg><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow:
      '<button type="button" class="slick-prev"><svg><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

  $(".header__list-link, .logo").on("click", function (event) {
    event.preventDefault();
    const scrollAnchor = $(this).attr("href");
    let scrollPoint = $(scrollAnchor).offset().top;

    if (scrollAnchor === "#specialities") {
      scrollPoint = scrollPoint;
    }

    $("html, body").animate(
      {
        scrollTop: scrollPoint,
      },
      1500
    );
    return false;
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("header-fixed");
    } else {
      $(".header").removeClass("header-fixed");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active");
  });
});

const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".header__burger-nav");
const bodyLock = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("header__burger-nav--active");
    if (mobileMenu.classList.contains("header__burger-nav--active")) {
      burger.classList.add("burger--active");
      bodyLock.classList.add("lock");
    } else {
      burger.classList.remove("burger--active");
      bodyLock.classList.remove("lock");
    }
  });
});

document.addEventListener("click", (e) => {
  let target = e.target;
  let its_menu = target == mobileMenu || mobileMenu.contains(target);
  let its_hamburger = target == burger;
  let menu_is_active = mobileMenu.classList.contains(
    "header__burger-nav--active"
  );

  if (!its_menu && !its_hamburger && menu_is_active) {
    mobileMenu.classList.remove("header__burger-nav--active");
    bodyLock.classList.remove("lock");
    burger.classList.remove("burger--active");
  }
});
