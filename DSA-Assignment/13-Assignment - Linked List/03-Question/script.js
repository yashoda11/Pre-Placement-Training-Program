// Node class to define each node in the linked list
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Function to reverse the linked list in groups of k
  function reverseInGroups(head, k) {
    if (head === null) {
      return null;
    }
  
    let current = head;
    let prev = null;
    let next = null;
    let count = 0;
  
    // Reverse the first k nodes of the linked list
    while (current !== null && count < k) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      count++;
    }
  
    // If there are more nodes, recursively reverse the remaining list
    if (next !== null) {
      head.next = reverseInGroups(next, k);
    }
  
    return prev;
  }
  
  // Function to display the linked list
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
  
  // Test case 1
  let head1 = new Node(1);
  head1.next = new Node(2);
  head1.next.next = new Node(2);
  head1.next.next.next = new Node(4);
  head1.next.next.next.next = new Node(5);
  head1.next.next.next.next.next = new Node(6);
  head1.next.next.next.next.next.next = new Node(7);
  head1.next.next.next.next.next.next.next = new Node(8);
  
  console.log("\nInput - 01 :");
  console.log("LinkedList :");
  displayList(head1);
  
  head1 = reverseInGroups(head1, 4);
  
  console.log("Output - 01:");
  displayList(head1); // Output: 4->2->2->1->8->7->6->5
  
  // Test case 2
  let head2 = new Node(1);
  head2.next = new Node(2);
  head2.next.next = new Node(3);
  head2.next.next.next = new Node(4);
  head2.next.next.next.next = new Node(5);
  
  console.log("\nInput - 02 :");
  console.log("LinkedList :");
  displayList(head2);
  
  head2 = reverseInGroups(head2, 3);
  
  console.log("Output - 02:");
  displayList(head2); // Output: 3->2->1->5->4
  