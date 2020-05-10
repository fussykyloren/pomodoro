let sessionTimerDown = document.getElementById("sessionTimerDown");
let sessionTimerUp = document.getElementById("sessionTimerUp");
let sessionTime = document.getElementById("sessionTime");

let breakTimerDown = document.getElementById("breakTimerDown");
let breakTimerUp = document.getElementById("breakTimerUp");
let breakTime = document.getElementById("breakTime");

let playButton = document.getElementById("playButton");
let restartButton = document.getElementById("restartButton");
let pauseButton = document.getElementById("pauseButton");
let stopButton = document.getElementById("stopButton");

let displayTime = document.getElementById("displayTime");
let displayTitle = document.getElementById("displayTitle");

let timer = "";
let minutes = "";
let seconds = "";
let timerMode = "session";
let timerOn;
let once = { once: true };

function sessionTimeDown() {
    if(sessionTime.textContent > Number('1')) {
        sessionTime.textContent = Number(sessionTime.textContent) - 1;
        displayTime.textContent = sessionTime.textContent + ":00";
    }
    else {
        sessionTime.textContent = Number(1);
        displayTime.textContent = sessionTime.textContent + ":00";
    }
};

function sessionTimeUp() {
    if(sessionTime.textContent < Number('60')) {
       sessionTime.textContent = Number(sessionTime.textContent) + 1;
       displayTime.textContent = sessionTime.textContent + ":00";
   }
};

function breakTimeDown() {
    if(breakTime.textContent > Number('1')) {
        breakTime.textContent = Number(breakTime.textContent) - 1;
    }
    else {
        breakTime.textContent = Number(1);
    }
}l

function breakTimeUp() {
    if(breakTime.textContent < Number('60')) {
        breakTime.textContent = Number(breakTime.textContent) + 1;
    }
};

function playTimer() {
    timer = displayTime.textContent;
    minutes = timer.slice(0, timer.indexOf(":"));
    seconds = timer.slice(timer.indexOf(":") + 1);
    timerOn = setInterval(function() {
        if(minutes = "0" && seconds = "00") {
              if(timerMode == "session") {
                  timerMode = "break";
                  minutes = breakTime.textContent;
                  seconds = "00";
                  displayTime.textContent = minutes + ":" + seconds;
                  displayTitle.textContent = "Break";
              }
              else {
                  timerMode = "session";
                  minutes = sessionTime.textContent;
                  seconds = "00";
                  displayTime.textContent = minutes + ":" + seconds;
                  displayTitle.textContent = "Session";
              }
          }
        else if (seconds == "00") {
            seconds = "59";
            minutes--;
        }
        else {
            seconds--;
        }
        
        displayTime.textContent = minutes + ":" + seconds;
    }, 1000)
    
    sessionTimerDown.removeEventListener("click", sessionTimeDown);
    sessionTimerUp.removeEventListener("click", sessionTimeUp);
    breakTimerDown.removeEventListener("click", breakTimeDown);
    breakTimerUp.removeEventListener("click", breakTimeUp);
}

function pauseButtonClicked() {
    clearInterval(timerOn);
    playButton.addEventListener("click", playTimer, once);
}

function stopButtonClicked() {
    if(timerMode == "session") {
        min = sessionTime.textContent;
        sec = "00";
        timerText.textContent = minutes + ":" + seconds;
    }
    else if (timerMode == "break") {
        timerMode == "session";
    }
}

sessionTimerDown.addEventListener("click", sessionTimeDown);
sessionTimerUp.addEventListener("click", sessionTimeUp);
breakTimerDown.addEventListener("click", breakTimeDown);
breakTimerUp.addEventListener("click", breakTimeUp);

playButton.addEventListener("click", playTimer, once);
pauseButton.addEventListener("click", pauseButtonClicked)
