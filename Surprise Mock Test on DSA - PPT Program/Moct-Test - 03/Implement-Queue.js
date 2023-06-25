// Mock Test - 03 :
// Question - 02 :
// Implement a Queue using an array in JavaScript. 
// Include the necessary methods such as enqueue, dequeue, and isEmpty.



class Queue {
    constructor() {
      this.queueArray = [];
    }
  
    enqueue(element) {
      this.queueArray.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty. Hence, Cannot perform any dequeue operations.";
      }
      return this.queueArray.shift();
    }
  
    isEmpty() {
      return this.queueArray.length === 0;
    }
  }
  
// Testing Queue Operations :

  const myQueue = new Queue();
  
// 1. Enqueue Operations :
  myQueue.enqueue(3);
  myQueue.enqueue(6);
  myQueue.enqueue(9);

// 2. Dequeue Operations :

  console.log(myQueue.dequeue());              // Output: 3
  console.log(myQueue.dequeue());              // Output: 6

// 3. isEmpty Operations :
  console.log(myQueue.isEmpty());              // Output: false
  console.log(myQueue.dequeue());              // Output: 9
  console.log(myQueue.dequeue());              // Output: Queue is empty. Hence, Cannot perform any dequeue operations.
  console.log(myQueue.isEmpty());              // Output: true
  