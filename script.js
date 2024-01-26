"use strict";
const myVideo = document.getElementById("video-scource");

const videoplaybtn = document.getElementById("btn-play");
const videoplaybtnIcon = document.querySelector("#btn-play > i");

const videocover = document.getElementById("cover-all-video");
const videoplaypauseAnimate = document.getElementById("video-player-pause-animate");
const videoplaypauseAnimateIcon  =document.querySelector("#video-pause-icon>i" );

const progressBarContainer = document.getElementById("video-player-progress-bar-container");
const progressBar = document.getElementById("video-player-progress-bar");

let videoTimePassedMinute = document.getElementById("video-time-passed-minutes");
let videoTimePassedSecond = document.getElementById("video-time-passed-seconds");
let videoTimeTotalMinute = document.getElementById("video-time-total-minutes");
let videoTimeTotalSecond = document.getElementById("video-time-total-seconds");

// play
videoplaybtn.addEventListener("click",function(){
videoPlay();
});
//screen play 
videocover.addEventListener("click", function(){
videoPlay();
})

function videoPlay(){
if(videoplaybtnIcon.classList.contains("fa-play")){
    myVideo.play();
    videoplaybtnIcon.classList.remove("fa-play");
    videoplaybtnIcon.classList.add("fa-pause");
    videoplaypauseAnimateIcon.classList.remove("fa-play");
    videoplaypauseAnimateIcon.classList.add("fa-pause");
}else {
    myVideo.pause()
    videoplaybtnIcon.classList.remove("fa-pause");
    videoplaybtnIcon.classList.add("fa-play");
    videoplaypauseAnimateIcon.classList.remove("fa-pause");
    videoplaypauseAnimateIcon.classList.add("fa-play");
}
videoplaypauseAnimate.classList.add("fade-animate");
setTimeout(()=>{
    videoplaypauseAnimate.classList.remove("fade-animate")
},1000)
}
myVideo.onplay =function(){
    
    setInterval(()=>{
     let widthBar = myVideo.currentTime / myVideo.duration ;
     progressBar.style.width = `${widthBar *100}%`
    //  Passed Time
     let result = setTime(parseInt(myVideo.currentTime));
     videoTimeTotalMinute.innerText=result[0];
     videoTimePassedSecond.innerText= result[1];
    },50)
}
progressBarContainer.addEventListener("mousemove", function(e){
    this.style.height = "0.6em";
    let mousePositonX = e.clientX;
    let distanceFromLeft = this.getBoundingClientRect().left;
    let mousePointerFromLeft = mousePositonX - distanceFromLeft;
    let progressBarWidth = this.offsetWidth;
    let calcuteProgressBar = (mousePointerFromLeft / progressBarWidth)*100;
    this.style.background = ` linear-gradient(to right , #fff 0% ,#fff ${calcuteProgressBar}%,rgb(135,135,135)
    ${calcuteProgressBar}% ,rgb(135,135,135) 100%)`
})
progressBarContainer.addEventListener("mouseleave", function(){
    this.style.height = ".3em"
    this.style.background = "";
})
progressBarContainer.addEventListener("click", function(e){
    this.style.height = "0.6em";
    let mousePositonX = e.clientX;
    let distanceFromLeft = this.getBoundingClientRect().left;
    let mousePointerFromLeft = mousePositonX - distanceFromLeft;
    let progressBarWidth = this.offsetWidth;
    let calcuteProgressBar = (mousePointerFromLeft / progressBarWidth);
    myVideo.currentTime = myVideo.duration * calcuteProgressBar;
})
// set total time 
window.onload = function(){
setTimeout(()=>{
 let result = setTime(parseInt(myVideo.duration))
videoTimeTotalMinute.innerText = result[0];
videoTimeTotalSecond.innerText = result[1];
},500)
}
function setTime(secends){
let min = 0;
let sec = 0;
min = parseInt(secends/60);
sec = parseInt(secends % 60);
return [min,sec];
}
// volume 
const volumeCantainer = document.getElementById("volume-container");
const volumeBtn = document.getElementById("volume-btn");
const volumeIcon = document.querySelector("#volume-btn > i");
const volumeRange = document.getElementById("range-volume");

volumeCantainer.addEventListener("mouseenter", function(){
    volumeRange.style.display = "block";
})
volumeCantainer.addEventListener("mouseleave", function(){
    volumeRange.style.display = "none";
})
volumeRange.addEventListener("input", function(){
    myVideo.volume = this.value /100;
    setVolumeIcon();

})
function setVolumeIcon(){
    if(myVideo.volume > 0.5){
        volumeIcon.className = "";
        volumeIcon.setAttribute("class","fas fa-volume-up");
    }else if (myVideo.volume <= 0.5 && myVideo.volume > 0.01){
        volumeIcon.className = "";
        volumeIcon.setAttribute("class","fas fa-volume-down");
    }else {

     volumeIcon.className = "";
        volumeIcon.setAttribute("class"," fas fa-volume-off");
    }
}
volumeIcon.addEventListener("click", function(){
    if(!myVideo.muted){
        myVideo.muted = true;
        volumeIcon.className = "";
        volumeIcon.setAttribute("class","fas fa-volume-mute");
        
    }
    else{
        myVideo.muted = false;
        setVolumeIcon();

        
    }
})