console.log("hello, vanilla.");

// 참고 https://vanilla-coding-calendar.netlify.app/
//Tue Jun 22 2021 10:03:03 GMT+0900 (대한민국 표준시)

const dayArea = document.querySelector("#day");
const dateArea = document.querySelector("#date");
const monthArea = document.querySelector("#month");
const yearArea = document.querySelector("#year");

const months = [
	"JAN",
	"FEB",
	"MAR",
	"APR",
	"MAY",
	"JUN",
	"JUL",
	"AUG",
	"SEP",
	"OCT",
	"NOV",
	"DEC",
];
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
// 일,월,화,수,목,금,토 요일 라벨링 표기 > done

let dateObj = new Date();
let year = dateObj.getFullYear();
let month = dateObj.getMonth();
let date = dateObj.getDate();
let day = dateObj.getDay();
console.log(dateObj); //검증용

function paintInfo() {
	dateArea.innerHTML = dateObj.getDate() + "일&nbsp;"; //as a number (1-31)
	dayArea.innerHTML = "(" + days[dateObj.getDay()] + ")"; //as a number (0-6)
	monthArea.innerHTML = months[dateObj.getMonth()] + "&nbsp;&nbsp;"; //as a number (0-11)
	yearArea.innerHTML = dateObj.getFullYear(); //as a four digit number (yyyy)
}
paintInfo();

const dateNumberArea = document.querySelectorAll(".cell");
const dateNumberAreaSUN = document.querySelectorAll(".SUN");
const dateNumberAreaMON = document.querySelectorAll(".MON");
const dateNumberAreaTUE = document.querySelectorAll(".TUE");
const dateNumberAreaWED = document.querySelectorAll(".WED");
const dateNumberAreaTHU = document.querySelectorAll(".THU");
const dateNumberAreaFRI = document.querySelectorAll(".FRI");
const dateNumberAreaSAT = document.querySelectorAll(".SAT");
console.log(dateNumberArea); //검증용

// 현재 월의 1일이 무슨 요일인지 판별하고, 해당 요일 라벨링에 1일 표기하기
let firstDate = new Date(year, month, 1); //월의 첫째날 정의
// let firstDateDay = firstDate.getDay(); //첫째날의 요일
let firstDateDay = new Date(year, month, 1).getDay(); //첫째날의 요일
let lastDate = new Date(year, month+1, 0).getDate(); //월의 마지막날 정의
// dateNumberArea[firstDateDay].innerHTML = firstDate.getDate(); //날짜영역에 요일에 맞는 배열로 1일 입력

function paintDates() {
    for (let j = 0; j <= lastDate + 1 ; j++) { //날짜영역 마다 이벤트리스너 생성
        dateNumberArea[j].addEventListener("click", changeDate);
    }

    for (let i = 1; i <= lastDate; i++) { //첫째날~마지막날까지 쭉 돌면서
        dateNumberArea[firstDateDay + i - 1].innerHTML = i; //날짜를 입력해주고
        if (i === dateObj.getDate()) { //선택한 날짜면 별도 표기
            dateNumberArea[firstDateDay + i - 1].style.cssText = 'background-color: black; font-weight: bold; color: white;';
        } else { //선택하지 않은 날짜면 일반 표기
            dateNumberArea[firstDateDay + i - 1].style.cssText = 'background-color: none; font-weight: nomal; color: black;';
        }
    }
    return dateObj;
}
paintDates();

// 특정 날짜를 클릭 했을때, 상단의 요일 및 날짜 반영하기
function changeDate (e) {
    let target = e.srcElement;
    let index = target.textContent;
    dateObj.setDate(index);
    paintInfo();
    paintDates();
}

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

function moveToNextMonth() {
    dateObj.setMonth(month + 1);
    dateObj.setDate(1);

    for (let i = 0; i <= 34; i++) { //첫째날~마지막날까지 쭉 돌면서
        dateNumberArea[i].innerHTML = "&nbsp;"; //날짜를 입력해주고
    }

    paintDates();
    paintInfo();
    console.log("다음달로 이동 후 1일 표기"); // 우측 화살표를 클릭 했을때, 다음 달의 요일 및 날짜 표기
    return dateObj
}

function moveToLastMonth() {
	dateObj.setDate(dateObj.getFullYear(), dateObj.getMonth() - 1, 1);
    paintInfo();
    paintDates();
    console.log("이전달로 이동 후 1일 표기"); // 좌측 화살표를 클릭 했을때, 이전 달의 요일 및 날짜 표기
}

btnRight.addEventListener("click", moveToNextMonth);
btnLeft.addEventListener("click", moveToLastMonth);
