const recursionFactorial = (num) => {
  if (num <= 1) {
    return 1;
  }

  return num * recursionFactorial(num - 1);
};

recursionFactorial(6);
