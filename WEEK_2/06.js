// const myArr = [
//   function (a, b) {
//     return a + b;
//   },
//   function (a, b) {
//     return a - b;
//   },
// ];

// console.log(myArr[0](1, 3));
// console.log(myArr[1](10, 7));

function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

function add(x, y) {
  return x + y;
}

const multiplyByTwo = multiplyBy(2); //

const multiplyByThree = multiplyBy(3); //

console.log(multiplyByTwo(10));
console.log(multiplyByThree(10));

const result = add(multiplyByTwo(5), multiplyByThree(10));

console.log(`FINAL => ${result}`);
