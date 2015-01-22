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

// BACK BUTTON VARIABLE
var $back = $(".backButton");

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
  $(".photoFrame:eq(1),.photoFrame:eq(2),.photoFrame:eq(3),.photoFrame:eq(4),.photoFrame:eq(5)").hide();
});

$photo2.click(function(event) {
  $("aside").removeClass("active");
  $("section").removeClass("collapsed");
  $("section").addClass("fullscreen");
  $(".photoFrame:eq(0),.photoFrame:eq(2),.photoFrame:eq(3),.photoFrame:eq(4),.photoFrame:eq(5)").hide();
});

$photo3.click(function(event) {
  $("aside").removeClass("active");
  $("section").removeClass("collapsed");
  $("section").addClass("fullscreen");
  $(".photoFrame:eq(0),.photoFrame:eq(1),.photoFrame:eq(3),.photoFrame:eq(4),.photoFrame:eq(5)").hide();
});

$photo4.click(function(event) {
  $("aside").removeClass("active");
  $("section").removeClass("collapsed");
  $("section").addClass("fullscreen");
  $(".photoFrame:eq(0),.photoFrame:eq(1),.photoFrame:eq(2),.photoFrame:eq(4),.photoFrame:eq(5)").hide();
});

$photo5.click(function(event) {
  $("aside").removeClass("active");
  $("section").removeClass("collapsed");
  $("section").addClass("fullscreen");
  $(".photoFrame:eq(0),.photoFrame:eq(1),.photoFrame:eq(2),.photoFrame:eq(3),.photoFrame:eq(5)").hide();
});

$photo6.click(function(event) {
  $("aside").removeClass("active");
  $("section").removeClass("collapsed");
  $("section").addClass("fullscreen");
  $(".photoFrame:eq(0),.photoFrame:eq(1),.photoFrame:eq(2),.photoFrame:eq(3),.photoFrame:eq(5)").hide();
});

//NAV MENU

  var $Nav1 = $("nav a").eq(0);
  var $Nav2 = $("nav a").eq(1);
  var $Nav3 = $("nav a").eq(2);
  var $Nav4 = $("nav a").eq(3);
  var $Nav5 = $("nav a").eq(4);
  var $Nav6 = $("nav a").eq(5);

  $Nav1.click(function(event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $(".photoWrapper1").addClass("active");
    $(".photoWrapper1").siblings().removeClass("active");
  });

  $Nav2.click(function(event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $(".photoWrapper2").addClass("active");
    $('.photoWrapper2').siblings().removeClass("active");
  });

  $Nav3.click(function(event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $(".photoWrapper3").siblings().removeClass("active");
    $(".photoWrapper3").addClass("active");
  });

  $Nav4.click(function(event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $(".photoWrapper4").siblings().removeClass("active");
    $(".photoWrapper4").addClass("active");
  });

  $Nav5.click(function(event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $(".photoWrapper5").addClass("active");
    $('.photoWrapper5').siblings().removeClass("active");
  });

  $Nav6.click(function(event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $(".photoWrapper6").siblings().removeClass("active");
    $(".photoWrapper6").addClass("active");
  });

// Back Button
  $back.click(function(event) {
    $("aside").addClass("active");
    $("section").removeClass("fullscreen");
    $("section").addClass("collapsed");
    $(".photoFrame:eq(0),.photoFrame:eq(1),.photoFrame:eq(2),.photoFrame:eq(3),.photoFrame:eq(4),.photoFrame:eq(5)").show();
  });

});
