let StartBtnEl = document.getElementById('StartBtn');

let StopBtnEl = document.getElementById('StopBtn');

let ResetBtnEl = document.getElementById('ResetBtn');

let ShortbrtBtnEl = document.getElementById('ShortbrtBtn');

let LongbrBtnEl = document.getElementById('LongbrBtn');

let timer = document.getElementById('timer');

let uniqId = "";
let min = 25;
let sec = 60;



function stop() {
    clearInterval(uniqId);
}

function start(min, sec) {
    uniqId = setInterval(function() {
        if (sec !== 0) {
            sec -= 1;
            if (sec < 10) {
                timer.textContent = min + ":0" + sec;
            } else {
                timer.textContent = min + ":" + sec;
            }


        } else if (sec === 0) {
            sec = 59;
            min -= 1;
            timer.textContent = min + ":" + sec;
        } else if (sec === 0 && min === 0) {
            stop();
        }
    }, 1000);
}




StartBtnEl.addEventListener("click", function(event) {
    // min = timer.textContent;
    start(min - 1, sec);
});

StopBtnEl.addEventListener("click", function(event) {
    stop();
});

ResetBtnEl.addEventListener("click", function(event) {
    min = 25;
    sec = 60;
    timer.textContent = "25:00";
    clearInterval(uniqId);
});

ShortbrtBtnEl.addEventListener("click", function(event) {

    timer.textContent = "5:00";

    stop();
    min = 5;
    sec = 60;

});

LongbrBtnEl.addEventListener("click", function(event) {
    min = 15;
    timer.textContent = "15:00";
    stop();
    sec = 60;

    StopBtnEl.addEventListener("click", function(event) {
        clearInterval(uniqId);
    });
});
