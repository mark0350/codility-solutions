const timer = require('./timer');

function solution(N) {
  let count = 0;

  if (N === 1) {
    return 1;
  }

  const max = Math.sqrt(N);

  for (let i = 1; i <= max; i++) {
    if (N % i === 0 && i === max) {
      count++;
    } else if (N % i === 0) {
      count += 2;
    }
  }

  return count;
}

const testCase = [
  1, 2, 16, 144, 2147483647
];

timer(() => {
  testCase.forEach(v => console.log(solution(v)));
});