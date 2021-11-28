var highScoresBoard = document.getElementById("highScoresBoard");
var scoreBoard = document.getElementById("scoreBoard");
var highScoresList;


/////////


function showHighScores() {


    var highScores = JSON.parse(localStorage.getItem("high_score")) || [];

   for (var i = 0; i < highScores.length; i++) {


       var highScoresList = document.createElement("li");

       highScoresList.className = "scoresList";

       highScoresList.textContent = `${highScores[i].name} ${highScores[i].totalPoints}`;

       scoreBoard.append(highScoresList);
   }
}


showHighScores();


////////////////////////////

// Buttons

var homebtn = document.getElementById("homeBtn");
var homebutton;

var clearScores = document.getElementById("clearScores");

function clearStorage() {
    localStorage.clear();
    // highScores = [];
    scoreBoard.innerHTML = "Play Again."
}

// clearScores.addEventListener("click", function () {
//     localStorage.clear();
   
//   });

// function pageButtons() {
//   homebutton = document.createElement("button");
//   homebutton.textContent = "Go Back";
//   homebtn.append(homebutton);
// }

// pageButtons();
