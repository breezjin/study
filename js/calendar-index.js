console.log("hello, vanilla.");

// https://vanilla-coding-calendar.netlify.app/
// 일,월,화,수,목,금,토 요일 라벨링 표기
// 현재 월의 1일이 무슨 요일인지 판별하고, 해당 요일 라벨링에 1일 표기하기
// 현재 월의 마지막 날짜까지 달력에 표기하기
// 우측 화살표를 클릭 했을때, 다음 달의 요일 및 날짜 표기
// 좌측 화살표를 클릭 했을때, 이전 달의 요일 및 날짜 표기
// 특정 날짜를 클릭 했을때, 상단의 요일 및 날짜 반영하기

const dayWeek = document.querySelector("#day-of-week");
const date = document.querySelector("#date");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const now = new Date();

console.log(now);

// 오늘의 현재 날짜 표기
date.innerHTML = now.getDate() + "일&nbsp;";
// 오늘의 현재 요일 표기
dayWeek.innerHTML = "(" + days[now.getDay()] + ")";
// 오늘의 현재 월 표기
month.innerHTML = months[now.getMonth()] + "&nbsp;&nbsp;";
// 오늘의 현재 연도 표기
year.innerHTML = now.getFullYear();