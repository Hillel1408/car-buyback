const swiper = new Swiper(".cars__slider", {
  direction: "vertical",
  pagination: {
    el: ".cars__slider-pagination",
    clickable: true,
  },
});

const swiper2 = new Swiper(".latest__slider", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".latest__button-next",
    prevEl: ".latest__button-prev",
  },
  breakpoints: {
    1180: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
  },
});
