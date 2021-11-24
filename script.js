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
];

/////////////////////////////////////////

// Variables
var startGameButton = document.getElementById("startGame");
var welcome = document.querySelector(".welcomeMessage");
var timer = document.getElementById("timer");

var secondsRemaining = 200;
var timerInterval;

// Hides welcome message when the button is clicked and reveals questions.
startGameButton.addEventListener("click", function () {
  //Hides the welcome.
  welcome.setAttribute("style", "display:none;");

  // Displays questions that is being created in function below.
  displayQuestions(questionsData);

  // Start timer.

  startCountdown();
  // timerInterval = setInterval(startCountdown, 1000);
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

    var score = 0;

    choiceButton.addEventListener("click", function (event) {
      //   console.log(event.target.textContent);
      if (
        event.target.textContent ===
        questionsData[currentQuestion].correctAnswer
      ) {
        choiceButton.setAttribute("style", "background-color:green;");
        score += console.log("Correct");
      } else {
        choiceButton.setAttribute("style", "background-color:red;");
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
      currentQuestion += 1;

      //Displays next set of questions.
      displayQuestions(questionsData);
    }
  }
}
//////////////////////////////////////////////////

// Start Timer.

function startCountdown() {
  timerInterval = setInterval(function () {
    timer.textContent = "Time Remaining: " + secondsRemaining;
    secondsRemaining--;

    if (secondsRemaining === 0) {
      endGame();
    }
  }, 1000);
}

///////////////////////////////////////////////////

// End Game.

function endGame() {

  // Clear timer.  
  clearInterval(timerInterval);
}
// create the html.
//get elements
//create the elements in javascript for the html.
