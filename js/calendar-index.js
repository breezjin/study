console.log("hello, vanilla.");

// https://vanilla-coding-calendar.netlify.app/
// 일,월,화,수,목,금,토 요일 라벨링 표기 > done
// 현재 월의 마지막 날짜까지 달력에 표기하기
// 우측 화살표를 클릭 했을때, 다음 달의 요일 및 날짜 표기
// 좌측 화살표를 클릭 했을때, 이전 달의 요일 및 날짜 표기
// 특정 날짜를 클릭 했을때, 상단의 요일 및 날짜 반영하기

const newDate = new Date(); //Tue Jun 22 2021 10:03:03 GMT+0900 (대한민국 표준시)
const now = Date.now(); //Get the time. ECMAScript 5.
console.log(newDate);
console.log(now);

const dayArea = document.querySelector("#day-of-week");
const dateArea = document.querySelector("#date");
const monthArea = document.querySelector("#month");
const yearArea = document.querySelector("#year");
const dateNumber = document.querySelector("td");

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let dayNumbers = [];

let year = newDate.getFullYear(); //Get the year as a four digit number (yyyy)
let month = newDate.getMonth() + 1; //Get the month as a number (0-11)
let date = newDate.getDate(); //Get the day as a number (1-31)
let day = newDate.getDay(); //Get the weekday as a number (0-6)

// 오늘의 현재 날짜 표기
dateArea.innerHTML = date + "일&nbsp;";
// 오늘의 현재 요일 표기
dayArea.innerHTML = "(" + days[day] + ")";
// 오늘의 현재 월 표기
monthArea.innerHTML = months[month] + "&nbsp;&nbsp;";
// 오늘의 현재 연도 표기
yearArea.innerHTML = year;

getFirstDay();

// 현재 월의 1일이 무슨 요일인지 판별하고, 해당 요일 라벨링에 1일 표기하기
function getFirstDay() {
    let firstDay = new Date(year, month, 1).getDay();
    if (days[firstDay] === dateNumber.className) {
        dateNumber.innerHTML = 1;
        console.log(`첫째날 입력완료`);
    }
}

//이번달 날짜를 json으로 변환해서 array로 push하기
for (let i = 1; i <= 31; i++) {
    let makeDays = Date(year, month, i);
    dayNumbers.push(makeDays.toJSON());
}