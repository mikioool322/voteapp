function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let currentId = '#home';

$(document).ready(function(){
	$("#tictactoe").hide();
	$("#photos").hide();
  $("#vote").hide();

  $("#showGame").click(function(){
    $(currentId).hide();
	$("#tictactoe").show();
	currentId = '#tictactoe';
  });
  $("#showHome").click(function(){
	$(currentId).hide();
    $("#home").show();
	currentId = '#home';
  });
  $("#showPhotos").click(function(){
	$(currentId).hide();
    $("#photos").show();
	currentId = '#photos';
  });
  $("#showVote").click(function(){
    $(currentId).hide();
      $("#vote").show();
    currentId = '#vote';
    });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('button').forEach(button => {
      button.onclick = () => {
          const request = new XMLHttpRequest();
          request.open('POST', `/${button.id}`);
          request.onload = () => {
              const response = request.responseText;
              document.getElementById('count').innerHTML = response;
          }; 
          request.send();
      };
  });
});