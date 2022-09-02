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


  $('.up').on('click',function () {
    $('html, body').animate({ scrollTop: 0 }, 700);
  });
  $(window).on('scroll',function(){
    if($(this).scrollTop() >= 300) {
      $('.up').css({'opacity':1, 'z-index': 1});
    }
    else {
      $('.up').css({'opacity':0, 'z-index': -1});
    }
  });

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


     // меню в разделе "направление"
    function countryNavChange() {
      let hotelNavOffset = $('.country-nav').offset().top;
      let width = $('.country-content').outerWidth()-30;
      let height = $('.country-nav').outerHeight();

      $(window).on('scroll',function(){
        if($(window).scrollTop()>=hotelNavOffset) {
          $('.country-nav').css({'position':'fixed', 'width':width});
          $('.country-content').css('padding-top',height);
        }
        else {
          $('.country-nav').css({'position':'static', 'width':'auto'});
          $('.country-content').css('padding-top',0);
        }
      });
    }
    if($('.country-nav').length) { //вызываем функцию только на странице, где есть это меню
      countryNavChange();
    }
    $(window).on('resize orientationchange', function(){
      if($('.country-nav').length) {
        countryNavChange();
      }
    });

    //функция смены активного пункта меню отелей при скролле
    function Scroll_block(){
      let scroll_top = $(document).scrollTop();
      let height = $('.country-nav').outerHeight();
      $('.country-nav a').each(function(){
        let hash = $(this).attr('href');
        let target = $(hash);
        if (target.position().top <= scroll_top+height && target.position().top + target.outerHeight() > scroll_top+height) {
            $('.country-nav a').removeClass('active');
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
      });
    }
  
    $(document).on('scroll', Scroll_block);

    $('.country-nav a').on('click',function(e){
      e.preventDefault();
      $(document).off('scroll');
      $('.country-nav a').removeClass('active');
      $(this).addClass('active');
      let height = $('.country-nav').outerHeight();
      let elementClick = $(this).attr('href');
      let destination = $(elementClick).offset().top;
      $('html, body').animate({ scrollTop: destination-height }, 1000, function(){
        $(document).on('scroll', Scroll_block);
      });
    });


    $('.hotel-plan').on('click',function(e){
      e.preventDefault();
      $('.hotel-plan-popup-wrap').addClass('open');
    });
    $(document).on('click', function(e){
      let hotelPlanCloseElem = e.target;
      if($(hotelPlanCloseElem).hasClass('hotel-plan-popup-wrap') || $(hotelPlanCloseElem).hasClass('popup-close')) {
        $('.hotel-plan-popup-wrap').removeClass('open');
      }
    })



    $('.hotel-infra-slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.hotel-infra-slider-nav',
      autoplay: false,
      autoplaySpeed: 2000,
    });
    $('.hotel-infra-slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.hotel-infra-slider-for',
      centerMode: true,
      dots: false,
      arrows: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            centerMode: false
          }
        }
      ]
    });


    $('.all-hotels-filter-mob').on('click',function(){
      $('.all-hotels-filter-wrap').toggleClass('open');
      $('.all-hotels-filter-mob img').toggleClass('visible');
    })

  

});