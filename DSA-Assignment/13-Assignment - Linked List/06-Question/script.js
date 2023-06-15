class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function mergeSortedLists(a, b) {
    // If one of the lists is empty, return the other list
    if (a === null) {
      return b;
    }
    if (b === null) {
      return a;
    }
  
    let mergedHead = null;
    let mergedTail = null;
  
    // Set the head of the merged list to the smaller value
    if (a.value <= b.value) {
      mergedHead = a;
      a = a.next;
    } else {
      mergedHead = b;
      b = b.next;
    }
    mergedTail = mergedHead;
  
    // Merge the remaining nodes
    while (a !== null && b !== null) {
      if (a.value <= b.value) {
        mergedTail.next = a;
        a = a.next;
      } else {
        mergedTail.next = b;
        b = b.next;
      }
      mergedTail = mergedTail.next;
    }
  
    // Attach the remaining nodes, if any
    if (a !== null) {
      mergedTail.next = a;
    }
    if (b !== null) {
      mergedTail.next = b;
    }
  
    return mergedHead;
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
  
  // Test case 1
  let a = new Node(5);
  a.next = new Node(10);
  a.next.next = new Node(15);
  
  let b = new Node(2);
  b.next = new Node(3);
  b.next.next = new Node(20);
  
  console.log("Input - 01: ");
  console.log("a : ");
  displayList(a);
  console.log("b : ");

  displayList(b);
  
  let mergedHead = mergeSortedLists(a, b);
  
  console.log("Output : \nMerged Linked List of a and b is : ");
  displayList(mergedHead);                     // Output: 2->3->5->10->15->20
  
  // Test case 2
  let x = new Node(1);
  x.next = new Node(1);
  
  let y = new Node(2);
  y.next = new Node(4);
  
  console.log("\nInput - 02 :");
  displayList(x);
  displayList(y);
  
  let mergedHead2 = mergeSortedLists(x, y);
  
  console.log("Output : \nMerged Linked List of a and b is : ");
  displayList(mergedHead2);                            // Output: 1->1->2->4
  