function solution(A) {
  let size = [];
  let result = -1;
  for (let i = 0; i < A.length; i++) {
    size[A[i]] = !!size[A[i]]?size[A[i]]:0;
    size[A[i]] = 1 + size[A[i]];
    if(size[A[i]] > A.length/2){
      result =  i;
      break;
    }
  }

  return result;

}