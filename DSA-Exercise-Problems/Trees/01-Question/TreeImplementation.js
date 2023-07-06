class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function printTreeInOrder(root) {
    if (root === null) {
      return;
    }
  
    printTreeInOrder(root.left);
    console.log(root.value);
    printTreeInOrder(root.right);
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
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
root.left.right.left = new TreeNode(8);
root.right.right.right = new TreeNode(9);


// Print the tree using in-order traversal
printTreeInOrder(root);

// Size :
console.log(`Size of Tree is : ${sizeOfTree(root)}`);

// Sum :
console.log(`Sum of Tree is : ${sumOfTree(root)}`);

// Maximum :
console.log(`Maximum element of Tree : ${maximumElementInTree(root)}`);

// Minimum :
console.log(`Minimum Element in Tree : ${minimumElementInTree(root)}`);

// Level Of Tree :
console.log(`Levels of Tree : ${levelsOfTree(root)}`);

// Height :
let HeightOfTree = levelsOfTree(root) - 1;
console.log(`Height of Tree : ${HeightOfTree}`);

// Product :
console.log(`Product of Tree : ${productOfElementInTree(root)}`);
