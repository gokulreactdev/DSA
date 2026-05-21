const findNum = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }

  return -1;
};

findNum([1, 2, 343, 32, 24, 433], 343);
