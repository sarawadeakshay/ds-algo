                                //5 
// const numbers = [99, 44, 6, 2, 1, 5];
const numbers = [99, 44, 6, 2, 1, 4, 63, 87, 283, 0, 4];

function mergeSort (array) {
  const len = array.length;
  if (len === 1) {
    return array;
  }
  // Split Array into right and left
  const mid = Math.ceil(len/2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  const sortedArr = [];
  const leftLen = left.length;
  const rightLen = right.length;
  let i = 0, j = 0;

  while (i < leftLen && j < rightLen) {
    if (left[i] <= right[j]) {
      sortedArr.push(left[i]);
      i++;
    } else {
      sortedArr.push(right[j]);
      j++;
    }
  }
  while (i < leftLen) {
    sortedArr.push(left[i]);
    i++;
  }
  while (j < rightLen) {
    sortedArr.push(right[j]);
    j++;
  }
  return sortedArr;
}


const answer = mergeSort(numbers);
console.log(answer);