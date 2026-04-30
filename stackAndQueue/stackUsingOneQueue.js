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
  this.q1[this.q1.length] = x;
  this.size = this.q1.length;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.q1.length == 0) return null;
  for (let i = 0; i < this.q1.length - 1; i++) {
    const shiftedEle = this.q1.shift();
    this.q2[this.q2.length] = shiftedEle;
  }
  console.log(this.q1);

  const popEle = this.q1[0];
  this.q1.shift();
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
    this.q2[this.q2.length] = this.q1[i];
    this.q1.shift();
  }
  const top = this.q1[0];
  this.q1.shift();
  this.q2[this.q2.length] = top;
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
