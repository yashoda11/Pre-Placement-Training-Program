class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function oddEvenList(head) {
    if (!head || !head.next) return head;
  
    let oddHead = head;
    let evenHead = head.next;
    let odd = oddHead;
    let even = evenHead;
  
    while (even && even.next) {
      odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even = even.next;
    }
  
    odd.next = evenHead;
  
    return oddHead;
  }

// Example 1
let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);
head1.next.next.next.next = new ListNode(5);

console.log("Original List:");
printList(head1);

let reorderedHead1 = oddEvenList(head1);

console.log("Reordered List:");
printList(reorderedHead1);

// Example 2
let head2 = new ListNode(2);
head2.next = new ListNode(1);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(5);
head2.next.next.next.next = new ListNode(6);
head2.next.next.next.next.next = new ListNode(4);
head2.next.next.next.next.next.next = new ListNode(7);

console.log("Original List:");
printList(head2);

let reorderedHead2 = oddEvenList(head2);

console.log("Reordered List:");
printList(reorderedHead2);

// Helper function to print the linked list with arrows
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
  