const Start = document.getElementById("Start")
const Stop = document.getElementById("Stop")
const Restart = document.getElementById("Restart")
const Screen = document.getElementById("screen");
const MScreen = document.getElementById("MScreen");
var time=00;
var tracker=00;
var inter;
var state=""


Start.addEventListener("click", ()=>{
   inter= setInterval(startTimer,10);
});

Stop.addEventListener("click", ()=>{
    stopTimer();
});
Restart.addEventListener("click", ()=>{
   restartTimer()
});

function startTimer(){
    time+=1;
    if (time==60){
        time=0
        tracker+=1;
        document.getElementById("MScreen").innerHTML = tracker;
    }
    document.getElementById("Screen").innerHTML = time;
    
}
function stopTimer(){
    clearTimeout(inter);
    document.getElementById("Screen").innerHTML = time;
}

function restartTimer(){
    time=00;
    tracker=00;
    document.getElementById("MScreen").innerHTML = "00";
    document.getElementById("Screen").innerHTML = "00";
}

// add something abt current state so users cant hitt start twice