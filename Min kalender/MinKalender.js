
var In = {}
In.Month = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
In.daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var d = new Date();
var day = d.getDay();
day = day === 0 ? 6 : day - 1;

var month = d.getMonth();
var year = d.getFullYear();

function prevMonth(){
    if (month == 0) {
        month = 11;
        year--;
    } else {
        month--;
    }
    start()
}



function nextMonth(){
    if (month == 11) {
        month = 0;
        year++;
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
    element.style.color = "rgba(20, 20, 20, 1)";
    element.style.background = "rgba(200, 200, 200, 1)";
    date++;
  }

  date = 1;
  for (var i = firstDayIndex; i < 42 && date <= In.daysInMonth[month]; i++) {
    var element = document.getElementById("ruta" + (i + 1));
    element.innerHTML = date;
    element.style.color = "(20, 20, 20, 1)";
    element.style.background = "rgba(255, 255, 255, 1)";
    date++;
  }

  date = 1;
  for (var i = firstDayIndex + In.daysInMonth[month]; i < 42; i++) {
    var element = document.getElementById("ruta" + (i + 1));
    element.innerHTML = date;
    element.style.color = "rgba(20, 20, 20, 1)";
    element.style.background = "rgba(200, 200, 200, 1)";
    date++;
  }

  document.getElementById("currentMonth").innerHTML = In.Month[month];
  document.getElementById("currentYear").innerHTML = year;
}
