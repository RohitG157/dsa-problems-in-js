function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

const saySomething = function (id) {
  console.log("Hi, User - " + id);
};
const testThrottle = throttle(saySomething, 1);
for (let i = 0; i < 100000; i++) {
  testThrottle(i);
}
