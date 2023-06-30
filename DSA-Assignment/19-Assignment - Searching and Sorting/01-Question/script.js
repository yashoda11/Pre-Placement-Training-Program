class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  var mergeKLists = function (lists) {
    const minHeap = new MinHeap();
  
    for (let list of lists) {
      if (list) {
        minHeap.insert(list);
      }
    }
  
    const dummy = new ListNode(0);
    let curr = dummy;
  
    while (!minHeap.isEmpty()) {
      const node = minHeap.removeMin();
  
      curr.next = node;
      curr = curr.next;
  
      if (node.next) {
        minHeap.insert(node.next);
      }
    }
  
    return dummy.next;
  };
  
  class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    insert(node) {
      this.heap.push(node);
      this.bubbleUp(this.heap.length - 1);
    }
  
    removeMin() {
      if (this.isEmpty()) {
        return null;
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown(0);
      return min;
    }
  
    bubbleUp(index) {
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex].val > this.heap[index].val) {
          this.swap(parentIndex, index);
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    bubbleDown(index) {
      const lastIndex = this.heap.length - 1;
      while (true) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallestIndex = index;
  
        if (
          leftChildIndex <= lastIndex &&
          this.heap[leftChildIndex].val < this.heap[smallestIndex].val
        ) {
          smallestIndex = leftChildIndex;
        }
  
        if (
          rightChildIndex <= lastIndex &&
          this.heap[rightChildIndex].val < this.heap[smallestIndex].val
        ) {
          smallestIndex = rightChildIndex;
        }
  
        if (smallestIndex !== index) {
          this.swap(smallestIndex, index);
          index = smallestIndex;
        } else {
          break;
        }
      }
    }
  
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [
        this.heap[index2],
        this.heap[index1],
      ];
    }
  }
  
  // Helper function to convert an array to a linked list
  function arrayToLinkedList(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    const dummy = new ListNode(0);
    let curr = dummy;
    for (let val of arr) {
      curr.next = new ListNode(val);
      curr = curr.next;
    }
  
    return dummy.next;
  }
  
  // Helper function to convert a linked list to an array
  function linkedListToArray(head) {
    const arr = [];
    let curr = head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr;
  }
  


// Testing Examples :

// Example - 01 :
  var lists = [
    arrayToLinkedList([1, 4, 5]),
    arrayToLinkedList([1, 3, 4]),
    arrayToLinkedList([2, 6]),
  ];
  console.log("\nExample - 01 :");
  console.log(linkedListToArray(mergeKLists(lists)));                   // Output: [1, 1, 2, 3, 4, 4, 5, 6]
  

// Example - 02 :
  var lists = [];
  console.log("\nExample - 02 :");
  console.log(linkedListToArray(mergeKLists(lists)));                   // Output: []


// Example - 03 :
  var lists = [arrayToLinkedList([])];
  console.log("\nExample - 03 :");
  console.log(linkedListToArray(mergeKLists(lists)));                   // Output: []