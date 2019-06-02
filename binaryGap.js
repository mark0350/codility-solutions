function solution(N) {
  let current = 0;
  let largest = 0;
  N = N.toString(2);
  N = N.split('');
  console.log(N);
  for (let i = 0; i < N.length; i++) {
    if (N[i] == 1) {
      if (current > largest) {
        largest = current;
      }
      current = 0;
    } else {
      current++;
    }
  }

  return largest;
}

