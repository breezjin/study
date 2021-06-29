console.log("hello, vanilla.");

// 1. 게임 시작 버튼 만들기 [done]
// 2. 게임 시작 버튼을 클릭 했을때, 랜덤한 세 자리 숫자 만들기 (사용자에게 보여주진 않습니다.)

const btnStart = document.querySelector('#btn-start');
const source = [0,1,2,3,4,5,6,7,8,9]
let answer = [];
let userTry = [];
let userTryList = [];

function makeAnswer () {
    for (let i = 0; i < 3; i++) {
        let digit = source[Math.floor(Math.random() * 10)];
        answer.push(digit);
    }
    console.log('랜덤 숫자 생성 : ' + answer); //검증용

    start.classList.add('hidden');
    game.classList.remove('hidden');
};

btnStart.addEventListener('click', makeAnswer);

// 3. 숫자 입력칸 만들기 [done]
const input = document.querySelector('#input-numbers');
const btnCheck = document.querySelector('#btn-enter');
const start = document.querySelector('#start');
const game = document.querySelector('#game');
const end = document.querySelector('#end');
const tryNumberArea = document.querySelector('#try-number-area');
const tryNumber = document.querySelector('#try-number');

const result = document.querySelectorAll('.result');
const userTryArea = document.querySelectorAll('.n');
const strikeDot = document.querySelectorAll('.strike-dot');
const ballDot = document.querySelectorAll('.ball-dot');

let checkAnswerCalled = 0;

function checkAnswer () {
    start.classList.add('hidden');

    let inputNumbers = input.value;
    console.log('사용자가 입력한 값 : ' + inputNumbers); //검증용

    // 4. 사용자가 엔터키를 클릭 했을때, 입력값이 세자리 숫자가 아닌 경우 경고창 띄워주기
    if (inputNumbers.length !== 3) {
        alert('3자리 숫자를 입력해주세요.');
        return;
    }

    // 9. 사용자가 10회까지 시도할 수 있도록 제한합니다.
    checkAnswerCalled++;
    tryNumberArea.classList.remove('hidden');
    tryNumber.innerHTML = checkAnswerCalled;
    if (checkAnswerCalled > 10) {
        showFail();
    }
    result[10 - checkAnswerCalled].classList.remove('hidden');

    for (let i = 2; i >= 0; i--) {
        let digit2 = inputNumbers.charAt(2 - i);
        userTry.push(Number(digit2));
        userTryArea[30 - (checkAnswerCalled * 3) + (2 - i)].innerHTML = userTry[2 - i];
        // 5. 사용자가 엔터키를 클릭 했을때, 2단계에서 생성한 숫자와 사용자의 입력값 비교하기
        // 6. 각 자리 별로 비교하고, 같은 자리에 같은 숫자가 몇개 있는지 판별합니다. (스트라이크 갯수)
        // 7. 각 자리 별로 비교하고, 다른 자리에 같은 숫자가 몇개 있는지 판별합니다. (볼 갯수)
        // 8. 화면에 스트라이크와 볼의 갯수를 표기합니다.
        // *** 최근에 입력한 값이 바로바로 보이도록 구성
        if (userTry[2 - i] === answer[2 - i]) {
            strikeDot[30 - (checkAnswerCalled * 3) + (2 - i)].classList.remove('hidden')
        } else if (answer.includes(userTry[2 - i])) {
            ballDot[30 - (checkAnswerCalled * 3) + (2 - i)].classList.remove('hidden')
        }
    }

    if (answer[0] === userTry[0] && answer[1] === userTry[1] && answer[2] === userTry[2]) {
        showSuccess();
    }

    userTry.splice(0, userTry.length);
    input.value = '';
    console.log('현재 답은 : ' + answer); //검증용

};

btnCheck.addEventListener('click', checkAnswer);
input.addEventListener('keyup', function (e) {
    if (e.keycode === 13 || e.key === 'Enter') {
        e.preventDefault();
        btnCheck.click();
    }
});

const success = document.querySelector('#success');
const fail = document.querySelector('#fail');
const answerResult = document.querySelector('#answer');
const restart = document.querySelector('#btn-restart');

function showFail() {
    game.classList.add('hidden');
    end.classList.remove('hidden');
    fail.classList.remove('hidden');
};

function showSuccess() {
    game.classList.add('hidden');
    end.classList.remove('hidden');
    success.classList.remove('hidden');
    answerResult.innerHTML = answer;
};

function restartGame() {
    location.reload();
};

restart.addEventListener('click', restartGame);

// 10. 게임 재시작 버튼을 만들고, 재시작 할 수 있도록 합니다.



