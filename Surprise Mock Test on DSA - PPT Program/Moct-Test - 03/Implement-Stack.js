// Mock Test - 03 :
// Question - 01 :
// Implement a Stack using an array in JavaScript. 
// Include the necessary methods such as push, pop, and isEmpty.


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
  
// Testing Stack Operations :

  const myStack = new Stack();
  
// 1. Push Operations :

  myStack.push(5);
  myStack.push(10);
  myStack.push(15);
  
// 2. Pop Operations :

  console.log(myStack.pop());                   // Output: 15
  console.log(myStack.pop());                   // Output: 10

// 3. isEmpty Operations :

  console.log(myStack.isEmpty());               // Output: false

  console.log(myStack.pop());                   // Output: 5
  console.log(myStack.pop());                   // Output: Stack is empty. Cannot perform pop operation.
  console.log(myStack.isEmpty());               // Output: true
  