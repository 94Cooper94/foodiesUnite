
let myGender= ""; // From User Input
// console.log(myGender);
let myHeightFt= []; // From User Input
console.log(myHeightFt);
let myHeightIn= []; // From User Input
let myWeight= []; // From User Input
let myAge = []; // From User Input

var convertFeetToInches = myHeightFt / 12;
// console.log(convertFeetToInches);
var heightFull = convertFeetToInches + myHeightIn;
// var genderLetter = myGender.string.charAt(0).toLowercase(); // Change this, no typing, just selection


$("button").click(function () {
  $.ajax({
    url: queryURL, method: "GET" success: function (result) {
      $("#div1").html(result);
    }
  });
});

function getBMR(gender) {
    if (gender == "m") {
        
        66 + (6.2 * myWeight) + (12.7 * heightFull) - (6.76 * myAge);
    }
    if (gender == "f") {
        
        655 + (4.35 * myWeight) + (4.7 * heightFull) - (4.7 * myAge);
    }
}

var myBMR = getBMR(myGender);
console.log(myBMR)

var myActivityLevel = ""; // From User Input

// click event buttons to push value of letter or num representing three options: 0.sedentary 1.light to moderate, 2.active, or 3.vigorous(athlete or manual laborer) to empty array

function getCalories(BMR) {

    if (myActivityLevel == "s") {
        BMR * 1.3;
    }
    if (myActivityLevel == "l") {
        BMR * 1.53;
    }
    if (myActivityLevel == "a") {
        BMR * 1.76;
    }
    if (myActivityLevel == "v") {
        BMR * 2.25;
    }
}

var myCaloricIntake = getCalories(myBMR);
console.log(myCaloricIntake);

// // Maintain Calorie Range
// var calorieRange1 = Math.round(myCaloricIntake * .2); 
// var calorieRange2 = Math.round(myCaloricIntake * .3); 
// console.log(calorieRange1);

// = "calories=" + calorieRange1 + "-" + calorieRange2;

// var calorieRangeFULL = ("591" + "-" + "722");
// console.log(calorieRangeFull)
// AJAX Call
// FULL url "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to={3 OR LAST INDEX OF YOUR CHOICE}calories={591-722 CALORIE RANGE PER CATEGORY} {&health=alcohol-free}"

var apiURL = "https://api.edamam.com/search?q=";
var apiID = "&app_id=d88e78b8";
var apiKey = "&app_key=fa1417bd0cb262ef6b1af85af54b21db";
var resultAmount = "&from=0&to=10"; // This will show 10 

// var whichMeal = "";

var queryURL = apiURL + whichMeal + apiID + apiKey + resultAmount + "calories=591-722";

$("#get-meal").click(function(){
    $.ajax({url: queryURL, method: "GET", success: function(result){
        console.log(result);
    //   $("#div1").html(result);
    }});
});


  // Height Selection
  var myFeet = $("#feet-input").val();
  console.log(myFeet);
  var myInches = $("#inches-input").val();

  // Utilizing a new click event method for submit buttons within html forms
  // The target needs to be the form id, not the input id
 
  // Feet
  $("#feet-form").submit(function(event) {
    event.preventDefault();
    myHeightFt.push(myFeet);
  
  });
  // Inches
  $("#inches-form").submit(function(event) {
    event.preventDefault();
    myHeightIn.push(myInches);

  });

  // Weight Selection
  var weightInput = $("#weight-input").value;

  $("#weight-form").submit(function(event) {
    event.preventDefault();
    myWeight.push(weightInput);
    
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

  // Meal Selection
  $("#breakfastBTN").click(function(event) {
    event.preventDefault();
    
     whichMeal.push("breakfast");

    });

  $("#lunchBTN").click(function(event) {
    event.preventDefault();
        
      whichMeal.push("breakfast");
    
    });

  $("#dinnerBTN").click(function(event) {
    event.preventDefault();
        
      whichMeal.push("breakfast");
    
     });