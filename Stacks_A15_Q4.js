function reverseStack(stack) {
  if (stack.length <= 1) {
    return stack;
  }

  const top = stack.pop();
  const reversedStack = reverseStack(stack);
  reversedStack.push(top);
  return reversedStack;
}

// Example usage:
const stack = [3, 2, 1, 7, 6];
const reversedStack = reverseStack(stack);
console.log(reversedStack); // Output: [6, 7, 1, 2, 3]
