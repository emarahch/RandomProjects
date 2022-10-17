var playButton = document.querySelector('.playButton');
var skipButton = document.querySelector('.skipButton');
var text = document.querySelector('.text');
var coverArt = document.querySelector('.coverArt');
var audio = document.querySelector('.audios');
var duration=document.querySelector('.duration');




var songCount=0;
const songs = ["Gum By See You Next Year, Baird", "Stereo Driver By Q", "End of Beginning By Djo", "you up? By Yaya Bey"];
const covers=["pics/Gum.jpeg","pics/stereoDriver.jpeg","pics/End.jpeg","pics/youUp.jpeg"];
const mp=["music/Baird - See You Next Year - 'Gum' (Official Audio).mp3",
"music/Q - Stereo Driver (Official Audio).mp3",
"music/Djo - End Of Beginning (Official Audio).mp3",
"music/Yaya Bey - 'you up' (Official Audio).mp3"];


audio.addEventListener('loadeddata', ()=>{
    duration.innerHTML = formating(audio.duration);
});

function formating(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time-(minutes * 60));
    return `${minutes}:${seconds}`;
  }


playButton .addEventListener("click",()=>{
    if (audio.paused || audio.ended){
    playerF();
    }else{
     pauseF();
    }
});

skipButton.addEventListener("click",()=>{
    newSong();
});

function newSong(){
    pauseF();
    text.innerHTML=songs[songCount];;
    coverArt.src=covers[songCount];
    audio.src=mp[songCount];

    if(songCount<songs.length-1){
    songCount+=1;
    }else{
        songCount=0;
    }
}


function playerF(){
    playButton.innerHTML ="||";
    audio.play();
}

function pauseF(){
    playButton.innerHTML = "▶";
    audio.pause();
}

