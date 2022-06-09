$(document).ready(function(){

  /*$('.current-lang').on('click', function(){
    $('.change-lang').addClass('active')
  });

  $(document).on('click',function(e){
    let elem = e.target;
    if($(elem).hasClass('current-lang') || $(elem).hasClass('new-lang-link') || $(elem).hasClass('new-lang-pic') || $(elem).hasClass('new-lang-name')) {
      return;
    }
    else {
      $('.change-lang').removeClass('active');
    }
  })*/


  /*$('.up').on('click',function () {
    $('html, body').animate({ scrollTop: 0 }, 700);
  });
  $(window).on('scroll',function(){
    if($(this).scrollTop() >= 300) {
      $('.up').css('opacity',1);
    }
    else {
      $('.up').css('opacity',0);
    }
  });*/

  $('.navbar-toggler').on('click',function(){
    $(this).toggleClass('opened');
    $('.navbar').toggleClass('visible');
  });



  $('.main-detail-btn').on('click',function(){
    $('.main-detail').addClass('active');
  });
  $('.main-detail-close').on('click',function(){
    $('.main-detail').removeClass('active');
  });

  $(document).on('click',function(e){
    let elem = e.target;
    if($(elem).hasClass('main-detail') || $(elem).parents().hasClass('main-detail') || $(elem).hasClass('main-detail-btn')) {
      return;
    }
    else {
      $('.main-detail').removeClass('active');
    }
  })


  $('.top-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    fade: true,
    pauseOnHover: false
  });


  $('.naprav-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          centerMode: false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 900,
        settings: {
          centerMode: false,
          variableWidth: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          variableWidth: false,
          slidesToShow: 2
        }
      },
    ]
  });

  

});