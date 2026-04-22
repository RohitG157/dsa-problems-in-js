function Node(val) {
  this.val = val ? val : 0;
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

LinkedList.prototype.isIntersecting = function (headA, headB) {
  let currA = headA;
  let currB = headB;
  let setB = new Set();
  while (currB) {
    setB.add(currB);
    currB = currB.next;
  }

  while (currA) {
    if (setB.has(currA)) {
      return currA;
    }
    currA = currA.next;
  }
  return null;
};

LinkedList.prototype.removeElements = function (head, val) {
  let prev = null;
  while (head && head.val == val) {
    head = head.next;
  }
  let curr = head;
  while (curr) {
    if (curr.val == val) {
      if (prev) prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return head;
};

LinkedList.prototype.removeFromEnd = function (head, nFromEnd) {
  // reverse the LinkedList
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow.next = fast.next;
    fast.next = head;
    head = fast;
    fast = slow.next;
  }

  let curr = head;
  for (let i = 0; i < nFromEnd - 2; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;

  slow = head;
  fast = head.next;
  while (fast && fast.next) {
    slow.next = fast.next;
    fast.next = head;
    head = fast;
    fast = slow.next;
  }
  return head;
};

LinkedList.prototype.removeFromEnd2 = function (head, nFromEnd) {
  let store = new Set();
  let curr = head;
  while (curr) {
    store.add(curr);
    curr = curr.next;
  }

  const nFromStart = store.size - nFromEnd;
  if (nFromStart == 0) {
    head = head.next;
  } else {
    curr = head;
    for (let i = 0; i < nFromStart - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }

  return head;
};

LinkedList.removeElementFromEndUsingOnePass = function (head, n) {
  if (!head) return head;
  const sentinel = new Node();
  sentinel.next = head;
  let slow = sentinel;
  let fast = head;
  let i = 0;
  while (fast) {
    if (i < n) {
      fast = fast.next;
      i++;
    } else {
      slow = slow.next;
      fast = fast.next;
    }
  }
  slow.next = slow.next.next;
  return sentinel.next;
};

LinkedList.prototype.deleteDuplicateFromSorted = function (head) {
  if (!head) return head;
  let slow = head;
  let fast = head.next;
  while (fast) {
    if (slow.val === fast.val) {
      slow.next = fast.next;
    } else {
      slow = slow.next;
    }
    fast = fast.next;
  }
  return head;
};

LinkedList.prototype.deleteDuplicateFromSortedUsingOnePointer = function (
  head,
) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

LinkedList.prototype.oddEventList = function (head) {
  if (!head) return head;
  let odd = head;
  let even = head.next;
  let headEven = even;
  while (even) {
    odd.next = even.next;
    even.next = odd.next ? odd.next.next : null;
    if (odd.next) odd = odd.next;
    even = even.next;
  }
  odd.next = headEven;
  return head;
};

LinkedList.prototype.addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let headB = l2;

  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2.val ? l2.val : 0;
    const sum = carry + val1 + val2;
    carry = Math.floor(sum / 10);
    const newVal = sum % 10;
    if (l2) {
      l2.val = newVal;
    } else {
      node = new Node(newVal);
      l2 = node;
    }
    if (l1) l1 = l1.next;
    if (!l2.next && l1) {
      l2.next = new Node();
    }
    l2 = l2.next;
  }
  if (carry) l2.val = carry;
  return headB;
};

LinkedList.prototype.mergeTwoSortedList = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let dummy = new Node();
  let dummyHead = dummy;
  while (list1 || list2) {
    const val1 = list1 ? list1.val : Infinity;
    const val2 = list2 ? list2.val : Infinity;
    if (val1 < val2) {
      dummy.next = new Node(val1);
      list1 && (list1 = list1.next);
    } else {
      dummy.next = new Node(val2);
      list2 && (list2 = list2.next);
    }
    dummy = dummy.next;
  }
  return dummyHead.next;
};

LinkedList.prototype.mergeTwoSortedList = function (list1, list2) {
  let start; //
  if (list1.val < list2.val) {
    start = list1;
    list1 = list1.next;
  } else {
    start = list2;
    list2 = list2.next;
  }

  let startHead = start;
  while (list1 || list2) {
    const val1 = list1 ? list1.val : Infinity;
    const val2 = list2 ? list2.val : Infinity;
    if (val1 < val2) {
      start.next = list1;
      list1 && (list1 = list1.next);
    } else {
      start.next = list2;
      list2 && (list2 = list2.next);
    }
    start = start.next;
  }
};

LinkedList.prototype.rotateRight = function (head, k) {
  if (!k) return head;
  if (!head || !head.next) return head;
  let curr = head;
  let length = 0;
  while (curr) {
    curr = curr.next;
    length++;
  }
  let passes = k % length;
  if (!passes) return head;
  let prevIndex = length - passes - 1;
  curr = head;
  let i = 0;
  let fP = curr.next,
    fPHead = fP;
  while (curr.next || fP.next) {
    if (i < prevIndex) {
      curr = curr.next;
      fP = curr.next;
      fPHead = fP;

      i++;
    } else {
      curr.next = null;
      fP.next && (fP = fP.next);
    }
  }
  fP.next = head;
  return fPHead;
};

LinkedList.prototype.swapPairsIteration = function (head) {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head.next;
  head = fast;
  let lastSwapped = null;
  while (slow && fast) {
    slow.next = fast.next;
    fast.next = slow;
    if (lastSwapped) {
      lastSwapped.next = fast;
    }
    lastSwapped = slow;
    slow = slow.next;
    slow && (fast = slow.next);
  }
  return head;
};

LinkedList.prototype.swapPairsRecursive = function (head) {
  return this.swapPairs(head, head.next);
};

LinkedList.prototype.swapPairs = function (first, second) {
  if (!first.next) return first;
  first.next = second.next;
  second.next = first;
  let head = second.next;
  head.next = first.next ? this.swapPairs(first.next, first.next.next) : null;
  return head;
};
