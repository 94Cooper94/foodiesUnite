
// If your BMI is...	You are...
// Under 18.5	Underweight
// Between 18.5 and 24.9	Normal
// Between 25 and 29.9	Overweight
// 30 and Over	Obese

var breakfast = "breakfast";
var lunch = "lunch";
var dinner = "dinner";

var underweight = 0000; // Suggested daily calories
var normal = 0000;
var overweight = 0000;
var obese = 0000;


// FULL url "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to={3 OR LAST INDEX OF YOUR CHOICE}calories={591-722 CALORIE RANGE PER CATEGORY} {&health=alcohol-free}"

var apiURL = "https://api.edamam.com/search?q="
var apiID = "&app_id=d88e78b8"
var apiKey = "&app_key=fa1417bd0cb262ef6b1af85af54b21db"

var whichMeal = "";

var queryURL = apiURL + whichMeal + apiID + apiKey;

$("button").click(function(){
    $.ajax({url: queryURL, method: "GET" success: function(result){
      $("#div1").html(result);
    }});
  });