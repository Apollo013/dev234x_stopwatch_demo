
var stopStartInterval   = {}
    runStopWatch        = false,
    elapsedTime         = 0.0;

function stopStart(){
    runStopWatch = !runStopWatch;
    if(runStopWatch){
        startTimer();
    }
    else {
        stopTimer();        
    }
}

function startTimer(){
    stopStartInterval = setInterval(function(){
        elapsedTime+=0.01;
        document.getElementById('timerSection').innerHTML = elapsedTime.toFixed(2);
    },10);
}

function stopTimer(){
    clearInterval(stopStartInterval);    
}

function reset(){
    stopTimer();
    runStopWatch = false;
    elapsedTime  = 0.0;
    document.getElementById('timerSection').innerHTML = '';
    document.getElementById('pastTimesSection').innerHTML = '';
}

function recordTime(){
    var p = document.createElement('p');
    p.innerHTML = elapsedTime.toFixed(2);
    document.getElementById('pastTimesSection').appendChild(p);
}

function init(){
    document.getElementById('stopStart').addEventListener('click',stopStart);
    document.getElementById('reset').addEventListener('click',reset);
    document.getElementById('recordTime').addEventListener('click',recordTime);
    document.addEventListener('keypress', function(event){
        var key = String(event.key).toLowerCase();
        if(key == "s"){
            stopStart();
        }
        else if(key == "r"){
            reset();
        }
        else if (key == "t"){
            recordTime();
        }
    });
}

init();