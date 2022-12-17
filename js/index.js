let popup = document.getElementById("popup");
var back = document.getElementsById("back");
let audio = document.getElementById("audio");
function openPopup() {
    popup.classList.add("open-popup")
}
function closePopup() {
    popup.classList.remove("open-popup")
}
function playaudio(){
   var a = new Audio("DoraemonSonvvvgHappyBirthdayDoraemon.mp3");
   a.loop=true;
   a.play();
}
function Hide(){
    var htmsl = '<iframe id="loichuc1" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;" src="html/loichuc1.html" ></iframe>'
    popup.insertAdjacentHTML('afterend',htmsl)
}
