//문자열로 구성된 리스트 string과 정수 n이 주어졌을 때,
//각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬

//----------------------처음문제풀이
// function solution(s) {
//   let changeLetter = s.toLowerCase();
//   let letter_p = changeLetter.split("p");
//   let letter_y = changeLetter.split("y");
//   console.log(letter_y);
//   console.log(letter_p);
//   if (letter_p === letter_y) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(solution("Pyy"));

//----------------------문제풀이
// function solution(s) {
//   let changeLetter = s.toLowerCase();
//   let letter_p = changeLetter.split("p").length;
//   let letter_y = changeLetter.split("y").length;

//   if (letter_p === letter_y) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(`p와 y의 갯수가 ${solution("pPoooyY")}`);
// console.log(`p와 y의 갯수가 ${solution("Pyy")}`);

//----------------------match 메소드 사용해보기
// function solution(s) {
//   let letter_p = s.match(/p/gi).length; //i는 대소문자 상관없이, g는 전부 찾아라
//   let letter_y = s.match(/y/gi).length;

//   if (letter_p === letter_y) {
//     return true;
//   } else {
//     return false;
//   }
// }

//   let result = letter_p === letter_y ? true : false;
//   return result;
// }

// console.log(`p와 y의 갯수가 ${solution("pPoooyY")}`);
// console.log(`p와 y의 갯수가 ${solution("Pyy")}`);
// //아래 if부분 삼항 연산자로 표현하기
