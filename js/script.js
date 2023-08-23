
AOS.init({
  duration: 700
});

function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

var section = document.querySelector('.relative_wats');
var scrollThreshold = 500;

window.addEventListener('scroll', function() {
  if (window.pageYOffset > scrollThreshold) {
    section.style.display = 'block';
  } else {
    section.style.display = 'none';
  }
});
window.onscroll = function () {
  progressBarScroll();
};


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    rtl:true,
      navText : ['<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>','<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>'],
    responsiveClass:true,
    nav:true,
    responsive:{
      0:{
          items:1
      },
      500:{
        items:1
    },
      600:{
          items:1
      },
      800:{
        items:2
    },
      1000:{
          items:3
      }
    }
})

$(document).ready(preloderFunction());
    
function preloderFunction() {
  
    setTimeout(function() {
        document.getElementById("page-top").scrollIntoView();
        
        $('#ctn-preloader').addClass('loaded');  
        $('body').removeClass('no-scroll-y');

        if ($('#ctn-preloader').hasClass('loaded')) {
          $(this).delay(2000).fadeOut();
        }
    }, 1000);
}



function afterLoad() {
}
const contactBtn = document.querySelector('.contact_btn');

contactBtn.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});


const contactBtn2 = document.querySelector('.header_btn2');

contactBtn2.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



