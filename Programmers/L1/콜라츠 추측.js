function solution(num) {
  if (num === 1) {
    return 0;
  }

  let tempNum = num;
  let cnt = 0;

  while (cnt < 500) {
    if (tempNum % 2 === 0) {
      tempNum = tempNum / 2;
    } else {
      tempNum = tempNum * 3 + 1;
    }
    cnt += 1;
    if (tempNum === 1) {
      return cnt;
    }
  }
  return -1;
}
