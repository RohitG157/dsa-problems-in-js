var topKFrequent = function (nums, k) {
  let pq = new MaxPriorityQueue();
  let store = {};
  for (let i = 0; i < nums.length; i++) {
    if (!store[nums[i]]) {
      store[nums[i]] = { num: nums[i], value: 1 };
    } else {
      let freq = store[nums[i]].value;
      store[nums[i]].value = freq + 1;
    }
  }
  for (const key in obj) {
    pq.enqueue(obj);
  }
  let ans = [];
  for (let i = 0; i < k; i++) {
    let mostFrequent = pq.dequeue();
    ans.push(mostFrequent.num);
  }
  return ans;
};
