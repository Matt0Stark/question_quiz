var startButton = document.querySelector(".start-button");
var timerCount = document.querySelector(".timer-count");
var questionArea = document.querySelector(".question-area");

var timersec = 60;
var currentQuestionIndex = 0;

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
    // {
    //     question: "what is 2+2",
    //     answer: [],
    //     correct: "",
    // },
    // {
    //     question: "what is 2+2",
    //     answer: [],
    //     correct: "",
    // },

]



function start() {

    var timeInterval = setInterval(function () {
        //is this setting the timer?
        timersec--;
        timerCount.textContent = timersec;
        if (timersec === 0) {
            clearInterval(timeInterval)
            // determain if the user won or lost
        }
        // is this setting the speed of time interval? or length of time on timer???
    }, 1000);
    displayquestion();
};

function displayquestion(){
    var currentQuestion = questions[currentQuestionIndex];
    var pTag = document.createElement("p");
    pTag.textContent = currentQuestion.question;
    questionArea.appendChild(pTag);

    for( var i = 0; i < currentQuestion.answer.length; i++){
        var answer = currentQuestion.answer[i];
        var btn = document.createElement("button");
        btn.textContent = answer;
        questionArea.appendChild(btn);
    };

};


function answerIsCorrect(){

};

function answerIsWrong(){

};

questionArea.addEventListener("click", function(event){
    var currentQuestion =questions[currentQuestionIndex];
    if(event.target.matches("button")){
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    currentQuestionIndex++;
    displayquestion();
});


startButton.addEventListener("click", start);