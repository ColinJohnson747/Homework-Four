var secondsDisplay = document.querySelector("#seconds");

var container = document.querySelector("#startingPage");

var multipleChoice = [
  {
    question: "Commonly used data types do NOT include:",
    choices: ["strings( )", "booleans( )", "alerts( )", "numbers( )"],
    correctAnswer: "alerts( )"
  },
  {
    question: "The condition of an if/else statement is closed within:",
    choices: ["commas( )", "brackets( )", "parentheses( )", "braces( )"],
    correctAnswer: "parentheses( )"
  },
  {
    question: "Arrays in Javascript can be used to store:",
    choices: [
      "Numbers and strings( )",
      "booleans( )",
      "other Arrays( )",
      "All of the Above( )"
    ],
    correctAnswer: "All of the Above( )"
  },
  {
    question: "Javascript was first released in what year?",
    choices: ["1993( )", "1996( )", "1998( )", "1995( )"],
    correctAnswer: "1995( )"
  },
  {
    question:
      "Which of these browsers is no longer supported by nearly developer?",
    choices: ["Chrome( )", "Netscape( )", "Edge( )", "Firefox( )"],
    correctAnswer: "Netscape( )"
  }
];



function timerStart() {
  var secondsLeft = 75;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    secondsDisplay.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      finalScreen();
    }
  }, 1000);
  questionLoop()
}




function gameOver() {
    clearInterval(timerInterval);
    var endScreen = "<h2>Game Over!</h2> <Your time left was>" + secondsLeft + "</h3> <input type= 'text' id='Initials' placeholder='initials'><button onclick='recordScore()'>Record Your Score!</button>";

    document.getElementById("mainPage").innerHTML = endScreen;
}


function wrong() {
  timeLeft -= 15;
  questionLoop();
}

function questionLoop() {
  questions++;

  if (questions > multipleChoice.length) {
    gameOver();
    return;
  }

  var quiz = "<h1>" + multipleChoice[questions].title + "</h1>";

  for (i = 0; i < multipleChoice[questions].choices.length; i++) {
    var buttonSelect = 'button onclick="[ANS}">[CHOICE]</button>';
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

  document.getElementById(".startingPage").innerHTML = quizContent;
}

function showScores() {}
$("#startBtn").on("click", timerStart());