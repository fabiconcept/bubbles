// Detect Darkmode
var currmode = false;
var currState = 0;
var count = 0;
var con = 0;
var root = document.querySelector(':root');
var rootColors = getComputedStyle(root);
// Set Dark mode
setInterval(() => {
    let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (getCookie('currmode') == 'true') {
        if (getCookie('darkmode') == 'light') {
            isLight()
        } else {
            isDark()
        }
    } else if (getCookie('currmode') == false || typeof getCookie('currmode') == 'undefined') {
        if (dark) {
            isDark();
        } else {
            isLight();
        }
    }

}, 500);
// Set Dark Mode
function isDark() {
    setCookie("darkmode", "dark", 2);
    currState = 1;
    root.style.setProperty("--back", "#1c1922");
    root.style.setProperty("--back-chat", "#292a304d");
    root.style.setProperty("--overlay", "rgba(0, 0, 0, 0.075)");
    root.style.setProperty("--shadow-alt", " 0 -1px 10px 1px rgba(255, 253, 253, .1)");
    root.style.setProperty("--send", "#252525");
    root.style.setProperty("--white", "#292c3d");
    root.style.setProperty("--black", "#fff");
    root.style.setProperty("--light-gray", "#404046");
    root.style.setProperty("--tab-cover", "rgba(58, 56, 82, 0.336)");
}
// Set Light Mode
function isLight() {
    setCookie("darkmode", "light", 2);
    currState = 0;
    root.style.setProperty("--back", "#eee");
    root.style.setProperty("--back-chat", "#f3f0f0c0    ");
    root.style.setProperty("--overlay", "rgba(255, 255, 255, 0.075)");
    root.style.setProperty("--send", "rgb(223, 223, 223)");
    root.style.setProperty("--white", "#fff");
    root.style.setProperty("--black", "#000");
    root.style.setProperty("--light-gray", "#e2e2e2");
    root.style.setProperty("--tab-cover", "rgba(247, 244, 244, 0.436)");
}


// Toggle 'toggle-btn'

function tg_tbn(ele) {
    var tg_btn = document.getElementById(ele);
    tg_btn.classList.toggle('ani-tg-btn');
    if (tg_btn.classList.contains('ani-tg-btn') == false) {
        tg_btn.classList.add('ani-tg-btn-off');

    } else {
        tg_btn.classList.remove('ani-tg-btn-off');

    }
}

// toggle "Toggle"

function tg() {
    var tg_ms = document.getElementById('tg-ms');
    var tg_cn = document.getElementById('tg-cn');
    var contact = document.getElementById('contact');
    var msg = document.getElementById('msg');

    tg_ms.classList.toggle('active');
    tg_cn.classList.toggle('active');

    if (tg_ms.classList.contains('active')) {
        contact.classList.add('hide');
        msg.classList.remove('hide');
    } else {
        msg.classList.add('hide');
        contact.classList.remove('hide');
    }
}



// toggle Info {On/Off}

function tg_info() {
    var info = document.getElementById('info');
    var chatBox = document.getElementById('chat-box');

    // On Mobile only
    if (onDevice == 'mobile') {
        info.classList.toggle('hide');

        if (info.classList.contains("hide")) {
            chatBox.style.display = "block";
            chatBox.classList.add('open');
            chatBox.addEventListener('animationend', () => {
                chatBox.classList.remove('next-div');
            })
        } else {
            chatBox.style.display = "none";
            info.classList.add('open');
            info.addEventListener('animationend', () => {
                info.classList.remove('open');
            })
        }
    } else {
        info.classList.toggle('hide');
    }
}

// Back to side-bar

function backSide() {
    var sideSec = document.getElementById("side");
    var chat = document.getElementById("chat");

    // On Mobile only
    if (onDevice == 'mobile') {
        sideSec.style.display = "block";
        chat.style.display = "none";

        sideSec.classList.add('open');
        sideSec.addEventListener('animationend', () => {
            sideSec.classList.remove('open');
        })
    }
}


// Goto chat section

function open_message() {
    // On Mobile only
    var inp = document.getElementById('txt-msg');
    inp.focus();
    if (onDevice == 'mobile') {
        var sideSec = document.getElementById("side");
        var chat = document.getElementById("chat");

        sideSec.style.display = "none";
        chat.style.display = "grid";

        chat.classList.add('open');
        chat.addEventListener('animationend', () => {
            chat.classList.remove('open');
        })
    }
}



