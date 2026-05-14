var peakIndexInMountainArray = function (arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] > arr[m - 1] && arr[m] > arr[m + 1]) {
      return m;
    } else if (arr[m] < arr[m - 1]) {
      r = m;
    } else if (arr[m] < arr[m + 1]) {
      l = m;
    }
  }
};
