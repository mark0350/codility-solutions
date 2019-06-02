function solution(A) {
  let equAmt = 0;
  let {leader, leaderAmt} = getLeaderInfo(A);
  if(leader === null){
    return equAmt;
  }
  let currentLeaderAmt = 0;
  for (let i = 0; i < A.length; i++) {
    if(A[i] === leader){
      currentLeaderAmt++;
    }
    if(currentLeaderAmt > ((i+1)/2) && ((leaderAmt-currentLeaderAmt) > (A.length - 1 - i)/2)){
      equAmt++;
    }
  }
  return equAmt;

}

function getLeaderInfo(A) {
  let size = [];
  let leader;

  for (let i = 0; i < A.length; i++) {
    size[A[i]] = !!size[A[i]]?size[A[i]]:0;
    if(leader !== undefined && A[i] === leader){
      size[A[i]]++;
    }else{
      size[A[i]] = 1 + size[A[i]];
      if(size[A[i]] > A.length/2){
        leader = A[i];
      }
    }

  }

  return {
    leader: leader,
    leaderAmt: leader!==null?size[leader]:0
  }
}

const testCase = [
  [4,3,4,4,4,2],
  [4,4,4,4,4,4],
];


console.log(a);


// testCase.forEach((v)=>{
//   console.log(solution(v));
// });