$(document).ready(function()
{
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
    {
        document.getElementById("banner").style.backgroundAttachment = "unset";
    }
});

// get the current time to update banner
function setTime() {
    var date = new Date();
    var time = date.getHours();
    if (time < 12){
        document.getElementById("timeframe").innerHTML = "Good morning!";
    } else if (time < 18) {
        document.getElementById("timeframe").innerHTML = "Good afternoon!";
    } else {
        document.getElementById("timeframe").innerHTML = "Good evening!";
    }
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
    var navbar = document.getElementById("menubar");
    setSticky(navbar);

    shrinkBanner();

    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
};

function shrinkBanner() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("greeting").style.fontSize = "4em";
        document.getElementById("greeting").style.width = "85%";
        //document.getElementById("greeting-message").style.fontSize = "1.3em";
    } else {
        document.getElementById("greeting").style.fontSize = "5em";
        document.getElementById("greeting").style.width = "95%";
        //document.getElementById("greeting-message").style.fontSize = "1.5em";
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

var tabcontent = document.getElementsByClassName("tablink");

$(document).on('scroll', function() {
    if($(this).scrollTop()<$('#about-me').position().top - 50){
        tabcontent[0].style.backgroundImage = "";
        tabcontent[1].style.backgroundImage = "";
        tabcontent[2].style.backgroundImage = "";
        tabcontent[3].style.backgroundImage = "";
    }

    if($(this).scrollTop()>=$('#about-me').position().top - 100){
        tabcontent[0].style.backgroundImage = "linear-gradient(lightpink, #ffcccc)";
        tabcontent[1].style.backgroundImage = "";
        tabcontent[2].style.backgroundImage = "";
        tabcontent[3].style.backgroundImage = "";
    }

    if ($(this).scrollTop()>=$('#resume').position().top - 100){
        tabcontent[0].style.backgroundImage = "";
        tabcontent[1].style.backgroundImage = "linear-gradient(lightpink, #ffcccc)";
        tabcontent[2].style.backgroundImage = "";
        tabcontent[3].style.backgroundImage = "";
    }

    if ($(this).scrollTop()>=$('#cd-timeline').position().top - 100){
        tabcontent[0].style.backgroundImage = "";
        tabcontent[1].style.backgroundImage = "";
        tabcontent[2].style.backgroundImage = "linear-gradient(lightpink, #ffcccc)";
        tabcontent[3].style.backgroundImage = "";
    }

    if ($(this).scrollTop()>=$('#projects').position().top - 100){
        tabcontent[0].style.backgroundImage = "";
        tabcontent[1].style.backgroundImage = "";
        tabcontent[2].style.backgroundImage = "";
        tabcontent[3].style.backgroundImage = "linear-gradient(lightpink, #ffcccc)";
    }
})

// smooth scroll to the top
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10);
    }
  };