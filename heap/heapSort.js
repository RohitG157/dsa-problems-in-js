const heapSort = function (arr) {
  let n = arr.length;

  for (let i = n - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, 0, i);
  }

  console.log(arr);
};

let heapifyDown = function (arr, i, n) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[largest] < arr[left]) {
    largest = left;
  }

  if (right < n && arr[largest] < arr[right]) {
    largest = right;
  }

  if (largest != i) {
    [arr[largest], arr[i]] = [arr[i], arr[largest]];
    heapifyDown(arr, largest, n);
  }
};
