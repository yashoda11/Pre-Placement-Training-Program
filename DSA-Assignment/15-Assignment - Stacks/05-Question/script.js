class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length === 0) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  function reverseString(S) {
    const stack = new Stack();
  
    // Push each character onto the stack
    for (let i = 0; i < S.length; i++) {
      stack.push(S[i]);
    }
  
    let reversedString = "";
  
    // Pop each character from the stack and append it to the reversedString
    while (!stack.isEmpty()) {
      reversedString += stack.pop();
    }
  
    return reversedString;
  }
  
// Example :
  const input = "GeeksforGeeks";
  console.log(`
  Using Stack, The Reverse of a given string "${input}" is : ${reverseString(input)} .
  `);                                                // Output: skeeGrofskeeG
  