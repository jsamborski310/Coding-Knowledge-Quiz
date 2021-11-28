var questionsData = [
  {
    question: "What does CSS stand for?",
    multipleChoices: ["Color Style Saver", "Cascading Style Sheets", "Cascading Sheets Style", "Cascading Simple Style"],
    correctAnswer: "Cascading Style Sheets",
  },

  {
    question: "What does HTML stand for?",
    multipleChoices: ["HyperText Markup Language", "HighText Marker Language", "HyperText Makeup Language", "HighText Markup Layout"],
    correctAnswer: "HyperText Markup Language",
  },

  {
    question: "The CSS Box Model is comprised of which four properties?",
    multipleChoices: ["Width, Height, Padding, Margin", "Buttons, Padding, Border, Margin", "Content, Font-Size, Color, Margin", "Content, Padding, Border, Margin"],
    correctAnswer: "Content, Padding, Border, Margin",
  },
  {
    question: "What function does the push() method have?",
    multipleChoices: ["Pushes existing items out of an array.", "Adds new items to the end of an array.", "Adds new items to the beginning of an array.", "Adds an operator into the array."],
    correctAnswer: "Adds new items to the end of an array.",
  },
  {
    question: "What functionality does triple equal (===) contain?",
    multipleChoices: ["Verifies that both type and value are equal.", "Adds three numbers together.", "Verifies that type or value are equal.", "Does not exist."],
    correctAnswer: "Verifies that both type and value are equal.",
},
];

/////////////////////////////////////////

// Variables
var startGameButton = document.getElementById("startGame");
var welcome = document.querySelector(".welcomeMessage");
var timer = document.getElementById("timer");

var secondsRemaining = 30;
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



  // Pulling questionTitle div from HTML to Javascript.
  var questionTitle = document.getElementById("questionTitle");

  // Setting the quiz question to the questionTitle div in HTML.

  questionTitle.textContent = questionsData[currentQuestion].question;

// }

  // Setting the program to run through the multiple choices in a specific question.

  for (
    var i = 0;
    i < questionsData[currentQuestion].multipleChoices.length;
    i++
  ) {
    // Creating a button element for each multiple choice option.
    choiceButton = document.createElement("button");

    choiceButton.id = "selectedAnswer";

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

        document.getElementById("selectedAnswer").style.background = "green";

        score++;
        console.log("Correct");
        console.log(score);
      } else {
     
        document.getElementById("selectedAnswer").style.background = "red";

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


      // Finds length and stops game if there are no more questions.
      if(currentQuestion < questionsData.length) {

      //Displays next set of questions.
      displayQuestions();
      }
      else {
        endGame();
      }
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
var highScores = JSON.parse(localStorage.getItem("high_score")) || [];

function saveHighScores(event) {
 
    event.preventDefault();


   var playerScores = {
      totalPoints: score,
      name: username.value.trim()
    };

    highScores.push(playerScores);


    highScores.sort((a, b) => b.playerScores - a.playerScores);


    localStorage.setItem("high_score", JSON.stringify(highScores));
   
  

   window.location.href="highscores.html";

   console.log("local storage: " + localStorage.getItem("high_score"), "highscore array: " + JSON.stringify(highScores));
  };


saveScoreButton.addEventListener("click", saveHighScores); 

