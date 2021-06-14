//const : 상시활용요소. 변경될 일이 없는 선언일 경우 활용.
const PI = 3.14;
const BIRTH = `1980. 06. 19`;

//let :  변경가능요소. 상황에 따라 새롭게 변수를 선언해야할 때 활용.
const name = `mike`;
const _ = 1;
const $ = 1;

//변수선언 안에 변수가 배치되는 경우
const message1 = `my name is ${name}.</br>`;
const message2 = `my age is ${30+_}.</br>`;
document.write(message1, ` `, message2);

//typeof
document.write('name의 데이터 타입은 ' + typeof(name) + ' 입니다.</br>');

//for
document.write('for문 연습결과 입니다.</b>');
for(let i=0; i <= 10; i++){
    if(i>5){
        break;
    }
    document.write(i);
}
