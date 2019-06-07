const timer = require('./timer');
function solution(N, M) {
  // resolve greatest common divider of N and M
  if (N === 1) {
    return 1;
  }

  if (M === 1) {
    return N;
  }

  return N / gcd(N, M);

}

function gcd(a, b) {
  if (a % b === 0) {
    return b;
  } else {
    return gcd(b, a % b);
  }

}

testCase = [[1000000000, 100], [10,4]];
timer(() => {
  testCase.forEach(v=>console.log(solution(...v)));
});