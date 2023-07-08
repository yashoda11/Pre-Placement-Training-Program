class TreeNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function binaryTreePaths(root) {
    const paths = [];
  
    function traverse(node, path) {
      if (node === null) {
        return;
      }
  
      // Add the current node's value to the current path
      path += node.val.toString();
  
      // If the current node is a leaf node, add the path to the result paths
      if (node.left === null && node.right === null) {
        paths.push(path);
      } else {
        // If the current node is not a leaf, continue traversing its children
        path += '->';
        traverse(node.left, path);
        traverse(node.right, path);
      }
    }
  
    traverse(root, '');
    return paths;
  }
  
  // Construct the binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.right = new TreeNode(5);
  
  // Find all paths from root to leaf nodes
  const paths = binaryTreePaths(root);
  
  // Print the paths
  console.log("Binary Tree Paths : ", paths);
  