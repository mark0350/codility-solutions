function solution(A) {
  let result = 1;
  A = A.sort((a,b)=>a>b?1:-1);

  if(A[0] !== 1){
    return result = 0;
  }
  if (A.length === 1) {
    return result;
  }
  for (let i = 0; i < A.length - 1; i++) {
    if ((A[i] + 1) !== A[i + 1]) {
      return result = 0;
    }
  }
  return result = 1;
  // write your code in JavaScript (Node.js 8.9.4)
}