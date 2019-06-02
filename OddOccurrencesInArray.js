function solution(A) {
  let flag = {};
  for (let i = 0; i < A.length; i++) {
    if (flag.A[i] === undefined) {
      flag.A[i] = 1;
    } else {
      flag.A[i] = flag.A[i] + 1;
      if(flag.A[i] % 2 === 0){
        delete flag.A[i]
      }
    }
    console.log(flag)
    // flag[A[i]] = flag[A[i]]?1:(flag[A[i]]+1);
    // console.log(flag)
  }

  return flag.findIndex(v => v % 2 === 1);
}

const test = [9, 3, 9, 3, 9, 9, 10, 10,3,10,10,3,7,7,7,7,7,9, 3, 9, 3, 9, 9, 10, 10,3,10,10,3,7,7,7,7,7];
console.log(solution(test));