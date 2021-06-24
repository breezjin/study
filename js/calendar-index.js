console.log("hello, vanilla.");

// 참고 https://vanilla-coding-calendar.netlify.app/
//Tue Jun 22 2021 10:03:03 GMT+0900 (대한민국 표준시)

const dayArea = document.querySelector("#day-of-week");
const dateArea = document.querySelector("#date");
const monthArea = document.querySelector("#month");
const yearArea = document.querySelector("#year");
const dateNumberArea = document.querySelector(".cell");
const btnLeft = document.querySelector("btn-left");
const btnRight = document.querySelector("btn-right");

// 일,월,화,수,목,금,토 요일 라벨링 표기 > done
const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let now = new Date();
console.log(now); //검증용

function paintNow() {
    dateArea.innerHTML = now.getDate() + "일&nbsp;"; //오늘의 현재 날짜 표기
    dayArea.innerHTML = "(" + days[now.getDay()] + ")"; //오늘의 현재 요일 표기
    monthArea.innerHTML = months[now.getMonth()] + "&nbsp;&nbsp;"; //오늘의 현재 월 표기
    yearArea.innerHTML = now.getFullYear(); //오늘의 현재 연도 표기
}

paintNow();


let dates = [];
class dateObj {
    constructor (year, month, date, day) {
        this.year = year;
        this.month = month;
        this.date = date;
        this.day = day;
    }
}

let makeDatesOfThisMonth = function (dateMade) {
    for (let i = 1; i <= new Date().getDate; i++) {
        new dateObj(
            new Date().getFullYear(), //Get the year as a four digit number (yyyy)
            new Date().getMonth(), //Get the month as a number (0-11)
            new Date().getDate(), //Get the day as a number (1-31)
            new Date().getDay(), //Get the weekday as a number (0-6)
            );
        dates.push = dateMade;
    }
}




// 현재 월의 1일이 무슨 요일인지 판별하고,
function getFirstDate () {
    let firstDate = dates[0];
    let firstDateDay = firstDate.getDay();
    return firstDateDay;
}

// 해당 요일 라벨링에 1일 표기하기
function writeFirstDate () {

}

// 현재 월의 마지막 날짜까지 달력에 표기하기
// 특정 날짜를 클릭 했을때, 상단의 요일 및 날짜 반영하기

function moveToNextMonth () {
    console.log('다음달로 이동 후 1일 표기'); // 우측 화살표를 클릭 했을때, 다음 달의 요일 및 날짜 표기
}

function moveToLastMonth () {
    console.log('이전달로 이동 후 1일 표기'); // 좌측 화살표를 클릭 했을때, 이전 달의 요일 및 날짜 표기
}

btnRight.addEventListener('click', moveToNextMonth);
btnLeft.addEventListener('click', moveToLastMonth);