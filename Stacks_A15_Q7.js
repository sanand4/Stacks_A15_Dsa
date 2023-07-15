class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);

    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  pop() {
    const popped = this.stack.pop();

    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// Example usage:
const minStack = new MinStack();
minStack.push(5);
minStack.push(3);
minStack.push(7);
minStack.push(2);

console.log(minStack.getMin()); // Output: 2
console.log(minStack.top()); // Output: 2

minStack.pop();

console.log(minStack.getMin()); // Output: 3
console.log(minStack.top()); // Output: 7
