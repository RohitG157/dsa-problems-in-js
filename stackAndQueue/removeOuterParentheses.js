var removeOuterParentheses = function (s) {
  // ()(()()(()()))
  s = s.split(""); // [ "(", ")", "(", "(", ")", "(", ")", "(", "(", ")", "(", ")", ")", ")" ]
  let stack = []; // []
  result = ""; // ""
  for (let i = 1; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push("(");
    } else if (s[i] == ")") {
      stack.pop();
      stack.length && (result += stack[stack.length - 1] + ")");
    }
  }
  return result;
};

removeOuterParentheses("()(()()(()()))");


