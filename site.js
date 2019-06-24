function openHome(cityName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(cityName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}

function scroll(num) {
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        if (i != num) {
            tablinks[i].style.backgroundColor = "";
        } else {
            tablinks[i].style.backgroundColor = black;
        }
    }
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
    var navbar = document.getElementById("menubar");
    myFunction(navbar);
};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction(navbar) {
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
