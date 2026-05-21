const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = current;
  }

  return arr;
};

const sortedArr = insertionSort([8, 7, 1, 6, 5]);
console.log(sortedArr);
