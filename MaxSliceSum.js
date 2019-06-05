const timer = require('./timer.js');

function solution(A) {
  let accumulation = A[0];
  let max = A[0];

  for (let i = 1; i < A.length; i++) {
    accumulation = Math.max(A[i], accumulation + A[i]);
    max = Math.max(max, accumulation);
  }

  return max;
}

const testCase = [
  [3,2,-6,4,0]
];

timer(()=>{
  testCase.forEach(v=>{
    solution(v);
  })
});

