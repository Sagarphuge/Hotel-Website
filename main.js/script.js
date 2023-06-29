var swiper = new Swiper('.swiper-1', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay:{
        delay:4000,
    }
  });

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
  a.addEventListener("click",function(){
    navCollapse.classList.remove("show");
  })
})

var swiper = new Swiper('.our-service-slider', {
  direction: 'horizontal',
  slidesPerView:1.4,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay:{
      delay:1500,
  },
  breakpoints:{
    "991":{
      slidesPerView:1.6,
    },
    "767":{
      slidesPerView:1.2,
    },
    "320":{
      slidesPerView:1,
    }
  }
  
});

// reviews slider 
var swiper = new Swiper('.review-slide', {
  loop: true,
  autoplay:{
      delay:2000,
  },
  breakpoints:{
    "991":{
      slidesPerView:3,
      spaceBetween:24,
    },
    "767":{
      slidesPerView:2,
      spaceBetween:24,
    },
    "320":{
      centeredSlides: true,
      slidesPerView:1,
      spaceBetween:16,
    }
  }
});

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
    var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    } 
  });
});
