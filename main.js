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

// SELECT ALBUM
$album1.click(function(event) {
  $(".albumWrapper").removeClass("active");
  $(".photoWrapper1").addClass("active");
  $("aside").addClass("active");
  $("section").addClass("collapsed");
});

$album2.click(function(event) {
  $(".albumWrapper").removeClass("active");
  $(".photoWrapper2").addClass("active");
  $("aside").addClass("active");
  $("section").addClass("collapsed");
});

$album3.click(function(event) {
  $(".albumWrapper").removeClass("active");
  $(".photoWrapper3").addClass("active");
  $("aside").addClass("active");
  $("section").addClass("collapsed");
});

$album4.click(function(event) {
  $(".albumWrapper").removeClass("active");
  $(".photoWrapper4").addClass("active");
  $("aside").addClass("active");
  $("section").addClass("collapsed");
});

$album5.click(function(event) {
  $(".albumWrapper").removeClass("active");
  $(".photoWrapper5").addClass("active");
  $("aside").addClass("active");
  $("section").addClass("collapsed");
});

$album6.click(function(event) {
  $(".albumWrapper").removeClass("active");
  $(".photoWrapper6").addClass("active");
  $("aside").addClass("active");
  $("section").addClass("collapsed");
});


//SELECT PHOTO
$photo1.click(function(event) {
  $("aside").removeClass("active");
  $("section").removeClass("collapsed");
  $("section").addClass("fullscreen");
  $(".photoFrame:eq(1),.photoFrame:eq(2),.photoFrame:eq(3),.photoFrame:eq(4),.photoFrame:eq(5)").remove();
});

$photo2.click(function(event) {
  $("aside").removeClass("active");
  $("section").removeClass("collapsed");
  $("section").addClass("fullscreen");
  $(".photoFrame:eq(1),.photoFrame:eq(2),.photoFrame:eq(3),.photoFrame:eq(4),.photoFrame:eq(5)").remove();
});

$photo3.click(function(event) {
  $("aside").removeClass("active");
  $("section").removeClass("collapsed");
  $("section").addClass("fullscreen");
  $(".photoFrame:eq(0),.photoFrame:eq(1),.photoFrame:eq(3),.photoFrame:eq(4),.photoFrame:eq(5)").remove();
});

$photo4.click(function(event) {
  $("aside").removeClass("active");
  $("section").removeClass("collapsed");
  $("section").addClass("fullscreen");
  $(".photoFrame:eq(0),.photoFrame:eq(1),.photoFrame:eq(2),.photoFrame:eq(4),.photoFrame:eq(5)").remove();
});

$photo5.click(function(event) {
  $("aside").removeClass("active");
  $("section").removeClass("collapsed");
  $("section").addClass("fullscreen");
  $(".photoFrame:eq(0),.photoFrame:eq(1),.photoFrame:eq(2),.photoFrame:eq(3),.photoFrame:eq(5)").remove();
});

$photo6.click(function(event) {
  $("aside").removeClass("active");
  $("section").removeClass("collapsed");
  $("section").addClass("fullscreen");
  $(".photoFrame:eq(0),.photoFrame:eq(1),.photoFrame:eq(2),.photoFrame:eq(3),.photoFrame:eq(5)").remove();
});













  //NAV MENU

  var $album1Nav = $("nav a").eq(0);
  var $album2Nav = $("nav a").eq(1);
  var $album3Nav = $("nav a").eq(2);
  var $album4Nav = $("nav a").eq(3);
  var $album5Nav = $("nav a").eq(4);
  var $album6Nav = $("nav a").eq(5);

  $album1Nav.click(function(event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");

    // $(".post1").siblings().removeClass("active");
    // $(".post1").addClass("active");
  });

  $album2Nav.click(function(event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");

    // $('.post2').siblings().removeClass("active");
    // $('.post2').addClass("active");
  });

  $album3Nav.click(function(event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");

    // $(".post3").siblings().removeClass("active");
    // $(".post3").addClass("active");
  });

  $album4Nav.click(function(event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");

    // $(".post1").siblings().removeClass("active");
    // $(".post1").addClass("active");
  });

  $album5Nav.click(function(event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");

    // $('.post2').siblings().removeClass("active");
    // $('.post2').addClass("active");
  });

  $album6Nav.click(function(event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");

    // $(".post3").siblings().removeClass("active");
    // $(".post3").addClass("active");
  });

});
