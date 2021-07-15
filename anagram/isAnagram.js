// https://stackoverflow.com/questions/57763205/what-is-array-prototype-sort-time-complexity
// Time Complexity - Worst case: O(n logn) assuming Firefox uses Merge sort and Chrome uses Timsort(hybrid of merge sort and insertion sort)
const isAnagram = (str1='', str2) => {
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');
  if (str1 === str2) {
    return true;
  }
  return false;
};

// Time Complexity - O(n)
const isAnagramLinear = (str1, str2) => {
  const strMap = {};

  // loop over str1 and store all { char: count } in strMap
  for (let i=0; i< str1.length; i++) {
    const char = str1[i];
    if (char in strMap) {
      strMap[char]++;
    } else {
      strMap[char] = 1;
    }
  }

  // loop over str2 and store all { char: count } in strMap
  for (let i=0; i< str2.length; i++) {
    const char = str2[i];
    if (char in strMap) {
      strMap[char]--;
      if (strMap[char] === 0) {
        delete strMap[char];
      }
    } else {
      return false;
    }
  }

  return Object.keys(strMap).length === 0 ? true : false;
};


const s1 = 'hello';
const s2 = 'eollh';
console.log('isAnagram: ', isAnagramLinear(s1, s2));