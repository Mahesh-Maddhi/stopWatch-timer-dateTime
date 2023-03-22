
//  stop watch 
{
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let startButton = document.getElementById("startButton");
let microSeconds = document.getElementById("microSeconds");
let resetButton = document.getElementById("resetButton");
let timeContainer = document.getElementById("timeContainer");

let startCount = 0;
let msCount = 0;
let sCount = 0;
let minCount = 0;
let msId = null;
let sId = null;
let mId = null;
let readings = [];

let count = 0;

function reading(min, sec, ms, count) {
    let time = { mins: min, secs: sec, ms: ms, id: count }
    readings.push(time)
    let line = document.createElement("p");
    line.id = count;
    line.classList.add("line");
    line.textContent = readings[readings.length - 1].mins + ":" + readings[readings.length - 1].secs + ":" + readings[readings.length - 1].ms;

    timeContainer.appendChild(line);


}

startButton.onclick = function () {

    if (startCount < 1) {

        msId = setInterval(function () {

            // Micro Seconds
            msCount++;
            if (msCount > 9) {
                msCount = 0;
            }
            if (msCount < 10) {
                microSeconds.textContent = "0" + msCount;

            } else {
                microSeconds.textContent = msCount;
            }

            // Seconds
            if (msCount % 10 === 0) {
                sCount++;
                if (sCount >= 60) {
                    sCount = 0;
                }
                if (sCount < 10) {
                    seconds.textContent = "0" + sCount;

                } else {
                    seconds.textContent = sCount;
                }

                // minutes
                if (sCount % 60 === 0) {

                    minCount++;
                    if (minCount >= 60) {
                        minCount = 0;
                    }
                    if (minCount < 10) {
                        minutes.textContent = "0" + minCount;

                    } else {
                        seconds.textContent = minCount;
                    }
                }
            }

        }, 100);

    }
    startCount++;

}
resetButton.onclick = function () {
    startCount = 0;
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    microSeconds.innerHTML = "00";
    clearInterval(msId);
    msCount = 0;
    sCount = 0;
    minCount = 0;


}
stopButton.onclick = function () {


    clearInterval(msId);
    count++;
    reading(minutes.textContent, seconds.textContent, microSeconds.textContent, count);
    startCount = 0;

}
clearBtn.onclick = () => {
    timeContainer.textContent = "";


}
}
// date time

{
let timeE = document.getElementById("time");
let dateE = document.getElementById("date");
let dayE = document.getElementById("day");
let days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

setInterval(() => {
    let time;
    let d;
    d = new Date;
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    let dateformat = d.toLocaleDateString();
    let day = days[d.getDay()];

    if (hours < 10) { hours = "0" + hours };
    if (mins < 10) { mins = "0" + mins };
    if (secs < 10) { secs = "0" + secs };

    if (hours > 12) {
        hours = hours % 12;
        if (hours < 10) { hours = "0" + hours };
        time = hours + ":" + mins + ":" + secs + " PM";
    } else {
        time = hours + ":" + mins + ":" + secs + " AM";
    }

    timeE.textContent = time;
    dateE.textContent = dateformat;
    dayE.textContent = day;


}, 1000);

}
// timer
{
let timerInput = document.getElementById("timerInput");
let secondsTime = document.getElementById("secondsTime");
let reset = document.getElementById("reset");
let progress = document.getElementById("progress");

function milliseconds() {
    let ms = 10
    let milliSecendsTime = document.getElementById("milliSecendsTime");
    let msid = setInterval(() => {
        ms -= 1
        milliSecendsTime.textContent = "0" + ms;
        if (ms <= 0) {
            clearInterval(msid);
        }

    }, 100)

}

timerInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        document.getElementById("Status").textContent = "";
        let time = parseInt(timerInput.value);
        let sec = time-1;
        if(time > 0){
        timerInput.classList.add("invisible");
        reset.classList.remove("invisible");
        progress.classList.remove("invisible");
        milliseconds();
        secondsTime.textContent = sec;
        progress.value = ((sec+1)/time)*100;
        let secId = setInterval(() => {
            milliseconds();
            progress.value = ((sec)/time)*100;
            sec -= 1;
            if (sec > 9) { secondsTime.textContent = sec; }
            else { secondsTime.textContent = "0" + sec;}
            
            //reset
            reset.onclick = () => {
                clearInterval(secId);
                    timerInput.classList.remove("invisible");
                    reset.classList.add("invisible");
                    secondsTime.textContent = "00";
                    progress.classList.add("invisible");
                    progress.value = 100;
            }
            if (sec < 1) {
                clearInterval(secId);
                progress.classList.add("invisible");
                setTimeout(() => {
                    document.getElementById("Status").textContent = "Your time is up!";
                    timerInput.classList.remove("invisible");
                    reset.classList.add("invisible");
                    progress.value = 100;
                    

                }, 1000);

            }

        }, 1000);
    }else{
        alert("enter a valid format");
        timerInput.value = "";
        return;
    }

        timerInput.value = "";

    }

})

}



// sectionswitch
{
let timebtn = document.getElementById("timeBtn");
let timerbtn = document.getElementById("timerBtn");
let stopBtn = document.getElementById("stop");
let timerSection = document.getElementById("timerSection");
let watchSection = document.getElementById("watchSection");
let stopSection = document.getElementById("stopSection");

timebtn.onclick = () => {
    timerSection.classList.add("d-none");
    stopSection.classList.add("d-none");
    watchSection.classList.remove("d-none");

    timebtn.classList.add("selected");
    timerbtn.classList.remove("selected");
    stopBtn.classList.remove("selected");
}
timerbtn.onclick = () => {
    timerSection.classList.remove("d-none");
    stopSection.classList.add("d-none");
    watchSection.classList.add("d-none");

    timerbtn.classList.add("selected");
    timebtn.classList.remove("selected");
    stopBtn.classList.remove("selected");
}
stopBtn.onclick = () => {
    timerSection.classList.add("d-none");
    stopSection.classList.remove("d-none");
    watchSection.classList.add("d-none");

    timebtn.classList.remove("selected");
    timerbtn.classList.remove("selected");
    stopBtn.classList.add("selected");
}

}
