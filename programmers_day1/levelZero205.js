const solution = (rsp) => {
  let answer = "";
  let rspString = rsp.toString().split("");

  answer = rspString
    .map((a) => {
      if (a === "2") {
        return "0";
      } else if (a === "0") {
        return "5";
      } else if (a === "2") {
        return "2";
      }
    })
    .join("");

  return answer;
};
