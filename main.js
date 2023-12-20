var carousel=document.getElementById("carousel");
currdeg=0;
document.getElementById("next").onclick= function rotate(e){
    currdeg= currdegv- 60;
    carousel.style.transform = "rotateY("+currdeg+"deg)";
};
document.getElementById("prev").onclick = function rotate(e){
    currdeg = currdeg + 60;
    carousel.style.transform = "rotateY("+currdeg+"deg)";
};