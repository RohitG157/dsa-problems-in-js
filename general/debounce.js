const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

debounce(callMe, 3000);
debounce(callMe, 3000);

function callMe() {
  console.log("Call Me");
}
