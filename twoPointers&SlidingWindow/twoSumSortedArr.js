var twoSum = function (arr, target) {
  let l = 0;
  let r = arr.length - 1;
  while (arr[l] + arr[r] != target) {
    if (target - arr[l] > arr[r]) {
      l++;
    } else if (target - arr[l] < arr[r]) {
      r--;
    }
  }
  return [l + 1, r + 1];
};