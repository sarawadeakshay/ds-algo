const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(arr, left, right) {
  let pivot = right;
  let partitionIndex;

  if (left < right) {
    partitionIndex = partition(arr, pivot, left, right);
    // sort left and right
    quickSort(arr, left, partitionIndex-1);
    quickSort(arr, partitionIndex+1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right) {
  
  let partitionIndex = left;
  let pivotVal = arr[pivot];
  for (let i=left; i<right; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  console.log('partitionIndex: ', partitionIndex);
  return partitionIndex;
}

function swap(arr, left, right) {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

quickSort(numbers, 0, numbers.length-1);
console.log(numbers);