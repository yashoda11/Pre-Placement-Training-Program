class LinkedList {
    constructor() {
      this.head = null;
    }
  
    Node(data) {
      return {
        data: data,
        next: null
      };
    }
  
    kAltReverse(head, k) {
      return this._kAltReverse(head, k, true);
    }
  
    _kAltReverse(node, k, b) {
      if (node === null) {
        return null;
      }
  
      let count = 1;
      let prev = null;
      let current = node;
      let next = null;
  
      while (current !== null && count <= k) {
        next = current.next;
  
        if (b === true) {
          current.next = prev;
        }
  
        prev = current;
        current = next;
        count++;
      }
  
      if (b === true) {
        node.next = this._kAltReverse(current, k, !b);
        return prev;
      } else {
        prev.next = this._kAltReverse(current, k, !b);
        return node;
      }
    }
  
    printList(node) {
      let output = "";
      while (node !== null) {
        output += node.data;
        if (node.next !== null) {
          output += "->";
        } else {
          output += "->NULL";
        }
        node = node.next;
      }
      console.log(output);
    }
  
    push(newdata) {
      let mynode = this.Node(newdata);
      mynode.next = this.head;
      this.head = mynode;
    }
  }
  
  let list = new LinkedList();
  
  // Creating the linkedlist
  for (let i = 9; i > 0; i--) {
    list.push(i);
  }
  
  console.log("Given Linked List:");
  list.printList(list.head);
  list.head = list.kAltReverse(list.head, 3);
  console.log("Modified Linked List:");
  list.printList(list.head);
  