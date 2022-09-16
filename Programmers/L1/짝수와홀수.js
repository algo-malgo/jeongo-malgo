function solution(num) {
  const checkNum = (checkNum) => {
    if (checkNum % 2 === 0) {
      return "Even";
    }
    return "Odd";
  };

  return checkNum(num);
}
