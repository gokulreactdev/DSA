const findRotatedIndex = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    console.log(mid, arr[mid], num);

    if (num === arr[mid]) return mid;

    if (arr[start] <= arr[mid]) {
      if (num >= arr[start] && num < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (num > arr[mid] && num <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};

findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4, 5], 8);
