const sameFrequency = (num1, num2) => {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  if (strNum1.length !== strNum2.length) return false;

  let countNumObj1 = {};
  let countNumObj2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNumObj1[strNum1[i]] = (countNumObj1[strNum1[i]] || 0) + 1;
    countNumObj2[strNum2[i]] = (countNumObj2[strNum2[i]] || 0) + 1;
  }

  for (let key in countNumObj1) {
    if (countNumObj1[key] !== countNumObj2[key]) {
      return false;
    }
  }

  return true;
};

const result = sameFrequency(12222, 12222);
console.log(result);
