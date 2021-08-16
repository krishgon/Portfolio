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

document.addEventListener('DOMContentLoaded', (event) => {
    if(window.outerWidth <= 768){
        changeAboutHtml(true);
    }
});


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
        changeAboutHtml(false);
    }else{
        changeAboutHtml(true);
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

function changeAboutHtml(forMobile){
    var des = document.getElementsByClassName('myDescription')[0];
    if(forMobile){
        des.innerHTML = "\n    <div class=\"title\">Who am I?</div>\n    <div class=\"body\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto\n      beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n      aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque\n      porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non\n      numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>\n    <div class=\"button\"><input type=\"button\" value=\"Connect/Contact\" onclick=\"showSocials();\"></div>\n    <div class=\"myPic\">\n      <img src=\"assets/newProfilePic.jpeg\" alt=\"my photo\">\n    </div>\n  ";
    }else{
        des.innerHTML = "\n            <div class=\"myText\">\n                <div class=\"title\">Who am I?</div>\n                <div class=\"body\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto\n                    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n                    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque\n                    porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non\n                    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>\n                <div class=\"button\"><input type=\"button\" value=\"Connect/Contact\" onclick=\"showSocials();\"></div>\n            </div>\n            <div class=\"myPic\">\n                <img src=\"assets/newProfilePic.jpeg\" alt=\"my photo\">\n            </div>\n        ";
    }
}