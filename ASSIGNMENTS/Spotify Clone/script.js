console.log("Welcome to Spotify");
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongInfo = document.getElementById("masterSongInfo");
let songItems = Array.from(document.getElementsByClassName("songItem"))

let songs = [
    { songName: "Blinding Lights - The Weeknd", filePath: "Songs/1.mp3", coverPath: "Covers/afterhours.jpeg" },
    { songName: "Starboy - The Weeknd", filePath: "Songs/2.mp3", coverPath: "Covers/starboy.png" },
    { songName: "Can't Feel My Face - The Weeknd", filePath: "Songs/3.mp3", coverPath: "Covers/bbtm.jpg" },
    { songName: "Is There Someone Else? - The Weeknd", filePath: "Songs/4.mp3", coverPath: "Covers/dawn.jpg" },
    { songName: "Call Out My Name - The Weeknd", filePath: "Songs/5.mp3", coverPath: "Covers/mdm.jpg" },
    { songName: "Dancing In The Flames - The Weeknd", filePath: "Songs/6.mp3", coverPath: "Covers/hurryup.jpeg" },
    { songName: "Timeless - The Weeknd and Playboi Carti", filePath: "Songs/7.mp3", coverPath: "Covers/timeless.jpg" }
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause")
        masterPlay.classList.add("fa-circle-play")
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    //Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * (audioElement.duration / 100);
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src = `Songs/${songIndex + 1}.mp3`;
        masterSongInfo.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById("next").addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `Songs/${songIndex + 1}.mp3`;
    masterSongInfo.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById("previous").addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `Songs/${songIndex + 1}.mp3`;
    masterSongInfo.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})