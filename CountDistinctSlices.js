const timer = require('./timer');

//todo reduce time complexity from O(N*N) to O(N) or O(logN)
function solution(M, A) {
  let currentRow = [];
  let count = 0;
  for (const aElement of A) {
    const index = currentRow.indexOf(aElement);
    if (index !== -1) {
      currentRow = currentRow.slice(index + 1);
      currentRow.push(aElement);
      count += currentRow.length;
    } else {
      currentRow.push(aElement);
      count += currentRow.length;
    }
    if (count > 1000000000) {
      return 1000000000;
    }
  }
  return count;
}

testCase = [
  [0, [0]],
  [6, [3, 4, 5, 5, 2]]
];

timer(() => {
  testCase.forEach(v => {
    solution(...v);
  });
});