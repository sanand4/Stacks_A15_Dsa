class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(element) {
    this.q1.push(element);
  }

  pop() {
    if (this.q1.length === 0 && this.q2.length === 0) {
      return -1;
    }

    if (this.q2.length === 0) {
      while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
      }
      return this.q1.shift();
    } else {
      while (this.q2.length > 1) {
        this.q1.push(this.q2.shift());
      }
      return this.q2.shift();
    }
  }

  top() {
    if (this.q1.length === 0 && this.q2.length === 0) {
      return -1;
    }

    if (this.q2.length === 0) {
      while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
      }
      const topElement = this.q1[0];
      this.q2.push(this.q1.shift());
      return topElement;
    } else {
      while (this.q2.length > 1) {
        this.q1.push(this.q2.shift());
      }
      const topElement = this.q2[0];
      this.q1.push(this.q2.shift());
      return topElement;
    }
  }

  isEmpty() {
    return this.q1.length === 0 && this.q2.length === 0;
  }
}

// Example usage:
const stack = new Stack();
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
stack.push(4);
console.log(stack.pop()); // Output: 4
