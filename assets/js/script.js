var startButton = document.querySelector(".start-button");
var timerCount = document.querySelector(".timer-count");
var questionArea = document.querySelector(".questions");
var timersec = 60;
var currentQuestionIndex = 0;
var winner;

var questions = {

}

function start() {
    var timeInterval = setInterval(function(){
        timersec--;
        timerCount.textContent = timersec;
        if( timer === 0){
            clearInterval(timeInterval)
            // determain if the user won or lost
        }
    }, 10000);
    displayquestion();
}

function displayquestion(){







    

}




function answerIsCorrect(){

}

function answerIsWrong(){

}

startButton.addEventListener("click", start);