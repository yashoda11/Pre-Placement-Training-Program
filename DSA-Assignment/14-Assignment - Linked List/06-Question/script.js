class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function leftShiftLinkedList(head, k) {
    if (!head || k === 0) return head;
  
    let length = 0;
    let curr = head;
    let tail = null;
  
    // Find the length of the linked list and the tail node
    while (curr) {
      length++;
      tail = curr;
      curr = curr.next;
    }
  
    // Adjust k if it exceeds the length of the linked list
    k = k % length;
  
    if (k === 0) return head;
  
    // Find the new head node after left-shifting
    let newHead = head;
    let prev = null;
    curr = head;
    let count = 0;
  
    while (count < k) {
      prev = curr;
      curr = curr.next;
      count++;
    }
  
    newHead = curr;
    prev.next = null;
    tail.next = head;
  
    return newHead;
  }

// Example - 01 :
let head1 = new ListNode(2);
head1.next = new ListNode(4);
head1.next.next = new ListNode(7);
head1.next.next.next = new ListNode(8);
head1.next.next.next.next = new ListNode(9);

console.log("Input - 01 :");
console.log("Original List:");
printList(head1);

let shiftedHead1 = leftShiftLinkedList(head1, 3);

console.log("Output - Shifted List is : ");
printList(shiftedHead1);

// Example - 02 :
let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);
head2.next.next.next.next = new ListNode(5);
head2.next.next.next.next.next = new ListNode(6);
head2.next.next.next.next.next.next = new ListNode(7);
head2.next.next.next.next.next.next.next = new ListNode(8);

console.log("\nInput - 02 :");
console.log("Original List:");
printList(head2);

let shiftedHead2 = leftShiftLinkedList(head2, 4);

console.log("Output - Shifted List is :");
printList(shiftedHead2);

// Helper function to print the linked list
function printList(head) {
  let curr = head;
  let output = "";

  while (curr) {
    output += `${curr.val} -> `;
    curr = curr.next;
  }

  output = output.slice(0, -4); // Remove the last " -> "
  console.log(output);
}
