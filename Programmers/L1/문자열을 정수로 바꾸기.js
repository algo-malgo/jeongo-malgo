function solution(s) {
  if (s[0] === "+") {
    return Number(s.substring(1));
  } else if (s[0] === "-") {
    return Number(s.substring(1)) * -1;
  } else {
    return Number(s);
  }
}
