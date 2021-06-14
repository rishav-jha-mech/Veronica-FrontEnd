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
