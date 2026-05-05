var evalRPN = function (tokens) {
  let operators = {
    "*": (a, b) => Number(a) * Number(b),
    "-": (a, b) => Number(a) - Number(b),
    "/": (a, b) => {
      let result = Math.floor(Number(a) / Number(b));
      result = result < 0 ? 0 : result;
    },
    "+": (a, b) => Number(a) + Number(b),
  };
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!operators[tokens[i]]) {
      stack.push(tokens[i]);
    } else if (operators[tokens[i]]) {
      const secondOperand = stack.pop();
      const firstOperand = stack.pop();
      result = operators[tokens[i]](firstOperand, secondOperand);
      stack.push(result);
    }
  }
  return stack[0];
};

evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
