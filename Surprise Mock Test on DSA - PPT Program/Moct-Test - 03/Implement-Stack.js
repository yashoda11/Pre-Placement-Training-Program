class Stack {
    constructor() {
      this.stackArray = [];
    }
  
    push(element) {
      this.stackArray.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty. Cannot perform pop operation.";
      }
      return this.stackArray.pop();
    }
  
    isEmpty() {
      return this.stackArray.length === 0;
    }
  }
  
  // Usage example
  const myStack = new Stack();
  
  myStack.push(5);
  myStack.push(10);
  myStack.push(15);
  
  console.log(myStack.pop()); // Output: 15
  console.log(myStack.pop()); // Output: 10
  console.log(myStack.isEmpty()); // Output: false
  console.log(myStack.pop()); // Output: 5
  console.log(myStack.pop()); // Output: Stack is empty. Cannot perform pop operation.
  console.log(myStack.isEmpty()); // Output: true
  