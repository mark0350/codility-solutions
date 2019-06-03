function solution(X, A) {

  // when there is only one leaf
  if (A.length === 1) {
    // only when distance = 1 and leaf placed at 1, frog can pass
    if (X === 1 && A[0] === 1) {
      return 0;
    }
    return -1;
  }


  // init a found leaves array to store found leaves
  let foundLeaves = [];
  // init accumulated distance of X
  let sum = X * (X + 1) / 2;
  let currentSum = 0;
  // loop leaves array
  let i = -1;
  do {
    i++;
    // if this position of leave has been found, break
    if (foundLeaves[A[i]]) {
      continue;
    }
    // record the leaf
    foundLeaves[A[i]] = true;

    currentSum += A[i];
    // check if sum bypass total distance, return index if yes
    if (currentSum >= sum) {
      return i;
    }
  }
  while (i < A.length);


  // return -1 , frog can't pass
  return -1;


}