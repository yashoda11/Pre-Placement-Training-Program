// Node class to define each node in the linked list
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Function to remove duplicates from a sorted linked list
  function removeDuplicates(head) {
    if (head === null) {
      return null;
    }
  
    let current = head;
  
    while (current.next !== null) {
      if (current.value === current.next.value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  
    return head;
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
  let head1 = new Node(11);
  head1.next = new Node(11);
  head1.next.next = new Node(11);
  head1.next.next.next = new Node(21);
  head1.next.next.next.next = new Node(43);
  head1.next.next.next.next.next = new Node(43);
  head1.next.next.next.next.next.next = new Node(60);
  
  console.log("Input - 01 :");
  console.log("LinkedList :");
  displayList(head1);
  
  head1 = removeDuplicates(head1);
  
  console.log("Output : After Removing Duplicate nodes, then the New list is : ");
  displayList(head1); // Output: 11->21->43->60
  
  // Test case 2
  let head2 = new Node(10);
  head2.next = new Node(12);
  head2.next.next = new Node(12);
  head2.next.next.next = new Node(25);
  head2.next.next.next.next = new Node(25);
  head2.next.next.next.next.next = new Node(25);
  head2.next.next.next.next.next.next = new Node(34);
  
  console.log("\nInput - 02:");
  console.log("LinkedList :");
  displayList(head2);
  
  head2 = removeDuplicates(head2);
  
  console.log("Output : After Removing Duplicate nodes, then the New list is : ");
  displayList(head2); // Output: 10->12->25->34
  