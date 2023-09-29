document.querySelectorAll("button")[0].addEventListener("click",wClick);
document.querySelectorAll("button")[0].addEventListener("onkeypress",wClick);
function wClick(){
    var waudio=new Audio('sounds/crash.mp3');
    waudio.play();
}
document.querySelectorAll("button")[1].addEventListener("click",aClick);
function aClick(){
    var aaudio=new Audio('sounds/kick-bass.mp3');
    aaudio.play();
}
document.querySelectorAll("button")[2].addEventListener("click",sClick);
function sClick(){
    var saudio = new Audio('sounds/snare.mp3')  ;
    saudio.play();
}
document.querySelectorAll("button")[3].addEventListener("click",dClick);
function dClick() {
    var daudio = new Audio('sounds/tom-1.mp3')   ;
    daudio.play();
}
document.querySelectorAll("button")[4].addEventListener("click",jClick);
function jClick (){
    var jaudio = new Audio ('sounds/tom-2.mp3' )    ;
    jaudio . play ();
}
document.querySelectorAll("button")[5].addEventListener("click",kClick);
function kClick () {
    var kaudio = new Audio ( 'sounds/tom-3.mp3' );
    kaudio.play( ); 
}
document.querySelectorAll("button")[6].addEventListener("click",lClick);
function lClick(){
    var laudio = new Audio ('sounds/tom-4.mp3');
    laudio.play();
}
