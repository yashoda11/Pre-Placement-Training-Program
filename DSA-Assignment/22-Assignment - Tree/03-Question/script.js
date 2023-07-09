class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function printRootToLeafPaths(root) {
    if (root === null) {
      return;
    }
  
    const stack = [];
    const pathStack = [];
  
    stack.push(root);
    pathStack.push(String(root.data));
  
    while (stack.length > 0) {
      const node = stack.pop();
      const path = pathStack.pop();
  
      if (node.left === null && node.right === null) {
        console.log(path);
      }
  
      if (node.right !== null) {
        stack.push(node.right);
        pathStack.push(path + "->" + String(node.right.data));
      }
  
      if (node.left !== null) {
        stack.push(node.left);
        pathStack.push(path + "->" + String(node.left.data));
      }
    }
  }
  
// Testing Example :

  // Constructing the Binary Tree :
  const root = new Node(6);
  root.left = new Node(3);
  root.right = new Node(5);
  root.left.left = new Node(2);
  root.left.right = new Node(5);
  root.right.right = new Node(4);
  root.left.right.left = new Node(7);
  root.left.right.right = new Node(4);
  
  // Print all root-to-leaf paths :

  console.log(`For the given Binary Tree, Root to Leaf Paths are : `);
  printRootToLeafPaths(root);