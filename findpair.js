function findPair(arr, num) {
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  console.log(arr, num);
  while (i < arr.length && j < arr.length) {
    console.log(arr[j] - arr[i]);
    if (i !== j && Math.abs(arr[j] - arr[i]) === Math.abs(num)) {
      return true;
    } else if (arr[j] - arr[i] < num) {
      j++;
    } else {
      i++;
    }
  }
  return false;
}

findPair([-2, 3, 4, 10], -6);
