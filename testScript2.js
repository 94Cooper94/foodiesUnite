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

// To make our fancy Materialize dropdown work
//////////////////////////////////
$('.dropdown-trigger').dropdown();
//////////////////////////////////

// Gender Selection
$("#female").click(function(event) {
    event.preventDefault();
  
      myGender.length = 0;
      myGender.unshift("f");
      console.log(myGender);
  
  });

$("#male").click(function(event) {
  event.preventDefault();

    myGender.length = 0;
    myGender.unshift("m");

    console.log(myGender);

});

// If some of the input were to be submitted prior to the main that produces the results / makes the AJAX
// $("#submit-button").click(function(event) {
//     event.preventDefault();

//     var myFeet = parseInt(($("#feet").val()));
//     console.log(myFeet);
//     var feetToInches = myFeet * 12;
//     console.log(feetToInches)

//     myHeightFt.length = 0;
//     myHeightFt.unshift(feetToInches);
//     console.log(myHeightFt);
    
//     var myInches = parseInt(($("#inches").val()));
//     console.log(myInches);

//     myHeightIn.length = 0;
//     myHeightIn.unshift(myInches);
//     console.log(myHeightIn);

//     var weightInput = parseInt(($("#weight").val()));
//     console.log(weightInput);

//     myWeight.length = 0;
//     myWeight.unshift(weightInput);
//     console.log(myWeight);

//     var ageInput = parseInt(($("#age").val()));
//     console.log(ageInput);

//     myAge.length = 0;
//     myAge.unshift(ageInput);
//     console.log(myAge);

// });

// Meal Selection
$("#addBfast").click(function(event) {
    event.preventDefault();

    whichMeal.length = 0;
    whichMeal.unshift("breakfast");
    console.log(whichMeal);
    });

$("#addLunch").click(function(event) {
    event.preventDefault();

    whichMeal.length = 0;
    whichMeal.unshift("lunch");
    console.log(whichMeal);

});

$("#addDinner").click(function(event) {
    event.preventDefault();

    whichMeal.length = 0;
    whichMeal.unshift("dinner");
    console.log(whichMeal);

});

// Activity Level Selection
$("#sedentary").click(function(event) {
    event.preventDefault();

    myActivityLevel.length = 0;
    myActivityLevel.unshift("s");
    console.log(myActivityLevel);

});

$("#light").click(function(event) {
    event.preventDefault();

    myActivityLevel.length = 0;
    myActivityLevel.unshift("l");
    console.log(myActivityLevel);
});

$("#active").click(function(event) {
    event.preventDefault();

    myActivityLevel.length = 0;
    myActivityLevel.unshift("a");
    console.log(myActivityLevel);
});

$("#vigorous").click(function(event) {
    event.preventDefault();

    myActivityLevel.length = 0;
    myActivityLevel.unshift("v");
    console.log(myActivityLevel);
});

$("#submit-button").click(function(event){
    event.preventDefault();

    var myFeet = parseInt(($("#feet").val()));
    console.log(myFeet);
    var feetToInches = myFeet * 12;
    console.log(feetToInches)

    myHeightFt.length = 0;
    myHeightFt.unshift(feetToInches);
    console.log(myHeightFt);
    
    var myInches = parseInt(($("#inches").val()));
    console.log(myInches);

    myHeightIn.length = 0;
    myHeightIn.unshift(myInches);
    console.log(myHeightIn);

    var weightInput = parseInt(($("#weight").val()));
    console.log(weightInput);

    myWeight.length = 0;
    myWeight.unshift(weightInput);
    console.log(myWeight);

    var ageInput = parseInt(($("#age").val()));
    console.log(ageInput);

    myAge.length = 0;
    myAge.unshift(ageInput);
    console.log(myAge);

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
    }}).then(function(response) {
        
        console.log(response);
        console.log(response.hits[0].recipe.image);

        var testText = $("<h4>").text(response.hits[0].recipe.label);
        var firstRecipe = $("<img>").attr("scr=" + response.hits[0].recipe.image);

        $("#mealDiv").empty();
        $("#mealDiv").append(testText, firstRecipe);

    });


});