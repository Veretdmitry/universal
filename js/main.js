$(function () {
  var tabsItem = $('.tabs-cards__item');
  var tabsContent = $('.tabs-content__item');
  tabsContent.find('.tabs-content__title, .tabs-button').on('click', function(){
    window.location = 'articles.html';
  });
  tabsItem.on('click', function(event) {
    var activeContent = $(this).attr('data-target');
    if ($(window).width() < 576) {
      window.location = 'articles.html';
    }; 
    $(this).removeAttr('href');
    tabsContent.removeClass('tabs-content__item--active');
    tabsItem.removeClass('tabs-cards__item--active');
    $(this).addClass('tabs-cards__item--active');
    $(activeContent).addClass('tabs-content__item--active');
    $(activeContent).find('.tabs-content__theme').text($(this).find('.tabs-cards__title').text());
    $(activeContent).find('.tabs-content__title').text($(this).find('.tabs-cards__text').text());
    $(activeContent).find('.tabs-content__theme').css('color', $(this).find('.tabs-cards__title').css('color'));
    $(activeContent).find('.tabs-button').css('background-color', $(this).find('.tabs-cards__title').css('color'));
  });

// header__menu-button
  $('.header__menu-button').on('click', function(){
    $('.header').toggleClass('header--cover');
    $('.header-wrapper').toggleClass('header-wrapper_mobile');
    $('.header-menu').toggleClass('header-menu_mobile');
    $('.search').toggleClass('search_mobile');
    $('.header__logo').toggleClass('header__logo--mobile');
    if ($(this).hasClass('header__menu-button--light'))
      {$('.header__menu-button').toggleClass('header__menu-button_click--light');}
      else {$('.header__menu-button').toggleClass('header__menu-button_click--dark');}
    $('.lines').toggleClass('lines_mobile');
    $('.tabs').toggleClass('tabs--mobile');
  });


// note
  $('.note__mark').on('click', function(){
    $(this).toggleClass('note__mark--active');
  });
// likes
  $('.likes__icon').on('click', function(){
    $(this).toggleClass('likes__icon--active');
    if ($(this).hasClass('likes__icon--active')) {
    $(this).parent().find('.likes__counter').text(parseInt($(this).parent().find('.likes__counter').text(),10) + 1);}
    else 
    $(this).parent().find('.likes__counter').text(parseInt($(this).parent().find('.likes__counter').text(),10) -1);
  });
  
// usefullslider initialisation
  var usefullSwiper = new Swiper('.usefull-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    autoplay: {
    delay: 3000,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      bulletClass: 'usefull-pagination__bullet',
      bulletActiveClass: 'usefull-pagination__bullet--active',
      clickable: true
    },
  })
// usefullslider initialisation
  var textSwiper = new Swiper('.text-slider__top', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 600,
    autoplay: {
    delay: 5000,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  // Navigation arrows
    navigation: {
      nextEl: '.text-slider__top-button_next',
      prevEl: '.text-slider__top-button_prev',
    },
  })
// feedback color
  $('.feedback__counter').each(function(indx, element){

    if ($(this).text()>0) {
      $(this).addClass('feedback__counter--good');
    };
    if ($(this).text()<0) {
      $(this).addClass('feedback__counter--bad');
    };
    if ($(this).text()==0) {
      $(this).removeClass('feedback__counter--good');
      $(this).removeClass('feedback__counter--bad');
    };
  });
  $('.feedback__icon--bad').on('click', function(){
    $(this).parent().find('.feedback__counter').text(parseInt($(this).parent().find('.feedback__counter').text(),10) -1);
    if ($(this).parent().find('.feedback__counter').text()<0) {
      $(this).parent().find('.feedback__counter').addClass('feedback__counter--bad');
      $(this).parent().find('.feedback__counter').removeClass('feedback__counter--good');
    };
    if ($(this).parent().find('.feedback__counter').text()>0) {
      $(this).parent().find('.feedback__counter').text('+' +$(this).parent().find('.feedback__counter').text());
      $(this).parent().find('.feedback__counter').addClass('feedback__counter--good');
      $(this).parent().find('.feedback__counter').removeClass('feedback__counter--bad');
    };
    if ($(this).parent().find('.feedback__counter').text()==0) {
      $(this).parent().find('.feedback__counter').removeClass('feedback__counter--good');
      $(this).parent().find('.feedback__counter').removeClass('feedback__counter--bad');
    };
  });
  $('.feedback__icon--good').on('click', function(){
    $(this).parent().find('.feedback__counter').text(parseInt($(this).parent().find('.feedback__counter').text(),10) +1);
    if ($(this).parent().find('.feedback__counter').text()<0) {
      $(this).parent().find('.feedback__counter').addClass('feedback__counter--bad');
      $(this).parent().find('.feedback__counter').removeClass('feedback__counter--good');
    };
    if ($(this).parent().find('.feedback__counter').text()>0) {
      $(this).parent().find('.feedback__counter').text('+' +$(this).parent().find('.feedback__counter').text());
      $(this).parent().find('.feedback__counter').addClass('feedback__counter--good');
      $(this).parent().find('.feedback__counter').removeClass('feedback__counter--bad');
    };
    if ($(this).parent().find('.feedback__counter').text()==0) {
      $(this).parent().find('.feedback__counter').removeClass('feedback__counter--good');
      $(this).parent().find('.feedback__counter').removeClass('feedback__counter--bad');
    };
  });
// loadmore
  $('.comment-loadmore').on('click', function(){
    $('.comment-item').each(function(indx, element){
      $(this).removeClass('comment-item--disabled');
    });
  });
// slow scroll

});