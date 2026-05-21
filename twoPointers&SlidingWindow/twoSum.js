var twoSum = function (arr, target) {
  let store = {};
  for (let i = 0; i < arr.length; i++) {
    store[arr[i]] = i + 1;
  }

  for (let i = 0; i < arr.length; i++) {
    const nextVal = target - arr[i];
    if (store[nextVal] && store[nextVal] != i + 1) {
      return [i, store[nextVal] - 1];
    }
  }
};
