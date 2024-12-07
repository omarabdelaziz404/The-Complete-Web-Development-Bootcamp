//selecting all button elements
$("button"); 

//Change css
$("h1").css("color", "green"); 

//getting css value
console.log($("h1").css("color")); 

//adding/remove class
$("h1").addClass("big-title"); 
$("h1").removeClass("big-title"); 

//adding multiple class
$("h1").addClass("big-title margin-50"); 

//checking if an element has a practical class
$("h1").hasClass("margin-50");

//changing Text
$("h1").text("bye"); //= innerText
$("h1").html("<em>hi</em>"); //= innerHtml
$("button").html("Don't click me");

//getting attribute value
console.log($("a").attr("href"));

//setting attribute value
$("a").attr("href", "https://www.bing.com");

//getting attribute class
$("h1").attr("class");

//Adding Event Listeners to multiple elements
//https://developer.mozilla.org/en-US/docs/Web/Events
$("button").click(function(){
    $("h1").css("color","red");
});

//detecting keyboard press event.key
$(document).keydown(function(event) {
    console.log(event.key);
});

//detecting event
$("h1").on("mouseover" , function(){
    $("h1").css("color", "green"); 
});

//Adding Elements
$("h1").before("<button>before</button>");   //before h1
$("h1").after("<button>after</button>");     //after h1
$("h1").prepend("<button>prepend</button>"); //inside h1 before content of h1
$("h1").append("<button>append</button>");   //inside h1 after content of h1

//Removing Elements
//$("button").remove();


//Website Animations 
//https://www.w3schools.com/jquery/jquery_ref_effects.asp
//animate({cssCode}); css Code with numerical value
//u can chain animations .slideUp().slideDown().animate({opacity: 0.5});
$("button").on("click" , function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});