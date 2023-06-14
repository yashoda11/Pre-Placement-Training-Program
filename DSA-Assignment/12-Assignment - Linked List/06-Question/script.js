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
  
    retainAndDelete(M, N) {
      if (M <= 0 || N <= 0) {
        return;
      }
  
      let current = this.head;
      let prev = null;
  
      while (current) {
        // Retain M nodes
        for (let i = 1; i < M && current; i++) {
          current = current.next;
        }
  
        if (!current) {
          return;
        }
  
        // Delete N nodes
        let temp = current.next;
        for (let i = 0; i < N && temp; i++) {
          temp = temp.next;
        }
  
        current.next = temp;
        current = temp;
      }
    }
  
    toString() {
      let output = '';
      let current = this.head;
      while (current) {
        output += current.data;
        if (current.next) {
          output += '->';
        }
        current = current.next;
      }
      return output;
    }
  }
  

//Examples :

// Example - 01 :
  const list1 = new LinkedList();
  list1.append(1);
  list1.append(2);
  list1.append(3);
  list1.append(4);
  list1.append(5);
  list1.append(6);
  list1.append(7);
  list1.append(8);
  list1.retainAndDelete(2, 2);
  console.log('\nOutput - 01 :\nLinked List - ', list1.toString());           // Output: Linked List: 1->2->5->6
  
// Example - 02 :
  const list2 = new LinkedList();
  list2.append(1);
  list2.append(2);
  list2.append(3);
  list2.append(4);
  list2.append(5);
  list2.append(6);
  list2.append(7);
  list2.append(8);
  list2.append(9);
  list2.append(10);
  list2.retainAndDelete(3, 2);
  console.log('\nOutput - 02 :\nLinked List - ', list2.toString());                   // Output: Linked List: 1->2->3->6->7->8
  
// Example - 03 :
  const list3 = new LinkedList();
  list3.append(1);
  list3.append(2);
  list3.append(3);
  list3.append(4);
  list3.append(5);
  list3.append(6);
  list3.append(7);
  list3.append(8);
  list3.append(9);
  list3.append(10);
  list3.retainAndDelete(1, 1);
  console.log('\nOutput - 03 :\nLinked List - ', list3.toString());     // Output: Linked List: 1->3->5->7->9
  