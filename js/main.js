/* Burger nav */
$('.menu, .overlay').click(function(){
$('.menu').toggleClass('clicked');
$('.overlay').toggleClass('show');
$('.mobile-menu').toggleClass('show');
$('body').toggleClass('overflow');
});

$('.menu').click (function(){
  $(this).toggleClass('open');
});
