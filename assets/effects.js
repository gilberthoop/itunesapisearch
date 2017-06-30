// Header navigation bar collapse (hamburger)
$(document).on("click", ".navbar-collapse.in", function (e) {
    if ($(e.target).is("a")) {
        $(this).collapse("hide");
    }
});

/* Menu list set active on click */
$(".nav li").on("click", function() {
      $(".nav li").removeClass("active");
      $(this).addClass("active");
});

// Carousel effect
$(".carousel").carousel();

// Sidenav overlay effect
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}