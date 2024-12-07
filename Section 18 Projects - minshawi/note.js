 //Higher Order Function Challenge = function that can take functions as input
function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
function clac(num1,num2,operator){
    return operator(num1,num2);
}
clac(3, 5, add);

//Higher Order Function                Callback Function
//document.addEventListener("keydown", respondToKey(event));

//creating objects
var bellBoy1 = {
    name: "timmy",
    age: 19,
    hasWorkPermit: true,
    lang: ["french", "english"]
}

//accessing object properties 
bellBoy1.name;
bellBoy1.age;

//constructor function
function BellBoy (name, age, hasWorkPermit, lang){ // notice that Bell has a capital b
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.lang = lang;
    this.moveSuitcase = function() {
        alert("may i take your suitcase");
        pickUpSuitcase();
        move();
    }
}

//using constructor function
var bellBoy1 = new BellBoy("timmy", 19, true, ["french", "english"]);
var bellBoy2 = new BellBoy("jimmy", 20, false, ["german", "english"]);
bellBoy1.moveSuitcase();

//constructor function example
function HouseKeeper(name,yeasrOfExp,hasChildren,cleaningTask){
    this.name= name,
    this.yeasrOfExp= yeasrOfExp,
    this.hasChildren= hasChildren,
    this.cleaningTask= cleaningTask
    this.clean = function(){
        alert("cleaning in progress");
    }
}
var houseKeeper1 = new HouseKeeper("jane", 2, false,["bathroom","lobby"]);
houseKeeper1.clean();

