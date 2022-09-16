function solution(x, n) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(x + x * i);
  }

  return answer;
}
