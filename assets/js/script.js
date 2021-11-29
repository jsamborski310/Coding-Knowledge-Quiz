// GAME QUESTIONS
//------------------------

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

// GAME INTRO
//------------------------

// Pulling from HTML.
var startGameButton = document.getElementById("startGame");
var welcome = document.querySelector(".welcomeMessage");
var timer = document.getElementById("timer");

// Variables
var secondsRemaining = 30;
var timerInterval;
var score = 0;


// DISPLAY QUESTIONS
//------------------------

// Pulling from HTML.
var gameSection = document.getElementById("gameQuestions");
var multipleChoiceButtons = document.getElementById("multipleChoiceButtons");
var correct = document.getElementById("correctIncorrect");

// Variables
var currentQuestion = 0;
var choiceButton;


// SAVE SCORES
//------------------------

// Pulling from HTML.
var username = document.getElementById("playerInitials");
var saveScoreButton = document.getElementById("submitInitials");

// Variables
var highScores = JSON.parse(localStorage.getItem("high_score")) || [];



/////////////////////////////////////////
// Hiding timer until the game starts.

timer.setAttribute("style", "display:none;");

/////////////////////////////////////////

// GAME INTRO
//------------------------

// Hides welcome message when the button is clicked and reveals questions.
startGameButton.addEventListener("click", function () {

  // Hides the welcome.
  welcome.setAttribute("style", "display:none;");

  // Displays hidden timer.
  timer.setAttribute("style", "display:block;");

  // Starts timer.
  startCountdown();

  // Displays questions that is being created in function below.
  displayQuestions();
 
});

///////////////////////////////


// DISPLAY QUESTIONS
//------------------------


function displayQuestions() {

  // Pulling questionTitle div from HTML to Javascript.
  var questionTitle = document.getElementById("questionTitle");

  // Setting the quiz question to the questionTitle div in HTML.
  questionTitle.textContent = questionsData[currentQuestion].question;


  // Setting the program to run through the multiple choices in a specific question.
  for (var i = 0; i < questionsData[currentQuestion].multipleChoices.length; i++) {
   
    // Creating a button element for each multiple choice option.
    choiceButton = document.createElement("button");
    choiceButton.id = "selectedAnswer";

    // Adds the multiple choice text to the button.
    choiceButton.textContent =
      questionsData[currentQuestion].multipleChoices[i];

    // Adds the buttons to the HTML.
    multipleChoiceButtons.append(choiceButton);


///////////////////////////////


// ANSWER VALIDATION
//------------------------

    choiceButton.addEventListener("click", function (event) {

      // Checks if button text matches the correct answer.
      if (event.target.textContent === questionsData[currentQuestion].correctAnswer) {  

        // Notifies player of correct answer.
        correct.textContent = "Correct!";
        correct.setAttribute("style", "text-transform:uppercase; color:#73648A; font-weight:700; font-family: Arial, Helvetica, sans-serif; padding-top: 20px; padding-left:5px;");

        // Adds a point to the current score.
        score++;
      

      } else {
     
        // Notifies player of incorrect answer.
        correct.textContent = "Incorrect!";
        correct.setAttribute("style", "text-transform:uppercase; color:#FA8072; font-weight:700; font-family: Arial, Helvetica, sans-serif; padding-top:20px; padding-left:5px;");
        
        // Deducts 10 seconds from time for incorrect answer.
        secondsRemaining -= 10;
        
      }
      nextQuestion();
    });


///////////////////////////////

// NEXT QUESTION
//------------------------

    function nextQuestion() {

      //Clears current questions.
      questionTitle.innerHTML = "";
      multipleChoiceButtons.innerHTML = "";

      // Moves to the next question.
      currentQuestion ++;

      // Finds length and stops game if there are no more questions. 
      // Displays questions until there aren't anymore. 
      if(currentQuestion < questionsData.length) {
          displayQuestions();
          }
          else {
            endGame();
          }
    }
  }
}
///////////////////////////////

// TIMER
//------------------------

function startCountdown() {
  timerInterval = setInterval(function () {
    timer.textContent = "Time Remaining: " + secondsRemaining;
    secondsRemaining--;

    if (secondsRemaining <= -1) {
      endGame();
    }
  }, 1000);
}

///////////////////////////////

// END GAME
//------------------------

function endGame() {

  // Pulling from HTML.
  var resultsSection = document.getElementById("resultsSection");
  var displayResults = document.getElementById("results");

  // Clear timer.
  clearInterval(timerInterval);

  // Hides game section when no questions are left.
  gameSection.setAttribute("style", "display:none;");

  // Displays players result. 
  displayResults.innerHTML =
  "Your final score is " + score + " out of " + questionsData.length;

  // Hides results section.
  resultsSection.classList.remove("hideResultsSection");
}

///////////////////////////////

// SAVES SCORES
//------------------------

function saveHighScores(event) {
 
    event.preventDefault();


   var playerScores = {
      totalPoints: score,
      name: username.value.trim()
    };

    // Pushes each new initial and score to the end of the highScores array.
    highScores.push(playerScores);

    // Stores scores.
    localStorage.setItem("high_score", JSON.stringify(highScores));
   
    // Directs player to Highscores page on button click.
    window.location.href="highscores.html";
 
  };

// Save scores function is executed on the click of this button.
saveScoreButton.addEventListener("click", saveHighScores); 

