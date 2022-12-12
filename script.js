const element = document.querySelector( ".container .time");
const start_button = document.getElementById("start");
const stop_button = document.getElementById("stop");
const pause_button = document.getElementById("pause");


let start_btn = document.querySelector("#start");
let stop_btn = document.querySelector("#stop");
let pause_btn = document.querySelector("#pause");

let interval = null;
let seconds = 0;


function watch(){
   
     seconds++

     //Formatting time
    
     let hrs = Math.floor(seconds / 3600);
     let mins = Math.floor((seconds- (hrs * 3600)) / 60);
     let secs = seconds % 60;

     if(secs < 10) secs = "0" + secs;
     if(mins < 10) mins = "0" + mins;
     if(hrs < 10) hrs = "0" + hrs;

     element.innerText = (`${hrs}:${mins}:${secs}`);
}

function start(){

     start_btn.disabled = true;
     stop_btn.disabled = false;
     pause_btn.disabled = false;
     
     if(interval){
          return
     }
     interval = setInterval(watch, 1000);

}

function stop(){
     // pause();
     clearInterval(interval);
     interval = null;
     seconds = 0;
     element.innerText = (`00:00:00`);
     start_btn.disabled = false;
     stop_btn.disabled = true;
     pause_btn.disabled = true;
     if( stop_btn.innerText == "Start" ){
          stop_btn.innerText = "Reset";
     }else{
          stop_btn.innerText = "Reset";
     }
}
function pause(){

     start_btn.disabled = false;
     clearInterval(interval);
     interval = null;
     if( pause_btn.innerText == "Pause" ){
          pause_btn.innerText = "Continue";
     }else{
          pause_btn.innerText = "Pause";
          start()
     }
}
