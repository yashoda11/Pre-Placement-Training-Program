// Linked list node
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Function to find Nth node from the end of the linked list
  function findNthFromEnd(head, N) {
    if (head === null || N <= 0) {
      return `${N} is more than the number of nodes in the linked list, the output is -1`; // Invalid input
    }
  
    let slow = head;
    let fast = head;
  
    // Move the fast pointer N nodes ahead
    for (let i = 0; i < N; i++) {
      if (fast === null) {
        return `${N} is more than the number of nodes in the given linked list. Hence, the output is -1`; // N is greater than the number of nodes
      }
      fast = fast.next;
    }
  
    // Move both pointers until the fast pointer reaches the end
    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }
  
    if (slow === null) {
      return `
      ${N} is more than the number of nodes (${head.length}) in the linked list, the output is -1
      `; // N is greater than the number of nodes
    }
  
    return slow.value; // Return the value of the Nth node from the end
  }
  
  // Function to create a linked list with given values
  function createLinkedList(values) {
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
  
    return head;
  }
  
  // Test cases
  const testCases = [
    { 
       values: [1, 2, 3, 4, 5, 6, 7, 8, 9], 
       N: 2 
    },
    { 
       values: [10, 5, 100, 5], 
       N: 5 
    }
  ];
  
  for (const testCase of testCases) {
    const head = createLinkedList(testCase.values);
    const result = findNthFromEnd(head, testCase.N);
    console.log(`Input: LinkedList: ${testCase.values.join('->')}`);
    console.log(`N: ${testCase.N}`);
    console.log(`Output: In the given ${testCase.values.length} Nodes, the Node ${testCase.N} from the end is : ${result}`);
    console.log('-----------------------');
  }
  