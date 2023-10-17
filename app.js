var min=0;
var sec=0;
var milisec=0;

var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("milisec");

var interval;
function timer(){
    milisec++;
    msecHeading.innerHTML=milisec;



if( milisec == 100){
    sec++
    secHeading.innerHTML=sec;
    milisec=0;
}  
else if(sec >=60){
    min++
    sec=0;
    minHeading.innerHTML=min;
}
}
function start(){
interval=setInterval(timer,10)
document.getElementById("button").disabled=true;}

function stop(){
    clearInterval(interval);
    document.getElementById("button").disabled=false;
}

function reset(){
    min=0;
    sec=0;
    milisec=0;
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=milisec;
    stop();
}


