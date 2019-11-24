(function($) {

$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});
	

/**
Responsive on 767px
*/
var windowWidth = $(window).width();
// if (windowWidth <= 767) {

  $('.toggle-btn').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.toggle-bar ul').slideToggle(500);
  });


// }

if( $('.cs-slider').length ){
    $('.cs-slider').slick({
      pauseOnHover: false,
      dots: false,
      infinite: true,
      arrows: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $('.mainsliderarrow .leftarrow'),
      nextArrow: $('.mainsliderarrow .rightarrow'),
    });
}

if( $('.sps-slider').length ){
    $('.sps-slider').slick({
      pauseOnHover: false,
      dots: false,
      infinite: true,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.ps-slider',
      prevArrow: $('.ss-mainslider .left-arrow'),
      nextArrow: $('.ss-mainslider .right-arrow'),
    });
    $('.ps-slider').slick({
      pauseOnHover: false,
      dots: false,
      infinite: true,
      arrows: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.sps-slider',
      focusOnSelect: true,
      centerMode: true,
    });
}

if( $('#main-slider').length ){
    $('#main-slider').slick({
      pauseOnHover: false,
      dots: false,
      infinite: true,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.home-mainslider .left-arrow'),
      nextArrow: $('.home-mainslider .right-arrow'),
    });

}





if ($('.cookie-messege-button').length) {
  $('.cookie-messege-button').on('click', function(e){
    e.preventDefault();
    $('.cookie-messege-section').hide('slow');
  });
}









// http://codepen.io/norman_pixelkings/pen/NNbqgG
// https://stackoverflow.com/questions/38686650/slick-slides-on-pagination-hover


//$("[data-fancybox]").fancybox({});


/**
Slick slider
*/
if( $('.responsive-slider').length ){
    $('.responsive-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}

    new WOW().init();

})(jQuery);


function openNav(){
  document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
  document.getElementById("myNav").style.width = "0%";
}







