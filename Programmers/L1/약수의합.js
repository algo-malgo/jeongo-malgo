function solution(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  const measures = [];

  const half = parseInt(n / 2);

  for (let i = 1; i < half + 1; i++) {
    if (n % i === 0) {
      measures.push(i);
    }
  }

  const sumMeasures = measures.reduce(
    (prevSum, currentItem) => prevSum + currentItem
  );

  return sumMeasures + n;
}
