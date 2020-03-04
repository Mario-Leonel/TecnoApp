var elementoTop = $(".nav").offset().top; //offset es para saber la altura
console.log(elementoTop);
//var cont = 0;
$(window).scroll(function() {
  if ($(window).scrollTop() >= 5) {
    //$("#header").addClass("nav_fixed"); // !Agregar clase en HTML
    $(".img").addClass("tam-logo-g");
    //$("nav li").css("left", "72%");
    $(".nav").css("background", "rgba(1, 35, 44, .9)");
  } else {
    //$("#header").removeClass("nav_fixed");
    $(".img").removeClass("tam-logo-g");
    //$("nav li").css("left", "100%");
    $(".nav").css("background", "rgba(1, 35, 44, .9)");
  }
});

$(".btn-menu, .men").on("click", function() {
  $(".nav").toggleClass("nav-toggle");
});
