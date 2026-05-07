var findPeakElement = function (arr) {
  if (arr.length < 2) return 0;
  let newArr = [-Infinity, ...arr, -Infinity];
  let l = 0;
  let r = newArr.length - 1;
  while (l < r - 1) {
    const mid = Math.floor((l + r) / 2);
    if (newArr[mid] > newArr[mid - 1] && newArr[mid] > newArr[mid + 1]) {
      return mid - 1;
    }

    if (newArr[mid] < newArr[mid + 1]) {
      l = mid;
    } else {
      r = mid;
    }
  }
};

// [1,2,1,3,5,6,4]

var findPeakElement2 = function (arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] < arr[m + 1]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l;
};
