/*consider more on extreme situation, like single input, zero, max value*/

function solution(A) {
  if(A.length === 0){
    return 1
  }
 let result =  A.sort((a,b)=>a>b?1:-1).find((v,i)=>{return v !== (i+1)});

 if(result){
   return result -1;
 }

 return (A[A.length - 1]+1)

  // write your code in JavaScript (Node.js 8.9.4)
}

console.log(solution([]))