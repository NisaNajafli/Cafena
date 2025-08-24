
window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
var swiper = new Swiper(".card_slider-review", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        speed: 1000,
        autoplay: {
            delay: 2000,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
         },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
        280: {
          slidesPerView: 1,
        },
    }
});
