var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];        //we will store game pattern here
var userClickedPattern = []; //we will store user pattern here
var started = false;
var level = 0;

//checking for the first keyboard press:
$(document).keypress(function() { 
    if (!started) {               //not started
      $("#level-title").text("Level " + level); //h1 = Level 1
      nextSequence();             //call nextSequence(); 
      started = true;             //started valu to true
    }
});

//USER:
$(".btn").click(function() {                   //detect button click 
    var userChosenColour = $(this).attr("id"); //detect color click 
    userClickedPattern.push(userChosenColour); //store user pattern in array  

    playSound(userChosenColour);               //playing sound
    animatePress(userChosenColour);            //user animation
    
    checkAnswer(userClickedPattern.length-1);
});

//Check User's Answer VS. Game's Answer:
function checkAnswer(currentLevel) { //game continue

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } 

    else { //user loose
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

//GAME:
function nextSequence(){
    userClickedPattern = [];

    //adding 1 to h1 each time nextSequence(); is called:
    level++; 
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor((Math.random()*4));     //generating a random number between 0-3
    var randomChosenColour = buttonColours[randomNumber]; //choose random color
    gamePattern.push(randomChosenColour);                 //store game pattern in array

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); //game animation
    playSound(randomChosenColour);                        //playing sound
    
}

//play sound when button is clicked:
function playSound(name){ 
    var audio = new Audio("./sounds/"+ name +".mp3");
    audio.play();
}

//user animation:
function animatePress(currentColor) { 
    $("#" + currentColor).addClass("pressed");
  
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}