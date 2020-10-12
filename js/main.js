$(function () {
  var tabsItem = $('.tabs-cards__item');
  var tabsContent = $('.tabs-content__item');
  tabsItem.on('click', function(event) {
    var activeContent = $(this).attr('data-target');
    event.preventDefault();
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
    $('.header-wrapper').toggleClass('.header__wrapper--mobile');
    $('.header-menu').toggleClass('.header__menu--mobile');
  });
});