var startButton = document.querySelector(".start-button");
var timerCount = document.querySelector(".timer-count");
var questionArea = document.querySelector(".question-area");
var scoreCount = document.querySelector(".score-count");
var leaderBoard = document.querySelector("saved-player-scores");
var timersec = 30;
var currentQuestionIndex = 0;
var quizScoreCounter = 0;
//what scoreboard?
// RenderScoreboard();




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

//done?
function start() {
    var timeInterval = setInterval(function () {
        timersec--;
        timerCount.textContent = timersec;
        if (timersec === 0) {
            clearInterval(timeInterval);
            resetScreen();
        } else  if (currentQuestionIndex === 5){
            clearInterval(timeInterval);
        };

    }, 1000);
    quiz();
};

//does this even need to be here as its own function?
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

// done?
function endGame(){
    console.log("we made it to end of game");
    var initials = prompt("Please enter your initials","JB");
    console.log(initials);
    var playerSubmission = {name: initials, score: quizScoreCounter};
    console.log(playerSubmission);
 
    localStorage.setItem("playerSubmission", JSON.stringify(playerSubmission));
    RenderScoreboard();
  //store user initials input and quizScoreCounter in local storage
};

//done
function resetScreen(){
    questionArea.innerHTML="";
};

// will need to pull the obs, parse them, and put them somewhere on the page
function RenderScoreboard(){
    var scoreBoard = JSON.parse(localStorage.getItem("playerSubmission"));
    console.log("am I rendering?");
    console.log(scoreBoard);

    if (scoreBoard !== null) {
        // leaderBoard.textContent = scoreBoard.name + scoreBoard.score;
    };

    //     leaderBoard.textContent = scoreBoard; 
    // loops for each thing in object?
    //   }
    //get all stored initials/quiz score pairs(bonus points for sorted from highest to lowerst.)
    //displays somewhere on the screen
};

//done?
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

