class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class MergeTwoListAtAlternatePositions {
  printList(head) {
    let currNode = head;
    let output = "";
    while (currNode !== null) {
      output += currNode.data + "->";
      currNode = currNode.next;
    }
    output = output.slice(0, output.length - 2); // Remove the last "->"
    process.stdout.write(output);
  }

  mergeList(A, B) {
    let result = A;

    while (A !== null && B !== null) {
      let node1next = A.next;
      let node2next = B.next;

      A.next = B;
      B.next = node1next;

      A = node1next;
      B = node2next;
    }

    console.log("\nMerge a linked list into another:");
    this.printList(result);
    console.log("\nRemaining Second List if any");
    this.printList(B);
  }
}


// Examples :
// Example - 01 :
// Create the first linked list: 5->7->17->13->11
var A = new Node(5);
A.next = new Node(7);
A.next.next = new Node(17);
A.next.next.next = new Node(13);
A.next.next.next.next = new Node(11);

// Create the second linked list: 12->10->2->4->6
var B = new Node(12);
B.next = new Node(10);
B.next.next = new Node(2);
B.next.next.next = new Node(4);
B.next.next.next.next = new Node(6);

var obj = new MergeTwoListAtAlternatePositions();
console.log("Input - 01 :");
console.log("First List :");
obj.printList(A);
console.log("\nSecond List :");
obj.printList(B);
obj.mergeList(A, B);
console.log("");


// Example - 02 :
// Create the first linked list: 1->2->3
A = new Node(1);
A.next = new Node(2);
A.next.next = new Node(3);

// Create the second linked list: 4->5->6->7->8
B = new Node(4);
B.next = new Node(5);
B.next.next = new Node(6);
B.next.next.next = new Node(7);
B.next.next.next.next = new Node(8);

obj = new MergeTwoListAtAlternatePositions();
console.log("Input - 02 :");
console.log("First List :");
obj.printList(A);
console.log("\nSecond List :");
obj.printList(B);
obj.mergeList(A, B);
