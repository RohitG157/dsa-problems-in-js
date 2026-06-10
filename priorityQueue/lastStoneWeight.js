var lastStoneWeight = function (stones) {
  let pq = new MaxPriorityQueue();
  for (let i = 0; i < stones.length; i++) {
    pq.enqueue(stones[i]);
  }

  while (pq.size() > 1) {
    let x = pq.dequeue();
    let y = pq.dequeue();
    if (x != y) {
      pq.enqueue(Math.abs(x - y));
    }
  }
  return pq.size() == 1 ? pq.front() : 0;
};
