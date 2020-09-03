////////////////////////////////////////////////////////////////////
// deezmond's section
// From User Input
var myGender = [""]; // From User Input
var myHeightFt = [];
var myHeightIn = [];
var myWeight = [];
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
$("#female").click(function (event) {
    event.preventDefault();

    myGender.length = 0;
    myGender.unshift("f");
    console.log(myGender);

});

$("#male").click(function (event) {
    event.preventDefault();

    myGender.length = 0;
    myGender.unshift("m");

    console.log(myGender);

});

// Meal Selection
$("#addBfast").click(function (event) {
    event.preventDefault();

    whichMeal.length = 0;
    whichMeal.unshift("breakfast");
    console.log(whichMeal);
});

$("#addLunch").click(function (event) {
    event.preventDefault();

    whichMeal.length = 0;
    whichMeal.unshift("lunch");
    console.log(whichMeal);

});

$("#addDinner").click(function (event) {
    event.preventDefault();

    whichMeal.length = 0;
    whichMeal.unshift("dinner");
    console.log(whichMeal);

});

// Activity Level Selection
$("#sedentary").click(function (event) {
    event.preventDefault();

    myActivityLevel.length = 0;
    myActivityLevel.unshift("s");
    console.log(myActivityLevel);

});

$("#light").click(function (event) {
    event.preventDefault();

    myActivityLevel.length = 0;
    myActivityLevel.unshift("l");
    console.log(myActivityLevel);
});

$("#active").click(function (event) {
    event.preventDefault();

    myActivityLevel.length = 0;
    myActivityLevel.unshift("a");
    console.log(myActivityLevel);
});

$("#vigorous").click(function (event) {
    event.preventDefault();

    myActivityLevel.length = 0;
    myActivityLevel.unshift("v");
    console.log(myActivityLevel);

});

$("#submit-button").click(function (event) {
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

    calorieRangeFULL = "Calorie Range=" + calorieRange1 + "-" + calorieRange2;
    console.log(calorieRangeFULL);
    $('#BMRval').append("Calorie Day Intake " + myCaloricIntake)


    // AJAX Call
    var apiURL = "https://api.edamam.com/search?q=";
    var apiID = "&app_id=d88e78b8";
    var apiKey = "&app_key=fa1417bd0cb262ef6b1af85af54b21db";
    var resultAmount = "&from=0&to=10"; // This will show 10 

    var queryURL = apiURL + whichMeal + apiID + apiKey + resultAmount + calorieRangeFULL;

    $.ajax({
        url: queryURL, method: "GET", success: function (result) {
            console.log(result);
        }
    }).then(function (response) {

        console.log(response.hits[0].recipe.image);

        var rp1Name = $("<h4>").text(response.hits[0].recipe.label).attr("href=" + response.hits[0].recipe.url);
        var rp1Image = $("<img>").attr("scr=" + response.hits[0].recipe.image);

        var rp2Name = $("<h4>").text(response.hits[1].recipe.label).attr("href=" + response.hits[1].recipe.url);
        var rp2Image = $("<img>").attr("scr=" + response.hits[1].recipe.image);

        var rp3Name = $("<h4>").text(response.hits[2].recipe.label).attr("href=" + response.hits[2].recipe.url);
        var rp3Image = $("<img>").attr("scr=" + response.hits[2].recipe.image);

        var rp4Name = $("<h4>").text(response.hits[3].recipe.label).attr("href=" + response.hits[3].recipe.url);
        var rp4Image = $("<img>").attr("scr=" + response.hits[3].recipe.image);

        var rp5Name = $("<h4>").text(response.hits[4].recipe.label).attr("href=" + response.hits[4].recipe.url);
        var rp5Image = $("<img>").attr("scr=" + response.hits[4].recipe.image);

        $("#mealDiv").empty();
        $("#mealDiv").append(rp1Name, rp1Image, rp2Name, rp2Image, rp3Name, rp3Image, rp4Name, rp4Image, rp5Name, rp5Image);

    });
});

//var searchTerm = ""
// var app_id = "d88e78b8";
// var api_key = "fa1417bd0cb262ef6b1af85af54b21db";
// var queryURL = "https://api.edamam.com/search?q=" + searchTerm + "&app_id=" + app_id + "&app_key=" + api_key;

