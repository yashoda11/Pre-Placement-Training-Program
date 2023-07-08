class TreeNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function convertToBST(root) {
    // Perform an in-order traversal of the binary tree to retrieve the values in sorted order
    const values = [];
    inOrderTraversal(root, values);
  
    // Create a new binary search tree using the sorted values
    return constructBST(values);
  }
  
  function inOrderTraversal(node, values) {
    if (node === null) {
      return;
    }
  
    // Traverse the left subtree
    inOrderTraversal(node.left, values);
  
    // Add the current node's value to the array
    values.push(node.val);
  
    // Traverse the right subtree
    inOrderTraversal(node.right, values);
  }
  
  function constructBST(values) {
    return buildTree(values, 0, values.length - 1);
  }
  
  function buildTree(values, start, end) {
    if (start > end) {
      return null;
    }
  
    // Find the middle element to make it the root of the current subtree
    const mid = Math.floor((start + end) / 2);
    const root = new TreeNode(values[mid]);
  
    // Recursively build the left and right subtrees
    root.left = buildTree(values, start, mid - 1);
    root.right = buildTree(values, mid + 1, end);
  
    return root;
  }
  
  // Construct the binary tree
  const root = new TreeNode(10);
  root.left = new TreeNode(2);
  root.right = new TreeNode(7);
  root.left.left = new TreeNode(8);
  root.left.right = new TreeNode(4);
  
  // Convert the binary tree into a binary search tree
  const bstRoot = convertToBST(root);
  
  // Print the binary search tree
  console.log("Converted Binary Search Tree:");
  printInOrderTraversal(bstRoot);
  
  function printInOrderTraversal(node) {
    if (node === null) {
      return;
    }
  
    // Traverse the left subtree
    printInOrderTraversal(node.left);
  
    // Print the current node's value
    console.log(node.val);
  
    // Traverse the right subtree
    printInOrderTraversal(node.right);
  }
  