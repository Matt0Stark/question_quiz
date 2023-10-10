var startButton = document.querySelector(".start-button");
var timerCount = document.querySelector(".timer-count");
var questionArea = document.querySelector(".question-area");
var scoreCount = document.querySelector(".score-count");
var timersec = 60;
var currentQuestionIndex = 0;
var quizScoreCounter = 0;
//what scoreboard?
RenderScoreboard();

var questions = [
    {
        question: "what is 2+2",
        answer: ["one","two","three","four"],
        correct: "four",
    },
    {
        question: "what is 2+3",
        answer: ["three","four","five","six"],
        correct: "five",
    },
    {
        question: "what is 2+6",
        answer: ["two","eight","taco","nine"],
        correct: "taco",
    },
    {
        question: "what is 2+1",
        answer: ["one","three","nine","seven"],
        correct: "three",
    },
    {
        question: "what is 2+5",
        answer: ["seven","eight","three","six"],
        correct: "seven",
    },
]

function start() {
    var timeInterval = setInterval(function () {
        timersec--;
        timerCount.textContent = timersec;
        if (timersec === 0) {
            clearInterval(timeInterval);
            resetScreen()
        }
    }, 1000);
    quiz();
};

function quiz(){
    displayquestion();

}



function displayquestion(){
    
    startButton.setAttribute("style", "display: none");
    resetScreen();
    var currentQuestion = questions[currentQuestionIndex];
    var pTag = document.createElement("p");
    pTag.textContent = currentQuestion.question;
    questionArea.appendChild(pTag);

    for( var i = 0; i < currentQuestion.answer.length; i++){
        var answer = currentQuestion.answer[i];
        var btn = document.createElement("button");
        console.log(btn);
        btn.textContent = answer;
        btn.setAttribute("id", answer);
        questionArea.appendChild(btn);
        console.log(btn);
    };
    
       
};


function answerIsCorrect(){
quizScoreCounter++;
scoreCount.textContent = quizScoreCounter;
};


function answerIsWrong(){
    timersec -= 5;
};


function endGame(){
    // clearInterval(timeInterval);

    var initials = prompt("Please enter your initials","JB")
  //prompt user to enter initials
  //store user initials input and quizScoreCounter in local storage
};

function resetScreen(){
    questionArea.innerHTML="";
};

function RenderScoreboard(){
    //get all stored initials/quiz score pairs(bonus points for sorted from highest to lowerst.)
    //displays somewhere on the screen
};

//questions still have no idea if they are correct***
questionArea.addEventListener("click", function(event){
    var currentQuestion = questions[currentQuestionIndex];
    if(event.target.matches("button")){
        if (event.target.id === currentQuestion.correct){
            answerIsCorrect();
        } else {
            answerIsWrong();
        }
        currentQuestionIndex++;
        if (currentQuestionIndex === 5){
            questionArea.innerHTML="";
            // clearInterval(timeInterval);
            endGame();
        }else{
            displayquestion();
        }
        console.log("wat");
        // displayquestion();
    }
});


startButton.addEventListener("click", start);

