function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  function addTwoNumbers(l1, l2) {
    let result = [];
    let carry = 0;
  
    while (l1 !== null || l2 !== null) {
      let x = l1 !== null ? l1.val : 0;
      let y = l2 !== null ? l2.val : 0;
      let sum = x + y + carry;
      carry = Math.floor(sum / 10);
  
      result.push(sum % 10);
  
      if (l1 !== null) l1 = l1.next;
      if (l2 !== null) l2 = l2.next;
    }
  
    if (carry > 0) {
      result.push(carry);
    }
  
    return result;
  }
  
//Examples :

// Example - 01 :
  let l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);
  
  let l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);
  
  console.log("\nExample - 01 :");
  console.log("Input :");
  console.log("l1 = ", linkedListToArray(l1));
  console.log("l2 = ", linkedListToArray(l2));
  console.log("Output:", addTwoNumbers(l1, l2));
  console.log("\n------------------------\n");
  
// Example - 02 :
  l1 = new ListNode(0);
  l2 = new ListNode(0);
  
  console.log("Example - 02 :");
  console.log("Input : ");
  console.log("l1 = ", linkedListToArray(l1));
  console.log("l2 = ", linkedListToArray(l2));
  console.log("Output : ", addTwoNumbers(l1, l2));
  console.log("\n------------------------\n");
  
// Example - 03 :
  l1 = new ListNode(9);
  l1.next = new ListNode(9);
  l1.next.next = new ListNode(9);
  l1.next.next.next = new ListNode(9);
  l1.next.next.next.next = new ListNode(9);
  l1.next.next.next.next.next = new ListNode(9);
  l1.next.next.next.next.next.next = new ListNode(9);
  
  l2 = new ListNode(9);
  l2.next = new ListNode(9);
  l2.next.next = new ListNode(9);
  l2.next.next.next = new ListNode(9);
  
  console.log("Example - 03 :");
  console.log("Input :");
  console.log("l1 = ", linkedListToArray(l1));
  console.log("l2 = ", linkedListToArray(l2));
  console.log("Output : ", addTwoNumbers(l1, l2));
  
  // Helper function to convert linked list to array
  function linkedListToArray(head) {
    let arr = [];
    let curr = head;
  
    while (curr !== null) {
      arr.push(curr.val);
      curr = curr.next;
    }
  
    return arr;
  }
  