// Hide Pop
function hidePop() {
    if (onDevice == "mobile") {
        var div_Ani = document.getElementById('pop-sm');
        var div_Bac = document.getElementById('pop2');
        div_Ani.classList.add('pop-D');
        setTimeout(() => {
            div_Ani.classList.remove('pop-D');
            div_Bac.classList.replace('mb', 'hide');
        }, 550);
    }
}
function hidePop1() {
    if (onDevice == 'mobile') {
        var div_Ani = document.getElementById('pop-share');
        var div_Bac = document.getElementById('pop1');
        div_Ani.classList.add('pop-D');
        setTimeout(() => {
            div_Ani.classList.remove('pop-D');
            div_Bac.classList.replace('mb', 'hide');
        }, 550);
    }
}

// Show Pop
function showPop() {
    if (onDevice == 'mobile') {
        var div_Ani = document.getElementById('pop-sm');
        var div_Bac = document.getElementById('pop2');
        div_Ani.classList.add('pop-U');
        div_Bac.classList.replace('hide', 'mb');
        setTimeout(() => {
            div_Ani.classList.remove('pop-U');
        }, 550);
    }
}

function showPop1() {
    if (onDevice == 'mobile') {
        var div_Ani = document.getElementById('pop-share');
        var div_Bac = document.getElementById('pop1');
        div_Ani.classList.add('pop-U');
        div_Bac.classList.replace('hide', 'mb');
        setTimeout(() => {
            div_Ani.classList.remove('pop-U');
        }, 550);
    }
}


// Link Pages
function linkTo(params) {
    if (onDevice == 'mobile') {
        setTimeout(() => {
            location.href = params;
        }, 200);
    }
}

// Link Tablet Pages
function linkToTb(params) {
    if (params == 'search') {
        var div = document.getElementById('post-page');
        div.classList.remove('post-page-hm');
        div.classList.remove('post-page-tb');
        div.classList.add('post-page-tb-alt');
    }
    if (params == 'activity') {
        var div = document.getElementById('post-page');
        div.classList.remove('post-page-hm');
        div.classList.add('post-page-tb');
        div.classList.remove('post-page-tb-alt');
    }
    if (params == 'none') {
        var div = document.getElementById('post-page');
        div.classList.add('post-page-hm');
        div.classList.remove('post-page-tb');
        div.classList.remove('post-page-tb-alt');
        moveTab(1);
    }
}
// Follow animation
function follow(ele) {
    if (ele.classList.contains('fa-user-plus') == true) {
        ele.classList.add("follow");
        ele.style.color = "var(--green)";
        ele.addEventListener('animationend', () => {
            ele.classList.replace('fa-user-plus', 'fa-user-check');
            ele.classList.remove("follow");
        })
    } else if (ele.classList.contains('fa-user-check') == true) {
        ele.classList.add("follow");
        ele.style.color = "var(--gray)";
        ele.addEventListener('animationend', () => {
            ele.classList.replace("fa-user-check", "fa-user-plus");
            ele.classList.remove("follow");
        })
    }
}

// Button Click Animation
function aniBtn(ele) {
    ele.classList.add("follow");
    ele.addEventListener('animationend', () => {
        ele.classList.remove("follow");
    })
}

