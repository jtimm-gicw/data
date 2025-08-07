'use strict';

function validateBrackets(input) {
  // Stack to keep track of opening brackets
  const stack = [];

  // A mapping of closing brackets to their corresponding opening brackets
  const bracketMap = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  // Loop through each character in the string
  for (let char of input) {
    // If it's an opening bracket, push it onto the stack
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    }

    // If it's a closing bracket
    else if (char === ')' || char === ']' || char === '}') {
      // Pop the top item from the stack
      const lastOpened = stack.pop();

      // Check if it matches the corresponding opening bracket
      if (lastOpened !== bracketMap[char]) {
        return false; // Mismatched or unmatched closing bracket
      }
    }

    // If it's not a bracket, ignore it (extra characters are allowed)
  }

  // After going through all characters,
  // If there are still items in the stack, they are unmatched opening brackets
  return stack.length === 0;
}
