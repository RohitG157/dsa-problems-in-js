function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;
}

LinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let i = 0;
  let curr = this.head;
  while (i != index) {
    if (i == index) {
      return curr.val;
    } else {
      curr = curr.next;
    }
  }
};

LinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val);
  node.next = this.head;
  this.head = node;
  this.size++;
};

LinkedList.prototype.addAtTail = function (val) {
  const node = new Node(val);
  let curr = this.head;
  if (curr == null) {
    this.head = node;
  } else {
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = node;
  }

  this.size++;
};

LinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  const node = new Node(val);
  if (index == 0) {
    this.addAtHead(val);
  } else {
    let curr = this.head;
    let i = 0;
    while (i != index - 1) {
      curr = curr.next;
      i++;
    }
    node.next = curr.next;
    curr.next = node;
    this.size++;
  }
};

LinkedList.prototype.deleteAt = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let curr = this.head;
  if (index == 0) {
    this.head = curr.next;
  } else {
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
};

LinkedList.prototype.middle = function (head) {
  let slow = head;
  let fast = head;
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return fast.next == null ? slow : slow.next;
};

LinkedList.prototype.reverse = function (head) {
  let slow = head;
  let fast = head.next;
  while (fast) {
    slow.next = fast.next;
    fast.next = head;
    head = fast;
    fast = slow.next;
  }
  return head;
};

LinkedList.prototype.hasCycle = function (head) {
  let seenNodes = new Set();
  let curr = head;
  while (curr) {
    if (seenNodes.has(curr)) {
      return true;
    }
    seenNodes.add(curr);
    curr = curr.next;
  }
  return false;
};

LinkedList.prototype.hasCycleUsingFloyd = function (head) {
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

LinkedList.prototype.isPalindrome = function (head) {
	if (!head.next) return true;
  // calculate middle
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Middle second half
  let middle = slow;
  let start = middle;
  let end = middle.next;
  while (end) {
    start.next = end.next;
    end.next = middle;
    middle = end;
    end = start.next;
  }

  // Compare the first and second half
  let curr = head;
  while (middle) {
    if (curr.val != middle.val) {
      return false;
    }
    middle = middle.next;
    curr = curr.next;
  }

  return true;
};
