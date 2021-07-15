// Leetcode # 53: Easy - https://leetcode.com/problems/maximum-subarray/description/
// Time Complexity - O(n)
// Below is solved using Kadane's algorithm

const arr = [-2, 1, -3, 4, 1, -2, 1, -5, 4];
// const arr = [2, -2, 3, 1, -3];
// const arr = [-1, 2, -5, 2, 3];

function maxSubArray(arr) {
  let maxSum = arr[0];    // 2, 2, 3, 4, 4
  let sum = arr[0];       // 2, 0, 3, 4, 1
  
  for (let i=1; i<arr.length; i++) {
      sum = Math.max(sum+arr[i], arr[i]);
      maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
}

console.log(maxSubArray(arr));