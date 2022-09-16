function solution(n) {
  const changedNum = String(n);
  let answer = 0;

  for (let i = 0; i < changedNum.length; i++) {
    answer += Number(changedNum[i]);
  }

  return answer;
}
