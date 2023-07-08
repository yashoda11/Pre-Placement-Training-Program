class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
    this.next = null; // "next" pointer to connect nodes at the same level
  }
}

function connectNodesAtSameLevel(root) {
  if (root === null) {
    return;
  }

  // Start with the root node
  let currentLevel = [root];

  while (currentLevel.length > 0) {
    const nextLevel = []; // Array to store nodes at the next level

    // Connect nodes at the same level
    for (let i = 0; i < currentLevel.length; i++) {
      const node = currentLevel[i];

      // Connect the current node to the next node at the same level
      if (i < currentLevel.length - 1) {
        node.next = currentLevel[i + 1];
      }

      // Add the left and right child of the current node to the next level array
      if (node.left !== null) {
        nextLevel.push(node.left);
      }
      if (node.right !== null) {
        nextLevel.push(node.right);
      }
    }

    // Set the next level as the current level for the next iteration
    currentLevel = nextLevel;
  }
}

// Construct the binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Connect nodes at the same level
connectNodesAtSameLevel(root);

// Print the connections
console.log("Output:");
printConnections(root);

function printConnections(node) {
  let current = node;
  while (current !== null) {
    let level = "";
    let temp = current;
    while (temp !== null) {
      level += temp.val;
      if (temp.next !== null) {
        level += " → ";
      }
      temp = temp.next;
    }
    console.log(level);
    current = current.left; // Move to the next level
  }
}
