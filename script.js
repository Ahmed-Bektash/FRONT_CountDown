//get the value inside the html
const daysEl = document.getElementById("Days-time");
const hoursEl = document.getElementById("Hours-time");
const minsEl = document.getElementById("Minutes-time");
const secondsEl = document.getElementById("Seconds-time");
const fdays = document.getElementById('set-days');
const fhours = document.getElementById('set-hours');
const fmins = document.getElementById('set-mins');
const fsec = document.getElementById('set-sec');
const form = document.getElementById('TimeForm');
let gDays=0;
let ghours=0;
let gmin=0;
let gsec=0;  
let bSubmitted = false;
let bReset =false;
let bPaused = false;
let saved_D=0;
let saved_H=0;
let saved_M=0;
let saved_S=0;
let countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();
console.log(bSubmitted);
console.log(gDays);
console.log(ghours);
console.log(gmin);

form.addEventListener('submit',(e)=>{
    
    if((fdays.value =='' || fdays.value == null) || 
    (fhours.value =='' || fhours.value == null) || 
    (fmins.value =='' || fmins.value == null) || 
    (fsec.value =='' || fsec.value == null))
    {

        console.log("nope!");
}
    else{
        gDays = fdays.value;
        ghours = fhours.value;
        gmin= fmins.value;
        gsec = fsec.value;
        bSubmitted = true;    
        e.preventDefault();
        //setTimeout(countdown,3000);  
        console.log(bSubmitted);
        console.log(gDays);
        console.log(ghours);
        console.log(gmin);
    }
});


document.getElementById("reset").addEventListener("click", (e)=>{
    if(!bReset){
        bReset =true;
        bPaused=false;
        gDays=0;
        ghours=0;
        gmin=0;
        gsec=0;  
        saved_D=0;
        saved_H=0;
        saved_M=0;
        saved_S=0;
        document.getElementById("pause").innerHTML= "Pause";
        document.getElementById("reset").innerHTML= "Start";
        bSubmitted = false;
    
    }else{
        bReset=false;
        document.getElementById("reset").innerHTML= "Reset";
       
    }
});

document.getElementById("pause").addEventListener("click", (e)=>{

    if((!bPaused) && (!bReset)){

        document.getElementById("pause").innerHTML= "Play";
        bPaused=true;
    
        


    }else{
        
        bPaused = false;
        document.getElementById("pause").innerHTML= "Pause";
        saved_D=0;
        saved_H=0;
        saved_M=0;
        saved_S=0;
    }


});





function countdown() {

    if(bReset==true){
        daysEl.innerHTML = 0;
        hoursEl.innerHTML = 0;
        minsEl.innerHTML = 0;
        secondsEl.innerHTML = 0;
        

    }else if(bPaused==true){
        daysEl.innerHTML = saved_D;
        hoursEl.innerHTML = saved_H;
        minsEl.innerHTML = saved_M;
        secondsEl.innerHTML = saved_S;
        

    } if((bSubmitted == false) && (bPaused==false) && (bReset==false)){
    countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();
    const GoalDate = new Date(countDownDate);
    const currentDate = new Date();

    const totalSeconds = (GoalDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    saved_D = days;
    saved_H = formatTime(hours);
    saved_M = formatTime(mins);
    saved_S = formatTime(seconds);
    //console.log("default countdown");
}else if((bSubmitted==true) && (!bPaused) && (!bReset)){
    //console.log("user countdown");
    countDownDate = new Date( `Dec ${gDays}, 2020 ${ghours}:${gmin}:${gsec}`).getTime();
    const GoalDate = new Date(countDownDate);
    const currentDate = new Date();

    const totalSeconds = (GoalDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    saved_D= days;;
    saved_H=formatTime(hours);;
    saved_M=formatTime(mins);;
    saved_S=formatTime(seconds);

    daysEl.innerHTML = saved_D;
    hoursEl.innerHTML = saved_H;
    minsEl.innerHTML = saved_M;
    secondsEl.innerHTML = saved_S;
   
}
// if((saved_D==0) && (saved_H ==0) && (saved_M ==0) && (saved_S==0)){
//     daysEl.innerHTML = 0;
//     hoursEl.innerHTML = 0;
//     minsEl.innerHTML = 0;
//     secondsEl.innerHTML = 0;
//     document.getElementsByClassName("Container-main").style.backgroundcolor = 'black';

//     }
}


function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();
setInterval(countdown, 1000);






