class Stack {
    constructor() {
      this.q1 = [];
      this.q2 = [];
    }
  
    push(element) {
      // Add the new element to q2
      this.q2.push(element);
  
      // Move all the elements from q1 to q2
      while (this.q1.length > 0) {
        this.q2.push(this.q1.shift());
      }
  
      // Swap q1 and q2
      const temp = this.q1;
      this.q1 = this.q2;
      this.q2 = temp;
    }
  
    pop() {
      // If q1 is empty, the stack is already empty
      if (this.q1.length === 0) {
        return -1;
      }
  
      // Remove and return the top element from q1
      return this.q1.shift();
    }
  }
  
//Examples :

// Example - 01 :
  const stack1 = new Stack();
  stack1.push(2);
  stack1.push(3);
  const output1 = [];
  output1.push(stack1.pop());   // Output: [3]
  stack1.push(4);
  output1.push(stack1.pop());   // Output: [3, 4]
  console.log(output1);
  
// Example - 02 :
  const stack2 = new Stack();
  stack2.push(2);
  const output2 = [];
  output2.push(stack2.pop());   // Output: [2]
  output2.push(stack2.pop());   // Output: [2, -1]
  console.log(output2);
  