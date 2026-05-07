var search = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target == arr[mid]) {
      return mid;
    }
    if (arr[left] < arr[mid]) {
      // Left array is sorted
      if (target >= arr[left] && target < arr[mid]) {
        // My target element is between left and mid
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (arr[left] > arr[mid]) {
      // Right array is sorted
      if (target > arr[mid] && target <= arr[right]) {
        // My target element is between mid and right
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
