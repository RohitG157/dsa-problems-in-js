var largestOddNumber = function (num) {
  let isOddFound = false;
  let oddNumber = "";
  for (let i = num.length - 1; i >= 0; i--) {
    if (!isOddFound && parseInt(num[i]) % 2) {
      isOddFound = true;
      return num.slice(0, i + 1);
    }
  }
  return oddNumber;
};
