let ryu = new sound("./css/sound/Ryu_theme.mp3")
let ff7 = new sound("./css/sound/Fight_on_theme.mp3")
let guile = new sound("./css/sound/Guile_theme.mp3")
let falconpunch = new sound("./css/sound/fight/falconpunch.swf.mp3")
let hadouken = new sound("./css/sound/fight/hadouken.mp3")
let punch = new sound("./css/sound/fight/punch.mp3")
let shoryuken = new sound("./css/sound/fight/shoryuken.mp3")
let strongpunch = new sound("./css/sound/fight/strongpunch.mp3")
let kirby = new sound("./css/sound/fight/kirby.mp3")
let pokemonSuccess = new sound("./css/sound/fight/pokemonSuccess.mp3")

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
      this.sound.play();
  }
  this.stop = function(){
      this.sound.pause();
  }    
  this.playPause = function(){
      if(this.sound.paused){
          this.sound.play()
      } else {
          this.sound.pause()
      }
  }
}