function solution(n) {
  const changedNum = Array.from(String(n));

  const lastIndex = changedNum.length - 1;

  const result = [];

  for (let i = lastIndex; i >= 0; i--) {
    result.push(Number(changedNum[i]));
  }

  return result;
}
