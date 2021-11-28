var questionsData = [
  {
    question: "Two plus two, equals?",
    multipleChoices: ["One", "Two", "Three", "Four"],
    correctAnswer: "Four",
  },

  {
    question: "Three plus three, equals?",
    multipleChoices: ["Five", "Six", "Seven", "Eight"],
    correctAnswer: "Six",
  },

  {
    question: "One plus one, equals?",
    multipleChoices: ["Two", "Three", "Four", "Five"],
    correctAnswer: "Two",
  },
  {
    question: "Five plus five, equals?",
    multipleChoices: ["Ten", "Three", "Four", "Five"],
    correctAnswer: "Ten",
  },
  {
    question: "Five plus six, equals?",
    multipleChoices: ["Eleven", "Three", "Four", "Five"],
    correctAnswer: "Eleven",
},
];

/////////////////////////////////////////

// Variables
var startGameButton = document.getElementById("startGame");
var welcome = document.querySelector(".welcomeMessage");
var timer = document.getElementById("timer");

var secondsRemaining = 20;
var timerInterval;
var score = 0;


// Hides welcome message when the button is clicked and reveals questions.
startGameButton.addEventListener("click", function () {
  //Hides the welcome.
  welcome.setAttribute("style", "display:none;");

  // Displays questions that is being created in function below.
  displayQuestions();

  // Start timer.
  startCountdown();
});

///////////////////////////////

// Variables
var gameSection = document.getElementById("gameQuestions");
var multipleChoiceButtons = document.getElementById("multipleChoiceButtons");
var currentQuestion = 0;
var choiceButton;

// Displays questions.
function displayQuestions() {


  //Gets the number of questions in QuestionsData. This information is used to terminate the game when the currentQuestion reaches that number.
  for (
    var i = 0; i < questionsData.length-1; i++) {


      if (currentQuestion >= questionsData.length) {
        endGame();


        console.log("questionsData.length: " + questionsData.length, currentQuestion);
        

        break;
        
      }
    }



  // Pulling questionTitle div from HTML to Javascript.
  var questionTitle = document.getElementById("questionTitle");

  // Setting the quiz question to the questionTitle div in HTML.

if(currentQuestion < questionsData.length) {

  questionTitle.textContent = questionsData[currentQuestion].question;

}

  // Setting the program to run through the multiple choices in a specific question.



  for (
    var i = 0;
    i < questionsData[currentQuestion].multipleChoices.length;
    i++
  ) {
    // Creating a button element for each multiple choice option.
    choiceButton = document.createElement("button");

    // Adds the multiple choice text to the button.
    choiceButton.textContent =
      questionsData[currentQuestion].multipleChoices[i];

    // Adds the buttons to the HTML.
    multipleChoiceButtons.append(choiceButton);

    //////////////////////////////////////

    // Validates the Players button selection.

    choiceButton.addEventListener("click", function (event) {
      //   console.log(event.target.textContent);
      if (
        event.target.textContent ===
        questionsData[currentQuestion].correctAnswer
      ) {
        // choiceButton.setAttribute("style", "background-color:green;");
        score++;
        console.log("Correct");
        console.log(score);
      } else {
        // choiceButton.setAttribute("style", "background-color:red;");
        secondsRemaining -= 10;
        console.log("Incorrect");
      }
      nextQuestion();
    });

    //////////////////////////////////////////////////

    // Moves Player to the next question once the button added above is clicked.

    function nextQuestion() {
      //Clears current questions.
      questionTitle.innerHTML = "";
      multipleChoiceButtons.innerHTML = "";

      // Moves to the next question.

      currentQuestion ++;

      if(currentQuestion < questionsData.length) {

      //Displays next set of questions.
      displayQuestions();
      }
      else {
        endGame();
      }

      console.log(currentQuestion);
    }
  }
}
//////////////////////////////////////////////////

// Start Timer.

function startCountdown() {
  timerInterval = setInterval(function () {
    timer.textContent = "Time Remaining: " + secondsRemaining;
    secondsRemaining--;

    if (secondsRemaining <= -1) {
      endGame();
    }
  }, 1000);
}

///////////////////////////////////////////////////


// End Game.

function endGame() {
  // Clear timer.
  clearInterval(timerInterval);

  gameSection.setAttribute("style", "display:none;");

  var resultsSection = document.getElementById("resultsSection");
  var displayResults = document.getElementById("results");


  displayResults.innerHTML =
  "Your final score is " + score + " out of " + questionsData.length;

  resultsSection.classList.remove("hideResultsSection");
}

////////////////

//Saving Scores


var username = document.getElementById("playerInitials");
var saveScoreButton = document.getElementById("submitInitials");


var highScores = [];
// var allHighScores = localStorage.getItem("high_scores");


// if (allHighScores) {
//   allHighScores = JSON.parse(allHighScores);
//   for (var i = 0; i < allHighScores.length; i++) {
//     highScores.push(allHighScores[i]);
//   }
// }


function saveHighScores(event) {
 
    event.preventDefault();


   var playerScores = {
      totalPoints: score,
      name: username.value.trim()
    };

console.log("playerScores: " + JSON.stringify(playerScores));

var highScores = JSON.parse(localStorage.getItem("high_score")) || [];

    highScores.push(playerScores);
   

  

    highScores.sort((a, b) => b.playerScores - a.playerScores);


    localStorage.setItem("high_score", JSON.stringify(highScores));
   
  

   window.location.href="highscores.html";

   console.log("local storage: " + localStorage.getItem("high_score"), "highscore array: " + JSON.stringify(highScores));
  };


saveScoreButton.addEventListener("click", saveHighScores); 

