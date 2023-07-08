class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  var invertTree = function(root) {
    if (root == null) return null;
  
    const queue = [root];
    const result = [];
  
    while (queue.length > 0) {
      const current = queue.shift();
  
      const temp = current.left;
      current.left = current.right;
      current.right = temp;
  
      result.push(current.value);
  
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  
    return result;
  };
  
  // Construct Tree
  const root = new TreeNode(4);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(7);
  const node4 = new TreeNode(1);
  const node5 = new TreeNode(3);
  const node6 = new TreeNode(6);
  const node7 = new TreeNode(9);
  
  root.left = node2;
  root.right = node3;
  node2.left = node4;
  node2.right = node5;
  node3.left = node6;
  node3.right = node7;
  
  console.log(invertTree(root));
  