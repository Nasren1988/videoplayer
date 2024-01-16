"use strict";
const myVideo = document.getElementById("video-scource");
const videoplaybtn = document.getElementById("btn-play");
const videoplaybtnIcon = document.querySelector("#btn-play > i");
// play
videoplaybtn.addEventListener("click",function(){
videoPlay();
});

function videoPlay(){
if(videoplaybtnIcon.classList.contains("fa-play")){
    myVideo.play();
    videoplaybtnIcon.classList.remove("fa-play");
    videoplaybtnIcon.classList.add("fa-pause");
}else {
    myVideo.pause()
    videoplaybtnIcon.classList.remove("fa-pause");
    videoplaybtnIcon.classList.add("fa-play");
}
}

