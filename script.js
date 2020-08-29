////////////////////////////////////////////////////////////////////
// deezmond's section
// 
//
//
// 
// 
/////////////////////////////////////////////////////////////////////
// coop's section
// 





//
//


// https://materializecss.com/range.html
// calorie counter in scale form; isn't appearing for whatever reason
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
//
//
//
//
//
////////////////////////////////////////////////////////////////////



















// https://www.programmableweb.com/news/10-most-popular-food-apis/brief/2019/08/06