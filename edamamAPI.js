var apiURL = "https://api.edamam.com/search?q="
var apiID = "&app_id=d88e78b8"
var apiKey = "&app_key=fa1417bd0cb262ef6b1af85af54b21db"

var searchKeyword = ""

var queryURL = apiURL + searchKeyword + apiID + apiKey

$("button").click(function(){
    $.ajax({url: queryURL, method: "GET" success: function(result){
      $("#div1").html(result);
    }});
  });