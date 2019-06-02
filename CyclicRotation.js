function solution(A, K) {
  if (A.length === 0) {
    return A;
  }
  // if K is divisible by N return original
  N = A.length;
  let swap = [];
  K = K % N;
  if(K === 0){
    return A;
  }
  let shift1 = 0;
  let shift2 = 0;
  // loop A
  for (let i = 0; i < A.length - 1; i++) {
    //  replace neighbor except the last element
    shift1 = (i+K)%N;
    shift2 = (i + K * 2)%N;
    swap[shift2] = A[shift1];
    A[shift1] = A[i];
  }
  swap.forEach((v, i) => {
    A[i] = v;
  });
  return A;

}