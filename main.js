
$(document).ready(function(){

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
    setTimeout(reset1, 1500);
  });
  $('.option-3').click(function(){
    wrongAnswer('.option-3');
    setTimeout(reset2, 1500);
  });

  function wrongAnswer (option) {
    $(option).css("border", "red solid 1px");
    $(option).css("color", "red");
    $(option).css("background-color", "white");
    $('.prompt').html("Wrong Try Again");
    $('.prompt').css("color", "red");
    $('.prompt').css("text-align", "center");
  }

  function reset1() {
    $('.option-1').css("border", "#E8D284 solid 1px");
    $('.option-1').css("color", "black");
    $('.option-1').css("background-color", "white");
    $('.prompt').html("Guess the lie...");
    $('.prompt').css("color", "black");
    $('.prompt').css("text-align", "left");
  }

  function reset2() {
    $('.option-3').css("border", "#E8D284 solid 1px");
    $('.option-3').css("color", "black");
    $('.option-3').css("background-color", "white");
    $('.prompt').html("Guess the lie...");
    $('.prompt').css("color", "black");
    $('.prompt').css("text-align", "left");
  }
});
