var highScoresBoard = document.getElementById("highScoresBoard");
var scoreBoard = document.getElementById("scoreBoard");
var highScoresList;

///////////////////////////

//Works inside and outside of a function

var scoreBoard = document.getElementById("scoreBoard");


/////////


function showHighScores() {

    

    var allHighScores = JSON.parse(localStorage.getItem("high_score")) || [];

   for (var i = 0; i < allHighScores.length; i++) {


       var highScoresList = document.createElement("li");

       highScoresList.textContent = allHighScores[i].name + allHighScores[i].totalPoints;

       scoreBoard.append(highScoresList);
   }
}

showHighScores();


////////////////////////////

// Buttons

var homebtn = document.getElementById("homeBtn");
var homebutton;

function pageButtons() {
  homebutton = document.createElement("button");
  homebutton.textContent = "Go Back";
  homebtn.append(homebutton);
}

pageButtons();
