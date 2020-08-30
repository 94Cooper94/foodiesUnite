var searchTerm = ""
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





