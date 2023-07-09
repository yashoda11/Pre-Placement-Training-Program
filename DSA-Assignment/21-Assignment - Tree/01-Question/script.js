class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let index = 0; // Define the index variable

function storeInorder(node, inorder) {
  if (node === null) {
    return;
  }

  storeInorder(node.left, inorder);

  inorder[index] = node.data;
  index++;

  storeInorder(node.right, inorder);
}

function countNodes(root) {
  if (root === null) {
    return 0;
  }
  return countNodes(root.left) + countNodes(root.right) + 1;
}

function arrayToBST(arr, root) {
  if (root === null) {
    return;
  }

  arrayToBST(arr, root.left);

  root.data = arr[index];
  index++;

  arrayToBST(arr, root.right);
}

function binaryTreeToBST(root) {
  if (root === null) {
    return;
  }

  const n = countNodes(root);

  const arr = new Array(n);

  storeInorder(root, arr);

  arr.sort((a, b) => a - b);

  index = 0;
  arrayToBST(arr, root);
}

function printInorder(node) {
  if (node === null) {
    return;
  }

  printInorder(node.left);

  process.stdout.write(node.data + " ");

  printInorder(node.right);
}

// Testing Example :

const root = new Node(10);
root.left = new Node(2);
root.right = new Node(7);
root.left.left = new Node(8);
root.left.right = new Node(4);

binaryTreeToBST(root);

console.log("The In-Order Traversal of the converted BST is : ");
printInorder(root);
