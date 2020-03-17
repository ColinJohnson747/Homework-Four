var questions = [
  {
    title: "Commonly used data types do NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts"
  },
  {
    title: "The condition of an if/else statement is closed within:",
    choices: ["Commas", "Brackets", "Parentheses", "Braces"],
    correctAnswer: "Parentheses"
  },
  {
    title: "Arrays in Javascript can be used to store:",
    choices: [
      "Numbers and Strings",
      "Booleans",
      "Other Arrays",
      "All of the Above"
    ],
    answer: "All of the Above"
  },
  {
    title: "Javascript was first released in what year?",
    choices: ["1993", "1996", "1998", "1995"],
    answer: "1995"
  },
  {
    title:
      "Which of these browsers is no longer supported by nearly developer?",
    choices: ["Chrome", "Netscape", "Edge", "Firefox"],
    answer: "Netscape"
  }
];

var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//starts the countdown 
function start() {
  timeLeft = 75;
  document.getElementById("timeLeft").innerHTML = timeLeft;

  timer = setInterval(function() {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;
    //proceed to end the game when timer is 0
    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);

  next();
}

//stop the timer and ends game
function endGame() {
  clearInterval(timer);

  var quizContent =
    `
    <h2>Game over!</h2>
    <h3>You got a ` +
    score +
    ` /100!</h3>
    <h3>That means you got ` +
    score / 20 +
    ` questions correct!</h3>
    <input type="text" id="name" placeholder="First name"> 
    <button onclick="setScore()">Set score!</button>`;

  document.getElementById("quizBody").innerHTML = quizContent;
}

//store the scores 

function getScore() {
  var quizContent =
    `
    <h2>` +
    localStorage.getItem("highscoreName") +
    `'s highscore is:</h2>
    <h1>` +
    localStorage.getItem("highscore") +
    `</h1><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
    
    `;

  document.getElementById("quizBody").innerHTML = quizContent;
}

function setScore() {
  localStorage.setItem("highscore", score);
  localStorage.setItem("highscoreName", document.getElementById("name").value);
  getScore();
}

//clears the score name and value if the user selects 'clear score'
function clearScore() {
  localStorage.setItem("highscore", "");
  localStorage.setItem("highscoreName", "");

  resetGame();
}



function incorrect() {
  timeLeft -= 5;
  next();
}



//reset the game
function resetGame() {
  clearInterval(timer);
  score = 0;
  currentQuestion = -1;
  timeLeft = 0;
  timer = null;

  document.getElementById("timeLeft").innerHTML = timeLeft;

  var quizContent = `
    <h1>
        JavaScript Quiz!
    </h1>
    <h3>
        Click to play!   
    </h3>
    <button onclick="start()">Start!</button>`;

  document.getElementById("quizBody").innerHTML = quizContent;
}



//loops through the questions
function next() {
  currentQuestion++;

  if (currentQuestion > questions.length - 1) {
    endGame();
    return;
  }

  var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>";

  for (
    var buttonLoop = 0;
    buttonLoop < questions[currentQuestion].choices.length;
    buttonLoop++
  ) {
    var buttonCode = '<button onclick="[ANS]">[CHOICE]</button>';
    buttonCode = buttonCode.replace(
      "[CHOICE]",
      questions[currentQuestion].choices[buttonLoop]
    );
    if (
      questions[currentQuestion].choices[buttonLoop] ==
      questions[currentQuestion].answer
    ) {
      buttonCode = buttonCode.replace("[ANS]", "correct()");
    } else {
      buttonCode = buttonCode.replace("[ANS]", "incorrect()");
    }
    quizContent += buttonCode;
  }

  document.getElementById("quizBody").innerHTML = quizContent;
}
