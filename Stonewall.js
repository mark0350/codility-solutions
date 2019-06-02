function solution(H) {
  let stack = [];
  let count = 0;
  //loop the array
  for(let height of H){
    console.log(height);
    //if stack is empty, push height
    if(stack.length === 0){
      stack.push(height);
      count++;
    }else if(stack.length > 0 && height < stack[stack.length -1]){
      do{
        if(height < stack[stack.length - 1]){
          stack.pop();
        }else if (height === stack[stack.length - 1]){
          break;
        } else if(height > stack[stack.length -1]){
          stack.push(height);
          count++;
          break;
        }
      }while(stack.length > 0);
      if(stack.length === 0){
        stack.push(height);
        count++;
      }

    }else if(stack.length > 0 && height > stack[stack.length -1]){
      stack.push(height);
      count++;
    }

    // elseif stack not empty and height equal to stack top, continue

    // elseif stack not empty and height bigger than stack top, push height and count++

    // elseif stack not empty and height smaller than stack top, while stack length == 0
    // if height smaller than stack top , pop stack
    // if stack top equal to height, break
    // if height bigger than stack top, push height and count++
    //end while

  }
  return count;

  //end loop
}