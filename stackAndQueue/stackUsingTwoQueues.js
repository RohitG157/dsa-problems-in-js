var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
  this.size = this.q1.length;
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q1[this.q1.length - 1] = x;
  this.size = this.q1.length;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  for (let i = 0; i < this.q1.length - 1; i++) {
    this.q2[this.q2.length - 1] = this.q1[i];
    delete this.q1[i];
  }

  const popEle = this.q1[0];
  delete this.q1[0];
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  this.size = this.q1.length;
  return popEle;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  for (let i = 0; i < this.q1.length - 1; i++) {
    this.q2[this.q2.length - 1] = this.q1[i];
    delete this.q1[i];
  }
  const top = this.q1[0];
  delete this.q1[0];
  this.q2[this.q2.length - 1] = top;
  this.q1 = [...this.q2];
  this.q2 = [];
  this.size = this.q1.length;
  return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.size === 0;
};
