var myGender= ["x"]; // From User Input
var myHeightFt= [];

console.log(myGender);

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

    console.log(myGender);

    var myFeet = parseInt(($("#feet-input").val()));
    console.log(myFeet);

    $("#feet-form").submit(function(event) {
      event.preventDefault();

      var myFeet = parseInt(($("#feet-input").val()));
      console.log(myFeet);

        myHeightFt.length = 0;
        myHeightFt.unshift(myFeet);
        console.log(myHeightFt)
      
    });
    console.log(myHeightFt);
    