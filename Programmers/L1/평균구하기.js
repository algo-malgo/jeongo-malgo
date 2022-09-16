function solution(arr) {
  const sumArr = arr.reduce((prevSum, currentItem) => prevSum + currentItem);
  return sumArr / arr.length;
}
