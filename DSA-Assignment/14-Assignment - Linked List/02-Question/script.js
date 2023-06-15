class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function addOneToList(head) {
    let dummyNode = new Node(0);
    dummyNode.next = head;
  
    let lastNonNineNode = dummyNode;
    let currentNode = head;
  
    // Find the rightmost non-nine digit
    while (currentNode !== null) {
      if (currentNode.data !== 9) {
        lastNonNineNode = currentNode;
      }
      currentNode = currentNode.next;
    }
  
    // Increment the rightmost non-nine digit by 1
    lastNonNineNode.data += 1;
  
    currentNode = lastNonNineNode.next;
  
    // Set all the following digits to 0
    while (currentNode !== null) {
      currentNode.data = 0;
      currentNode = currentNode.next;
    }
  
    // If the dummy node is still the head, update the head
    if (dummyNode.data === 1) {
      return dummyNode;
    }
  
    return dummyNode.next;
  }
  
  function displayListAsArrows(head) {
    let output = "";
    let current = head;
  
    while (current !== null) {
      output += current.data;
      if (current.next !== null) {
        output += "->";
      }
      current = current.next;
    }
  
    console.log(output);
  }
  
  function displayListAsDigits(head) {
    let output = "";
    let current = head;
  
    while (current !== null) {
      output += current.data;
      current = current.next;
    }
  
    console.log("Output:");
    console.log(output);
    console.log();
  }
  
  // Test case 1
  let head1 = new Node(4);
  head1.next = new Node(5);
  head1.next.next = new Node(6);
  
  console.log("Input - 01 :");
  console.log("LinkedList :");
  displayListAsArrows(head1);
  
  head1 = addOneToList(head1);
  displayListAsDigits(head1);
  
  // Test case 2
  let head2 = new Node(1);
  head2.next = new Node(2);
  head2.next.next = new Node(3);
  
  console.log("Input - 02 :");
  console.log("LinkedList :");
  displayListAsArrows(head2);
  
  head2 = addOneToList(head2);
  displayListAsDigits(head2);
  