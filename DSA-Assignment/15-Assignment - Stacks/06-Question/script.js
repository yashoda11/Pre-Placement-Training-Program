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
  
  function evaluatePostfixExpression(S) {
    const stack = new Stack();
  
    // Iterate through each character in the postfix expression
    for (let i = 0; i < S.length; i++) {
      const char = S[i];
  
      // If the character is an operand, push it onto the stack
      if (!isNaN(char)) {
        stack.push(Number(char));
      } else {
        // If the character is an operator, perform the operation on the top two elements of the stack
        const operand2 = stack.pop();
        const operand1 = stack.pop();
  
        switch (char) {
          case "+":
            stack.push(operand1 + operand2);
            break;
          case "-":
            stack.push(operand1 - operand2);
            break;
          case "*":
            stack.push(operand1 * operand2);
            break;
          case "/":
            stack.push(operand1 / operand2);
            break;
        }
      }
    }
  
    // The final result will be the top element of the stack
    return stack.pop();
  }
  
//Examples :
  // Example - 01 :
  const postfixExpression1 = "231*+9-";
  console.log(`
  The Final Value of the given Postfix Expression "${postfixExpression1}" is : ${evaluatePostfixExpression(postfixExpression1)} .
  `);                               // Output: -4
  
// Example - 02 :
  const postfixExpression2 = "123+*8-";
  console.log(`
  The Final Value of the given Postfix Expression "${postfixExpression2}" is : ${evaluatePostfixExpression(postfixExpression2)} .
  `);