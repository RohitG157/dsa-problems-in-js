class MaxPriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(value, priority) {
    this.heap.push({ value, priority });
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[parent].priority >= this.heap[index].priority) {
        break;
      }
      this.swap(index, parent);
      index = parent;
    }
  }

  dequeue() {
    if (!this.heap.length) return null;
    const dequeuedEle = this.heap[0];
    this.swap(0, this.heap.length - 1);
    this.heap.pop();
    this.heapifyDown(0);
    return dequeuedEle;
  }

  heapifyDown(index) {
    let largest = index;
    let n = this.size();
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (left < n && this.heap[left].priority > this.heap[largest].priority) {
      largest = left;
    }
    if (right < n && this.heap[right].priority > this.heap[largest].priority) {
      largest = right;
    }

    if (largest != index) {
      this.swap(largest, index);
      this.heapifyDown(largest);
    }
  }

  front() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length == 0;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
