var MinStack = function () {
  this.s = [];
  this.min = Infinity;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.min > val) this.min = val;
  this.s.push([val, this.min]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.s.pop();
  this.s.length && (this.min = this.s[this.s.length - 1][1]);
  this.s.length == 0 && (this.min = Infinity);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.s[this.s.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.s[this.s.length - 1][1];
};

