$(document).ready(function () {
    $("#main-slider").owlCarousel({
        loop: true,
        navigation: true,
        dots: false,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1

    });
    $("#owl-pzg_slider").owlCarousel({
        loop: true,
        navigation: true,
        dots: false,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1

    });
    $("#owl-pzvg_slider").owlCarousel({
        loop: false,
        navigation: true,
        dots: false,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1

    });
    $("#client-say").owlCarousel({
        loop: true,
        navigation: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false
            },
            570: {
                items: 2,
                dots: false,
                nav: false
            },
            768: {
                items: 3,
                dots: false,
                nav: false
            },
            992: {
                items: 4,
                dots: false,
                nav: false,
                loop: false
            }
        }

    });
});
var nav = document.getElementById('navid');
window.onscroll = function () {
    if (window.pageYOffset <= 200) {
        nav.style.position = "static";
    } else if (window.pageYOffset > 200) {
        nav.style.position = "fixed";
        nav.style.top = 0;
       
    } else {
        nav.style.position = "absolute";
        nav.style.top = 100;
     
    }
}
$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
    
})