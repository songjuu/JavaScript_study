// 배열
// let fruits = ["사과", "바나나", "오렌지"];

// let numbers = new Array(5);

// console.log(numbers.length);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// let fruits = ["사과", "바나나"];
// console.log("1 =>", fruits);

// fruits.push("오렌지");
// console.log("2 =>", fruits);

// let fruits = ["사과", "바나나"];
// console.log("1 =>", fruits);

// fruits.pop();
// console.log("2 =>", fruits);

// let fruits = ["사과", "바나나", "키위"];
// fruits.unshift("포도");
// console.log(fruits);

// let fruits = ["사과", "바나나", "키위"];
// fruits.splice(1, 1, "포도");
// console.log(fruits);

// let fruits = ["사과", "바나나", "키위"];
// let slicedFruits = fruits.slice(0, 2);
// console.log(slicedFruits);

let numbers = [4, 2, 5, 1, 5];

// 매개변수 자리에 함수를 넣는 것: 콜백 함수
// numbers.forEach(function (item) {
//   console.log("item입니다 = >", +item);
// });

// (2) map : 항상 원본 배열의 길이만큼이 return 된다.
// let newNumbers = numbers.map(function (item) {
//   return item * 2;
// });

// console.log(newNumbers);

//(3) filter

// let filteredNumbers = numbers.filter(function (item) {
//   return item > 3;
// });

// console.log(filteredNumbers);

let findedNumbers = numbers.find(function (item) {
  return item > 3;
});

console.log(findedNumbers);
