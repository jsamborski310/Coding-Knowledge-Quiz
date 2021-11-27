var highScoresBoard = document.getElementById("highScoresBoard");
var scoreBoard = document.getElementById("scoreBoard");
var highScoresList;




// function showHighScores () {
//     var list = highScores.map((playerScores) => {
//         console.log(list);
//         return '<li class="high-score">${playerScore.name}</li>';
//     })
// } 

// showHighScores();



// function showHighScores () {
//     var list = highScores.map(playerScore => {
//         console.log(list);
//         return `<li class="high-score">${playerScore.name}</li>`;
//     })
// } showHighScores();



// function showHighScores() {
//     highScores.map(playerScore => {
    
//         return `<li class="high-score">${playerScore.totalPoints}</li>`;
//     })
//     showHighScores();

// } 

///////////////////////////////

// function showHighScores() {


//     var scoreBoard = document.getElementById("scoreBoard");


//     var highScores = JSON.parse(localStorage.getItem("high_score")) || [];


//     scoreBoard.innerHTML = highScores
//     .map((playerScore) => `<li>${playerScore.name} - ${playerScore.totalPoints}</li>`)
//     .join('')


    
// }; showHighScores();



var scoreBoard = document.getElementById("scoreBoard");


var highScores = JSON.parse(localStorage.getItem("high_score")) || [];


scoreBoard.innerHTML = highScores
.map((playerScore) => `<li>${playerScore.name} - ${playerScore.totalPoints}</li>`)
.join('')


////////////////////


// var allHighScores = JSON.parse(localStorage.getItem("high_score")) || [];

// function showHighScores() {


//    for (var i = 0; i < allHighScores.length; i++) {

//     console.log("all high score: " + allHighScores.length);
    
//        var highScoresList = document.createElement("li");

//        highScoresList.textContent = allHighScores[i];

//        scoreBoard.append(highScoresList);
//    }

// }

// showHighScores();

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