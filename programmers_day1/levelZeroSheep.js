const solution = (n, k) => {
  let answer = 0;
  //소숫점 버림, 정수로
  let service = Math.floor(n / 10) * 2000;

  answer = n * 12000 + (k * 2000 - service);

  return answer;
};
