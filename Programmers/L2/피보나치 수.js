function solution(n) {
  const DEVISOR = 1234567;
  let fibo = {
    0: 0,
    1: 1,
  };

  for (let i = 2; i < n + 1; i++) {
    fibo[i] = (fibo[i - 2] % DEVISOR) + (fibo[i - 1] % DEVISOR);
  }

  var answer = fibo[n] % DEVISOR;
  return answer;
}
