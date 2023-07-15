function findNextGreaterElements(arr) {
  const stack = [];
  const result = new Array(arr.length).fill(-1);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = arr[i];
    }
    stack.push(i);
  }

  while (stack.length) {
    const index = stack.pop();
    result[index] = -1;
  }

  return result;
}

// Example usage:
const arr = [1, 3, 2, 4];
const result = findNextGreaterElements(arr);
console.log(result); // Output: [3, 4, 4, -1]
