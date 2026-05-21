const isAnagram = (string1, string2) => {
  if (string1.length !== string2.length) return false;

  const lookup = {};

  for (let letter of string1) {
    lookup[letter] = (lookup[letter] || 0) + 1;
  }

  for (let i = 0; i < string2.length; i++) {
    const letter2 = string2[i];

    if (!lookup[letter2]) {
      return false;
    } else {
      lookup[letter2] -= 1;
    }
  }

  return true;
};

const response = isAnagram("qwerty", "qwrete");
console.log(response);
