console.log("hello, vanilla.");

// 이미지 변경은 아래와 같이 이미지 요소의 src를 변경하는 방식으로 하는 것을 권장합니다.
// someImageElement.src = "'images/image-1.png';

const leftBtn = document.querySelector("#arrow-left");
const righttBtn = document.querySelector("#arrow-right");
const img = document.querySelector("#img");
const dot1 = document.querySelector("#dot1")
const dot2 = document.querySelector("#dot2")
const dot3 = document.querySelector("#dot3")
const dot4 = document.querySelector("#dot4")
const dot5 = document.querySelector("#dot5")

loading1st();

function loading1st() {
    img.src = 'images/image-1.png';
    dot1.classList.add('selected');
    dot2.classList.remove('selected');
    dot3.classList.remove('selected');
    dot4.classList.remove('selected');
    dot5.classList.remove('selected');
    console.log("1번 이미지 노출");
}
function loading2nd() {
    img.src = 'images/image-2.png';
    dot1.classList.remove('selected');
    dot2.classList.add('selected');
    dot3.classList.remove('selected');
    dot4.classList.remove('selected');
    dot5.classList.remove('selected');
    console.log("2번 이미지 노출");
}
function loading3rd() {
    img.src = 'images/image-3.png';
    dot1.classList.remove('selected');
    dot2.classList.remove('selected');
    dot3.classList.add('selected');
    dot4.classList.remove('selected');
    dot5.classList.remove('selected');
    console.log("3번 이미지 노출");
}
function loading4th() {
    img.src = 'images/image-4.png';
    dot1.classList.remove('selected');
    dot2.classList.remove('selected');
    dot3.classList.remove('selected');
    dot4.classList.add('selected');
    dot5.classList.remove('selected');
    console.log("4번 이미지 노출");
}
function loading5th() {
    img.src = 'images/image-5.png';
    dot1.classList.remove('selected');
    dot2.classList.remove('selected');
    dot3.classList.remove('selected');
    dot4.classList.remove('selected');
    dot5.classList.add('selected');
    console.log("5번 이미지 노출");
}

function loadingRight () {
    console.log('우측 클릭');
    if (img.src.includes('images/image-1.png')) {
        loading2nd();
    } else if (img.src.includes('images/image-2.png')) {
        loading3rd();
    } else if (img.src.includes('images/image-3.png')) {
        loading4th();
    } else if (img.src.includes('images/image-4.png')) {
        loading5th();
    } else if (img.src.includes('images/image-5.png')) {
        loading1st();
    } else {
        console.log("이미지를 변경할 수 없습니다.");
    }
}

function loadingLeft () {
    console.log("좌측 클릭");
    if (img.src.includes('images/image-1.png')) {
        loading5th();
    } else if (img.src.includes('images/image-2.png')) {
        loading1st();
    } else if (img.src.includes('images/image-3.png')) {
        loading2nd();
    } else if (img.src.includes('images/image-4.png')) {
        loading3rd();
    } else if (img.src.includes('images/image-5.png')) {
        loading4th();
    } else {
        console.log("이미지를 변경할 수 없습니다.");
    }
}

righttBtn.addEventListener('click', loadingRight)
leftBtn.addEventListener('click', loadingLeft)
dot1.addEventListener('click', loading1st)
dot2.addEventListener('click', loading2nd)
dot3.addEventListener('click', loading3rd)
dot4.addEventListener('click', loading4th)
dot5.addEventListener('click', loading5th)