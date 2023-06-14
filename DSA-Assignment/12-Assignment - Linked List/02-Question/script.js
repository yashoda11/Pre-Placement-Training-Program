// Linked list node
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Function to check if linked list has a loop :
  
  function hasLoop(head) {
    let slow = head;
    let fast = head;
  
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        return true; // Loop detected
      }
    }
  
    return false; // No loop found
  }
  
  // Function to create a linked list with given values :

  function createLinkedList(values, x) {
    if (values.length === 0) {
      return null;
    }
  
    const head = new Node(values[0]);
    let current = head;
  
    for (let i = 1; i < values.length; i++) {
      const newNode = new Node(values[i]);
      current.next = newNode;
      current = newNode;
    }
  
    if (x >= 1 && x < values.length) {
      let tail = head;
      for (let i = 0; i < x; i++) {
        tail = tail.next;
      }
      current.next = tail; // Create a loop
    }
  
    return head;
  }
  
  // Test cases  - Example :
  const testCases = [
    { 
        values: [1, 3, 4],
        x: 2 
    },                          // Loop exists
    { 
        values: [1, 8, 3, 4],
        x: 0
    }             // No loop
  ];
  
  for (const testCase of testCases) {
    const head = createLinkedList(testCase.values, testCase.x);
    const hasLoopDetected = hasLoop(head);
    console.log(`N: ${testCase.values.length}`);
    console.log(`Linked List: [${testCase.values.join(', ')}]`);
    console.log(`x (position at which tail is connected) : ${testCase.x}`);
    console.log(`Has Loop: ${hasLoopDetected}`);
    console.log('-----------------------');
  }
  