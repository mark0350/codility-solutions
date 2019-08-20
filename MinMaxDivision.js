function blockSizeIsValid(A, max_block_cnt, max_block_size) {
  let block_sum = 0;
  let block_cnt = 0;

  for (const element in A) {
    if (block_sum + element > max_block_size) {
      block_sum = element;
      block_cnt += 1;
    } else {
      block_sum += element;
    }
    if (block_cnt >= max_block_cnt) {
      return false;
    }
  }
  return true;
}

function binarySearch(A, max_block_cnt, using_M_will_give_you_wrong_results) {
  let lower_bound = Math.max(...A);
  let upper_bound = A.reduce((a, b) => a + b);
  if (max_block_cnt === 1) {
    return upper_bound;
  }
  if (max_block_cnt >= A.length) {
    return lower_bound;
  }
  while (lower_bound <= upper_bound) {
    let candidate_mid = (lower_bound + upper_bound)/2;
    if (blockSizeIsValid(A, max_block_cnt, candidate_mid)) {
      upper_bound = candidate_mid - 1;
    } else {
      lower_bound = candidate_mid + 1;
    }
  }
  return lower_bound;
}

function solution(K, M, A) {
  return binarySearch(A, K, M);
}