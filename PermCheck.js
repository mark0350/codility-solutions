function solution(A) {
  const flag = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] > A.length) {
      return 0;
    } else if (flag[A[i]] != null) {
      return 0;
    } else {
      flag[A[i]] = true;
    }
  }
  return 1;
}

