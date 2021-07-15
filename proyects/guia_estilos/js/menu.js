$('.mostrar-menu').on('click', function(){
  $('.header').toggleClass('open');
  $('.header').addClass('b-main');
});

$(".submenu").click(function(){
  $(this).children("ul").slideToggle();
});

$(window).scroll(function(){
  if( $(this).scrollTop() > 0 ){
    $('header').addClass('b-main');
  } else {
    $('header').removeClass('b-main');
  }
});
