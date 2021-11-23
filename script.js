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

//Hides welcome message when the button is clicked and reveals questions.

//Variables
var startGameButton = document.getElementById("startGame");
var welcome = document.querySelector(".welcomeMessage");
//

startGameButton.addEventListener("click", function () {
  //Hides the welcome.
  welcome.setAttribute("style", "display:none;");

  //Displays questions that is being created in function below.
  displayQuestions(questionsData);
  // Start timer.
  //
});

///////////////////////////////

// Displays questions.

// Variables
var gameSection = document.getElementById("gameQuestions");
var multipleChoiceButtons = document.getElementById("multipleChoiceButtons");
var currentQuestion = 0;
var choiceButton;

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
    //Creating a button element for each multiple choice option.
    choiceButton = document.createElement("button");

    // Adds the multiple choice text to the button.
    choiceButton.textContent =
      questionsData[currentQuestion].multipleChoices[i];

    // set data attribute, pull it into the click event. event.target. Compare to dataset choice. Validate later, when they click button.
    //  choiceButton.dataset.choices = questionsData[currentQuestion].multipleChoices[i];

    // Adds multiple choice buttons to the HTML dynamically.
    multipleChoiceButtons.append(choiceButton);

    // // <button data-answer="Yellow">Yellow</button>
    // .dataset.answer

    // if  //

    //////////////////////////////////////

    //Next Question

    // Adds function to trigger next question.

    choiceButton.addEventListener("click", function (event) {
      console.log(event.target.textContent);
      if (
        event.target.textContent ===
        questionsData[currentQuestion].correctAnswer
      ) {
        console.log("Correct");
      } else {
        console.log("Incorrect");
      }

      nextQuestion();
    });

    function nextQuestion() {
      // Function takes place when button clicked.

      // Clears out the current question and multiple choice options.

      //         if(event.target.matches("button")) {
      //             if(event.target.getAttribute("correct") == "yes") {
      //                 choiceButton.setAttribute("style", "background-color:green;");
      //             }
      //             else if(event.target.getAttribute("correct") == "no") {
      //                 choiceButton.setAttribute("style", "background-color:red;");
      //             }
      // }

      questionTitle.innerHTML = "";
      multipleChoiceButtons.innerHTML = "";

      // Moves to the next question
      currentQuestion += 1;

      console.log(currentQuestion);

      displayQuestions(questionsData);

    }
  }
}
//////////////////////////////////////////////////

//Create function
//button first, and then validate

//         if (questionsData[currentQuestion].multipleChoices[i] === questionsData[currentQuestion].correctAnswer) {
//             // choiceButton.setAttribute("correct", "yes");
//             console.log("correct");
//         } else {
//             // choiceButton.setAttribute("correct", "no");
//             console.log("incorrect");
//         }

//         //validate(selectedAnswer);

//         nextQuestion();
//     }

// }

// create the html.
//get elements
//create the elements in javascript for the html. 

