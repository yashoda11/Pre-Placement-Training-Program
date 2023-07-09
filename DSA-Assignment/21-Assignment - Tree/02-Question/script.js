class TreeNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new TreeNode(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(root, newNode) {
      if (newNode.val < root.val) {
        if (root.left === null) {
          root.left = newNode;
        } else {
          this.insertNode(root.left, newNode);
        }
      } else {
        if (root.right === null) {
          root.right = newNode;
        } else {
          this.insertNode(root.right, newNode);
        }
      }
    }
  
    findDistance(node1, node2) {
      if (node1 === null || node2 === null) {
        return 0;
      }
  
      const lca = this.lowestCommonAncestor(this.root, node1, node2);
      const distance1 = this.calculateDistance(lca, node1);
      const distance2 = this.calculateDistance(lca, node2);
  
      return distance1 + distance2;
    }
  
    lowestCommonAncestor(root, p, q) {
      if (root === null || root.val === p.val || root.val === q.val) {
        return root;
      }
  
      if (root.val > p.val && root.val > q.val) {
        return this.lowestCommonAncestor(root.left, p, q);
      } else if (root.val < p.val && root.val < q.val) {
        return this.lowestCommonAncestor(root.right, p, q);
      } else {
        return root;
      }
    }
  
    calculateDistance(root, target) {
      if (root === null || root.val === target.val) {
        return 0;
      }
  
      if (target.val < root.val) {
        return 1 + this.calculateDistance(root.left, target);
      } else {
        return 1 + this.calculateDistance(root.right, target);
      }
    }
  }
  

// Testing Examples :

// Example - 01 :

  var bst = new BST();
  var values = [8, 3, 1, 6, 4, 7, 10, 14, 13];
  values.forEach((value) => bst.insert(value));
  var node1 = new TreeNode(6);
  var node2 = new TreeNode(14);
  console.log(`
  The Distance between the given two nodes(keys) ${node1.val} and ${node2.val} for the given BST [${values}] values is : ${bst.findDistance(node1, node2)}
  `);

  
// Example - 02 :

  var bst = new BST();
  var values = [8, 3, 1, 6, 4, 7, 10, 14, 13];
  values.forEach((value) => bst.insert(value));
  var node1 = new TreeNode(3);
  var node2 = new TreeNode(4);
  console.log(`
  The Distance between the given two nodes(keys) ${node1.val} and ${node2.val} for the given BST [${values}] values is : ${bst.findDistance(node1, node2)}
  `);
  