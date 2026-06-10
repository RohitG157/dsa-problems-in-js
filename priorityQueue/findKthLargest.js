var findKthLargest = function (nums, k) {
  let pq = new CustomMaxPriorityQueue();
  for (let i = 0; i < nums.length; i++) {
    pq.enqueue("Task_" + i, nums[i]);
  }
  let ans = null;
  for (let i = 0; i < k; i++) {
    ans = pq.dequeue();
  }
  return ans.priority;
};

var findKthLargest = function (nums, k) {
  let pq = new MinPriorityQueue();
  let i = 0;
  while (i < nums.length) {
    pq.enqueue(nums[i]);
    i++;
    if (pq.size() > k) {
      pq.dequeue();
    }
  }
  return pq.front();
};
