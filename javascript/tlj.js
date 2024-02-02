
tlj = document.getElementById("tlj");
context = document.getElementById("tlj-context-marker");
problem = document.getElementById("tlj-problem-marker");
research = document.getElementById("tlj-research-marker");
contextual = document.getElementById("tlj-contextual-marker");
concept = document.getElementById("tlj-concept-marker");
visual = document.getElementById("tlj-visual-marker");
demo = document.getElementById("tlj-demo-marker");


var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 300) {
        tlj.style.display = "flex";
    } else {
        tlj.style.display = "none";
    }
    if (y<=3249) {
        context.style.textDecoration="none";
    }
    if (y>=3250) {
        context.style.textDecoration = "underline";
        context.style.textDecorationStyle = "dotted";
        problem.style.textDecoration = "none";
    }
    if (y>=4470){
        context.style.textDecoration = "none";
        problem.style.textDecoration = "underline";
        problem.style.textDecorationStyle = "dotted";
        research.style.textDecoration = "none";
    }
    if (y>=5470){
        problem.style.textDecoration = "none";
        research.style.textDecoration = "underline";
        research.style.textDecorationStyle = "dotted";
        contextual.style.textDecoration="none";
    }
    if (y>=7100){
        research.style.textDecoration = "none";
        contextual.style.textDecoration = "underline";
        contextual.style.textDecorationStyle = "dotted";
        concept.style.textDecoration="none";
    }
    if (y>=8880){
        contextual.style.textDecoration = "none";
        concept.style.textDecoration = "underline";
        concept.style.textDecorationStyle = "dotted";
        visual.style.textDecoration="none";
    }
    if (y>=12730){
        concept.style.textDecoration = "none";
        visual.style.textDecoration = "underline";
        visual.style.textDecorationStyle = "dotted";
        demo.style.textDecoration="none";
    }
    if (y>=13580){
        visual.style.textDecoration = "none";
        demo.style.textDecoration = "underline";
        demo.style.textDecorationStyle = "dotted";
    }
    if(y<14200){
        context.style.color= 'white';
        problem.style.color= 'white';
        research.style.color= 'white';
        contextual.style.color= 'white';
        concept.style.color= 'white';
        visual.style.color= 'white';
        demo.style.color= 'white';
    }
    if(y>=14200){
        context.style.color= 'black';
        problem.style.color= 'black';
        research.style.color= 'black';
        contextual.style.color= 'black';
        concept.style.color= 'black';
        visual.style.color= 'black';
        demo.style.color= 'black';
    }
    if(y>=16400){
        context.style.color= 'white';
        problem.style.color= 'white';
        research.style.color= 'white';
        contextual.style.color= 'white';
        concept.style.color= 'white';
        visual.style.color= 'white';
        demo.style.color= 'white';
    }
};

window.addEventListener("scroll", myScrollFunc);
