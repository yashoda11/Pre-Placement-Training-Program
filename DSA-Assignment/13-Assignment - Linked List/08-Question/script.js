class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  function deleteNodeAtPosition(head, position) {
    if (head === null) {
      return null;
    }
  
    // If position is 1, update the head
    if (position === 1) {
      let newHead = head.next;
      if (newHead !== null) {
        newHead.prev = null;
      }
      return newHead;
    }
  
    let current = head;
    let count = 1;
  
    // Traverse to the node at the given position
    while (current !== null && count < position) {
      current = current.next;
      count++;
    }
  
    // If position is greater than the length of the list
    if (current === null) {
      return head;
    }
  
    // Adjust the prev and next pointers to remove the node
    let prevNode = current.prev;
    let nextNode = current.next;
    if (prevNode !== null) {
      prevNode.next = nextNode;
    }
    if (nextNode !== null) {
      nextNode.prev = prevNode;
    }
  
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
  
  // Test case 1
  let head1 = new Node(1);
  let node2 = new Node(3);
  let node3 = new Node(4);
  
  head1.next = node2;
  node2.prev = head1;
  node2.next = node3;
  node3.prev = node2;
  
  console.log("Input - 01 :");
  console.log("Original Linked list :");
  displayList(head1);
  
  head1 = deleteNodeAtPosition(head1, 3);
  
  console.log("Output :");
  console.log("Updated Linked list :");
  displayList(head1); // Output: 1 <-> 3
  
  // Test case 2
  let head2 = new Node(1);
  let node4 = new Node(5);
  let node5 = new Node(2);
  let node6 = new Node(9);
  
  head2.next = node4;
  node4.prev = head2;
  node4.next = node5;
  node5.prev = node4;
  node5.next = node6;
  node6.prev = node5;
  
  console.log("\nInput - 02 :");
  console.log("Original Linked list :");
  displayList(head2);
  
  head2 = deleteNodeAtPosition(head2, 1);
  
  console.log("Output :");
  console.log("Updated Linked list :");
  displayList(head2); // Output: 5 <-> 2 <-> 9
  