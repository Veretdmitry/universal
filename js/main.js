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
    $('.header__menu-button').toggleClass('header__menu-button_click');
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
  
// slider iinitialisation
  var usefullSwiper = new Swiper('.usefull-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      bulletClass: 'usefull-pagination__bullet',
      bulletActiveClass: 'usefull-pagination__bullet--active',
      clickable: true
    },
  })

});