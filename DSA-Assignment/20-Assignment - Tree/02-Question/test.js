// class representing node of a binary tree
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  // function to print in order traversal of a binary tree
  function inorder(root) {
    if (root !== null) {
      inorder(root.left);
      console.log(root.data + " ");
      inorder(root.right);
    }
  }
  
  function attachNode(root, value) {
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
  }
  
  function formBST(levelOrder) {
    // initialize root as null
    let root = null;
    
    // for each element attach the node to required position in the BST
    for (let i = 0; i < levelOrder.length; i++) {
      // Step 3 to 5
      root = attachNode(root, levelOrder[i]);
    }
    
    // return root
    return root;
  }
  
  // Example 1
  let levelOrder1 = [7, 4, 12, 3, 6, 8, 1, 5, 10];
  let root1 = formBST(levelOrder1);
  inorder(root1);
  console.log();
  
//   // Example 2
//   let levelOrder2 = [4, 2, 5, 1, 3, 6];
//   let root2 = formBST(levelOrder2);
//   inorder(root2);
//   console.log();
  