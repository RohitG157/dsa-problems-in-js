var searchRange = function (arr, target) {
  // [5,7,7,8,8,10]

  if (arr.length < 2) return [-1, -1];

  let l = 0;
  let r = arr.length - 1;
  let ans = [-1, -1];
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] < target) {
      l = m + 1;
    } else if (arr[m] > target) {
      r = m;
    } else if (arr[m] === target) {
      ans[0] = m;
      r = m - 1;
    }
  }

  l = 0;
  r = arr.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] < target) {
      l = m + 1;
    } else if (arr[m] > target) {
      r = m;
    } else if (arr[m] === target) {
      ans[1] = m;
      l = m + 1;
    }
  }
};
