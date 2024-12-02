/* #Random number generator num from 0 to 0.999
var x = Math.random();
*/

/* #Love calc
prompt("What is your loveScoreame?")
prompt("What is their loveScoreame?")
var loveScore = Math.random();
loveScore = Math.floor(loveScore*100)+1; //1-100
if(loveScore > 70 ){
  alert("Your love score is "+ loveScore +"% " + "You love each other so much");  
} 
if (loveScore > 30 && loveScore <= 70 ){
    alert("Your love score is "+ loveScore +"% " + "You love is average");  
} 
if (loveScore <= 30) {
    alert("Your love score is "+ loveScore +"% " + "You hate each other");
}
*/

/* #Comparisons
=== is equal to + same data type
==  is equal to + diffrent data type
!== is not equal to 
>   is greater than
<   is lower than 
>=  is greater or equal to
<=  is lower or equal to 
&&  AND
||  OR
!   NOT
*/

/* #Leap year calc
function isLeap(year) {
    if( year % 4 === 0 && year % 100 !== 0 || year % 4 === 0  && year % 400 === 0){
    console.log("Leap year.");
    
}
if( year % 4 !== 0 ){
console.log("Not leap year.");
    
}

}
*/

/* #Array
var array = ["omar","abdelaziz","mohamed","abdelaziz","abohatab"];
console.log(array[1]);
console.log(array.length);
console.log(array.includes("omar"));
*/

/* #Guest list check
var guest = prompt("What is your name?")
var array = ["omar","abdelaziz","mohamed","abdelaziz","abohatab"];
var check = array.includes(guest);
if(check == true) {
    alert("welcome to the party")
}
if(check == false) {
    alert("go away thief")
}

*/

/* #Push + pop last item in the array
var output = [];
output.push(1);
console.log(output);
output.pop(1);
console.log(output);
*/

/* #Fizzbuzz challenge 1
var array = [];
var x = 1;
function fizzBuzz(){
    while(x <= 100){    
        if(x % 3 === 0 && x % 5 === 0){
            array.push("fizzBuzz");
        } else if(x % 3 === 0){
            array.push("fizz");
        } else if(x % 5 === 0) {
            array.push("Buzz");
        } else{
             array.push(x);
        }
        x++;
    }
    console.log(array);
}
*/

/* #Fizzbuzz 2
var array = [];
function fizzBuzz(){
    for(var x = 1; x <= 100; x++){    
        if(x % 3 === 0 && x % 5 === 0){
            array.push("fizzBuzz");
        } else if(x % 3 === 0){
            array.push("fizz");
        } else if(x % 5 === 0) {
            array.push("Buzz");
        } else{
             array.push(x);
        }   
    }
    console.log(array);
}
*/

/* #Who's paying lunch challenge
function whosPaying(names) {
    var x = Math.floor(Math.random()*names.length);
    return names[x] + " is going to buy lunch today!";
}
*/

/* #While loop
var i = 1;
while(i<3) {
    console.log(i);
    i++
}
*/

/* #For loop
for(var i = 1; i<2; i++){
    console.log(i);
}
*/

/* #Fibonacci challenge
function fibonacciGenerator (n) {
    var array = [];
    if(n === 1){
        array = [0];
    }
    else if(n === 2){        
        array = [0,1];  
    }
    else{
        array = [0,1]; 
        for(var i = 2; i<n; i++){
            array.push(array[array.length-1] + array[array.length-2]);
        }       
    } 
    return array; 
}
fibonacciGenerator(10); 
*/