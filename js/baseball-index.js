console.log("hello, vanilla.");

// 1. 게임 시작 버튼 만들기 [done]
// 2. 게임 시작 버튼을 클릭 했을때, 랜덤한 세 자리 숫자 만들기 (사용자에게 보여주진 않습니다.)

const btnStart = document.querySelector('#btn-start');
let answer = [];
let userTry = [];

function makeRandomNumber () {
    let randomNumber = Math.floor(Math.random() * 1000);
    console.log('랜덤 숫자 생성 : ' + randomNumber); //검증용
    let str = randomNumber.toString();
    for (let i = 0; i < 3; i++) {
        let digit = str.charAt(i);
        answer.push(Number(digit));
    }
    console.log('생성된 숫자를 answer(arr)로 : ' + answer); //검증용
};

btnStart.addEventListener('click', makeRandomNumber);

// 3. 숫자 입력칸 만들기 [done]
// 4. 사용자가 엔터키를 클릭 했을때, 입력값이 세자리 숫자가 아닌 경우 경고창 띄워주기

const input = document.querySelector('#input-numbers');
const btnCheck = document.querySelector('#btn-enter');
const validation = document.querySelector('#validation');

function checkAnswer () {
    let inputNumbers = input.value;
    userTry.splice(0, userTry.length);
    console.log('사용자가 입력한 값 : ' + inputNumbers); //검증용

    for (let i = 0; i < 3; i++) {
        let digit2 = inputNumbers.charAt(i);
        userTry.push(Number(digit2));
    }
    console.log('입력한 숫자를 userTry(arr)로 : ' + userTry); //검증용
    inputNumbers = "";

    if (userTry.length !== 3) {
        validation.classList.remove('hidden');
    }
};

btnCheck.addEventListener('click', checkAnswer);
input.addEventListener('keyup', function (e) {
    if (e.keycode === 13 || e.key === 'Enter') {
        e.preventDefault();
        btnCheck.click();
    }
});



// 5. 사용자가 엔터키를 클릭 했을때, 2단계에서 생성한 숫자와 사용자의 입력값 비교하기
// 6. 각 자리 별로 비교하고, 같은 자리에 같은 숫자가 몇개 있는지 판별합니다. (스트라이크 갯수)
// 7. 각 자리 별로 비교하고, 다른 자리에 같은 숫자가 몇개 있는지 판별합니다. (볼 갯수)
// 8. 화면에 스트라이크와 볼의 갯수를 표기합니다.
// 9. 사용자가 10회까지 시도할 수 있도록 제한합니다.
// 10. 게임 재시작 버튼을 만들고, 재시작 할 수 있도록 합니다.