// Switch Top Tags
function moveTab(ele) {
    var tabPost = document.getElementById('t-post');
    var tabFollow = document.getElementById('t-follow');
    var tabChat = document.getElementById('t-chat');
    var tabUser = document.getElementById('t-user');

    switch (ele) {
        case 1:
            tabPost.classList.add('active');
            tabFollow.classList.remove('active');
            tabChat.classList.remove('active');
            tabUser.classList.remove('active');
            break;
        case 2:
            tabPost.classList.remove('active');
            tabFollow.classList.add('active');
            tabChat.classList.remove('active');
            tabUser.classList.remove('active');
            break;
        case 3:
            tabPost.classList.remove('active');
            tabFollow.classList.remove('active');
            tabChat.classList.add('active');
            tabUser.classList.remove('active');
            break;
        case 4:
            tabPost.classList.remove('active');
            tabFollow.classList.remove('active');
            tabChat.classList.remove('active');
            tabUser.classList.add('active');
            break;
        default:
            break;
    }
}
// Switch Live or Create post
function move(ele) {
    var arrow = document.getElementById('arr');
    var bubInput = document.getElementById('bub-txt');
    var bubIco = document.getElementById('bub-ico');

    if (ele == 1) {
        if (onDevice == 'mobile') {
            if (arrow.classList.contains('c-post-mob')) {
                arrow.classList.replace('c-post-mob', 'c-live-mob');
                bubInput.placeholder = "What's on your mind";
                bubIco.classList.replace("fa-clock", "fa-images");
            } else {
                arrow.classList.add('c-live-mob');
                bubInput.placeholder = "What's on your mind";
                bubIco.classList.replace("fa-clock", "fa-images");
            }
        } else {
            if (arrow.classList.contains('c-post')) {
                arrow.classList.replace('c-post', 'c-live');
                bubInput.placeholder = "What's on your mind";
                bubIco.classList.replace("fa-clock", "fa-images");
            } else {
                arrow.classList.add('c-live');
                bubInput.placeholder = "What's on your mind";
                bubIco.classList.replace("fa-clock", "fa-images");
            }
        }
    }
    if (ele == 2) {
        if (onDevice == 'mobile') {
            if (arrow.classList.contains('c-live-mob')) {
                arrow.classList.replace('c-live-mob', 'c-post-mob');
                bubInput.placeholder = "Drop a bubble";
                bubIco.classList.replace("fa-images", "fa-clock");
            } else {
                arrow.classList.add('c-post-mob');
                bubInput.placeholder = "Drop a bubble";
                bubIco.classList.replace("fa-images", "fa-clock");
            }
        } else {
            if (arrow.classList.contains('c-live')) {
                arrow.classList.replace('c-live', 'c-post');
                bubInput.placeholder = "Drop a bubble";
                bubIco.classList.replace("fa-images", "fa-clock");
            } else {
                arrow.classList.add('c-post');
                bubInput.placeholder = "Drop a bubble";
                bubIco.classList.replace("fa-images", "fa-clock");
            }
        }
    }
}
function followed(x) {
    var btn = x;
    if (btn.classList.contains('no-follow')) {
        btn.classList.replace("no-follow", "isfollow");
        btn.innerHTML = "following";
    } else if (btn.classList.contains('isfollow')) {
        btn.classList.replace("isfollow", "no-follow");
        btn.innerHTML = "follow";
    } else {
        if (btn.innerHTML == 'follow') {
            btn.innerHTML = 'following';
            btn.style.color = "var(--black)";
        } else {
            btn.style.color = "var(--blue)";
            btn.innerHTML = 'follow';
        }
    }
}

getParameters = (key) => {
    address = window.location.search;
    parameterList = new URLSearchParams(address);
    return parameterList.get(key);
}

function activate(ele) {
    if (ele.requestFullscreen) {
        ele.requestFullscreen();
    }
}

