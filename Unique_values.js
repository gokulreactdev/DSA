// only works with sorted array

const countUniqueValues = (arr) => {
  var i = 0;
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

const result = countUniqueValues([1, 2, 2, 3, 4, 5, 5, 6]);

console.log(result);
