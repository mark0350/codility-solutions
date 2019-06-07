function solution(N, M) {
  let count = 0;
  let i = 0;
  let eaten = [];
  while (!eaten[i % N]) {
    count++;
    eaten[i % N] = true;
    i += M;
  }
  return count;
}