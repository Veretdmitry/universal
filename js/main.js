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


});