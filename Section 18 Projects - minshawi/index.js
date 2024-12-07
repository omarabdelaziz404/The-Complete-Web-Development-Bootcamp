//detecting Button press
var numOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i < numOfDrumButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click" , function(){

       var buttonInnerHtml = this.innerHTML;

      makeSound(buttonInnerHtml);
      buttonAnimation(buttonInnerHtml);
    });
}

//detecting keyboard press
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound (key){
    switch (key){
        case "w":
            var bayana = new Audio('./Sound/Minshawi-1.mp3');
            bayana.play();
            break;

        case "a":   
            var broj = new Audio('./Sound/Minshawi-2.mp3');
            broj.play(); 
        break;    
        
        case "s":   
            var teen = new Audio('./Sound/Minshawi-3.mp3');
            teen.play(); 
        break; 

        case "d":   
            var nazaat = new Audio('./Sound/Minshawi-4.mp3');
            nazaat.play(); 
        break;

        default: console.log(buttonInnerHtml)
    } 
}

//adding animation
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
         activeButton.classList.remove("pressed");
    }, 3000);
}