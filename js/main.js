// // function soundInOff() {
// //         var off = document.getElementById("audio");
// //         off.src = `/audio/Billie Eilish - idontwannabeyouanymore (Vertical Video).mp3`;

// //         var change = document.getElementById("off");
// //         change.innerText = "On";
// //         // function toggle() {

// //         // }
// //         if (off.played) {
// //                 audio.play();
// //         }
// //         else {
// //                 audio.pause();
// //         }
// // }
// // document.getElementById("off").addEventListener("click", soundInOff);


// function toggle() {
//         var audio = document.getElementById("audio");
//         audio.src = `/audio/Billie Eilish - idontwannabeyouanymore (Vertical Video).mp3`;
//         var change = document.getElementById("off");


//         var isPlaying = false;
//         if (isPlaying) {
//                 audio.pause();
//                 change.innerText = "Off";
//         }
//         else {
//                 audio.play();
//                 change.innerText = "On";
//         }
//         // isPlaying ? audio.pause() : audio.paly();
//         audio.onplaying = function () {
//                 isPlaying = true;
//         }
//         audio.onpuse = function () {
//                 isPlaying = false;
//         }
// };

// document.getElementById("off").addEventListener("click", toggle);

var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
        isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function () {
        isPlaying = true;
        var change = document.getElementById("off");
        change.innerText = "On";
        
};
myAudio.onpause = function () {
        isPlaying = false;
        var change = document.getElementById("off");
        change.innerText = "OFF";
        
};