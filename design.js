$(document).ready(function(){

  $("#aboutButton").click(function() {
      $('html, body').animate({
          scrollTop: $("#about").offset().top
      }, 1000);
  });


  $("#mapButton").click(function() {
      $('html, body').animate({
          scrollTop: $("#map-container").offset().top
      }, 1000);
  });

  $("#contactButton").click(function() {
      $('html, body').animate({
          scrollTop: $("#contact").offset().top
      }, 1000);
  });


});
