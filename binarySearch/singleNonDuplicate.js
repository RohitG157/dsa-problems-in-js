var singleNonDuplicate = function (arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] !== arr[m - 1] && arr[m] !== arr[m + 1]) {
      return arr[m];
    } else if (arr[m] == arr[m - 1]) {
      const leftCount = m - 1;
      if (leftCount % 2) {
        r = m - 2;
      } else {
        l = m + 1;
      }
    } else if (arr[m] == arr[m + 1]) {
      const rightCount = arr.length - 1 - (m + 1);
      if (rightCount % 2) {
        l = m + 2;
      } else {
        r = m - 1;
      }
    }
  }
};
