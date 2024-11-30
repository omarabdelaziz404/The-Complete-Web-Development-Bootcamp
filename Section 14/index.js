/* #Print
 alert("hello");
 alert("World!");
 */

/* #You can add numbers
 2+3;
 alert(2+3);
 */

/* #Define Type
 typeof(23);
 typeof("Omar");
 typeof(true);
 */

/* #Create variables and put value in it
 var myName = "Omar";
 var yourName = prompt("What is your name?");
 alert("My name is " + myName + ", Welcome to my course " + yourName + "!");
 */

/* #Update variable
 var gameLevel = 1;
 gameLevel = 2;
 gameLevel = 3;
 alert("Your Level is: " + gameLevel);
 */

/* #variable nameing
 var myvar = "abc";
 var my123 = 123;
 var abc123$_
 */

/* #concatenate
 alert("Hello" + " " + "World ");
 var massage = "hello";
 var name = "Omar";
 alert(massage + " " + name);
 */

/* #string length
 var name = "Omar";
 name.length;
 */

/* #string slice
 var name = "Abdleziz";
 name.slice(0,1);
 name.slice(7,8);
 name.slice(0,3);
 */

/* #string UpperCase
 var name = "Abdleziz";
 name = name.toUpperCase();
 name = name.toLowerCase();
 */

/* #tweet count and slice project
 var yourText = prompt("What is your tweet?");
 var textLength = yourText.length;
 var charactersLeft = 140 - textLength;
 alert("You have Written " + textLength + " characters, You have " + charactersLeft + " charactersLeft");
var slice = yourText.slice(0,140);
alert(slice)
*/

/* #project2
 var name = prompt ("What is your name?");
 var slice1 = name.slice(0,1);
 var slice2 = name.slice(1,name.length);
 slice1 = slice1.toUpperCase();
 slice2 = slice2.toLowerCase();
 alert("Hello, " + slice1 + slice2);
 */

/* #dog age calc.
 var dogAge = prompt("your dog age?");
 var humanAge = (dogAge - 2) * 4 + 21;
 alert("your dog is " + humanAge + " years old in human years");
 */

/* # #increment
 var x = 5;
 alert(x);
 x++;
 alert(x);
 x--
 alert(x);
 x += 2;
 alert(x);
 var y = 3;
 x += y;
 alert(x);
+= , -= , *= , /=
*/

/* #Create function
function name() {   
}
*/

/* #Call function
name();
*/

/* #function takes input + Math.floor
var cash = 0;
function getMilk(cash) {   
}
getMilk(7)
*/

/* #project3
function lifeInWeeks(age) {
    var ageYears = 90 - age;
    var ageMonth = ageYears*12;
    var ageWeek = ageYears*52;
    var ageDay = ageYears*365;
    alert("You have "+ ageDay + " days, " + ageWeek +" weeks,  "+ ageMonth +" months, and " + ageYears + " years left." )
    }
    lifeInWeeks(70);
*/

/* #function takes input + produce output
var cash = 0;
function getMilk(cash) {   
  return cash % 1.5;
}
getMilk(7)
*/

/* #calling functions in other functions
function getMilk(money, costPerBottel) {   
  console.log("You can buy " + calcBottles(money, costPerBottel) + " of milk")
  return caclChange(money, costPerBottel)
}

function calcBottles(startingMoney, costPerBottel) {
    var numOfBottels = Math.floor(startingMoney / costPerBottel) ;
    return numOfBottels;

}

function caclChange(startingAmount, costPerBottel){
    var change =startingAmount % costPerBottel;
    return change;
}

getMilk(5, 1.5); 
*/

/* #BMI calc
function bmiCalculator(weight, height) {
     var bmi = Math.round(weight/Math.pow(height, 2) );
     return bmi;
}

var bmi = bmiCalculator(65, 1.8); 
console.log(bmi);
*/