// $ajax({
//   queryURL,
//   type: 'GET',
//   dataType: 'json',
//   success: function (q) {
//     console.log(q)
//   }
// })
// 
// 
/////////////////////////////////////////////////////////////////////
// coop's section
// 
// $("#preferenceDiv").append(dairyFree, glutenFree, pescatarian, vegan, vegetarian)
// var dairyFree = $(document.createElement("input")).attr({
//   id: 'dairy-free'
//   , name: 'dairy-free'
//   , value: '2'
//   , text: 'Dairy-free'
//   , type: 'checkbox'
//   , checked: true
// })
// var glutenFree = $(document.createElement("input")).attr({
//   id: 'gluten-free'
//   , name: 'gluten-free'
//   , value: '2'
//   , text: 'Gluten-free'
//   , type: 'checkbox'
//   , checked: true
// })
// var pescatarian = $(document.createElement("input")).attr({
//   id: 'pescatarian'
//   , name: 'pescatarian'
//   , value: '2'
//   , text: 'Pescatarian'
//   , type: 'checkbox'
//   , checked: true
// })
// var vegan = $(document.createElement("input")).attr({
//   id: 'vegan'
//   , name: 'vegan'
//   , value: '2'
//   , text: 'Vegan'
//   , type: 'checkbox'
//   , checked: true
// })
// var vegetarian = $(document.createElement("input")).attr({
//   id: 'vegetarian'
//   , name: 'vegetarian'
//   , value: '2'
//   , text: 'Vegetarian'
//   , type: 'checkbox'
//   , checked: true
// })



// function that runs upon clicking a foodPreference checkbox
// function takes the boxVal of the checkbox clicked and either adds or removes it
// tbh idk how to assign values to checkboxes lmao but not actually lmao
// $("#mealType").on("click", function (mealType) {
//   $.ajax({
//     url: `https://api.edamam.com/search?q=${mealType}&app_id=d88e78b8&app_key=fa1417bd0cb262ef6b1af85af54b21db`,
//     method: "GET",
//   })
//   console.log("https://api.edamam.com/search?q=dinner&app_id=d88e78b8&app_key=fa1417bd0cb262ef6b1af85af54b21db")
// });
// $("#checkbox").on("click", function (boxVal) {
//   $.ajax({
//     url: `https://api.edamam.com/search?q=${boxVal}&app_id=d88e78b8&app_key=fa1417bd0cb262ef6b1af85af54b21db`,
//     method: "GET",
//   })
//   console.log("https://api.edamam.com/search?q=dinner&app_id=d88e78b8&app_key=fa1417bd0cb262ef6b1af85af54b21db")
// });
//
//
//
////////////////////////////////////////////////////////////////////
// justin's section
//
//Booty queen
//
//
//
//
/////////////////////////////////////////////////////////////////////
// austin's section

//for the BMI api

$('#submit-button').click(function (num) {
    num.preventDefault();
    var inches = parseInt(($("#inches").val()));
    var numFeet = parseInt(($("#feet").val()));
    var weightNumber = parseInt(($("#weight").val()));
    var ageNumber = parseInt(($("#age").val()));
    console.log(weightNumber);
    console.log(numFeet);
    console.log(ageNumber);
    console.log(inches);
    var totalHeight = (numFeet * 30.48) + (inches * 2.54);
    console.log(totalHeight)
    var newWeight = weightNumber / 2.205;
    console.log(newWeight)



    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://fitness-calculator.p.rapidapi.com/bmi?age=" + ageNumber + "&height=" + totalHeight + "&weight=" + newWeight,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
            "x-rapidapi-key": "86b98fe979msh6aefe56a206cbf4p16a71ajsn498545912ad2"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response.bmi)
        console.log(response.health)
        var bmiAnswers = show(response);

        $('#showBmi').html(bmiAnswers);



    });


    function show(response) {
        var bmiNum = response.bmi
        var healthNum = response.health
        return "<h3><strong>bmi</strong>: " + bmiNum.toFixed(2) + "</h3>" +
            "<h3><strong>health status</strong>: " + healthNum + "</h3>";

    }
});
// $('#genderOptions').submit(function (e) {
//   e.preventDefault();
//   var gender = $('select#gender').val();
//   console.log(gender);
// });

//
// https://www.programmableweb.com/news/10-most-popular-food-apis/brief/2019/08/06
//
//
//
//////////////////////////////////////////////////