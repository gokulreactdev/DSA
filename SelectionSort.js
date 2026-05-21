const swap = (arr, id1, id2) => {
  [arr[id2], arr[id1]] = [arr[id1], arr[id2]];
  return arr;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        minIndex = j;
        min = arr[j];
      }
    }
    if (i !== minIndex) {
      swap(arr, i, minIndex);
    }
  }

  return arr;
};

const res = selectionSort([5, 3, 4, 1, 2, 1, 3, 4, 8, 7]);

console.log(res);
