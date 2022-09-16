function solution(a, b) {
  if (a === b) {
    return a;
  }

  const maxNum = Math.max(a, b);
  const minNum = Math.min(a, b);
  let answer = 0;

  for (let i = minNum; i < maxNum + 1; i++) {
    answer += i;
  }

  return answer;
}
