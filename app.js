// Detect Darkmode
var root = document.querySelector(':root');
var rootColors = getComputedStyle(root);
// Set Dark mode
setInterval(() => {
    let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) {
        isDark(); 
    }else{
        isLight();
    }
}, 500);

// Set Dark Mode
function isDark() {
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
    root.style.setProperty("--back", "#eee");
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
    if (tg_btn.classList.contains('ani-tg-btn')==false) {
        tg_btn.classList.add('ani-tg-btn-off');
        
    }else{
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
    }else{
        msg.classList.add('hide');
        contact.classList.remove('hide');
    }
}



// toggle Info {On/Off}

function tg_info() {
    var info = document.getElementById('info');
    var chatBox = document.getElementById('chat-box');

    // On Mobile only
    if (onDevice=='mobile') {
        info.classList.toggle('hide');

        if (info.classList.contains("hide")) {
            chatBox.style.display = "block";
            chatBox.classList.add('open');
            chatBox.addEventListener('animationend', ()=>{
                chatBox.classList.remove('next-div');
            })
        }else{
            chatBox.style.display = "none";
            info.classList.add('open');
            info.addEventListener('animationend', ()=>{
                info.classList.remove('open');
            })
        }
    }else{
        info.classList.toggle('hide');
    }
}

// Back to side-bar

function backSide() {
    var sideSec = document.getElementById("side");
    var chat = document.getElementById("chat");

    // On Mobile only
    if (onDevice=='mobile') {
        sideSec.style.display = "block";
        chat.style.display = "none";

        sideSec.classList.add('open');
        sideSec.addEventListener('animationend', ()=>{
            sideSec.classList.remove('open');
        })
    }
}

// Close Alert 
var bt1 = document.getElementById('bt-good');
var bt2 = document.getElementById('bt-bad');
function close(params) {
    var div = document.getElementById(params);
    div.style.display = "none";
}


// Animate on reply click
// Yet to achieve


// Goto chat section

function open_message() {
    // On Mobile only
    var inp = document.getElementById('txt-msg');
    inp.focus();
    if (onDevice=='mobile') {
        var sideSec = document.getElementById("side");
        var chat = document.getElementById("chat");

        sideSec.style.display = "none";
        chat.style.display = "grid";

        chat.classList.add('open');
        chat.addEventListener('animationend', ()=>{
            chat.classList.remove('open');
        })
    }
}



// Hide Pop
function hidePop() {
    if (onDevice=="mobile") {
        var div_Ani = document.getElementById('pop-sm');
        var div_Bac = document.getElementById('pop2');
        div_Ani.classList.add('pop-D');
        setTimeout(() => {
            div_Ani.classList.remove('pop-D');
            div_Bac.classList.replace('mb','hide');
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
            div_Bac.classList.replace('mb','hide');
        }, 550);
    }
}

// Show Pop
function showPop() {
    if (onDevice=='mobile') {
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
    if (onDevice=='mobile') {
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
    if (onDevice=='mobile') {
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
    if (ele.classList.contains('fa-user-plus')==true) {
        ele.classList.add("follow");
        ele.style.color = "var(--green)";
        ele.addEventListener('animationend', ()=>{
            ele.classList.replace('fa-user-plus', 'fa-user-check');
            ele.classList.remove("follow");
        })
    }else if (ele.classList.contains('fa-user-check')==true) {
        ele.classList.add("follow");
        ele.style.color = "var(--gray)";
        ele.addEventListener('animationend', ()=>{
            ele.classList.replace("fa-user-check", "fa-user-plus");
            ele.classList.remove("follow");
        })                
    }
}

// Button Click Animation
function aniBtn(ele) {
    ele.classList.add("follow");
    ele.addEventListener('animationend', ()=>{
        ele.classList.remove("follow");
    })
}

// Switch Top Tags
function moveTab(ele){
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
    
    if (ele==1) {
        if (onDevice=='mobile') {
            if (arrow.classList.contains('c-post-mob')) {
                arrow.classList.replace('c-post-mob', 'c-live-mob');
                bubInput.placeholder = "What's on your mind";
                bubIco.classList.replace("fa-clock","fa-images");
            }else{
                arrow.classList.add('c-live-mob');
                bubInput.placeholder = "What's on your mind";
                bubIco.classList.replace("fa-clock","fa-images");
            }
        }else{
            if (arrow.classList.contains('c-post')) {
                arrow.classList.replace('c-post', 'c-live');
                bubInput.placeholder = "What's on your mind";
                bubIco.classList.replace("fa-clock","fa-images");
            }else{
                arrow.classList.add('c-live');
                bubInput.placeholder = "What's on your mind";
                bubIco.classList.replace("fa-clock","fa-images");
            }
        }
    }
    if (ele==2) {
        if (onDevice=='mobile') {
            if (arrow.classList.contains('c-live-mob')) {
                arrow.classList.replace('c-live-mob', 'c-post-mob');
                bubInput.placeholder = "Drop a bubble";
                bubIco.classList.replace("fa-images","fa-clock");
            }else{
                arrow.classList.add('c-post-mob');
                bubInput.placeholder = "Drop a bubble";
                bubIco.classList.replace("fa-images","fa-clock");
            }
        }else{
            if (arrow.classList.contains('c-live')) {
                arrow.classList.replace('c-live', 'c-post');
                bubInput.placeholder = "Drop a bubble";
                bubIco.classList.replace("fa-images","fa-clock");
            }else{
                arrow.classList.add('c-post');
                bubInput.placeholder = "Drop a bubble";
                bubIco.classList.replace("fa-images","fa-clock");
            }
        }
    }
}
function followed(x) {
    var btn = x;
    if (btn.classList.contains('no-follow')) {
        btn.classList.replace("no-follow","isfollow");
        btn.innerHTML = "following";
    }else if(btn.classList.contains('isfollow')) {
        btn.classList.replace("isfollow","no-follow");
        btn.innerHTML = "follow";
    }else{
        if (btn.innerHTML == 'follow') {
            btn.innerHTML = 'following';
            btn.style.color = "var(--black)";
        }else{
            btn.style.color = "var(--blue)";
            btn.innerHTML = 'follow';
        }
    }
}

getParameters = (key) =>{
    address = window.location.search;
    parameterList = new URLSearchParams(address);
    return parameterList.get(key);
}

// if (getParameters('show')=='search') {
//    var trend = document.getElementById('sec-tre');
//    var poster = document.getElementById('sec-post');
//    var finder = document.getElementById('sec-find');

//    alert(poster);

//    trend.style.display = "none";
//    poster.style.display = "none";
// }

