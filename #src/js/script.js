const swiper = new Swiper(".cars__slider", {
  direction: "horizontal",
  pagination: {
    el: ".cars__slider-pagination",
    clickable: true,
  },
});

const swiper2 = new Swiper(".latest__slider", {
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 25,
  navigation: {
    nextEl: ".latest__button-next",
    prevEl: ".latest__button-prev",
  },
});
