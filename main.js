
$(document).ready(function(){

 var lastClicked = '';

  $('.option-2').click(function(){

    $('.option-2').css("border", "green solid 1px");
    $('.option-2').css("color", "green");
    $('.option-2').css("background-color", "white");
    $('.prompt').html("Correct");
    $('.prompt').css("color", "green");
    $('.prompt').css("text-align", "center");
  });
  $('.option-1').click(function(){
    wrongAnswer('.option-1');
  });
  $('.option-3').click(function(){
    wrongAnswer('.option-3');
  });

  function wrongAnswer (option) {
    $(option).css("border", "red solid 1px");
    $(option).css("color", "red");
    $(option).css("background-color", "white");
    $('.prompt').html("Wrong Try Again");
    $('.prompt').css("color", "red");
    $('.prompt').css("text-align", "center");
  }

  function reset () {

  }

});
