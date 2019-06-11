function solution(K, A) {
  let count = 0;
  let connectedRopes = 0;
  for (const AElement of A) {
    connectedRopes += AElement;
    if (connectedRopes >= K) {
      connectedRopes = 0;
      count++;
    }
  }

  return count;
}