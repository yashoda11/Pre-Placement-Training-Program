class Node {
    constructor(value) {
      this.data = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    detectAndRemoveLoop() {
      let slowPtr = this.head;
      let fastPtr = this.head;
      let loopExists = false;
  
      while (slowPtr && fastPtr && fastPtr.next) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
  
        if (slowPtr === fastPtr) {
          loopExists = true;
          break;
        }
      }
  
      if (!loopExists) {
        return 0; // No loop found
      }
  
      // Move slowPtr to the head and advance both pointers at the same pace until they meet
      slowPtr = this.head;
      while (slowPtr.next !== fastPtr.next) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next;
      }
  
      // Unlink the last node to remove the loop
      fastPtr.next = null;
  
      return 1; // Loop removed successfully
    }
  }
  
  // Example -01 :
  const list1 = new LinkedList();
  list1.append(1);
  list1.append(3);
  list1.append(4);
  list1.head.next.next.next = list1.head.next; // Creating a loop
  console.log(list1.detectAndRemoveLoop()); // Output: 1
  
  // Example - 02 :
  const list2 = new LinkedList();
  list2.append(1);
  list2.append(8);
  list2.append(3);
  list2.append(4);
  console.log(list2.detectAndRemoveLoop()); // Output: 0
  
  // Example - 03 :
  const list3 = new LinkedList();
  list3.append(1);
  list3.append(2);
  list3.append(3);
  list3.append(4);
  list3.head.next.next.next.next = list3.head; // Creating a loop
  console.log(list3.detectAndRemoveLoop()); // Output: 1