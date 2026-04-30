var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const length = this.s1.length;
  for (let i = 0; i < length - 1; i++) {
    this.s2.push(this.s1.pop());
  }
  const poppedEle = this.s1.pop();

  const s2length = this.s2.length;
  for (let i = 0; i < s2length; i++) {
    this.s1.push(this.s2.pop());
  }

  return poppedEle;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  const length = this.s1.length;
  for (let i = 0; i < length - 1; i++) {
    this.s2.push(this.s1.pop());
  }
  const peekEle = this.s1.pop();
  this.s2.push(peekEle);

  const s2length = this.s2.length;
  for (let i = 0; i < s2length; i++) {
    this.s1.push(this.s2.pop());
  }
  return peekEle;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s1.length === 0;
};

// ["MyQueue","push","push","peek","pop","empty"]
// [[],[1],[2],[],[],[]]
