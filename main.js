$(document).ready(function() {
  "use strict"; // Execute our JS safely when DOM is fully loaded


  //NAV MENU

  var $album1 = $("nav a").eq(0);
  var $album2 = $("nav a").eq(1);
  var $album3 = $("nav a").eq(2);
  var $album4 = $("nav a").eq(3);
  var $album5 = $("nav a").eq(4);
  var $album6 = $("nav a").eq(5);

  $album1.click(function(event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");

    $(".post1").siblings().removeClass("active");
    $(".post1").addClass("active");
  });

  $album2.click(function(event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");

    $('.post2').siblings().removeClass("active");
    $('.post2').addClass("active");
  });

  $album3.click(function(event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");

    $(".post3").siblings().removeClass("active");
    $(".post3").addClass("active");
  });

  $album4.click(function(event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");

    $(".post1").siblings().removeClass("active");
    $(".post1").addClass("active");
  });

  $album5.click(function(event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");

    $('.post2').siblings().removeClass("active");
    $('.post2').addClass("active");
  });

  $album6.click(function(event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");

    $(".post3").siblings().removeClass("active");
    $(".post3").addClass("active");
  });

});
