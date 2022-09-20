function solution(A, B) {
  var answer = 0;
  const total = A.length;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < total; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}
