// 함수 = function(기능)
// input, output

// 1. 함수 선언문
// function add (매개변수) {
//     // 함수 내부에서 실행할 로직
// }

function add(x, y) {
  return x + y;
}

// 2. 함수 표현식
let add2 = function (x, y) {
  return x + y;
};

// 함수를 호출한다(= 사용한다)
// 함수명 () -> add(입력값)
let functionResult = add(3, 4);
console.log(functionResult);

// console.log(add2(10, 20));

let functionResult2 = add2(10, 20);
console.log(functionResult2);

// 함수의 input -> 매개변수(매개체가 되는 변수!)
// return문 뒤에 오는 값: 반환값
