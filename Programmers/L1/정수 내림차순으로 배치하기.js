function solution(n) {
  const changedNum = String(n);
  const numbers = [];

  for (let i = 0; i < changedNum.length; i++) {
    numbers.push(Number(changedNum[i]));
  }
  numbers.sort((a, b) => b - a);
  const sortedNum = numbers.join("");

  return Number(sortedNum);
}
