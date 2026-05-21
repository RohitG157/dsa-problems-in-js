var findClosestElements = function (arr, k, x) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if ((arr[m + k] - x) < (x - arr[m])) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return arr.slice(l, l + k);
};
