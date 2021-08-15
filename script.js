// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
var prevScrollpos = window.pageYOffset;
var currentScrollpos;
window.onscroll = function() {
    console.log("you scrolled");
    currentScrollpos = window.pageYOffset;
    if(prevScrollpos > currentScrollpos){
        document.getElementById("navbar").style.top = "0";
    }else{
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollpos;
}


function showSocials(){
    open("#socials", "_self");
}

function showProfile(platform){
    if(platform == "discord"){
        window.open('https://discordapp.com/users/439766085764513792/');
    }
    else if(platform == "twitter"){
        window.open('https://twitter.com/REALkrishgon');
    }
    else if(platform == "youtube"){
        window.open('https://www.youtube.com/channel/UCIBzYzQ_dtTyEKIZEoI6qEw');
    }
    else if(platform == "reddit"){
        window.open('https://www.reddit.com/user/krishgon');
    }
}

function toggleScreenMode(){
    if(window.outerWidth > 768){
        document.getElementsByClassName("menu")[0].style.display = "flex";
    }
}


function toggleMenu(){
    var menu = document.getElementsByClassName("menu")[0];
    var toggleButton = document.getElementById("menuToggleButton");
    if(menu.style.display != "flex"){
        menu.style.display = "flex";
        toggleButton.src = "assets/menu_open_white_36dp.svg";
    }else{
        menu.style.display = "none";
        toggleButton.src = "assets/menu_white_36dp.svg";
    }
}