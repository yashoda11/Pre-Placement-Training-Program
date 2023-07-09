// class representing node of a binary tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// function to print in order traversal of a binary tree
var inorder = function (root) {
  if (root !== null) {
    inorder(root.left);
    process.stdout.write(root.data + " ");
    inorder(root.right);
  }
};

var attachNode = function (root, value) {
  // if root is null, make the current element as root
  if (root === null) {
    root = new Node(value);
    return root;
  }
  
  // if element is less than root
  if (value < root.data) {
    // attach it to left subtree
    root.left = attachNode(root.left, value);
  } else {
    // attach it to right subtree
    root.right = attachNode(root.right, value);
  }
  
  // return root
  return root;
};

var formBST = function (levelOrder) {
  // initialize root as null
  let root = null;
  
  // for each element attach the node to required position in the BST
  for (let i = 0; i < levelOrder.length; i++) {
    // Step 3 to 5
    root = attachNode(root, levelOrder[i]);
  }
  
  // return root
  return root;
};


// Testing Example :

var levelOrder = [7, 4, 12, 3, 6, 8, 1, 5, 10];
console.log(`The Binary Search Tree (BST) from the given [${levelOrder}] level order traversal is :\nInorder Traversal of BST :`);
var root = formBST(levelOrder);
inorder(formBST(levelOrder));