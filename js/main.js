// SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});

// SWIPER
// SWIPER NOTICE
const swiperNotice = new Swiper(".notice-line .swiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
});

// SWIPER PROMOTION
const swiperPromotion = new Swiper(".promotion .swiper", {
  direction: "horizontal", // 기본 값
  slidesPerView: 3, // 한번에 보여줄
  spaceBetween: 10, // 아이템간 거리
  centeredSlides: true, // 슬라이드 센터 여부
  loop: true, // 루프 여브
  autoplay: {
    // 자동 재생, 변경 시간 설정
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination", // pagination을 할 엘리먼트 클래스 설정
    clickable: true, // 클릭 가능 여부 설정
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev", // 이전 버튼 클래스 설정
    nextEl: ".promotion .swiper-button-next", // 이후 버튼 클래스 설정
  },
});

function controlAutoPlay() {
  if (swiperPromotion.autoplay.running == true) {
    swiperPromotion.autoplay.stop();
  } else {
    swiperPromotion.autoplay.start();
  }
}

// Toggle Promotion
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
const promotionToggleIcon = document.querySelector(".toggle-promotion span");

promotionToggleBtn.addEventListener("click", function () {
  if (promotionEl.classList.contains("hide")) {
    promotionEl.classList.remove("hide");
    promotionToggleIcon.classList.add("show");
  } else {
    promotionEl.classList.add("hide");
    promotionToggleIcon.classList.remove("show");
  }
});

// SCROLL
window.addEventListener("scroll", function () {
  let scrollYpos = window.scrollY;
  console.log(scrollYpos);

  if (scrollYpos > 300) {
    const peruAnimate = document.querySelector(".peru");
    peruAnimate.classList.add("animate");
  }

  if (scrollYpos > 800) {
    const indonesiaAnimate = document.querySelector(".indonesia");
    indonesiaAnimate.classList.add("animate");
  }

  if (scrollYpos > 1200) {
    const favoriteAnimate = document.querySelector(".favorite");
    favoriteAnimate.classList.add("animate");
  }

  if (scrollYpos > 2100) {
    const magazineAnimate = document.querySelector(".magazine");
    magazineAnimate.classList.add("animate");
  }

  if (scrollYpos > 2400) {
    const storeAnimate = document.querySelector(".store");
    storeAnimate.classList.add("animate");
  }
});

window.onload = () => {
  const visualInner = document.querySelector(".visual .inner");
  visualInner.classList.add("animate");
};
