class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function flipBinaryTree(root) {
    if (root === null) {
      return root;
    }
    if (root.left === null && root.right === null) {
      return root;
    }
  
    const flippedRoot = flipBinaryTree(root.left);
  
    root.left.left = root.right;
    root.left.right = root;
    root.left = root.right = null;
  
    return flippedRoot;
  }
  
  function printLevelOrder(root) {
    if (root === null) {
      return;
    }
  
    const queue = [];
    queue.push(root);
  
    while (queue.length > 0) {
      const nodeCount = queue.length;
  
      for (let i = 0; i < nodeCount; i++) {
        const node = queue.shift();
        process.stdout.write(node.data + " ");
  
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
      console.log();
    }
  }
  

// Testing Examples :

// Example - 01 :

// Constructing the binary tree
var root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

  console.log("\nExample - 01 : \nLevel Order Traversal of the given Binary Tree is :");
  printLevelOrder(root);
  
  var flippedRoot = flipBinaryTree(root);
  
  console.log("\nLevel Order Traversal of Flipped Tree is :");
  printLevelOrder(flippedRoot);
  console.log("\n-----------------------------------");
  

// Example - 02 :

// Constructing the binary tree
var root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);

  console.log("\nExample - 02 : \nLevel Order Traversal of the given Binary Tree is :");
  printLevelOrder(root);
  
  var flippedRoot = flipBinaryTree(root);
  
  console.log("\nLevel Order Traversal of Flipped Tree is :");
  printLevelOrder(flippedRoot);
  console.log(" ");








  