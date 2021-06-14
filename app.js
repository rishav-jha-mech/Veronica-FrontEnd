document.getElementById('cross').style.display= "none";
function show(){
    document.getElementById('nav_links').style.display= "flex";
    document.getElementById('bgone').style.display= "none";
    document.getElementById('ham').style.display= "none";
    document.getElementById('cross').style.display= "block";
}
function hide(){
    document.getElementById('nav_links').style.display= "none";
    document.getElementById('bgone').style.display= "unset";
    document.getElementById('ham').style.display= "block";
    document.getElementById('cross').style.display= "none";
}

function loadingpage() {
    myVar = setTimeout(showPage, 3000); /*ek vriable bnae aur uska timeout rakh diye 3000 matlab 3s ab 3s baad showpage function call hoga*/
}
function showPage(){
    document.getElementById("loader").style.display="none";
    document.getElementById("main").style.display="block";
}