class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function nextLargerNodes(head) {
    let values = [];
    let stack = [];
  
    // Traverse the linked list and store the values in an array
    while (head) {
      values.push(head.val);
      head = head.next;
    }
  
    let result = new Array(values.length).fill(0);
  
    for (let i = 0; i < values.length; i++) {
      while (stack.length > 0 && values[stack[stack.length - 1]] < values[i]) {
        let index = stack.pop();
        result[index] = values[i];
      }
      stack.push(i);
    }
  
    return result;
  }

// Example 1
let head1 = new ListNode(2);
head1.next = new ListNode(1);
head1.next.next = new ListNode(5);

let result1 = nextLargerNodes(head1);
console.log(result1); // Output: [5, 5, 0]

// Example 2
let head2 = new ListNode(2);
head2.next = new ListNode(7);
head2.next.next = new ListNode(4);
head2.next.next.next = new ListNode(3);
head2.next.next.next.next = new ListNode(5);

let result2 = nextLargerNodes(head2);
console.log(result2); // Output: [7, 0, 5, 5, 0]
