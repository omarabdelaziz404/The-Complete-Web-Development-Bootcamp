document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML="OMAR";

/* #gives u output in a array
document.getElementsByTagName;
document.getElementsByTagName("li")[2].style.color="green";
document.getElementsByclassName;
*/

/* #one Element
document.getElementById;
*/

/* #looking for id or className
document.querySelector("#id");
document.querySelector(".className");
*/

/* #Cominaning selector
document.querySelector("li a");
document.querySelector("li.className");
*/

/*
document.querySelectorAll("#list .className");
*/

/* #to change style u put the attribute in "" and use camel casing
.style.color="green";
.style.fontSize="10 rem";
*/

/* #add or remove or toggle style
document.querySelector("button").classList.add("className");
document.querySelector("button").classList.remove("className");
document.querySelector("button").classList.toggle("className");
document.querySelector("h1").classList.toggle("huge");
*/

/*
document.querySelector("h1").innerHTML; //output= <strong>Hello</strong>
document.querySelector("h1").textContent; //output= Hello
*/

/*
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://www.bing.com");
*/