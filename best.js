let clicked = false;

function menuAnimation(){

    if(clicked == false){
        clicked = true;
        document.getElementById("bar-1").style.transform = "rotate(45deg)";
        document.getElementById("bar-1").style.top = "40%";
    
        document.getElementById("bar-2").style.transform = "rotate(45deg)";
        document.getElementById("bar-2").style.opacity = "0";
    
        document.getElementById("bar-3").style.transform = "rotate(-45deg)";
        document.getElementById("bar-3").style.top = "40%";

        document.getElementById("sidebar").style.transform = "translateX(0)"
      
    }
    
    else if(clicked == true){
        clicked = false;
        document.getElementById("bar-1").style.transform = "rotate(0)";
        document.getElementById("bar-1").style.top = "0%";
    
        document.getElementById("bar-2").style.transform = "rotate(0)";
        document.getElementById("bar-2").style.opacity = "1";
    
        document.getElementById("bar-3").style.transform = "rotate(0)";
        document.getElementById("bar-3").style.top = "80%";

        document.getElementById("sidebar").style.transform = "translateX(-110%)"
    }
}


let myVar;
let slideIndex = 1;
const total_slides = 6;

function setSlide(){
    if (slideIndex > total_slides) {
        slideIndex = 1;
    }
    else if (slideIndex < 1) {
        slideIndex = total_slides
    }
    console.log(slideIndex)
    document.getElementById('photo').style.backgroundImage = "url(jula" + slideIndex + ".jpg";
}

function autoSlide(){
    slideIndex++;
    setSlide();
}

function startSlide(){
    myVar = setInterval(autoSlide, 3000);
}

function changeSlide(n){
    n ? slideIndex++ : slideIndex--;

    clearTimeout(myVar);
    myVar = setInterval(autoSlide, 3000);
    setSlide();
}