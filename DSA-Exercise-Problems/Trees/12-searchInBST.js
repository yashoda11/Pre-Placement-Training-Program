class Treenode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
  var searchBST = function(root, val) {
    if (root == null) {
      return [];
    } else if (root.val == val) {
      return [root.val];
    } else if (root.val < val) {
      return searchBST(root.right, val);
    } else {
      return searchBST(root.left, val);
    }
  };
  

  let root = new Treenode(2);
  root.left = new Treenode(4);
  root.right = new Treenode(7);
  root.left.left = new Treenode(1);
  root.left.right = new Treenode(3);
  
  console.log(searchBST(root, 2));