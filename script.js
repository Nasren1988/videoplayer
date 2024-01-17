"use strict";
const myVideo = document.getElementById("video-scource");

const videoplaybtn = document.getElementById("btn-play");
const videoplaybtnIcon = document.querySelector("#btn-play > i");

const videocover = document.getElementById("cover-all-video");
const videoplaypauseAnimate = document.getElementById("video-player-pause-animate");
const videoplaypauseAnimateIcon  =document.querySelector("#video-pause-icon>i" );

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

