class TreeNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class DoublyLinkedListNode {
    constructor(value) {
      this.val = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  function convertToDoublyLinkedList(root) {
    if (root === null) {
      return null;
    }
  
    let prev = null; // Pointer to the previous node in the in-order traversal
  
    // Recursively convert the left subtree and update the previous pointer
    const leftHead = convertToDoublyLinkedList(root.left);
    if (leftHead !== null) {
      prev = connectNodes(prev, leftHead);
    }
  
    // Create a new doubly linked list node for the current root
    const current = new DoublyLinkedListNode(root.val);
    prev = connectNodes(prev, current);
  
    // Recursively convert the right subtree and update the previous pointer
    const rightHead = convertToDoublyLinkedList(root.right);
    if (rightHead !== null) {
      prev = connectNodes(prev, rightHead);
    }
  
    return leftHead !== null ? leftHead : current;
  }
  
  function connectNodes(prev, current) {
    if (prev !== null) {
      prev.next = current;
      current.prev = prev;
    }
    return current;
  }
  
  // Testing Example :
  
  // Construct the binary tree
  const root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(30);
  root.right.right = new TreeNode(35);
  
  // Convert the binary tree to a doubly linked list
  const head = convertToDoublyLinkedList(root);
  
  // Print the doubly linked list
  console.log(`After converting a Binary Tree to a Doubly Linked List. \nThe Doubly Linked List is : `);
  printDoublyLinkedList(head);
  
  function printDoublyLinkedList(head) {
    let current = head;
    while (current !== null) {
      process.stdout.write(current.val + " ");
      current = current.next;
    }
    console.log();
  }