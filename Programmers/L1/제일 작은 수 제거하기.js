function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }

  const tempArr = arr.slice();
  tempArr.sort((a, b) => a - b);
  const minNum = tempArr[0];
  const answerArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== minNum) {
      answerArr.push(arr[i]);
    }
  }
  return answerArr;
}
