class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(val) {
      this.stack.push(val);
      if (
        this.minStack.length === 0 ||
        val <= this.minStack[this.minStack.length - 1]
      ) {
        this.minStack.push(val);
      }
    }
  
    pop() {
      if (this.stack.length === 0) {
        return;
      }
      const poppedElement = this.stack.pop();
      if (poppedElement === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
    }
  
    top() {
      if (this.stack.length === 0) {
        return null;
      }
      return this.stack[this.stack.length - 1];
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        return null;
      }
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  // Example:
  const minStack = new MinStack();
  const output = [];
  output.push(minStack.push(-2)); // null
  output.push(minStack.push(0)); // null
  output.push(minStack.push(-3)); // null
  output.push(minStack.getMin()); // -3
  minStack.pop(); 
  output.push(minStack.top()); // 0
  output.push(minStack.getMin()); // -2
  
  console.log(output);
  