const maxSubArraySum = (arr, num) => {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

const maxSubArraySumNew = (arr, num) => {
  if (num > arr.length) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

const result2 = maxSubArraySumNew(
  [2, 6, 9, 2, 1, 8, 5, 6, 3, 3, 4, 5, 8, 9, 6],
  6,
);
const result1 = maxSubArraySum(
  [2, 6, 9, 2, 1, 8, 5, 6, 3, 3, 4, 5, 8, 9, 6],
  6,
);
console.log(result1, result2);
