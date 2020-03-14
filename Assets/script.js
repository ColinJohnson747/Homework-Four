var secondsDisplay = document.querySelector("#seconds"); 
var secondsLeft = 75
var container = document.querySelector("#startingPage")




function timerStart(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        secondsDisplay.textContent = secondsLeft;

        if(secondsLeft === 0){
            
        }
    }, 1000);
}

function showScores() {
    
}
