let button = document.querySelector('[data-calculate]');
let dataClear = document.querySelector('[data-clear]');
let randomColr;

dataClear.addEventListener('click', clear);
function clear(){
    location.reload();
}

button.addEventListener('click', ageCalculator);
function ageCalculator(){
    let Dob = document.querySelector('[data-birth]').value;

    if(Dob == '' || Dob == null){
        return false;
    }

    let currentDate = new Date();
    let dateInputText = document.querySelector('[data-inputText]').value;
    let messageShow = document.querySelector('[messageShow]');
    let dataBox = document.querySelector('[data-boxes]');

    let DOBValues = new Date(Dob);
    let todayDate = currentDate.getDate();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    let millisecondsDOBfrom1970 = Date.parse(DOBValues);
    let millisecondsNowfrom1970 = Date.now();

    let milliseconds = millisecondsNowfrom1970 - millisecondsDOBfrom1970;
    let DOBday = DOBValues.getDate();
    let DOBmonth = DOBValues.getMonth() + 1;
    let DOBYear = DOBValues.getFullYear();

    let  Day, Month, Year  =0;
    Demo=0;
    

    let Seconds = 10000;
    let Minutes = Seconds * 60;
    let Hours = Minutes * 60;
    let Days = Hours * 24;
    let Week = Days * 7;
    let Months = Days * 30;
    let Years = Months * 365;

    if(todayDate < DOBday){
        if(currentMonth == 1 || currentDate == 3 ||
            currentDate == 5 || currentDate == 7 ||
            currentDate == 8 || currentDate == 10 ||
            currentDate == 12){


                Demo = 31;
                Day = todayDate + 31;
            }
            else if(currentMonth == 4 || currentDate == 6 ||currentMonth == 11 )
            {
                Demo = 30;
                Day = todayDate + 30;

                }
            else if(currentMonth == 2 && leapYear(currentYear))
            {
                Demo = 29;
                Day = todayDate + 29;
            }
            else{
                Day = todayDate - DOBday;
            } 
    }

    //month 
    if(currentMonth < DOBmonth){
        currentMonth = currentMonth + 12;
        Month = currentMonth - DOBmonth;
        currentYear = currentYear - 1;
    }
    else{
        Month = currentMonth - DOBmonth;
    }

    //year
    Year = currentYear - DOBYear;
    
    function leapYear(currentYear){
        if(currentYear % 400 == 0){
            return true;
        }
        if(currentYear % 100 == 0){
            return false;
        }
        if(currentYear % 4 == 0){
            return true;
        }
        return false;
    }

    let totalMonths = Math.round(milliseconds / Months);
    let totalWeeks = Math.round(milliseconds / Week);
    let totalDays = Math.round(milliseconds / Days);
    let totalHours = Math.round(milliseconds / Hours);
    let totalMinutes = Math.round(milliseconds / Minutes);
    let totalSeconds = Math.round(milliseconds / Seconds);

    if(dateInputText == ''){
        messageShow.innerHTML ="<h3> Hi Dear! </h3>"
    }
    else{
        messageShow.innerHTML ="<h3> Hi Dear!" + "<small>"  + dateInputText +"</small></h3>";
    }
 
    let monthDiv = document.querySelectorAll('.months');
    for(i = 0; i<monthDiv.length; i++){
        monthDiv[0].innerHTML = Year + '<i class="months">' + "Years" + "</i>";
        monthDiv[1].innerHTML = Month + '<i class="months">' + "Months" + "</i>";
        monthDiv[2].innerHTML = Day + '<i class="months">' + "Days" + "</i>";
        monthDiv[3].innerHTML = totalDays + '<i class="months">' + "Days since you birth" + "</i>";
        monthDiv[4].innerHTML = totalHours + '<i class="months">' + "Hours since you birth" + "</i>";
        monthDiv[5].innerHTML = totalMinutes + '<i class="months">' + "Minutes since you birth" + "</i>";
        monthDiv[6].innerHTML = totalSeconds + '<i class="months">' + "Seconds since you birth" + "</i>";
    }

    let textColor = document.querySelectorAll('.textColor');
    textColor.forEach((element) =>{
        element.style.color = randomColor();
    });
}

function randomColor(){
    randomColr = "hsla(" + (360 * Math.random()) + "," + "100%," + "25%, 1)";
    return randomColr;
}

setInterval(ageCalculator, 1000);

