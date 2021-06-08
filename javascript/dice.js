// 콘솔로그로 출력하는 방식. 예제 원본.
// for (var i = 1; i <= 6; i++) {
//     for (var j = 1; j <= 6; j++) {
//         if (i + j === 6) console.log(`[${i}, ${j}]`);
//     }
// }
// 실 구현.
for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
        if (i + j === 6) document.write ('['+i+', ', j+']</br>');
    }
}