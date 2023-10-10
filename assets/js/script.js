var startButton = document.querySelector(".start-button");
var timerCount = document.querySelector(".timer-count");
var questionArea = document.querySelector(".question-area");
var timersec = 60;
var currentQuestionIndex = 0;
var quizScoreCounter = 0;

var questions = [

    {
        question: "what is 2+2",
        answer: ["1","2","3","4"],
        correct: "4",
    },

    {
        question: "what is 2+3",
        answer: ["3","4","5","6"],
        correct: "5",
    },
    {
        question: "what is 2+6",
        answer: ["7","8","9","3"],
        correct: "8",
    },
    {
        question: "what is 2+1",
        answer: ["2","3","9","7"],
        correct: "3",
    },
    {
        question: "what is 2+5",
        answer: ["7","8","3","6"],
        correct: "7",
    },

]


function start() {

    var timeInterval = setInterval(function () {
        timersec--;
        timerCount.textContent = timersec;
        if (timersec === 0) {
            clearInterval(timeInterval);
            // endGame();
        }
        
    }, 1000);
    displayquestion();
};

function resetScreen(){
    questionArea.innerHTML="";
};

//custome attribute not populating with buttons
function displayquestion(){
    resetScreen();
    var currentQuestion = questions[currentQuestionIndex];
    var pTag = document.createElement("p");
    pTag.textContent = currentQuestion.question;
    questionArea.appendChild(pTag);

    for( var i = 0; i < currentQuestion.answer.length; i++){
        var answer = currentQuestion.answer[i];
        var btn = document.createElement("button");
        btn.textContent = answer;
        // btn.setAttribute=("data-answer" or "id", currentQuestion.answer[i]);
        questionArea.appendChild(btn);
    };
    
        //else send to end screen
};


function answerIsCorrect(){
//clear the previous question
quizScoreCounter++;
};

function answerIsWrong(){
//clear the previous question
//subtract time from the counter
};


function endGame(){

}

questionArea.addEventListener("click", function(event){
    var currentQuestion =questions[currentQuestionIndex];
    if(event.target.matches("button")){
        if (event.target.getAttribute("id")===currentQuestion.correct){
            answerIsCorrect();
        }
    } else {
        answerIsWrong();
    }
    currentQuestionIndex++;
    displayquestion();
});


startButton.addEventListener("click", start);