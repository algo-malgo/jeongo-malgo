function solution(n) {
  if (n === 1) {
    return 1;
  }

  let answer = 0;
  let currentSum = 0;
  let currentList = [];
  let numList = [];

  for (let i = 1; i < n + 1; i++) {
    numList.push(i);
  }

  for (let i = 0; i < n; i++) {
    currentList.push(numList[i]);
    currentSum += numList[i];
    if (currentSum >= n) {
      break;
    }
  }

  while (true) {
    if (currentSum > n) {
      currentSum -= currentList[0];
      currentList.shift();
    } else if (currentSum === n) {
      answer += 1;
      currentSum -= currentList[0];
      currentList.shift();
    } else {
      let last = currentList.length - 1;
      if (currentList[last] < n) {
        currentSum += currentList[last] + 1;
        currentList.push(currentList[last] + 1);
      }
    }
    if (currentList.length === 1 && currentList[0] === n) break;
  }

  return answer + 1;
}
