var questionsData = [
    {
        question: "Question 1",
        multipleChoice: [ 
            "One", 
            "Two", 
            "Three", 
            "Four"
            // a: "Q1Choice_1",
            // b: "Q1Choice_2",
            // c: "Q1Choice_3",
            // d: "Q1Choice_4"
        ],
        correctAnswer: "Q1Choice_2"

    },

    {
        question: "Question 2",
        multipleChoice: {
            a: "Q2Choice_1",
            b: "Q2Choice_2",
            c: "Q2Choice_3",
            d: "Q2Choice_4"
        },
        correctAnswer: "Q1Choice_2"

    }
];


/////////////////////////////////////////

// Hides welcome message when the button is clicked.

//Variables

// var startGameButton = document.getElementById("#startGame");
// var welcome = document.querySelector(".welcomeMessage");

// startGame.addEventListener("click", function () {
//     //Hides the welcome.
//     welcome.setAttribute("style", "display:none;");


//     //Display game questions?
//     document.getElementById("gameQuestions").innerHTML = "Hello World"; //create the function then print it here?

// });

///////////////////////////////


var gameSection = document.getElementById("gameQuestions");
var resultSection = document.getElementById("result");
var nextQuestion = document.getElementById("next");
// var questionTitle = document.getElementById("questionTitle");
var multipleChoices = document.getElementById("multipleChoiceOptions");
var score = 0;
// var questionIndex = 0;
// var currentQuestion;


for(var i = 0; i < questionsData.length; i++) {
    var response = questionsData[i].question;
    if(response == questionsData[i].correctAnswer) {
        score++;
    } else {
        console.log("wrong");
    }
}




// function displayQuestions(q) {

//     var theQuestion = document.getElementById("questionTitle");
//     theQuestion.textContent = q.question;

// }
// displayQuestions(questionsData);






        // questionTitle.innerHTML = questionData.question;

        // for(var i = 0; i < questionsData.length; i++) {
            
        //     questionTitle.innerText = questionsData[i].question;

        // // }

        // questionTitle = "";
        // questionIndex = questionIndex + 1;
        // if (questionIndex < 0) {
        //     questionIndex = questionsData.length;
        // } else if (questionIndex > questionsData.length) {
        //     questionIndex = 0;
        // }
        // currentQuestion = questionsData.question[questionIndex];
        // return questionTitle;



    


    // function validateAnswer() {
    //     if (multipleChoice == correctAnswer) {
    //         score++;
    //     }
    //     else {
    //         result.textContent("Wrong");
    //     }
    // }

    // nextQuestion.addEventListener("click", function () {

    // });








// // Start displaying Game Questions.

    for(var i = 0; i < questionsData.length; i++) {
        gameQuestions.textContent = gameQuestions.textContent + (questionsData[i].question) + (questionsData[i].multipleChoice);

    }



//     if(multipleChoice===correctAnswer) {
//         console.log("Correct!");
//     } else {
//         console.log("Wrong!");
//     }


//     // return gameQuestionsList
//     // gameQuestionsList = function

//     // Do if/else statement first? Get all of the values, and then display? 
//     // if/else statement. If choice is === answer, then it's correct.


//     //add button event listener


//     // look into target element

//     // look into printing data










