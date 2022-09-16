function solution(absolutes, signs) {
  var answer = 0;

  function getRealNum(bool, num) {
    if (bool === true) {
      return num;
    }
    return num * -1;
  }

  for (let i = 0; i < absolutes.length; i++) {
    answer += getRealNum(signs[i], absolutes[i]);
  }
  return answer;
}
