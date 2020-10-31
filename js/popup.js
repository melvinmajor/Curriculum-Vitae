/**
 * Made by Melvin Campos Casares
 * Created : Late 2020
 * Last update : Late 2020
 */

$(window).load(function () {
  $(".trigger_popup").click(function(){
    $('.hover_background').show();
  });
  $('.hover_background').click(function(){
    $('.hover_background').hide();
  });
  $('.popupCloseButton').click(function(){
    $('.hover_background').hide();
  });
});