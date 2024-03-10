
wnwn = document.getElementById("wnwn");
title = document.getElementById("wnwn-title");
context = document.getElementById("wnwn-context-marker");
concept = document.getElementById("wnwn-concept-marker");
visual = document.getElementById("wnwn-visual-marker");
demo = document.getElementById("wnwn-demo-marker");
reflection = document.getElementById("wnwn-reflection-marker");


var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 2200) {
        wnwn.style.display = "flex";
    } else {
        wnwn.style.display = "none";
    }
    if (y<=2620) {
        context.style.textDecoration="none";
    }
    if (y>=2621) {
        context.style.textDecoration = "underline";
        context.style.textDecorationStyle = "dotted";
        concept.style.textDecoration = "none";
    }
    if (y>=3800){
        context.style.textDecoration = "none";
        concept.style.textDecoration = "underline";
        concept.style.textDecorationStyle = "dotted";
        visual.style.textDecoration = "none";
    }
    if (y>=5160){
        concept.style.textDecoration = "none";
        visual.style.textDecoration = "underline";
        visual.style.textDecorationStyle = "dotted";
        demo.style.textDecoration="none";
    }
    if (y>=7180){
        visual.style.textDecoration = "none";
        demo.style.textDecoration = "underline";
        demo.style.textDecorationStyle = "dotted";
        reflection.style.textDecoration="none";
    }
    if (y>=10000){
        demo.style.textDecoration = "none";
        reflection.style.textDecoration = "underline";
        reflection.style.textDecorationStyle = "dotted";
    }
};

window.addEventListener("scroll", myScrollFunc);
