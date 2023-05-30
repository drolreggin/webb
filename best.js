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

function showCalender(){

    if(clicked == false){
        clicked = true;
        document.getElementById("kalender").style.display = "block";
    }
    
    else if(clicked == true){
        clicked = false;
        document.getElementById("kalender").style.display = "none";
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

/*-----------------------kalender-----------------------*/

var In = {}
In.Month = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
In.daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var d = new Date();
var day = d.getDay();
day = day === 0 ? 6 : day - 1;

var month = d.getMonth();
var year = d.getFullYear();

var todays = d.getDate();
var addedMonth = month;

function prevMonth(){
    if (month == 0) {
        month = 11;
        year--;
        addedMonth--;
    } else {
        month--;
    }
    start()
}



function nextMonth(){
    if (month == 11) {
        month = 0;
        year++;
        addedMonth++;
    } else {
        month++;
    }
    start()
}

function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function start() {

  if(leapYear(year) == true){
    In.daysInMonth[1] = 29;
  }
  else{
    In.daysInMonth[1] = 28;
  }

  var firstDayOfMonth = new Date(year, month, 1);
  var startingDayOfWeek = firstDayOfMonth.getDay();

  var firstDayIndex = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1;

  var prevMonth = month === 0 ? 11 : month - 1;
  var prevMonthDays = In.daysInMonth[prevMonth];

  var date = prevMonthDays - firstDayIndex + 1;
  for (var i = 0; i < firstDayIndex; i++) {
    var element = document.getElementById("ruta" + (i + 1));
    element.innerHTML = date;
    element.style.color = "white";
    element.style.background = "red";
    date++;
  }

  date = 1;
  for (var i = firstDayIndex; i < 42 && date <= In.daysInMonth[month]; i++) {
    var element = document.getElementById("ruta" + (i + 1));
    element.innerHTML = date;
    element.style.color = "red";
    element.style.background = "rgba(255, 255, 255, 1)";
    date++;
  }

  date = 1;
  for (var i = firstDayIndex + In.daysInMonth[month]; i < 42; i++) {
    var element = document.getElementById("ruta" + (i + 1));
    element.innerHTML = date;
    element.style.color = "white";
    element.style.background = "red";
    date++;
  }

  document.getElementById("currentMonth").innerHTML = In.Month[month];
  document.getElementById("currentYear").innerHTML = year;

  if(month == addedMonth){
    var element = document.getElementById("ruta" + todays);
    element.style.background = "red";
    element.style.color = "white";
    element.style.fontSize = "20px";
    element.innerHTML = "Idag";
  }
  else{
    var element = document.getElementById("ruta" + todays);
    element.style.color = "red";
    element.style.background = "rgba(255, 255, 255, 1)";
    element.style.fontSize = "16px";
  }   
}
