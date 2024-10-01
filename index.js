let allInstruments = document.querySelectorAll("button");

var button = allInstruments.forEach((instrument) => {
  instrument.addEventListener("click", () => {
    let Instrument = instrument.classList.value;
    //Audio added to each button,when it gets clicked
    let audio = new Audio(`./sounds/${Instrument}.mp3`);
    audio.play();
  });
});

allInstruments.forEach((element) => {
  element.addEventListener("keypress", (event) => {
    switch (event.key) {
      case "a":
        var audio = new Audio("./sounds/tom1.mp3");
        audio.play();
        break;
      case "s":
        audio = new Audio("./sounds/tom2.mp3");
        audio.play();
        break;
      case "d":
        audio = new Audio("./sounds/tom3.mp3");
        audio.play();
        break;
      case "f":
        audio = new Audio("./sounds/tom4.mp3");
        audio.play();
        break;
      case "j":
        audio = new Audio("./sounds/snare.mp3");
        audio.play();
        break;
      case "k":
        audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;
      case "l":
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
      default:
        console.log("invalid key");
        break;
    }
  });
});

function Animation(){
    instrument
}