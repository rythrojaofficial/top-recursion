const testArray = [0, 1, 1, 2, 3, 5, 8, 13];
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else if (arr.length > 1) {
    const half = arr.length / 2;
    const leftHalf = arr.slice(0, half);
    const rightHalf = arr.slice(half, arr.length);
    // console.log("This was printed recursively");
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
  }
}
function merge(left, right) {
  // merges 2 sorted arrays by comparing the first number on each and adding the lowest into a new array
  const newArray = [];
  const total = left.length + right.length;
  for (let i = 0; i < total; i++) {
    if (left.length === 0 && right.length > 0) {
      newArray[i] = right[0];
      right.shift();
    } else if (left.length > 0 && right.length === 0) {
      newArray[i] = left[0];
      left.shift();
    } else if (left.length > 0 && right.length > 0) {
      if (left[0] <= right[0]) {
        newArray[i] = left[0];
        left.shift();
      } else if (right[0] <= left[0]) {
        newArray[i] = right[0];
        right.shift();
      }
    }
  }
  return newArray;
}

console.log(mergeSort(testArray));
