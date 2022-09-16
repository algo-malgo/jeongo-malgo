function solution(x) {
  const changedNum = String(x);
  let sumNum = 0;

  for (let i = 0; i < changedNum.length; i++) {
    sumNum += Number(changedNum[i]);
  }

  if (x % sumNum === 0) {
    return true;
  } else {
    return false;
  }
}
