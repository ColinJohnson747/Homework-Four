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
}


function questionLoop(){
    questions++;

    if (questions > multipleChoice.length){
        "endgame";
        return;
    }


    var quiz = "<h1>" + multipleChoice[questions].title "</h1>"
}












function showScores() {}
