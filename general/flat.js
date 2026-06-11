var flat = function (arr, n) {
  if (n == 0) return arr;
  let ans = [];
  function iterate(arr, n) {
    if (n < 0) return arr;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const newArr = iterate(arr[i], n - 1);
        newArr && ans.push(newArr);
      } else {
        ans.push(arr[i]);
      }
    }
  }
  iterate(arr, n);
  return ans;
};
