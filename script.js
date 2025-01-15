function hamburg() {
    const elm=document.getElementsByClassName("dropdown");
    elm[0].style.transform="translateY(0)";
}
function cancel() {
    const elm=document.querySelector(".dropdown");
    // console.log(elm.style);
    elm.style.transform="translateY(-300px)";
    elm.style.transition= ".2s linear";
}

const text=["FULLSTACK", "DEVELOPER"];
let speed=100;
const textElm=document.querySelector("#typewriter-text");
let textIndex=0;
let char=0;
// console.log(textElm);
function typeWriter(){
    if(char < text[textIndex].length){
        textElm.innerHTML+=text[textIndex].charAt(char);
        char++;
        setTimeout(typeWriter, speed);
    }
    else
        setTimeout(eraseText, 1000);
}
function eraseText(){
    if(textElm.innerHTML.length > 0){
        textElm.innerHTML =textElm.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }
    else{
        textIndex=(textIndex+1)%text.length;
        char=0;
        setTimeout(typeWriter, 500);
    }
}
window.onload=typeWriter