var startButton = document.querySelector(".start-button");
var timerCount = document.querySelector(".timer-count");
var questionArea = document.querySelector(".question-area");
var scoreCount = document.querySelector(".score-count");
var timersec = 30;
var currentQuestionIndex = 0;
var quizScoreCounter = 0;
//what scoreboard?
RenderScoreboard();

//done
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
        correct: "eight",
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
            resetScreen();
        }
    }, 1000);
    quiz();
};


function quiz(){
    displayquestion();

};


//done?
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

//done
function answerIsCorrect(){
quizScoreCounter++;
scoreCount.textContent = quizScoreCounter;
};

//done
function answerIsWrong(){
    timersec -= 5;
};

// should be  pushing noth the initials and the final state of the quiz score counter into local storage. will need to stringify JSON ob?
function endGame(){
    console.log("we made it to end of game")
    var initials = prompt("Please enter your initials","JB");
    console.log(initials)

  //store user initials input and quizScoreCounter in local storage
};

//done
function resetScreen(){
    questionArea.innerHTML="";
};

// will need to pull the obs, parse them, and put them somewhere on the page
function RenderScoreboard(){
    var scoreBoard = localStorage.getItem("");
    //get all stored initials/quiz score pairs(bonus points for sorted from highest to lowerst.)
    //displays somewhere on the screen
};

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
            endGame();
        }else{
            displayquestion();
        }
        
        
    }
});

//done
startButton.addEventListener("click", start);

