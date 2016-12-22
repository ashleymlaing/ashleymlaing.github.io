// hamburgerNav activity


$(document).ready(function(){
  $('.hamburgerNav').click(function(){
    $('.hamburgerNav').css('display','none');
    $('.mobileNav').css('display','block');
    $('.cross').css('display','block');
    $('.mobileNav ul').css('display','block');
  });
  $('.cross').click(function(){
    $('.hamburgerNav').css('display','block');
    $('.mobileNav').css('display','none');
    $('.cross').css('display','none');
    $('.mobileNav ul').css('display','none');
  });
});
