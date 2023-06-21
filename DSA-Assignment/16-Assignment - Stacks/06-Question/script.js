class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    size() {
      return this.items.length;
    }
  
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  function reverseFirstKElements(queue, k) {
    if (queue.isEmpty() || k <= 0 || k > queue.size()) {
      return "Invalid input";
    }
  
    const stack = [];
    for (let i = 0; i < k; i++) {
      stack.push(queue.dequeue());
    }
  
    while (stack.length > 0) {
      queue.enqueue(stack.pop());
    }
  
    for (let i = 0; i < queue.size() - k; i++) {
      queue.enqueue(queue.dequeue());
    }
  
    return queue;
  }
  
  // Example usage:
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  
  const k = 3;
  const reversedQueue = reverseFirstKElements(queue, k);
  console.log("Reversed Queue:");
  while (!reversedQueue.isEmpty()) {
    console.log(reversedQueue.dequeue());
  }
  