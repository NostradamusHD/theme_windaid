import $ from 'jquery';
import './foundation/foundation-explicit-pieces'

$(document).foundation();

//Languaje
$('.languaje').on('click',function(){
  $('.languaje__options').toggleClass('active');

});

//Button Menu
$('#menu_button').on('click',function(){
  $('.burger').toggleClass('active');
  $('.header__top-bar').toggleClass('menu_active');
  $('.header__menu').toggleClass('menu_active');
});

