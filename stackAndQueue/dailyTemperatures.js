var dailyTemperatures = function (temperatures) {
  let stack = [];
  nextWarmerDayMap = {};
  let n = temperatures.length;

  stack.push([temperatures[n - 1], n - 1]);
  nextWarmerDayMap[n - 1] = 0;

  for (let i = n - 2; i >= 0; i--) {
    for (let j = stack.length - 1; j >= 0; j--) {
      if (temperatures[i] < stack[stack.length - 1]) {
        nextWarmerDayMap[i] = stack[stack.length - 1][1] - i;
        break;
      } else {
        stack.pop();
      }
    }
    nextWarmerDayMap[i] = nextWarmerDayMap[i] ? nextWarmerDayMap[i] : 0;
    stack.push(temperatures[i]);
  }
};
