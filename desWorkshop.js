
let myGender= ""; // From User Input
let myHeightFt= 0; // From User Input
let myHeightIn= 0; // From User Input
let myWeight= 0; // From User Input
let myAge = 0; // From User Input

var convertFeetToInches = myHeightFt / 12;
var heightFull = convertFeetToInches + myHeightIn;
// var genderLetter = myGender.string.charAt(0).toLowercase(); // Change this, no typing, just selection

function getBMR(gender) {
    if (gender == "m") {
        
        66 + (6.2 * myWeight) + (12.7 * heightFull) - (6.76 * myAge);
    }
    if (gender == "f") {
        
        655 + (4.35 * myWeight) + (4.7 * heightFull) - (4.7 * myAge);
    }
}

var myBMR = getBMR(myGender);

var myActivityLevel = ""; // From User Input

// click event buttons to push value of letter or num representing three options: 0.sedentary 1.light to moderate, 2.active, or 3.vigorous(athlete or manual laborer) to empty array

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
var calorieRange1 = Math.round(myCaloricIntake * .2); 
var calorieRange2 = Math.round(myCaloricIntake * .3); 

var calorieRangeFULL = "calories=" + calorieRange1 + "-" + calorieRange2;



// AJAX Call
// FULL url "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to={3 OR LAST INDEX OF YOUR CHOICE}calories={591-722 CALORIE RANGE PER CATEGORY} {&health=alcohol-free}"

var apiURL = "https://api.edamam.com/search?q=";
var apiID = "&app_id=d88e78b8";
var apiKey = "&app_key=fa1417bd0cb262ef6b1af85af54b21db";
var resultAmount = "&from=0&to=10"; // This will show 10 

var whichMeal = "";

var queryURL = apiURL + whichMeal + apiID + apiKey + resultAmount + calorieRangeFULL;

$("button").click(function(){
    $.ajax({url: queryURL, method: "GET", success: function(result){
      $("#div1").html(result);
    }});
});


  // Height Selection
  // Utilizing a new click event method for submit buttons within html forms
  // The target needs to be the form id, not the input id

  var myFeet = $("#feet-input").value;
  var myInches = $("#inches-input").value;
 

  // Feet
  $("#feet-form").submit(function(event) {
    myHeightFt.push(myFeet);
    event.preventDefault();
  });

  // Inches
  $("#inches-form").submit(function(event) {
    myHeightIn.push(myInches);
    event.preventDefault();
  });


  // Gender Selection
  $("#maleBTN").click(function(event) {
    event.preventDefault();
  
      myGender.push("m");

    });

  $("#femaleBTN").click(function(event) {
    event.preventDefault();
    
      myGender.push("f");

    });

    //var pastSearches = [];

// City Search
// $("#select-city").click(function(event) {
//     event.preventDefault();
  
//     var inputCity = $("#city-input").val().trim().toUpperCase();
//     searchWeather(inputCity);
  
//     if (pastSearches.indexOf(inputCity) === -1) {
//       pastSearches.push(inputCity);
//     }
  
//     renderButtons();
  
  
//   });