// get the current time to update banner
function setBanner() {
    var date = new Date();
    var time = date.getHours();
    if (time < 12){
        document.getElementById("greeting-message").innerHTML = "Good morning! Welcome to my website, feel free to take a look around";
    } else if (time < 18) {
        document.getElementById("greeting-message").innerHTML = "Good afternoon! Welcome to my website, feel free to take a look around";
    } else {
        document.getElementById("greeting-message").innerHTML = "Good evening! Welcome to my website, feel free to take a look around";
    }
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
    var navbar = document.getElementById("menubar");
    setSticky(navbar);

    shrinkBanner();
};

function shrinkBanner() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("greeting").style.fontSize = "4em";
        document.getElementById("greeting").style.width = "85%";
        document.getElementById("greeting-message").style.fontSize = "1.3em";
    } else {
        document.getElementById("greeting").style.fontSize = "5em";
        document.getElementById("greeting").style.width = "95%";
        document.getElementById("greeting-message").style.fontSize = "1.5em";
    }
}
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function setSticky(navbar) {
    // Get the navbar

    if (window.pageYOffset >= $('#head').position().top + $('#head').outerHeight(true)) {
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
    if($(this).scrollTop()<$('#about-me').position().top - 50){
        tabcontent[0].style.backgroundColor = "";
        tabcontent[1].style.backgroundColor = "";
        tabcontent[2].style.backgroundColor = "";
        tabcontent[3].style.backgroundColor = "";
    }
})

$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#about-me').position().top - 100){
        tabcontent[0].style.backgroundColor = "#ffcccc";
        tabcontent[1].style.backgroundColor = "";
        tabcontent[2].style.backgroundColor = "";
        tabcontent[3].style.backgroundColor = "";
    }
})

$(document).on('scroll', function() {
    if ($(this).scrollTop()>=$('#resume').position().top - 100){
        tabcontent[0].style.backgroundColor = "";
        tabcontent[1].style.backgroundColor = "#ffcccc";
        tabcontent[2].style.backgroundColor = "";
        tabcontent[3].style.backgroundColor = "";
    }
})

$(document).on('scroll', function() {
    if ($(this).scrollTop()>=$('#cd-timeline').position().top - 100){
        tabcontent[0].style.backgroundColor = "";
        tabcontent[1].style.backgroundColor = "";
        tabcontent[2].style.backgroundColor = "#ffcccc";
        tabcontent[3].style.backgroundColor = "";
    }
})

$(document).on('scroll', function() {
    if ($(this).scrollTop()>=$('#projects').position().top - 100){
        tabcontent[0].style.backgroundColor = "";
        tabcontent[1].style.backgroundColor = "";
        tabcontent[2].style.backgroundColor = "";
        tabcontent[3].style.backgroundColor = "#ffcccc";
    }
})
