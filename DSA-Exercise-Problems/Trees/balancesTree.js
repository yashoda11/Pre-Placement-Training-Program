class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

var levelsOfTree = function(root) {
    if (root == null) return 0;

    return 1 + Math.max(levelsOfTree(root.left), levelsOfTree(root.right));
};

var isBalancedTree = function (root) {
    if (root == null) return true;
    let left = levelsOfTree(root.left);
    let right = levelsOfTree(root.right);
    let difference = Math.abs(left - right);

    if (difference > 1 ) return false;

    let leftTreeAnswer = isBalancedTree(root.left);
    if (leftTreeAnswer == false) return false;

    let rightTreeAnswer = isBalancedTree(root.right);
    if(rightTreeAnswer == false) return false;

    return true;
    
};


// Create Binary Tree :

let root = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
let node7 = new TreeNode(7);

root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node4.left = node6;
node3.left = node7;

console.log(isBalancedTree(root));