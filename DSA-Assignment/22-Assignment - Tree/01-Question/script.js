class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTreeToDLL {
    constructor() {
      this.root = null;
      this.head = null;
      this.prev = null;
    }
  
    binaryTreeToDLL(root) {
      if (root === null) {
        return;
      }
  
      // Convert the left subtree to DLL
      this.binaryTreeToDLL(root.left);
  
      // Process the current node
      if (this.prev === null) {
        // Current node is the leftmost node (head of DLL)
        this.head = root;
      } else {
        // Set the right pointer of the previous node
        this.prev.right = root;
        // Set the left pointer of the current node
        root.left = this.prev;
      }
      this.prev = root;
  
      // Convert the right subtree to DLL
      this.binaryTreeToDLL(root.right);
    }
  
    printDLL() {
      let current = this.head;
      while (current !== null) {
        process.stdout.write(current.data + " ");
        current = current.right;
      }
    }
  }
  
  // Testing Example :

  // Constructing the Binary Tree :

  let tree = new BinaryTreeToDLL();
  tree.root = new Node(10);
  tree.root.left = new Node(12);
  tree.root.right = new Node(15);
  tree.root.left.left = new Node(25);
  tree.root.left.right = new Node(30);
  tree.root.right.left = new Node(36);
  
  // Convert the binary tree to DLL :
  
  tree.binaryTreeToDLL(tree.root);
  
  // Print the DLL
  console.log(`After Converting the given Binary Tree to a Doubly Linked List(DLL). \nThe Doubly Linked List(DLL) is :`);
  tree.printDLL();
  