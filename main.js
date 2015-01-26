// PHOTO GALLERY OBJECTS
var myAlbums = {


  album1:{
  "photo1": "http://www.fillmurray.com/200/200",
  "photo2": "http://www.fillmurray.com/200/200",
  "photo3": "http://www.fillmurray.com/200/200",
  "photo4": "http://www.fillmurray.com/200/200",
  "photo5": "http://www.fillmurray.com/200/200",
  "photo6": "http://www.fillmurray.com/200/200"
},

  album2: {
  "photo1": "http://lorempixel.com/output/food-q-g-225-200-1.jpg",
  "photo2": "http://lorempixel.com/output/food-q-g-225-200-1.jpg",
  "photo3": "http://lorempixel.com/output/food-q-g-225-200-1.jpg",
  "photo4": "http://lorempixel.com/output/food-q-g-225-200-1.jpg",
  "photo5": "http://lorempixel.com/output/food-q-g-225-200-1.jpg",
  "photo6": "http://lorempixel.com/output/food-q-g-225-200-1.jpg"
},

album3: {
  "photo1": "http://lorempixel.com/output/city-q-c-225-200-3.jpg",
  "photo2": "http://lorempixel.com/output/city-q-c-225-200-3.jpg",
  "photo3": "http://lorempixel.com/output/city-q-c-225-200-3.jpg",
  "photo4": "http://lorempixel.com/output/city-q-c-225-200-3.jpg",
  "photo5": "http://lorempixel.com/output/city-q-c-225-200-3.jpg",
  "photo6": "http://lorempixel.com/output/city-q-c-225-200-3.jpg"
},

album4: {
  "photo1": "http://lorempixel.com/output/sports-q-c-250-200-1.jpg",
  "photo2": "http://lorempixel.com/output/sports-q-c-250-200-1.jpg",
  "photo3": "http://lorempixel.com/output/sports-q-c-250-200-1.jpg",
  "photo4": "http://lorempixel.com/output/sports-q-c-250-200-1.jpg",
  "photo5": "http://lorempixel.com/output/sports-q-c-250-200-1.jpg",
  "photo6": "http://lorempixel.com/output/sports-q-c-250-200-1.jpg"
},

album5: {
  "photo1": "http://lorempixel.com/output/city-q-g-250-200-9.jpg",
  "photo2": "http://lorempixel.com/output/city-q-g-250-200-9.jpg",
  "photo3": "http://lorempixel.com/output/city-q-g-250-200-9.jpg",
  "photo4": "http://lorempixel.com/output/city-q-g-250-200-9.jpg",
  "photo5": "http://lorempixel.com/output/city-q-g-250-200-9.jpg",
  "photo6": "http://lorempixel.com/output/city-q-g-250-200-9.jpg"
},

  album6: {
  "photo1": "http://lorempixel.com/output/food-q-g-250-200-8.jpg",
  "photo2": "http://lorempixel.com/output/food-q-g-250-200-8.jpg",
  "photo3": "http://lorempixel.com/output/food-q-g-250-200-8.jpg",
  "photo4": "http://lorempixel.com/output/food-q-g-250-200-8.jpg",
  "photo5": "http://lorempixel.com/output/food-q-g-250-200-8.jpg",
  "photo6": "http://lorempixel.com/output/food-q-g-250-200-8.jpg"
  }

};

$(document).ready(function() {
  "use strict"; // Execute our JS safely when DOM is fully loaded

// ALBUM FRAME VARIABLES
var $album1 = $(".albumFrame").eq(0);
var $album2 = $(".albumFrame").eq(1);
var $album3 = $(".albumFrame").eq(2);
var $album4 = $(".albumFrame").eq(3);
var $album5 = $(".albumFrame").eq(4);
var $album6 = $(".albumFrame").eq(5);

//PHOTO FRAME VARIABLES
var $photo1 = $(".photoFrame").eq(0);
var $photo2 = $(".photoFrame").eq(1);
var $photo3 = $(".photoFrame").eq(2);
var $photo4 = $(".photoFrame").eq(3);
var $photo5 = $(".photoFrame").eq(4);
var $photo6 = $(".photoFrame").eq(5);

//
// var subObject = $(this).attr('rel');
// console.log(subObject);

var subObjectValue = $(".photoFrame").data("photo");
console.log(subObjectValue);


// BACK BUTTON VARIABLE
var $back = $(".backButton");

// SELECT ALBUM/////////////////////////
$(".albumFrame").click(function(event) {
  event.preventDefault();
  $(".albumWrapper").removeClass("active");
  $(".photoWrapper").addClass("active");
  $("aside").addClass("active");
  $("section").addClass("collapsed");

// change photoFrame image based on which album is clicked

    var subObject = $(this).attr('rel');
      console.log(subObject);

    var subObjectValue = $(".photoFrame").data("photo");
      console.log(subObjectValue);

  // assign myAlbums key to ".photoFrame" and change src to key's value
    $(".photoFrame").siblings().children("img").attr('src', myAlbums[subObject] [subObjectValue]);
      console.log( "this is " + $(this).attr('rel') + " " + $('.photoFrame').attr('rel'));

  //Assign activeNav class to corresponding li on nav bar
  var currentClass = $(this).data("nav");
  $("li." + currentClass).addClass("activeNav");
  $("li." + currentClass).siblings().removeClass("activeNav");

});

// SELECT PHOTO////////////////////////
$(".photoFrame").on("click", function(){
  $("aside").removeClass("active")
  $(this).closest("section").addClass("fullscreen");
  $(this).closest("section").removeClass("collapsed");
  $(this).siblings().hide();
});

//NAV MENU////////////////////////////
  var $Nav1 = $("nav a").eq(0);
  var $Nav2 = $("nav a").eq(1);
  var $Nav3 = $("nav a").eq(2);
  var $Nav4 = $("nav a").eq(3);
  var $Nav5 = $("nav a").eq(4);
  var $Nav6 = $("nav a").eq(5);

  $("nav a").click(function(event) {
    event.preventDefault();
    // Add/remove activeNav class
    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    // Change album
    var subObjectNav = $(this).parent().attr('rel');

    var subObjectValue = $(".photoFrame").data("photo")
    $(".photoFrame").siblings().children("img").attr('src', myAlbums[subObjectNav] [subObjectValue]);
  });

// Put photo name above photo @ fullscreen
//   $(".photoFrame").on("click", function(){
//
//     $('this').toggle($('img').before($(this).children().last()));
// });


// Back Button////////////////////////////
  $back.click(function(event) {
    $("aside").addClass("active");
    $("section").removeClass("fullscreen");
    $("section").addClass("collapsed");
    $(".photoFrame").siblings().show();

  });

});
