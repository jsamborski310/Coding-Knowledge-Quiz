var questions = [
    {
        question: "Question 1",
        choices: {
            wrong: "Wrong 1",
            correct: "Correct Answer"
        }
    }
]

var startGameButton = document.getElementById("#startGame");

startGame.addEventListener("click", function() {

    startGame.setAttribute("style", "background-color:black; color:red;")

});




//Call button. Add Event Listener so that when button is clicked, it displays the first set of questions like in the Slack example. 