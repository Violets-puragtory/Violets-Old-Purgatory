
var audio = new Audio('/Sounds/deltarune explosion greenscreen.mp3');
audio.volume = 0.35 

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

sleep(200000).then(() => {
    audio.play();
    document.getElementById('capybara').remove()
})