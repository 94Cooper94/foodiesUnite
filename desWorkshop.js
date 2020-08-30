
// If your BMI is...	You are...
// Under 18.5	Underweight
// Between 18.5 and 24.9	Normal
// Between 25 and 29.9	Overweight
// 30 and Over	Obese

var breakfast = "breakfast";
var lunch = "lunch";
var dinner = "dinner";

// var bmiUnderweight = 00; 
// var bmiNormal = 00;
// var bmiOverweight = 00;
// var bmiObese = 00;

// Input Gender
// Input Weight
// Input Height
// Input Age

let myGender= ""; // From User Input
let myHeight= 0; // From User Input
let myWeight= 0; // From User Input
let myAge = 0; // From User Input

var heightInches = myHeight / 12;
var genderLetter = //trim&lowercase myGender to first letter

function getBMR(gender) {
    if (gender == "m") {
        
        66 + (6.2 * myWeight) + (12.7 * heightInches) - (6.76 * myAge);
    }
    if (gender == "w") {
        
        655 + (4.35 * myWeight) + (4.7 * heightInches) - (4.7 * myAge);
    }
}

var myBMR = getBMR(genderLetter);

var myActivityLevel = ""; // From User Input

// clickevent buttons to push value of letter or num representing three options: 0.sedentary 1.light to moderate, 2.active, or 3.vigorous(athlete or manual laborer) to empty array

function getCalories(BMR) {

    if (myActivityLevel == 0) {
        BMR * 1.3;
    }
    if (myActivityLevel == 1) {
        BMR * 1.53;
    }
    if (myActivityLevel == 2) {
        BMR * 1.76;
    }
    if (myActivityLevel == 3) {
        BMR * 2.25;
    }
}

var myCaloricIntake = getCalories(myBMR);




// Maintain Calorie Range
var calorieRange1 = parseInt(myCaloricIntake * .2); 
var calorieRange2 = parseInt(myCaloricIntake * .3); 

// var calorieRangeFULL = calorieRange1 + calorieRange2;




// FULL url "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to={3 OR LAST INDEX OF YOUR CHOICE}calories={591-722 CALORIE RANGE PER CATEGORY} {&health=alcohol-free}"

var apiURL = "https://api.edamam.com/search?q="
var apiID = "&app_id=d88e78b8"
var apiKey = "&app_key=fa1417bd0cb262ef6b1af85af54b21db"

var whichMeal = "";

var queryURL = apiURL + whichMeal + apiID + apiKey + "&from=0&to=10" + "calories=" + calorieRange1 + "-" + calorieRange2;

$("button").click(function(){
    $.ajax({url: queryURL, method: "GET" success: function(result){
      $("#div1").html(result);
    }});
  });