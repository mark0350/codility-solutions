function solution(A) {
  let currentMin, min, left, right;
  for (let i = 0; i < A.length - 1; i++) {
    left = A.slice(0, i + 1).reduce((a, b) => a + b);
    right = A.slice(i + 1).reduce((a, b) => a + b);
    min = Math.abs(left - right);
    if (currentMin === undefined) {
      currentMin = min;
    } else if (min < currentMin) {
      currentMin = min;
    }
  }

  return currentMin;
  // write your code in JavaScript (Node.js 8.9.4)
}