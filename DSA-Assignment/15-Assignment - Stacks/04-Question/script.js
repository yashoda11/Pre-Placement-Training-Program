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
  
    reverse() {
      if (this.isEmpty() || this.items.length === 1) {
        return this; // Already reversed or empty stack
      }
  
      const topElement = this.pop(); // Step 2
  
      this.reverse(); // Step 3
  
      this.insertAtBottom(topElement); // Step 4
  
      return this; // Step 5
    }
  
    insertAtBottom(element) {
      if (this.isEmpty()) {
        this.push(element);
      } else {
        const topElement = this.pop();
        this.insertAtBottom(element);
        this.push(topElement);
      }
    }
  }

//Examples :

// Example - 01 :
  const stack1 = new Stack();
  stack1.push(3);
  stack1.push(2);
  stack1.push(1);
  stack1.push(7);
  stack1.push(6);
  const reversedStack1 = stack1.reverse();
  console.log("\nExample - 01 : Reverse the Stack using Recursion is :");
  console.log(reversedStack1.items); // Output: [6, 7, 1, 2, 3]
  
// Example - 02 :
  const stack2 = new Stack();
  stack2.push(4);
  stack2.push(3);
  stack2.push(9);
  stack2.push(6);
  const reversedStack2 = stack2.reverse();
  console.log("\nExample - 02 : Reverse the Stack using Recursion is :");
  console.log(reversedStack2.items); // Output: [6, 9, 3, 4]
  