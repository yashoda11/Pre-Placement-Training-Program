class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.random = null;
    }
  }
  
  function copyRandomList(head) {
    if (!head) return null;
  
    // Create a new node for each existing node and insert it after the original node
    let curr = head;
    while (curr) {
      let newNode = new Node(curr.data);
      newNode.next = curr.next;
      curr.next = newNode;
      curr = newNode.next;
    }
  
    // Update the random pointers of the new nodes
    curr = head;
    while (curr) {
      if (curr.random) {
        curr.next.random = curr.random.next;
      }
      curr = curr.next.next;
    }
  
    // Separate the original and copied linked lists
    let newHead = head.next;
    let newCurr = newHead;
    curr = head;
    while (curr) {
      curr.next = curr.next.next;
      if (newCurr.next) {
        newCurr.next = newCurr.next.next;
      }
      curr = curr.next;
      newCurr = newCurr.next;
    }
  
    return newHead;
  }

  // Example 1
let head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);

head1.random = head1.next;
head1.next.random = head1.next.next.next;

console.log("Original List:");
printList(head1);

let copiedHead1 = copyRandomList(head1);

console.log("Copied List:");
printList(copiedHead1);

// Example 2
let head2 = new Node(1);
head2.next = new Node(3);
head2.next.next = new Node(5);
head2.next.next.next = new Node(9);

head2.random = head2;
head2.next.next.random = head2.next.next.next;

console.log("Original List:");
printList(head2);

let copiedHead2 = copyRandomList(head2);

console.log("Copied List:");
printList(copiedHead2);

// Helper function to print the linked list
function printList(head) {
  let curr = head;
  while (curr) {
    let randomData = curr.random ? curr.random.data : "NULL";
    console.log(
      `Data: ${curr.data}, Random Pointer: ${randomData}`
    );
    curr = curr.next;
  }
}
