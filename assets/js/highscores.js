
// SCOREBOARD
//------------------------

// Pulling from HTML.
var highScoresBoard = document.getElementById("highScoresBoard");
var scoreBoard = document.getElementById("scoreBoard");

// Variables
var highScoresList;

// BUTTONS
//------------------------

// Pulling from HTML.
var clearScores = document.getElementById("clearScores");
var homebtn = document.getElementById("homeBtn");

// Variables
var homebutton;



////////////////////////////
// Displays scores in a list. 

function showHighScores() {

    // Gets scores from local storage.
    var highScores = JSON.parse(localStorage.getItem("high_score")) || [];

    // Loops through scores in local storage, to get a count on how many exist.
    for (var i = 0; i < highScores.length; i++) {

        //Creates a list containing player initials and their score.
        var highScoresList = document.createElement("li");

        highScoresList.className = "scoresList";

        highScoresList.textContent = `${highScores[i].name} ${highScores[i].totalPoints}`;

        scoreBoard.append(highScoresList);
   }
}

showHighScores();


////////////////////////////
// Clears storage and displays a message when empty.

function clearStorage() {
    localStorage.clear();
    scoreBoard.innerHTML = "Nothing to see here. Play again and see where you rank."
}


