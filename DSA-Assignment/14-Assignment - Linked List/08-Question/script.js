class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function removeZeroSumSublists(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;
    let sum = 0;
    const sumMap = {};
  
    while (current) {
      sum += current.val;
  
      if (sum in sumMap) {
        // Remove nodes between sumMap[sum] and current
        let prev = sumMap[sum].next;
        let tempSum = sum + prev.val;
  
        while (prev !== current) {
          delete sumMap[tempSum];
          prev = prev.next;
          tempSum += prev.val;
        }
  
        sumMap[sum].next = current.next;
      } else {
        sumMap[sum] = current;
      }
  
      current = current.next;
    }
  
    return dummy.next;
  }
  
  // Create the first example linked list
  const head1 = new ListNode(1);
  const node2 = new ListNode(2);
  const nodeNeg3 = new ListNode(-3);
  const node3 = new ListNode(3);
  const node1 = new ListNode(1);
  
  head1.next = node2;
  node2.next = nodeNeg3;
  nodeNeg3.next = node3;
  node3.next = node1;
  
  // Remove zero-sum sublists from the first linked list
  const result1 = removeZeroSumSublists(head1);
  
  // Print the resulting linked list for Example 1
  let current1 = result1;
  let output1 = [];
  while (current1) {
    output1.push(current1.val);
    current1 = current1.next;
  }
  
  console.log("Output for Example - 01 :");
  console.log(output1);
  
  console.log("------------------------");
  
  // Create the second example linked list
  const head2 = new ListNode(1);
  const node2_2 = new ListNode(2);
//   var node3 = new ListNode(3);
  const nodeNeg3_2 = new ListNode(-3);
  const node4 = new ListNode(4);
  
  head2.next = node2_2;
  node2_2.next = node3;
  node3.next = nodeNeg3_2;
  nodeNeg3_2.next = node4;
  
  // Remove zero-sum sublists from the second linked list
  const result2 = removeZeroSumSublists(head2);
  
  // Print the resulting linked list for Example 2
  let current2 = result2;
  let output2 = [];
  while (current2) {
    output2.push(current2.val);
    current2 = current2.next;
  }
  
  console.log("Output for Example - 02 :");
  console.log(output2);
  
  console.log("------------------------");
  
  // Create the third example linked list
  const head3 = new ListNode(1);
  const node2_3 = new ListNode(2);
  const node3_2 = new ListNode(3);
  const nodeNeg3_3 = new ListNode(-3);
  const nodeNeg2 = new ListNode(-2);
  
  head3.next = node2_3;
  node2_3.next = node3_2;
  node3_2.next = nodeNeg3_3;
  nodeNeg3_3.next = nodeNeg2;
  
  // Remove zero-sum sublists from the third linked list
  const result3 = removeZeroSumSublists(head3);
  
  // Print the resulting linked list for Example 3
  let current3 = result3;
  let output3 = [];
  while (current3) {
    output3.push(current3.val);
    current3 = current3.next;
  }
  
  console.log("Output for Example - 03 :");
  console.log(output3);
  