class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function isCircularLinkedList(head) {
    if (head === null || head.next === null) {
      return false;
    }
  
    let slow = head;
    let fast = head.next;
  
    while (fast !== null && fast.next !== null) {
      if (slow === fast) {
        return true;
      }
      slow = slow.next;
      fast = fast.next.next;
    }
  
    return false;
  }
  
  // Create a circular linked list
  let head = new Node(1);
  let node2 = new Node(2);
  let node3 = new Node(3);
  let node4 = new Node(4);
  let node5 = new Node(5);
  
  head.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = head; // Create the cycle
  
  console.log(isCircularLinkedList(head)); // Output: true
  
  // Create a non-circular linked list
  let head2 = new Node(1);
  let node6 = new Node(2);
  let node7 = new Node(3);
  let node8 = new Node(4);
  
  head2.next = node6;
  node6.next = node7;
  node7.next = node8;
  
  console.log(isCircularLinkedList(head2)); // Output: false
  