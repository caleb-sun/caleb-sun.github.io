var myScroll = function (){
    var y = window.scrollY;
    if (y>=110) {
        arrow.style.display="none";
        // window.location.hash = "#mininav";
    }
    if (y<=109){
        arrow.style.display="block";
    }
};

window.addEventListener("scroll", myScroll);


