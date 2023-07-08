class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function canRepresentBST(arr) {
  const n = arr.length;
  
  // Check if the given array is empty
  if (n === 0) {
    return true; // An empty array is considered as representing an empty BST
  }

  // Construct the BST from the given array
  const root = new TreeNode(arr[0]);

  for (let i = 1; i < n; i++) {
    let current = root;

    while (true) {
      if (arr[i] < current.val) {
        if (current.left === null) {
          current.left = new TreeNode(arr[i]);
          break;
        } else {
          current = current.left;
        }
      } else if (arr[i] > current.val) {
        if (current.right === null) {
          current.right = new TreeNode(arr[i]);
          break;
        } else {
          current = current.right;
        }
      } else {
        return false; // Duplicate values are not allowed in BST
      }
    }
  }

  // Perform level order traversal and compare with the given array
  const levelOrder = [];
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const current = queue.shift();
    levelOrder.push(current.val);

    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }

  // Check if the level order traversal matches the given array
  for (let i = 0; i < n; i++) {
    if (levelOrder[i] !== arr[i]) {
      return `\nNo - The given array [${arr}] cannot represent the level Order Traversal of a Binary Search Tree (BST)\n`;
    }
  }

  return `\nYes - The given array [${arr}] can represent the Level Order Traversal of a Binary Search Tree (BST)\n`;
}

// Example test cases
console.log(canRepresentBST([7, 4, 12, 3, 6, 8, 1, 5, 10])); // Output: true
console.log(canRepresentBST([11, 6, 13, 5, 12, 10])); // Output: false
