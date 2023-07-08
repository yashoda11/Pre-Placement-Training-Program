class TreeNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function zigzagLevelOrder(root) {
    if (root === null) {
      return [];
    }
  
    const result = [];
    let level = 0;
  
    const queue = [];
    queue.push(root);
  
    while (queue.length > 0) {
      const levelSize = queue.length;
      const currentLevel = [];
  
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
  
        if (level % 2 === 0) {
          currentLevel.push(node.val); // Append nodes in the current level from left to right
        } else {
          currentLevel.unshift(node.val); // Append nodes in the current level from right to left
        }
  
        if (node.left !== null) {
          queue.push(node.left);
        }
  
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
  
      result.push(currentLevel);
      level++;
    }
  
    return result;
  }
  
  // Construct the binary tree
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);
  
  // Perform zigzag level order traversal
  const traversal = zigzagLevelOrder(root);
  
  // Print the traversal result
  console.log("Zigzag Level Order Traversal:");
  for (let i = 0; i < traversal.length; i++) {
    console.log(traversal[i]);
  }
  