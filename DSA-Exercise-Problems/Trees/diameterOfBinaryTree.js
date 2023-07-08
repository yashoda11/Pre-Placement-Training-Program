class TreeNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function diameterOfBinaryTree(root) {
    let diameter = 0;
  
    function dfs(node) {
      if (node === null) {
        return 0;
      }
  
      // Recursively calculate the height of the left and right subtrees
      const leftHeight = dfs(node.left);
      const rightHeight = dfs(node.right);
  
      // Update the diameter if the sum of left and right subtree heights is greater
      diameter = Math.max(diameter, leftHeight + rightHeight);
  
      // Return the height of the current node
      return 1 + Math.max(leftHeight, rightHeight);
    }
  
    dfs(root);
    return diameter;
  }
  
  // Construct the binary tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  // Calculate the diameter of the binary tree
  const diameter = diameterOfBinaryTree(root);
  
  // Print the diameter
  console.log("Diameter of the binary tree:", diameter);
  