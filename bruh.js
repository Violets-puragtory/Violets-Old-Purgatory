    
function play() {
    var audio = new Audio('./Sounds/Penis Music.mp3');
    audio.volume = 0.35
    audio.play();

    document.getElementById('sex').style.animationPlayState = 'running'
    document.getElementById('baton').remove()

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }

   sleep(10000).then(() => {
    close()
    window.close()
    self.close()

    document.getElementById('sex').remove()
    
    document.getElementById('kaboom').style.width = "100%"
})



    

}   