var kthSmallest = function (matrix, k) {
  const n = matrix[0].length;
  let pq = new MinPriorityQueue((x) => x.val);
  let count = 0;
  for (let i = 0; i < n; i++) {
    pq.enqueue({ row: i, col: 0, val: matrix[i][0] });
  }
  let min = 0;
  while (count != k) {
    min = pq.dequeue();
    count++;
    if (min.col + 1 < n) {
      pq.enqueue({
        row: min.row,
        col: min.col + 1,
        val: matrix[min.row][min.col + 1],
      });
    }
  }
  return min.val;
};
