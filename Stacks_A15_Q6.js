function evaluatePostfixExpression(expression) {
  const stack = [];

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (isOperand(char)) {
      stack.push(parseInt(char));
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const result = evaluateOperation(operand1, operand2, char);
      stack.push(result);
    }
  }

  return stack.pop();
}

function isOperand(char) {
  return !isNaN(parseInt(char));
}

function evaluateOperation(operand1, operand2, operator) {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
    default:
      throw new Error("Invalid operator");
  }
}

// Example usage:
const postfixExpression = "231*+9-";
const result = evaluatePostfixExpression(postfixExpression);
console.log(result); // Output: -4
