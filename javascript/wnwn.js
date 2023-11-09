
wnwn = document.getElementById("wnwn");
title = document.getElementById("wnwn-title");
context = document.getElementById("wnwn-context-marker");
concept = document.getElementById("wnwn-concept-marker");
visual = document.getElementById("wnwn-visual-marker");
demo = document.getElementById("wnwn-demo-marker");
reflection = document.getElementById("wnwn-reflection-marker");


var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 300) {
        wnwn.style.display = "flex";
    } else {
        wnwn.style.display = "none";
    }
    if (y<=2420) {
        context.style.textDecoration="none";
    }
    if (y>=2421) {
        context.style.textDecoration = "underline";
        context.style.textDecorationStyle = "dotted";
        concept.style.textDecoration = "none";
    }
    if (y>=3400){
        context.style.textDecoration = "none";
        concept.style.textDecoration = "underline";
        concept.style.textDecorationStyle = "dotted";
        visual.style.textDecoration = "none";
    }
    if (y>=4760){
        concept.style.textDecoration = "none";
        visual.style.textDecoration = "underline";
        visual.style.textDecorationStyle = "dotted";
        demo.style.textDecoration="none";
    }
    if (y>=6780){
        visual.style.textDecoration = "none";
        demo.style.textDecoration = "underline";
        demo.style.textDecorationStyle = "dotted";
        reflection.style.textDecoration="none";
    }
    if (y>=9600){
        demo.style.textDecoration = "none";
        reflection.style.textDecoration = "underline";
        reflection.style.textDecorationStyle = "dotted";
    }
    if(y>=0){
        title.style.color="black";
        context.style.color="black";
        concept.style.color="black";
        visual.style.color="black";
        demo.style.color="black";
        reflection.style.color="black";
    }
    if(y>=7200){
        title.style.color="white";
        context.style.color="white";
        concept.style.color="white";
        visual.style.color="white";
        demo.style.color="white";
        reflection.style.color="white";
    }
    if(y>=9600){
        title.style.color="black";
        context.style.color="black";
        concept.style.color="black";
        visual.style.color="black";
        demo.style.color="black";
        reflection.style.color="black";
    }
};

window.addEventListener("scroll", myScrollFunc);
