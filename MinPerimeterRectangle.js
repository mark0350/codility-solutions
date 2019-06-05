function solution(N) {
  let perimeters = [];
  let j;
  const max = Math.sqrt(N);
  for (let i = 1; i <= max; i++) {
    if (N % i === 0) {
      j = N / i;
      perimeters.push(2 * (j + i));
    }
  }
  perimeters.sort((a, b) => a > b ? 1 : -1);
  return perimeters[0];
}
console.log(solution(36))