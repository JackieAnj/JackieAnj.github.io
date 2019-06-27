// get the current time to update banner
function setBanner() {
    var date = new Date();
    var time = date.getHours();
    if (time < 12){
        document.getElementById("greeting").innerHTML = "Good Morning!";
    } else if (time < 18) {
        document.getElementById("greeting").innerHTML = "Good Afternoon!";
    } else {
        document.getElementById("greeting").innerHTML = "Good Evening!";
    }
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
    var navbar = document.getElementById("menubar");
    setSticky(navbar);
};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function setSticky(navbar) {
    // Get the navbar

    if (window.pageYOffset >= 400) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
// Open contacts
function openNav() {
    document.getElementById("myNav").style.height = "100%";
    console.log("called");
}

// Close contacts
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

var tabcontent = document.getElementsByClassName("tablink");

$(document).on('scroll', function() {
    if($(this).scrollTop()<$('#about-me').position().top){
        tabcontent[0].style.backgroundColor = "";
        tabcontent[1].style.backgroundColor = "";
        tabcontent[2].style.backgroundColor = "";
        tabcontent[3].style.backgroundColor = "";
    }
})

$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#about-me').position().top){
        tabcontent[0].style.backgroundColor = "black";
        tabcontent[1].style.backgroundColor = "";
        tabcontent[2].style.backgroundColor = "";
        tabcontent[3].style.backgroundColor = "";
    }
})

$(document).on('scroll', function() {
    if ($(this).scrollTop()>=$('#resume').position().top){
        tabcontent[0].style.backgroundColor = "";
        tabcontent[1].style.backgroundColor = "black";
        tabcontent[2].style.backgroundColor = "";
        tabcontent[3].style.backgroundColor = "";
    }
})

$(document).on('scroll', function() {
    if ($(this).scrollTop()>=$('#cd-timeline').position().top){
        tabcontent[0].style.backgroundColor = "";
        tabcontent[1].style.backgroundColor = "";
        tabcontent[2].style.backgroundColor = "black";
        tabcontent[3].style.backgroundColor = "";
    }
})

$(document).on('scroll', function() {
    if ($(this).scrollTop()>=$('#projects').position().top){
        tabcontent[0].style.backgroundColor = "";
        tabcontent[1].style.backgroundColor = "";
        tabcontent[2].style.backgroundColor = "";
        tabcontent[3].style.backgroundColor = "black";
    }
})
