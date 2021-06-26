console.log("hello, vanilla.");

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

function paintInfo() {
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth();
    let date = dateObj.getDate();
    let day = dateObj.getDay();

	dateArea.innerHTML = date + "일&nbsp;"; //as a number (1-31)
	dayArea.innerHTML = "(" + days[day] + ")"; //as a number (0-6)
	monthArea.innerHTML = months[month] + "&nbsp;&nbsp;"; //as a number (0-11)
	yearArea.innerHTML = year; //as a four digit number (yyyy)
}
paintInfo();

const dateNumberArea = document.querySelectorAll(".cell");

// 현재 월의 1일이 무슨 요일인지 판별하고, 해당 요일 라벨링에 1일 표기하기
// dateNumberArea[firstDateDay].innerHTML = firstDate.getDate(); //날짜영역에 요일에 맞는 배열로 1일 입력

function paintDates() {
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth();
    let date = dateObj.getDate();

    let firstDate = new Date(year, month, 1).getDate(); //월의 마지막날 정의: 다음달 0일
    let lastDate = new Date(year, month+1, 0).getDate(); //월의 마지막날 정의: 다음달 0일
    let firstDateDay = new Date(year, month, 1).getDay(); //첫째날의 요일

    console.log("dateObj :", dateObj, "firstDate :", months[month], "/", firstDate, "(", days[firstDateDay], ")", "lastDate :", lastDate); //첫째날의 요일과 이번달의 마지막일

    //날짜 1~(30 혹은 31) 관리
    for (let i = 0; i < lastDate; i++) { //첫째날~마지막날까지 쭉 돌면서
        dateNumberArea[firstDateDay + i].addEventListener("click", changeDate);
        dateNumberArea[firstDateDay + i].innerHTML = i+1; //해당요일 배열부터 날짜를 입력해주고

        if (i+1 === date) { //선택한 날짜면 별도 표기
            dateNumberArea[firstDateDay + i].style.cssText = 'background-color: black; font-weight: bold; color: white;';
        } else { //선택하지 않은 날짜면 일반 표기
            dateNumberArea[firstDateDay + i].style.cssText = 'background-color: none; font-weight: nomal; color: black;';
        }
    }
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
    let month = dateObj.getMonth();
    dateObj.setMonth(month+1);
    dateObj.setDate(1);
    for (let i = 0; i < 42; i++) { //첫째날~마지막날까지 쭉 돌면서
        dateNumberArea[i].innerHTML = "&nbsp;"; //공란을 채워서 초기화 해주고
        dateNumberArea[i].style.cssText = 'background-color: none; font-weight: nomal; color: black;';
    }
    paintInfo();
    paintDates();
}

function moveToLastMonth() {
    let month = dateObj.getMonth();
    dateObj.setMonth(month-1);
    dateObj.setDate(1);
    for (let i = 0; i < 42; i++) { //첫째날~마지막날까지 쭉 돌면서
        dateNumberArea[i].innerHTML = "&nbsp;"; //공란을 채워서 초기화 해주고
        dateNumberArea[i].style.cssText = 'background-color: none; font-weight: nomal; color: black;';
    }
    paintInfo();
    paintDates();
}

btnRight.addEventListener("click", moveToNextMonth);
btnLeft.addEventListener("click", moveToLastMonth);
