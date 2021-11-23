var questionsData = [
    {
        question: "Two plus two, equals?",
        multipleChoices: [
            "One",
            "Two",
            "Three",
            "Four"
        ],
        correctAnswer: "Four"

    },

    {
        question: "Three plus three, equals?",
        multipleChoices: [
            "Five",
            "Six",
            "Seven",
            "Eight"
        ],
        correctAnswer: "Six"

    },

    {
        question: "One plus one, equals?",
        multipleChoices: [
            "Two",
            "Three",
            "Four",
            "Five"
        ],
        correctAnswer: "Two"

    }
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



function displayQuestions() {

    // Pulling questionTitle div from HTML to Javascript.
    var questionTitle = document.getElementById("questionTitle");

    // Setting the quiz question to the questionTitle div in HTML.
    questionTitle.textContent = questionsData[currentQuestion].question;

    // Setting the program to run through the multiple choices in a specific question.
    for (var i = 0; i < questionsData[currentQuestion].multipleChoices.length; i++) {

        //Creating a button element for each multiple choice option.
        choiceButton = document.createElement("button");

        // Adds the multiple choice text to the button.
        choiceButton.textContent = questionsData[currentQuestion].multipleChoices[i];








        // set data attribute, pull it into the click event. event.target. Compare to dataset choice. Validate later, when they click button. 
choiceButton.dataset.choices = questionsData[currentQuestion].multipleChoices[i];

        // Adds multiple choice buttons to the HTML dynamically.
        multipleChoiceButtons.append(choiceButton);




//////////////////////////////////////

    //Next Question

    // Adds function to trigger next question.
    function nextQuestion() {
        // Function takes place when button clicked.
        choiceButton.addEventListener("click", function () {

            // Clears out the current question and multiple choice options.
            questionTitle.innerHTML = "";
            multipleChoiceButtons.innerHTML = "";

            // Moves to the next question
            currentQuestion += 1;

            displayQuestions(questionsData);

            nextQuestion();

        });

    }



//////////////////////////////////////////////////


//Create function
//button first, and then validate
        if (questionsData[currentQuestion].multipleChoices[i] === questionsData[currentQuestion].correctAnswer) {
            // choiceButton.setAttribute("correct", "yes");
            console.log("correct");
        } else {
            // choiceButton.setAttribute("correct", "no");
            console.log("incorrect");
        }

        //validate(selectedAnswer);

        nextQuestion();
    }

}


    
    




