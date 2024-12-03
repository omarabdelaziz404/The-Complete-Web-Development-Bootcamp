var randomNumber1 = Math.floor(Math.random()*6)+1; //1-6
var randomNumber2 = Math.floor(Math.random()*6)+1; //1-6
var randomDiceImg1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImg1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent="player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent="player 2 Wins!";
}
else{
    document.querySelector("h1").textContent="Draw";
}