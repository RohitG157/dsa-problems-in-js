class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftIndex(i) {
    return 2 * i + 1;
  }

  getRightIndex(i) {
    return 2 * i + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(val) {
    let lastIndex = this.heap.length;
    this.heap[lastIndex] = val;

    this.heapifyUp(lastIndex);
  }

  heapifyUp(lastIndex) {
    while (lastIndex > 0) {
      const parentIndex = this.getParentIndex(lastIndex);
      if (this.heap[parentIndex] > this.heap[lastIndex]) {
        let temp = this.heap[parentIndex];
        this.heap[parentIndex] = this.heap[lastIndex];
        this.heap[lastIndex] = temp;
        lastIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  extract() {
    let lastEleIndex = this.heap.length - 1;
    let firstEle = 0;
    const extractedEle = this.heap[0];
    this.heap[0] = this.heap[lastEleIndex];
    this.heap.pop();
    console.log(this.heap);

    this.heapifyDown(0);
    return extractedEle;
  }

  heapifyDown(index) {
    let left = this.getLeftIndex(index);
    let right = this.getRightIndex(index);
    let n = this.heap.length - 1;
    let smallest = index;

    if (left < n && this.heap[smallest] > this.heap[left]) {
      smallest = left;
    }
    if (right < n && this.heap[smallest] > this.heap[right]) {
      smallest = right;
    }

    if (smallest != index) {
      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];

      this.heapifyDown(smallest);
    }
  }

  heapifyDownFirst(index) {
    let leftEleIndex = this.getLeftIndex(index);
    let rightEleIndex = this.getRightIndex(index);
    while (
      leftEleIndex < this.heap.length ||
      rightEleIndex < this.heap.length
    ) {
      let currEle = this.heap[index];
      if (
        currEle < this.heap[leftEleIndex] &&
        currEle < this.heap[rightEleIndex]
      ) {
        break;
      } else if (
        this.heap[leftEleIndex] < currEle &&
        this.heap[leftEleIndex] < this.heap[rightEleIndex]
      ) {
        let temp = this.heap[index];
        this.heap[index] = this.heap[leftEleIndex];
        this.heap[leftEleIndex] = temp;
        index = leftEleIndex;
      } else if (
        this.heap[rightEleIndex] < currEle &&
        this.heap[rightEleIndex] < this.heap[leftEleIndex]
      ) {
        let temp = this.heap[index];
        this.heap[index] = this.heap[rightEleIndex];
        this.heap[rightEleIndex] = temp;
        index = rightEleIndex;
      }

      leftEleIndex = this.getLeftIndex(index);
      rightEleIndex = this.getRightIndex(index);
    }
  }
}

let minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(4);
minHeap.insert(10);
minHeap.insert(1);
minHeap.insert(0);
