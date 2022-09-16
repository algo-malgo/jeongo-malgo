function solution(n) {
  const rootNum = parseInt(n ** 0.5);

  for (let i = 1; i < rootNum + 1; i++) {
    if (i ** 2 === n) {
      return (i + 1) ** 2;
    }
  }
  return -1;
}
