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

const popupMeunOpen = document.querySelector(".popup-menu-open");
const menu = document.querySelector(".menu");
const popupMenuClose = document.querySelector(".popup-menu-close");

popupMeunOpen.addEventListener("click", function () {
  menu.classList.toggle("open");
  document.body.classList.toggle("loсk");
});
popupMenuClose.addEventListener("click", function () {
  menu.classList.toggle("open");
  document.body.classList.toggle("loсk");
});

const popupPhoneOpen = document.querySelector(".popup-phone-open");
const phone = document.querySelector(".phone");
const popupPhoneClose = document.querySelector(".popup-phone-close");

popupPhoneOpen.addEventListener("click", function () {
  phone.classList.toggle("open");
  document.body.classList.toggle("loсk");
});
popupPhoneClose.addEventListener("click", function () {
  phone.classList.toggle("open");
  document.body.classList.toggle("loсk");
});

const feedbackBtn = document.querySelectorAll(".feedback__btn");

feedbackBtn.forEach((item) => {
  item.addEventListener("click", function () {
    this.style.display = "none";
    this.nextElementSibling.style.display = "flex";
  });
});

const popupCallbackOpen = document.querySelectorAll(".popup-callback-open");
const callback = document.querySelector(".callback");
const popupCallbackClose = document.querySelector(".popup-callback-close");

popupCallbackOpen.forEach((item) => {
  item.addEventListener("click", function () {
    callback.classList.toggle("open");
    document.body.classList.toggle("loсk");
  });
});
popupCallbackClose.addEventListener("click", function () {
  callback.classList.toggle("open");
  document.body.classList.toggle("loсk");
});
