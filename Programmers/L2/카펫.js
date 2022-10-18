function solution(brown, yellow) {
  if (yellow === 1) {
    return [3, 3];
  }
  var answer = [];

  const TOTAL = brown + yellow;
  const MAX = parseInt(yellow / 2) + 1;

  function getResult(first, second) {
    if (TOTAL % first === 0 && TOTAL % second === 0) {
      return true;
    }
    return false;
  }

  for (let i = 1; i < MAX; i++) {
    let result;
    if (yellow % i === 0) {
      result = getResult(i + 2, parseInt(yellow / i) + 2);
      if (result === true) {
        answer.push(i + 2);
        break;
      }
    }
  }

  answer.push(parseInt(TOTAL / answer[0]));
  answer.sort((a, b) => b - a);
  return answer;
}
