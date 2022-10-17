var playButton = document.querySelector('.playButton');
var skipButton = document.querySelector('.skipButton');
var text = document.querySelector('.text');
var coverArt = document.querySelector('.coverArt');
var audio = document.querySelector('.audios');

var songCount=0;
const songs = ["Gum By See You Next Year, Baird", "Stereo Driver By Q", "End of Beginning By Djo", "you up? By Yaya Bey"];
const covers=["pics/Gum.jpeg","pics/stereoDriver.jpeg","pics/End.jpeg","pics/youUp.jpeg"];
const mp=["music/Baird - See You Next Year - 'Gum' (Official Audio).mp3",
"music/Q - Stereo Driver (Official Audio).mp3",
"music/Djo - End Of Beginning (Official Audio).mp3",
"music/Yaya Bey - 'you up' (Official Audio).mp3"];


audio.addEventListener('timeupdate', updateProgress);

function updateProgress(e){
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
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

