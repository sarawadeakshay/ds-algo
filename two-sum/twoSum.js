// Leetcode # 1: Easy - https://leetcode.com/problems/two-sum/description/
// Time Complexity - O(n)

// arr = [2,7,11,15], sum = 9
function twoSum(nums, target) {
  const numMap = { };
  if (!Array.isArray(nums)) {
    return [];
  }

  for (let i=0; i<nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (diff in numMap) {
      return [].concat(numMap[diff], i);
    }
    numMap[num] = i;
    console.log(numMap);
  }
}

console.log(twoSum([2,7,11,15], 18));