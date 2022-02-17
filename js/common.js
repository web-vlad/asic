// Мобильная версия меню;
$(document).on('click','.js-menu-mobile',function () {
  var element = $(this);
      element.find('.slide_menu-btn').toggleClass('open');
  $("#menu-mobile .menu-list-content").fadeToggle();
  $("#menu-mobile .address-list-content").hide();
  $(".js-phone-mobile").removeClass('close-p').addClass('fa-phone');

  if(element.find('.slide_menu-btn').filter('.open').length) {
      $('.bg-show').show();
  }else{
      $('.bg-show').hide();
  }
  return false;
});
$(document).on('click','.js-phone-mobile',function () {
  var element = $(this);
      element.toggleClass('fa-phone close-p');
   $("#menu-mobile .address-list-content").fadeToggle();
   $("#menu-mobile .menu-list-content").hide();
   $(".js-menu-mobile .slide_menu-btn").removeClass('open');

  if(element.filter('.close-p').length) {
      $('.bg-show').show();
  }else{
      $('.bg-show').hide();
  }
   return false;
});

$(document).on('click','.bg-show',function () {
  $(this).hide();
  $(".js-menu-mobile .slide_menu-btn").removeClass('open');
  $(".js-phone-mobile").removeClass('close-p').addClass('fa-phone');
  $("#menu-mobile .menu-content").fadeOut();
  return false;
});

$(function () {
    // slider banner
    $('.slider-repair').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      //fade: true,
      //variableWidth: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
      rows: 0
    });

});

$(document).on('click', '[data-toggle="modal"]', function(e) {
    var target = $(this).attr('data-target');
    e.preventDefault();
      //console.log(target);
    $(target).addClass('show');
    return false;
});
$('.modal .close').on('click', function () {
    $(this).closest('.modal').removeClass('show');
    return false;
});
$('.modal').on('click', function(e) {
  $(this).removeClass('show');
});
$('.modal .modal-dialog').click(function(e) {
  e.stopPropation();
});

