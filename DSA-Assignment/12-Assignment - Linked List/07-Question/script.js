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

  mergeAlternate(list2) {
    if (!this.head || !list2.head) {
      return;
    }

    let current1 = this.head;
    let current2 = list2.head;

    while (current1 && current2) {
      let next1 = current1.next;
      let next2 = current2.next;

      current1.next = current2;
      current2.next = next1;

      current1 = next1;
      current2 = next2;
    }

    list2.head = null;
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

// Example 1
const list1 = new LinkedList();
list1.append(5);
list1.append(7);
list1.append(17);
list1.append(13);
list1.append(11);

const list2 = new LinkedList();
list2.append(12);
list2.append(10);
list2.append(2);
list2.append(4);
list2.append(6);

list1.mergeAlternate(list2);

console.log('First List:', list1.toString());
// Output: First List: 5->12->7->10->17->2->13->4->11->6

console.log('Second List:', list2.toString());
// Output: Second List: (empty)

// Example 2
const list3 = new LinkedList();
list3.append(1);
list3.append(2);
list3.append(3);

const list4 = new LinkedList();
list4.append(4);
list4.append(5);
list4.append(6);
list4.append(7);
list4.append(8);

list3.mergeAlternate(list4);

console.log('First List:', list3.toString());
// Output: First List: 1->4->2->5->3->6

console.log('Second List:', list4.toString());
// Output: Second List: 7->8
