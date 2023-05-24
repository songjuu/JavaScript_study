// 연산자(+, - , *, /)

// // 1.더하기 연산자
// console.log(1+1);
// console.log(1+"1");

// console.log(1 - "2");
// console.log(1 -2);

// console.log(2* 3);
// console.log("2" * 3);

// console.log(4 / 2);
// console.log("4" / 2);

// console.log(5/2);
// console.log(5%2);

//6. 할당 연산자(assignment)
// 6-1. 등호 연산자(=)
// let x = 10;

// 6-2. 더하기 등호 연산자(+=)
// x += 5;
// console.log(x);

// x += 5;
// console.log(x);

// x -= 5;
// console.log(x);

// x -= 25;
// console.log(x);

// // let a = 10;
// a *= 2;
// console.log(a);

//비교 연산자(---> true 또는 false를 반환하는 연산자)
// 1. 일치 연산자(===)
// 타입까지 일치해야 true를 반환하는 연산자

// console.log(2 === 2); //true
// console.log("2" === 2); //false
// console.log(2 === "2"); //false

// 2. 불일치 연산자 (!==)
// 타입까지 일치해야 false를 반환하는 연산자

// console.log(2 !== 2); //false
// console.log("2" !== 2); //true
// console.log(2 !== "2"); //true

// 3. 작다 연산자(<), 작거나 같다 연산자(<=)
console.log(2 < 3); //true
console.log(2 <= 3); //true
console.log(3 <= 3); //true
console.log(4 <= 3); //false

// 4. 논리 연산자
// 4-1(논리곱 연산자: 모두 true일 때 true 반환)
console.log("--------");
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

// 4-2(논리합 연산자: 두 값 중 하나라도 true 인 겨우 true 반환)
console.log("--------");
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

// 4-3. 논리부정 연산자
console.log("--------");
console.log(!true);
let a = true;
console.log(!a);

// 5. 삼항 연산자(중요!)
// 조건에 따라 값을 선택한다.
let x = 10;
let result11 = x > 5 ? "크다" : "작다";
console.log("--------");
console.log(result11);

console.log("--------");

let y = 20;
//3항연산자를 이용해서 y가 10보다 작은 경우 작다를
let answer = y < 10 ? "작다" : "크다";
console.log(answer);

// 6. 타입연산자(typeof)
console.log(typeof "5");
