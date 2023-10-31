csl = document.getElementById("csl");
overview = document.getElementById("overview-marker");
sprint = document.getElementById("sprint-marker");
doc = document.getElementById("doc-marker");
workflow = document.getElementById("workflow-marker");
proj = document.getElementById("proj-marker");


var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 300) {
        csl.style.display = "flex";
    } else {
        csl.style.display = "none";
    }
    if (y<=1500) {
        overview.style.textDecoration="none";
    }
    if (y>=1501) {
        overview.style.textDecoration = "underline";
        overview.style.textDecorationStyle = "dotted";
        sprint.style.textDecoration = "none";
    }
    if (y>=2000){
        overview.style.textDecoration = "none";
        sprint.style.textDecoration = "underline";
        sprint.style.textDecorationStyle = "dotted";
        doc.style.textDecoration = "none";
    }
    if (y>=4000){
        sprint.style.textDecoration = "none";
        doc.style.textDecoration = "underline";
        doc.style.textDecorationStyle = "dotted";
        workflow.style.textDecoration="none";
    }
    if (y>=7100){
        doc.style.textDecoration = "none";
        workflow.style.textDecoration = "underline";
        workflow.style.textDecorationStyle = "dotted";
        proj.style.textDecoration="none";
    }
    if (y>=8880){
        workflow.style.textDecoration = "none";
        proj.style.textDecoration = "underline";
        proj.style.textDecorationStyle = "dotted";
    }
};

window.addEventListener("scroll", myScrollFunc);
