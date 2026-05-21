var maxSlidingWindow = function (arr, k) {
  let n = arr.length;
  let ans = Array(n - k + 1).fill(0);
  let max = arr[0];
  while (j < n) {
    if (j - i <= k - 1) {
      max = Math.max(max, arr[j]);
      j++;
    } else {
      ans[i] = max;
      i = i + 1;
    }
  }
  return ans;
};

var maxSlidingWindow2 = function (arr, k) {
  let res = [];
  let q = [];

  let i = (j = 0);
  while (j < arr.length) {
    while (q.length && arr[j] > q[q.length - 1]) {
      q.pop();
    }
    q.push(arr[j]);

    if (j >= k - 1) {
      res.push(q[0]);
      if (arr[i] == q[0]) q.shift();
      ++i;
    }
    ++j;
  }
  return res;
};
