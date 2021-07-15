// Max Sum Sub Array by Brute Force O(n^2)
// [-2, -3, 4, -1, -2, 1, 5, -3] => 7 (4 + -1 + -2 + 1 + 5)
const arr = [1, 100, 4, 15, 9, 30, -1];

const maxSumSubArray = (arr) => {
  let maxSum = 0;
  const len = arr.length;

  for (let i=0; i<len; i++) {
    let currentSum = 0;
    for (let j=i; j<len; j++ ) {
      currentSum += arr[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
}

console.log(maxSumSubArray(arr));