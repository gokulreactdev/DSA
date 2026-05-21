const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((val, i) => {
    const curMatchIndex = arr2.indexOf(val ** 2);
    if (curMatchIndex === -1) {
      return false;
    }
    arr2.splice(curMatchIndex, 1);
    return true;
  });
};

const sameRefactored = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  const firstArrayObject = {};
  const secondArrayObject = {};

  for (let val of arr1) {
    firstArrayObject[val] = (firstArrayObject[val] || 0) + 1;
  }

  for (let val of arr2) {
    secondArrayObject[val] = (secondArrayObject[val] || 0) + 1;
  }

  for (const key in firstArrayObject) {
    const secondCur = secondArrayObject[key ** 2];

    if (!(key ** 2 in secondArrayObject)) {
      return false;
    }

    if (!secondCur || secondCur !== firstArrayObject[key]) {
      return false;
    }
  }

  return true;
};

const response = sameRefactored([1, 2, 3, 2], [9, 1, 4, 4]);
console.log(response);
