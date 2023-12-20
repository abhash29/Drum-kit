var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      playAudio('sounds/tom-1.mp3');
      break;
    case "a":
      playAudio('sounds/tom-2.mp3');
      break;
    case "s":
      playAudio('sounds/tom-3.mp3');
      break;
    case "d":
      playAudio('sounds/tom-4.mp3');
      break;
    case "j":
      playAudio('sounds/snare.mp3');
      break;
    case "k":
      playAudio('sounds/kick-bass.mp3');
      break;
    case "l":
      playAudio('sounds/crash.mp3');
      break;
    default:
      console.log("Invalid key");
  }
}

function playAudio(audioPath) {
  var audio = new Audio(audioPath);
  audio.play();
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100); 
}
