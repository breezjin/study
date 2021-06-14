// 1. 접속하면 랜덤한 헥사값을 설정해서 body에 뿌려준다.
// 2. 해당 헥사값을 #hex-color 에 표기한다.
// 3. 버튼을 클릭하면 1.+ 2. 가 갱신된다.
// ** hex color code example : #efa69f

const body = document.querySelector("body");
const hexColor = document.querySelector("#hex-color");
const btn = document.querySelector("#handle-btn");
const source = "ABCDEF0123456789";

changeColor();

// 랜덤 숫자 * source 스트링 길이의 문자열을 정의하고
// 그것을 6개로 조합한 다음
// 맨 앞에 #을 붙이고
// 이것을 body 스타일과 h1 문구에 박아 넣는다.

function makeRandomText(event) {
    let randomText = source.charAt(Math.floor(Math.random() * source.length));
    return randomText;
}

function changeColor(event) {
    const realText = " #" + makeRandomText() + makeRandomText() + makeRandomText() + makeRandomText() + makeRandomText() + makeRandomText();
    console.log(typeof(realText)); // 이 부분은 콘솔에서 검증하기 위한 영역.
    body.style.backgroundColor = realText;
    hexColor.innerText = realText;
}

// 이 부분은 콘솔에서 검증하기 위한 영역.
console.dir(body);
console.log(changeColor);


btn.addEventListener("click", changeColor)
