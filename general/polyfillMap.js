Array.prototype.myMap = function (fn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(fn(this[i], i, this));
  }
  return result;
};

Array.prototype.filter = function (fn) {
  let result = [];
  for (let i = 0; i < this; i++) {
    const ans = fn(this[i], i, this);
    ans && result.push(this[i]);
  }
  return result;
};

Array.prototype.customReduce = function (fn, initVal) {
  if (!this || this.length == 0) {
    return TypeError("Please provide the valid value.");
  }
  let res;
  let start = 0;
  if (initVal != undefined) {
    res = initVal;
  } else {
    res = this[0];
    start = 1;
  }
  for (let i = start; i < this.length; i++) {
    res = fn(res, this[i], i, this);
  }
  return res;
};
