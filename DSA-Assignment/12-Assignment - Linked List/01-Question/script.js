class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Function to add a node at the end of the linked list
    addNode(data) {
      const newNode = new Node(data);
  
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Function to delete middle node(s) of the linked list
    deleteMiddle() {
      if (this.head === null || this.head.next === null) {
        // Empty list or single node, nothing to delete
        return;
      }
  
      let slow = this.head;
      let fast = this.head;
      let prev = null;
  
      // Move fast pointer two steps at a time and slow pointer one step at a time
      while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
      }
  
      // Delete the middle node(s)
      prev.next = slow.next;
    }
  
    // Function to print the linked list
    printList() {
      let current = this.head;
      while (current !== null) {
        process.stdout.write(current.data + " ");
        current = current.next;
      }
      console.log();
    }
  }
  
  // Create a linked list
  const linkedList = new LinkedList();
  
  // Add nodes to the linked list
  linkedList.addNode(1);
  linkedList.addNode(2);
  linkedList.addNode(3);
  linkedList.addNode(4);
  linkedList.addNode(5);
  
  // Delete middle node(s) of the linked list
  linkedList.deleteMiddle();
  
  // Print the modified linked list
  linkedList.printList();
  