function reverseString(str) {
  const stack = [];

  // Push each character onto the stack
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let reversedStr = "";

  // Pop each character from the stack and append it to the reversed string
  while (stack.length > 0) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}

// Example usage:
const inputString = "GeeksforGeeks";
const reversedString = reverseString(inputString);
console.log(reversedString); // Output: "skeeGrofskeeG"
