var playButton = document.querySelector('.playButton');
var skipButton = document.querySelector('.skipButton');
var text = document.querySelector('.text');
var coverArt = document.querySelector('.coverArt');
var audioElement = document.createElement('audio');

var state ="▶";
var songCount=0;
const songs = ["Gum By See You Next Year, Baird", "Stereo Driver By Q", "End of Beginning By Djo", "you up? By Yaya Bey"];
const covers=["pics/Gum.jpeg","pics/stereoDriver.jpeg","pics/End.jpeg","pics/youUp.jpeg"]



// before adding audio element
playButton .addEventListener("click",()=>{
    if (state==="▶"){
    playButton.innerHTML ="||";
    state="||";
    }else{
      playButton.innerHTML = "▶";
      state="▶";
    }

});

skipButton.addEventListener("click",()=>{
    text.innerHTML=songs[songCount];;
    coverArt.src=covers[songCount];

    if(songCount<songs.length-1){
    songCount+=1;
    }else{
        songCount=0;
    }
    


});


// function play(){

// }