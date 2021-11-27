# what starting data my application needs to run?

- Questions and Answers

    - Array list for our series of questions.


    - Each question will be an object.
        - {

            question: "Commonly used data types DO NOT include:",
            multipleChoiceOptions: [
                "string",
                "boolean",
                "numbers"
            ],
            correct: "alert"
        }

- Timer / Score



# What kinds of actions does my application need to do?


-Timer/Score
- Timer interval
var interval; (modify inside of function)

- Start the Game
function startGame () {...}

    - Hide welcome message 
    function hideWelcome () {...} 

    - Display next question
    function displayNextQuestion () {...}

    - Start the countdown timer
    function starttimer() {
        interval = setInterval(function()) {
            ...
            clearInterval();
        }, 1000);
    } * Not clearing the interval here. Declare variable outside of the function. 
      * Alot of declarations need to be global. 

- Answer a Question

    - Validate the users choice

        - IF the choice is wrong, subtract time from the timer.

    - Display next question
    function displayNextQuestion () {...}

    - Display the answer result (least important).

- End the Game
    
    - Stop the timer from counting down. (clearInterval)




# DISCUSSION NOTES:

    Form submits
    Capture form submission
    Store high score value
    Loading high scores
    Printing high scores
    For every action, we need to create a function.

    In function, only put something in the parenthesis () if you need to accept data or pass data. 

    Form Action
    Data storage
    On Click

    Everything in the bullet point is a function

    <ol id="highscores"></ol> on HTML. 



## CLASS EXAMPLE

// Create an array with user selections: selections = "", then selections += (whatever they clicked)


//
//     if(response == questionsData[i].correctAnswer) {
//         score++;
//     } else {
//         console.log("wrong");
//     }
// }







// function nextQuestion(i) {

//     displayQuestions()

//     currentQuestion = currentQuestion[i];
//     if (currentQuestion < 0) {
//         currentQuestion = questionsData.length - 1;
//     }
//     else if (currentQuestion > questionsData.length - 1) {
//         console.log(currentQuestion);
//     } 

//     currentQuestion++;

// }





  





//     // look into target element

//     // look into printing data



/////////////////////////////////////

//    multipleChoiceButtons.addEventListener("click", validateAnswer);

//     function validateAnswer(event) {

//         if(event.target.matches("button")) {
//             if(event.target.getAttribute("correct") == "yes") {
//                 choiceButton.setAttribute("style", "background-color:green;");
//             }
//             else if(event.target.getAttribute("correct") == "no") {
//                 choiceButton.setAttribute("style", "background-color:red;");
//             }
// }

        // Validates responses.  






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

/////

