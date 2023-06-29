class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeKLists(lists) {
    // Create a min-heap based on the node values
    const minHeap = new MinHeap();
  
    // Add the first node of each linked list to the min-heap
    for (let list of lists) {
      if (list) {
        minHeap.insert(list);
      }
    }
  
    // Create a dummy node as the starting point of the merged list
    const dummy = new ListNode(0);
    let curr = dummy;
  
    // Process the nodes in the min-heap until it becomes empty
    while (!minHeap.isEmpty()) {
      // Get the node with the minimum value from the min-heap
      const node = minHeap.removeMin();
  
      // Append the node to the merged list
      curr.next = node;
      curr = curr.next;
  
      // Move to the next node in the linked list
      if (node.next) {
        minHeap.insert(node.next);
      }
    }
  
    // Return the merged list
    return dummy.next;
  }
  
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
  
  // Example 1
  const lists1 = [
    arrayToLinkedList([1, 4, 5]),
    arrayToLinkedList([1, 3, 4]),
    arrayToLinkedList([2, 6]),
  ];
  const mergedList1 = mergeKLists(lists1);
  const result1 = linkedListToArray(mergedList1);
  console.log(result1);
  // Output: [1, 1, 2, 3, 4, 4, 5, 6]
  
  // Example 2
  const lists2 = [];
  const mergedList2 = mergeKLists(lists2);
  const result2 = linkedListToArray(mergedList2);
  console.log(result2);
  // Output: []
  
  // Example 3
  const lists3 = [arrayToLinkedList([])];
  const mergedList3 = mergeKLists(lists3);
  const result3 = linkedListToArray(mergedList3);
  console.log(result3);
  // Output: []
  