function deactivate(ele) {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

function fullScreen() {
    if (count == 0) {
        activate(document.documentElement);
    } else {
        deactivate()
        count = 0;
    }
    count++;
}

function toggle_menu(params) {
    var div = params.firstElementChild;
    if (con == 0) {
        div.style.display = "grid";
        con++;
    } else {
        div.style.display = "none";
        con = 0;
    }
}

function linkGen(params) {
    if (onDevice != "mobile") {
        setTimeout(() => {
            location.href = params;
        }, 200);
    }
}

function manual_Switch() {
    var ico = document.getElementById("sw-ico");
    if (currState == 0) {
        if (ico.classList.contains("fa-sun")) {
            ico.classList.replace("fa-sun", "fa-moon");
        } else {
            ico.classList.replace("fa-moon", "fa-sun");
        }
        isDark()
    } else {
        if (ico.classList.contains("fa-moon")) {
            ico.classList.replace("fa-moon", "fa-sun");
        } else {
            ico.classList.replace("fa-sun", "fa-moon");
        }
        isLight()
    }
    currmode = !currmode;
    setCookie("currmode", currmode, 2);
}
function togPost(params) {
    var div = document.getElementById('all-txt')
    var div2 = document.getElementById('pic-only')
    if (params == "all-txt") {
        div2.style.display = "none";
        div.style.display = "block";
    } else {
        div2.style.display = "block";
        div.style.display = "none";
    }
}

// When Post Image Clicked
function openImage() {
    var openImage = document.getElementById('openImage');
    openImage.classList.replace("hide", "slide");
    var firstImage = document.getElementById('firstImage');
}
function closeImage() {
    var openImage = document.getElementById('openImage');
    openImage.classList.replace("slide", "hide");
}

// Create Cookie o store Darkmode State
function setCookie(cname, cvalue, exdate) {
    const d = new Date();
    d.setTime(d.getTime() + exdate * 24 * 60 * 60 * 1000);
    let expired = "expires " + d.toString();
    document.cookie = cname + "=" + cvalue + ";" + exdate + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Image Color Detector (Fetch Color)
function averageColor(imageElement) {

    // Create the canvas element
    var canvas
        = document.createElement('canvas'),

        // Get the 2D context of the canvas
        context
            = canvas.getContext &&
            canvas.getContext('2d'),
        imgData, width, height,
        length,

        // Define variables for storing
        // the individual red, blue and
        // green colors
        rgb = { r: 0, g: 0, b: 0 },

        // Define variable for the
        // total number of colors
        count = 0;

    // Set the height and width equal
    // to that of the canvas and the image
    height = canvas.height =
        imageElement.naturalHeight ||
        imageElement.offsetHeight ||
        imageElement.height;
    width = canvas.width =
        imageElement.naturalWidth ||
        imageElement.offsetWidth ||
        imageElement.width;

    // Draw the image to the canvas
    context.drawImage(imageElement, 0, 0);

    // Get the data of the image
    imgData = context.getImageData(
        0, 0, width, height);

    // Get the length of image data object
    length = imgData.data.length;

    for (var i = 0; i < length; i += 4) {

        // Sum all values of red colour
        rgb.r += imgData.data[i];

        // Sum all values of green colour
        rgb.g += imgData.data[i + 1];

        // Sum all values of blue colour
        rgb.b += imgData.data[i + 2];

        // Increment the total number of
        // values of rgb colours
        count++;
    }

    // Find the average of red
    rgb.r
        = Math.floor(rgb.r / count);

    // Find the average of green
    rgb.g
        = Math.floor(rgb.g / count);

    // Find the average of blue
    rgb.b
        = Math.floor(rgb.b / count);

    return rgb;
}

 // Image Color Detector (Apply Color)
 function lightOrDark(color) {

    // Variables for red, green, blue values
    var r, g, b, hsp;

    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {

        // If RGB --> store the red, green, blue values in separate variables
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

        r = color[1];
        g = color[2];
        b = color[3];
    }
    else {

        // If hex --> Convert it to RGB: http://gist.github.com/983661
        color = +("0x" + color.slice(1).replace(
            color.length < 5 && /./g, '$&$&'));

        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;
    }

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {

        return 'light';
    }
    else {

        return 'dark';
    }
}


// Function to set the background
// color of the second div as
// calculated average color of image
function checkImageColor(ele){
    var rgb;
    rgb = averageColor(ele);
    // Select the element and set its
    var blockColor = 'rgb(' + rgb.r + ','+ rgb.g + ','+ rgb.b + ')';
    // background color
    return lightOrDark(blockColor);
}
function imgLight(params) {
    setTimeout(() => {
        checkImageColor(params);
    }, 100)
}

// Profile Grid Post Hover (mouseEnter)
function hoverPic(params) {
    var div = params.children[1];
    var div_i = params.firstElementChild;
    if (div.classList.contains('hover-pic')==false) {
        div.classList.add("hover-pic");
        div_i.classList.add("hover-pic-i");
    }
}
// Profile Grid Post Hover (mouseLeave)
function hoverPicLeave(params) {
    var divEnd = params.children[1];
    var div_i = params.firstElementChild;
    divEnd.classList.add("hover-pic-leave");
    setTimeout(() => {
        div_i.classList.remove("hover-pic-i");
        divEnd.classList.remove("hover-pic-leave");
        divEnd.classList.remove("hover-pic");
    }, 500);
}

function isOffline() {
    var alertDiv = document.getElementById('alert');
    if (alertDiv.classList.contains('hide')) {
        alertDiv.classList.replace('hide', 'alert');
    }else{
        if (alertDiv.classList.contains('alert')==false) {
            alertDiv.classList.add('alert');
        }
    }
}

setInterval(() => {
    if (navigator.onLine==false){
        isOffline();
    }
}, 5000);

// Close Alert 
var bt1 = document.getElementById('bt-good');
var bt2 = document.getElementById('bt-bad');
function close(params) {
    var div = document.getElementById(params);
    div.classList.replace("alert", "hide");
}
