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
  });

  
  //continents & countries on the main page
  $('.country span').on('click',function(){
    $('.country-links').removeClass('active');
    $(this).next('.country-links').addClass('active');
  });

  $('.country .arr-back').on('click',function(){
    $('.country-links').removeClass('active');
  });

  $('.continents-countries > li > .arr-back').on('click',function(){
    $('.continents-countries').removeClass('active')
  });

  $('.africa-cover h2').on('click',function(){
    $('.africa-countries').addClass('active');
  });


  //video in popup
  $('.video-wrap').on('click', function(){
    let link = $(this).attr('data-link');
    $('.video-popup iframe').attr('src','https://www.youtube.com/embed/'+link+'?autoplay=1');
    $('.video-popup').addClass('visible');
  });
  $('.video-popup-close').on('click', function(){
    $('.video-popup').removeClass('visible');
    $('.video-popup iframe').attr('src','');
  });
  $('.video-popup').on('click', function(e){
    if(e.target == this) {
      $(this).removeClass('visible');
      $(this).find('iframe').attr('src','');
    }
  });



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


  $(document).on('click', function(e){
    let mapCloseElem = e.target;
    if($(mapCloseElem).parents().hasClass('country-resorts') || $(mapCloseElem).hasClass('country-resorts')) {
      return;
    }
    else {
      $('#res-main').prop('checked',true);
    }
  })

  

});