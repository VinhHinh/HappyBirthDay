let popup = document.getElementById("popup");
let audio = document.getElementById("audio");
function openPopup() {
    popup.classList.add("open-popup")
}
function closePopup() {
    popup.classList.remove("open-popup")
}
function playaudio(){
   var a = new Audio("DoraemonSongHappyBirthdayDoraemon.mp3");
   a.play();
   a.loop=true;
}
