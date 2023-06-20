const solution = (age) => {
  let answer = "";
  var age = age.toString(); //숫자 문자열로
  const ageChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

  ///age.length
  for (let i = 0; i < age.length; i++) {
    answer += ageChar[age[i]];
  }
  return answer;
};
