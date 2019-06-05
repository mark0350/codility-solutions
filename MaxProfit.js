function solution(A) {
  let maxProfit = 0;
  let profit = 0;
  let buyPrice = A[0];
  for (let i = 1; i < A.length; i++) {
    if (buyPrice < A[i]) {
      profit = A[i] - buyPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    } else {
      buyPrice = A[i];
    }
  }
  return maxProfit;
}