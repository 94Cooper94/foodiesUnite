////////////////////////////////////////////////////////////////////
// deezmond's section
// 
//x
//var searchTerm = ""
var app_id = "d88e78b8";
var api_key = "fa1417bd0cb262ef6b1af85af54b21db";
var queryURL = "https://api.edamam.com/search?q=" + searchTerm + "&app_id=" + app_id + "&app_key=" + api_key;

$ajax({
  queryURL,
  type: 'GET',
  dataType: 'json',
  success: function (q) {
    console.log(q)
  }

})
// 
// 
/////////////////////////////////////////////////////////////////////
// coop's section
// 
$("#preferenceDiv").append(dairyFree, glutenFree, pescatarian, vegan, vegetarian)

var dairyFree = $(document.createElement("input")).attr({
  id: 'dairy-free'
 ,name: 'dairy-free'
 ,value: '2'
 ,text : 'Dairy-free'
 ,type: 'checkbox'
 ,checked: true
})
var glutenFree = $(document.createElement("input")).attr({
  id: 'gluten-free'
 ,name: 'gluten-free'
 ,value: '2'
 ,text : 'Gluten-free'
 ,type: 'checkbox'
 ,checked: true
})
var pescatarian	 = $(document.createElement("input")).attr({
  id: 'pescatarian'
 ,name: 'pescatarian'
 ,value: '2'
 ,text : 'Pescatarian'
 ,type: 'checkbox'
 ,checked: true
})
var vegan = $(document.createElement("input")).attr({
  id: 'vegan'
 ,name: 'vegan'
 ,value: '2'
 ,text : 'Vegan'
 ,type: 'checkbox'
 ,checked: true
})
var vegetarian = $(document.createElement("input")).attr({
  id: 'vegetarian'
 ,name: 'vegetarian'
 ,value: '2'
 ,text : 'Vegetarian'
 ,type: 'checkbox'
 ,checked: true
})


// initializes the gender select input field
// https://materializecss.com/select.html
$(document).ready(function () {
  $('select').formSelect();
});


//
//


// calorie counter in scale form; isn't appearing for whatever reason
// https://materializecss.com/range.html
var slider = document.getElementById('test-slider');
noUiSlider.create(slider, {
  start: [20, 80],
  connect: true,
  step: 1,
  orientation: 'horizontal', // 'horizontal' or 'vertical'
  range: {
    'min': 1200,
    'max': 6000,
  },
  format: wNumb({
    decimals: 0
  })
});


// function that runs upon clicking a foodPreference checkbox
// function takes the boxVal of the checkbox clicked and either adds or removes it
// tbh idk how to assign values to checkboxes lmao but not actually lmao
$("#mealType").on("click", function (mealType) {
  $.ajax({
    url: `https://api.edamam.com/search?q=${mealType}&app_id=d88e78b8&app_key=fa1417bd0cb262ef6b1af85af54b21db`,
    method: "GET",
  })
  console.log("https://api.edamam.com/search?q=dinner&app_id=d88e78b8&app_key=fa1417bd0cb262ef6b1af85af54b21db")
});
$("#checkbox").on("click", function (boxVal) {
  $.ajax({
    url: `https://api.edamam.com/search?q=${boxVal}&app_id=d88e78b8&app_key=fa1417bd0cb262ef6b1af85af54b21db`,
    method: "GET",
  })
  console.log("https://api.edamam.com/search?q=dinner&app_id=d88e78b8&app_key=fa1417bd0cb262ef6b1af85af54b21db")
});

// 
//


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

var ageNumber = 20
var heightNumber = 180
var weightNumber = 180 / 2.205




var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://fitness-calculator.p.rapidapi.com/bmi?age=" + ageNumber + "&height=" + heightNumber + "&weight=" + weightNumber,
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
    "x-rapidapi-key": "86b98fe979msh6aefe56a206cbf4p16a71ajsn498545912ad2"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
//
// https://www.programmableweb.com/news/10-most-popular-food-apis/brief/2019/08/06
//
//
//
////////////////////////////////////////////////////////////////////