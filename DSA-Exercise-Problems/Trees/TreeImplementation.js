class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function printTreePreOrder(root) {
    if (root === null) {
      return;
    }
    console.log(root.value);
    printTreePreOrder(root.left);
    printTreePreOrder(root.right);
  }

// SIZE Of Tree :
var sizeOfTree = function (root) {
    if (root === null) {
        return 0;
    }
    return 1 + sizeOfTree(root.left) + sizeOfTree(root.right);

};

// Sum of Tree :
var sumOfTree = function (root) {
    if (root === null) {
        return 0;
    }
    return root.value + sumOfTree(root.left) + sumOfTree(root.right);

};

// Product of Tree :
var productOfElementInTree = function (root) {
    if (root === null) {
        return 1;
    }
    return root.value * productOfElementInTree(root.left) * productOfElementInTree(root.right);
};

// Product of a tree with "0" node :
var productExceptZero = function (root) {
    if (root == null) return 1;
        if ( root.value == 0)  root.value = 1;
    return root.value * productExceptZero(root.left) * productExceptZero(root.right); 
}



// Maximum Element in Tree :
var maximumElementInTree = function (root) {
    if (root === null) {
        return Number.MIN_SAFE_INTEGER;
    }
    let maximum = Math.max(maximumElementInTree(root.left), maximumElementInTree(root.right));
    return  Math.max(root.value, maximum);
};

// Minimum Element in Tree :
var minimumElementInTree = function(root) {
    if (root === null) {
        return Number.MAX_SAFE_INTEGER;
    }
    let minimum = Math.min(minimumElementInTree(root.left), minimumElementInTree(root.right));
    return Math.min(root.value, minimum);
};

// Level of Tree :
var levelsOfTree = function (root) {
    if (root === null) {
        return 0;
    }
    let maxLevel = Math.max(levelsOfTree(root.left), levelsOfTree(root.right));
    return 1 + maxLevel;
};



  // Create a binary tree
  const root = new TreeNode(1);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);
  const node4 = new TreeNode(4);
  const node5 = new TreeNode(5);
  const node6 = new TreeNode(6);
  const node7 = new TreeNode(0);
  
  root.left = node2;
  root.right = node3;
  node2.left = node4;
  node2.right = node5;
  node3.left = node6;
  node3.right = node7;
  


// Print the tree using in-order traversal
printTreePreOrder(root);

// Size :
console.log(`Size of Tree is : ${sizeOfTree(root)}`);

// Sum :
console.log(`Sum of Tree is : ${sumOfTree(root)}`);

// Product :
console.log(`Product of Tree : ${productOfElementInTree(root)}`);

// Product "0" :
console.log(`Product of Tree (Zero) : ${productExceptZero(root)}`);

// Maximum :
console.log(`Maximum element of Tree : ${maximumElementInTree(root)}`);

// Minimum :
console.log(`Minimum Element in Tree : ${minimumElementInTree(root)}`);

// Level Of Tree :
console.log(`Levels of Tree : ${levelsOfTree(root)}`);

// Height :
let HeightOfTree = levelsOfTree(root) - 1;
console.log(`Height of Tree : ${HeightOfTree}`);


