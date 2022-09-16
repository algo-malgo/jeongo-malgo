function solution(arr, divisor) {
  var answer = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }

  if (answer.length === 0) {
    return [-1];
  }
  return answer;
}
