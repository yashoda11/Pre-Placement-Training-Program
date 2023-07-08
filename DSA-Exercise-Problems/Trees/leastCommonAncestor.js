class TreeNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
var lowestCommonAncestor = function (root, p, q) {
    if (root === null) {
      return null;
    }
  
    // If either p or q is the root, then the root is the LCA
    if (root.val === p.val || root.val === q.val) {
      return root;
    }
  
    // Recursively search in the left and right subtrees
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
  
    // If both left and right are not null, then p and q are present in different subtrees, so the current root is the LCA
    if (left !== null && right !== null) {
      return root;
    }
  
    // If either left or right is not null, return the non-null value (either p or q)
    if (left !== null) {
      return left;
    } else {
      return right;
    }
  };

  // Construct the binary tree
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);

// Nodes for which to find the LCA
const p = root.left; // Node with value 5
const q = root.left.right.right; // Node with value 4


// Find the lowest common ancestor
const lca = lowestCommonAncestor(root, p, q);
console.log("Lowest Common Ancestor:", lca.val);