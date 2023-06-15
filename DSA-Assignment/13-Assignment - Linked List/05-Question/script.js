class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function deleteLastOccurrence(head, key) {
    if (head === null) {
      return null;
    }
  
    let lastOccurrence = null;
    let current = head;
    let prev = null;
    let prevLastOccurrence = null;
  
    while (current !== null) {
      if (current.value === key) {
        lastOccurrence = current;
        prevLastOccurrence = prev;
      }
      prev = current;
      current = current.next;
    }
  
    if (lastOccurrence !== null) {
      if (prevLastOccurrence === null) {
        head = head.next;
      } else {
        prevLastOccurrence.next = lastOccurrence.next;
      }
    }
  
    return head;
  }
  
  function displayList(head) {
    let output = '';
    let current = head;
  
    while (current !== null) {
      output += current.value;
      if (current.next !== null) {
        output += '->';
      }
      current = current.next;
    }
  
    console.log(output);
  }
  
  // Test case
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(5);
  head.next.next.next.next = new Node(2);
  head.next.next.next.next.next = new Node(10);
  
  console.log("Input :");
  displayList(head);
  
  head = deleteLastOccurrence(head, 2);
  
  console.log("Output :");
  displayList(head); // Output: 1->2->3->5->10
  