var startButton = document.querySelector(".start-button");
var timerCount = document.querySelector(".timer-count");
var questionArea = document.querySelector(".question-area");

var timersec = 0;
// var currentQuestionIndex = 0;

// var questions = {

// }

function start() {
    timersec.textContent = timersec;
    var timeInterval = setInterval(function(){
        //is this setting the timer?
        timersec--;
        timerCount.textContent = timersec;
        if( timer === 0){
            clearInterval(timeInterval)
            // determain if the user won or lost
        }
        // is this setting the speed of time interval? or length of time on timer???
    }, 1000);
    displayquestion();
}

// function displayquestion(){
//     var currentQuestion = questions[currentQuestionIndex];
//     var pTag = document.createElement("p");
//     pTag.textContent = currentQuestion.question;
//     questionArea.appendChild(pTag);

//     for( var i = 0; i < currentQuestion.answer.length; i++){
//         var answer = currentQuestion.answer[i];
//         var btn = document.createElement("button");
//         questionArea.appendChild(btn);
//     };

// };


// function answerIsCorrect(){

// };

// function answerIsWrong(){

// };

// questionArea.addEventListener("click", function(event){
//     var currentQuestion =questions[currentQuestionIndex];
//     if(event.target.matches("button")){
//         answerIsCorrect();
//     } else {
//         answerIsWrong();
//     }
//     currentQuestionIndex++;
//     displayquestion();
// });


startButton.addEventListener("click", start);