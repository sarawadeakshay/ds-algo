// https://leetcode.com/problems/move-zeroes/description/
// Time Complexity - O(n)

function moveZeroes(nums = []) {
  let zeroIdx = 0;  //  pointer
  
  // loop over the array and copy the current num to the zeroIdx and move zeroIdx pos
  // ignore 0 form the Array
  nums.forEach(n => {
    if (n !== 0) {
      nums[zeroIdx] = n;
      zeroIdx++;
    }
  });

  // loop from the zeroIdx till nums.length and update it with 0
  for (i=zeroIdx; i<nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

console.log(moveZeroes([1,0,0,4,2,6,4]));