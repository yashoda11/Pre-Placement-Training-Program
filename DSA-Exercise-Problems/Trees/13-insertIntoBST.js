class TreeNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
  var insertIntoBST = function(root, val) {
    if (root == null) {
      return new TreeNode(val);
    }
    if (root.val < val) {
      if (root.right == null) {
        root.right = new TreeNode(val);
      } else {
        insertIntoBST(root.right, val);
      }
    } else {
      if (root.left == null) {
        root.left = new TreeNode(val);
      } else {
        insertIntoBST(root.left, val);
      }
    }
  };
  
  var inorderTraversal = function(node) {
    if (node == null) {
      return [];
    }
    let result = [];
    if (node.left) {
      result = result.concat(inorderTraversal(node.left));
    }
    result.push(node.val);
    if (node.right) {
      result = result.concat(inorderTraversal(node.right));
    }
    return result;
  };
  
  // Example usage
  let root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(7);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  
  console.log(`Before Insertion, the In-Order Traversal of Tress : [${inorderTraversal(root)}]`);
  insertIntoBST(root, 8);
  console.log(`After Insertion, the In-Order Traversal of Tress : [${inorderTraversal(root)}]`);
  