// 반복문을 통해 인풋 배열을 순회
// signs 배열의 값이 true이면 '+', false이면 '-'로 계산
// 모든 반복문이 끝나면 더한 값을 리턴

//------------결과 4,7,12,NaN,NaN,NaN
// function solution(absolutes, signs) {
//   for (let index in absolutes) {
//     console.log(absolutes[index]);
//   }

//   for (let index1 in signs) {
//     let change = (signs[index1] = true) ? absolutes * 1 : absolutes * -1;
//     console.log(change);
//   }
// }

// console.log(solution([4, 7, 12], [true, false, true]));

//-----------------------
// function solution(absolutes, signs) {
//   for (let index in absolutes) {
//     console.log(absolutes[index]);
//   }

// }

// console.log(solution([4, 7, 12], [true, false, true]));

// for (let index1 in signs) {
//   let change = (signs[index1] = true) ? absolutes * 1 : absolutes * -1;
//   console.log(change);
// }

//찾아본 코드 풀이
// function solution(absolutes, signs) {
//   let answer = 0;
//   for (let i = 0; i < absolutes.length; i++) {
//     if (signs[i] === true) {
//       answer = answer + absolutes[i];
//     } else {
//       answer = answer - absolutes[i];
//     }
//   }
//   return answer;
// }
// console.log(solution([4, 7, 12], [true, false, true]));

//-----------------다시 작성해보기

// function solution(absolutes, signs) {
//   let result = 0;
//   for (let i = 0; i < absolutes.length; i++) {
//     if (signs[i] === true) {
//       result = result + absolutes[i];
//     } else {
//       result = result - absolutes[i];
//     }
//   }
//   return result;
// }

// console.log(solution([4, 7, 12], [true, false, true]));

// let numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
