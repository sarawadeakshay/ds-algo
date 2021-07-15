// https://leetcode.com/problems/first-missing-positive/
// Hard - O(n)

function firstMissingPositiveNo(nums) {
  const len = nums.length;
  const resArr = new Array(len+1).fill(0);
  nums.forEach( n => {
    // we are interested only in positive numbers upto len+1 
    if (n > 0 && n <= len+1) {
      // indexes start from 0 hence n-1
      resArr[n-1] = -1;
    }
  });

  for (let i=0; i<resArr.length; i++) {
    if (resArr[i] === 0) {
      return i+1;
    }
  }
};

console.log(firstMissingPositiveNo([4,5,1,2]));