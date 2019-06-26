// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
    var navbar = document.getElementById("menubar");
    setSticky(navbar);
};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function setSticky(navbar) {
    // Get the navbar

    if (window.pageYOffset >= 146) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
    console.log("called");
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

var tabcontent = document.getElementsByClassName("tablink");

$(document).on('scroll', function() {
    if($(this).scrollTop()<$('#about-me').position().top){
        tabcontent[0].style.backgroundColor = "#333C42";
        tabcontent[1].style.backgroundColor = "#333C42";
        tabcontent[2].style.backgroundColor = "#333C42";
        tabcontent[3].style.backgroundColor = "#333C42";
    }
})

$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#about-me').position().top){
        tabcontent[0].style.backgroundColor = "black";
        tabcontent[1].style.backgroundColor = "#333C42";
        tabcontent[2].style.backgroundColor = "#333C42";
        tabcontent[3].style.backgroundColor = "#333C42";
    }
})

$(document).on('scroll', function() {
    if ($(this).scrollTop()>=$('#resume').position().top){
        tabcontent[0].style.backgroundColor = "#333C42";
        tabcontent[1].style.backgroundColor = "black";
        tabcontent[2].style.backgroundColor = "#333C42";
        tabcontent[3].style.backgroundColor = "#333C42";
    }
})

$(document).on('scroll', function() {
    if ($(this).scrollTop()>=$('#cd-timeline').position().top){
        tabcontent[0].style.backgroundColor = "#333C42";
        tabcontent[1].style.backgroundColor = "#333C42";
        tabcontent[2].style.backgroundColor = "black";
        tabcontent[3].style.backgroundColor = "#333C42";
    }
})

$(document).on('scroll', function() {
    if ($(this).scrollTop()>=$('#projects').position().top){
        tabcontent[0].style.backgroundColor = "#333C42";
        tabcontent[1].style.backgroundColor = "#333C42";
        tabcontent[2].style.backgroundColor = "#333C42";
        tabcontent[3].style.backgroundColor = "black";
    }
})
