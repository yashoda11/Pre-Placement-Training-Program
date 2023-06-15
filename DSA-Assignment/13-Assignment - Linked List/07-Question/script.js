class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  function reverseDoublyLinkedList(head) {
    if (head === null) {
      return null;
    }
  
    let current = head;
    let temp = null;
  
    // Swap prev and next pointers for all nodes
    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev; // Move to the next node (previously prev)
    }
  
    // The last node will be the new head
    head = temp.prev;
  
    return head;
  }
  
  function displayList(head) {
    let output = '';
    let current = head;
  
    while (current !== null) {
      output += current.value;
      if (current.next !== null) {
        output += ' <-> ';
      }
      current = current.next;
    }
  
    console.log(output);
  }
  
  // Test case
  let head = new Node(10);
  let node2 = new Node(8);
  let node3 = new Node(4);
  let node4 = new Node(2);
  
  head.next = node2;
  node2.prev = head;
  node2.next = node3;
  node3.prev = node2;
  node3.next = node4;
  node4.prev = node3;
  
  console.log("Original Linked list:");
  displayList(head);
  
  head = reverseDoublyLinkedList(head);
  
  console.log("Reversed Linked list:");
  displayList(head);                          // Output: 2 <-> 4 <-> 8 <-> 10
  