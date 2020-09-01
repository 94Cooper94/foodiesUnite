// From User Input
var myGender= [""]; // From User Input
var myHeightFt= [];
var myHeightIn= [];
var myWeight= [];
var myAge = [];
var whichMeal = [""];
var myActivityLevel = [""];
var myBMR = [];
var myCaloricIntake = [];


function getBMR(gender) {

    var heightFull = parseInt(myHeightFt) + parseInt(myHeightIn);
    var bmrFemale = 655 + (4.35 * myWeight) + (4.7 * heightFull) - (4.7 * myAge);
    var bmrMale = 66 + (6.2 * myWeight) + (12.7 * heightFull) - (6.76 * myAge);

    myBMR.length = 0;

    if (gender == "f") {
        myBMR.unshift(bmrFemale);
    }
    if (gender == "m") {
        myBMR.unshift(bmrMale);
    }

    console.log(heightFull);
    console.log(myBMR);
}

function getCalories(BMR) {

    var sedentaryCal = BMR * 1.3;
    var lightCal = BMR * 1.53;
    var activeCal = BMR * 1.76;
    var vigorousCal = BMR * 2.25

    myCaloricIntake.length = 0;

    if (myActivityLevel == "s") {
        myCaloricIntake.unshift(sedentaryCal);
    }
    if (myActivityLevel == "l") {
        myCaloricIntake.unshift(lightCal);
    }
    if (myActivityLevel == "a") {
        myCaloricIntake.unshift(activeCal);
    }
    if (myActivityLevel == "v") {
        myCaloricIntake.unshift(vigorousCal);
    }
}


// Gender Selection
$("#maleBTN").click(function(event) {
  event.preventDefault();

    myGender.length = 0;
    myGender.unshift("m");

    console.log(myGender);

});

$("#femaleBTN").click(function(event) {
  event.preventDefault();

    myGender.length = 0;
    myGender.unshift("f");
    console.log(myGender);

});

$("#feet-form").submit(function(event) {
  event.preventDefault();

    var myFeet = parseInt(($("#feet-input").val()));
    console.log(myFeet);
    var feetToInches = myFeet * 12;
    console.log(feetToInches)


    myHeightFt.length = 0;
    myHeightFt.unshift(feetToInches);
    console.log(myHeightFt)
    
});

$("#inches-form").submit(function(event) {
  event.preventDefault();

    var myInches = parseInt(($("#inches-input").val()));
    console.log(myInches);

    myHeightIn.length = 0;
    myHeightIn.unshift(myInches);
    console.log(myHeightIn)
    
});

$("#weight-form").submit(function(event) {
  event.preventDefault();

    var weightInput = parseInt(($("#weight-input").val()));
    console.log(weightInput);

    myWeight.length = 0;
    myWeight.unshift(weightInput);
    console.log(myWeight);
    
});

$("#age-form").submit(function(event) {
  event.preventDefault();

    var ageInput = parseInt(($("#age-input").val()));
    console.log(ageInput);

    myAge.length = 0;
    myAge.unshift(ageInput);
    console.log(myAge);
    
});

// Meal Selection
$("#breakfastBTN").click(function(event) {
    event.preventDefault();

    whichMeal.length = 0;
    whichMeal.unshift("breakfast");
    console.log(whichMeal);
    });

$("#lunchBTN").click(function(event) {
    event.preventDefault();

    whichMeal.length = 0;
    whichMeal.unshift("lunch");
    console.log(whichMeal);

});

$("#dinnerBTN").click(function(event) {
    event.preventDefault();

    whichMeal.length = 0;
    whichMeal.unshift("dinner");
    console.log(whichMeal);

});

// Activity Level Selection
$("#sedentaryBTN").click(function(event) {
    event.preventDefault();

    myActivityLevel.length = 0;
    myActivityLevel.unshift("s");
    console.log(myActivityLevel);

});

$("#lightBTN").click(function(event) {
    event.preventDefault();

    myActivityLevel.length = 0;
    myActivityLevel.unshift("l");
    console.log(myActivityLevel);
});

$("#activeBTN").click(function(event) {
    event.preventDefault();

    myActivityLevel.length = 0;
    myActivityLevel.unshift("a");
    console.log(myActivityLevel);
});

$("#vigorousBTN").click(function(event) {
    event.preventDefault();

    myActivityLevel.length = 0;
    myActivityLevel.unshift("v");
    console.log(myActivityLevel);
});

// // Producing Calorie Range
// var calorieRange1 = Math.round(myCaloricIntake * .2); 
// var calorieRange2 = Math.round(myCaloricIntake * .3); 
// console.log(calorieRange1);
// console.log(calorieRange2);

// calorieRangeFULL= "calories=" + calorieRange1 + "-" + calorieRange2;
// console.log(calorieRangeFULL);

// // AJAX Call
// var apiURL = "https://api.edamam.com/search?q=";
// var apiID = "&app_id=d88e78b8";
// var apiKey = "&app_key=fa1417bd0cb262ef6b1af85af54b21db";
// var resultAmount = "&from=0&to=10"; // This will show 10 

// var queryURL = apiURL + whichMeal + apiID + apiKey + resultAmount + calorieRangeFULL;

    // Processing the User Input
    // function getBMR(gender) {
        
    //     // var feetToInches = myHeightFt / 12;
    //     // console.log(feetToInches)
    //     // var heightFull = parseInt(myHeightFt + myHeightIn);
        
    //     if (gender == "m") {
            
    //         // 66 + (6.2 * myWeight) + (12.7 * heightFull) - (6.76 * myAge);
    //     }
    //     if (gender == "f") {
            
    //         // 655 + (4.35 * myWeight) + (4.7 * heightFull) - (4.7 * myAge);
    //     }
    // }


$("#get-meal").click(function(){

    getBMR(myGender);
    getCalories(myBMR);

    console.log(myBMR);
    console.log(myCaloricIntake);

    // Producing Calorie Range
    var calorieRange1 = Math.round(myCaloricIntake * .2); 
    var calorieRange2 = Math.round(myCaloricIntake * .3); 
    console.log(calorieRange1);
    console.log(calorieRange2);

    calorieRangeFULL= "&calories=" + calorieRange1 + "-" + calorieRange2;
    console.log(calorieRangeFULL);

    // AJAX Call
    var apiURL = "https://api.edamam.com/search?q=";
    var apiID = "&app_id=d88e78b8";
    var apiKey = "&app_key=fa1417bd0cb262ef6b1af85af54b21db";
    var resultAmount = "&from=0&to=10"; // This will show 10 

    var queryURL = apiURL + whichMeal + apiID + apiKey + resultAmount + calorieRangeFULL;

    
    $.ajax({url: queryURL, method: "GET", success: function(result){
        console.log(result);
    }});
});