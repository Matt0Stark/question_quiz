
// Currently fine with the variable organization
var startButton = document.querySelector(".start-button");

var timerCount = document.querySelector(".timer-count");
var clock = document.querySelector(".clock");
var timersec = 30;

var questionArea = document.querySelector(".question-area");
var answerArea = document.querySelector(".answer-area");
var currentQuestionIndex = 0;

var score = document.querySelector(".score");
var quizScoreCounter = 0;
var scoreCount = document.querySelector(".score-count");

var leaderBoard = document.querySelector("saved-player-scores");



// Pulls in local storage for score keeping
renderScoreboard();
var playerStorage = JSON.parse(localStorage.getItem("playerStorage")) || [];

// Answer arrays also need to be arrays of objects? for multi word answers the ID situation will likey need to be reconsidered
var questions = [{
    question: "here is a rather large question to see what is going to happen to my question text area when real questions are populated into the question array",
    answer: ["one", "two", "three", "four"],
    correct: "four",
}, {
    question: "what is 2+3",
    answer: ["three", "four", "five", "six"],
    correct: "five",
}, {
    question: "what is 2+6",
    answer: ["two", "eight", "taco", "nine"],
    correct: "eight",
}, {
    question: "what is 2+1",
    answer: ["one", "three", "nine", "seven"],
    correct: "three",
}, {
    question: "what is 2+5",
    answer: ["seven", "eight", "three", "six"],
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
        } else if (currentQuestionIndex === 5) {
            clearInterval(timeInterval);
        };

    }, 1000);
    displayQuestion();
};

//done?
function displayQuestion() {

    startButton.setAttribute("style", "display: none");
    clock.setAttribute("style", "visibility: visible");
    score.setAttribute("style", "visibility: visible");
    scoreCount.setAttribute("style", "visibility: visible");
    resetScreen();


    var currentQuestion = questions[currentQuestionIndex];
    var pTag = document.createElement("p");
    pTag.textContent = currentQuestion.question;
    questionArea.appendChild(pTag);

    for (var i = 0; i < currentQuestion.answer.length; i++) {
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
function answerIsCorrect() {
    scoreCount.textContent = quizScoreCounter;
    quizScoreCounter++;
    timersec += 10;
};

//done
function answerIsWrong() {
    timersec -= 5;
};

// done?
function endGame() {
    console.log("we made it to end of game");
    var initials = prompt("Please enter your initials", "JB");
    console.log(initials);
    var playerSubmission = { name: initials, score: quizScoreCounter };
    // push object to array
    playerStorage.push(playerSubmission);
    console.log(playerStorage);

    localStorage.setItem("playerStorage", JSON.stringify(playerStorage));
    renderScoreboard();
    //store user initials input and quizScoreCounter in local storage
};

//done
function resetScreen() {
    questionArea.innerHTML = "";
};

// will need to pull the obs, parse them, and put them somewhere on the page
function renderScoreboard() {
    var scoreBoard = JSON.parse(localStorage.getItem("playerStorage"));
    console.log("am I rendering?");
    console.log(scoreBoard);
    var scoreList = document.querySelector(".saved-player-scores");
    if (scoreBoard) {
        for (i = 0; i < scoreBoard.length; i++) {
            var li = document.createElement("li");
            li.textContent = scoreBoard[i].name + scoreBoard[i].score;
            scoreList.appendChild(li);
        };
    };
};

questionArea.addEventListener("click", function (event) {
    var currentQuestion = questions[currentQuestionIndex];
    if (event.target.matches("button")) {
        if (event.target.id === currentQuestion.correct) {
            answerIsCorrect();
        } else {
            answerIsWrong();
        }
        currentQuestionIndex++;
        if (currentQuestionIndex === 5) {
            questionArea.innerHTML = "";
            endGame();
        } else {
            displayQuestion();
        };
    };
});

startButton.addEventListener("click", start);

