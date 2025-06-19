const hBurg=document.querySelector(".hamburg");
function hamburg() {
    const elm=document.getElementsByClassName("dropdown");
    elm[0].style.transform="translateY(0)";
    hBurg.style.display="none";
}
function cancel() {
    const elm=document.querySelector(".dropdown");
    elm.style.transform="translateY(-300px)";
    elm.style.transition= ".2s linear";
    hBurg.style.display="inline";
}

const text=["FULLSTACK DEVELOPER", "Problem solver", "Programer"];
let speed=100;
const textElm=document.querySelector("#typewriter-text");
let textIndex=0;
let char=0;

function typeWriter(){
    if(char < text[textIndex].length){
        textElm.innerHTML+=text[textIndex].charAt(char);
        char++;
        setTimeout(typeWriter, speed);
    }
    else
        setTimeout(eraseText, 500);
}
function eraseText(){
    if(textElm.innerHTML.length > 0){
        textElm.innerHTML =textElm.innerHTML.slice(0, -1);
        setTimeout(eraseText, 30);
    }
    else{
        textIndex=(textIndex+1)%text.length;
        char=0;
        setTimeout(typeWriter, 500);
    }
}
window.onload=typeWriter