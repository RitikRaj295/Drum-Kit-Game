var numberOfDrums=document.querySelectorAll("button").length;
for(i=0; i<numberOfDrums;i++){

    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var buttons= this.innerHTML;
        makeSound(buttons);
       buttonAnimation(buttons);
    
    
    });   
    document.addEventListener("keypress",function(event){
       
        makeSound(event.key);
        buttonAnimation(event.key);
    });
    function makeSound(key){
        switch (key) {
            case "a":
                   var tom1=new Audio("sounds/tom1.mp3");
                   tom1.play();
            break;
           case "s":
                    var tom2=new Audio("sounds/tom2.mp3");
                    tom2.play();
            break;
         
            case "d":
                    var tom3=new Audio("sounds/tom3.mp3");
                    tom3.play();
            break;
         
            case "f":
                    var tom4=new Audio("sounds/tom4.mp3");
                    tom4.play();
            break;
         
            case "j":
                    var snare=new Audio("sounds/snare.mp3");
                    snare.play();
            break;
            case "k":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
        break;
         
            case "l":
                    var kick=new Audio("sounds/kick-bass.mp3");
                    kick.play();
            break;
            
           
            default: console.log(buttons);
                break;
         }
           

    }
    function buttonAnimation(currentkey){
      var activebutton=document.querySelector("."+currentkey);
      activebutton.classList.add("pressed");
     
      setTimeout(function(){
        activebutton.classList.remove("pressed");

      },100);

    }

}

