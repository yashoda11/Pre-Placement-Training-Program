class TreeNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
  var constructBSTFromLevelOrder = function(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;
  
    while (i < arr.length) {
      let currentNode = queue.shift();
  
      if (arr[i] < currentNode.val) {
        currentNode.left = new TreeNode(arr[i]);
        queue.push(currentNode.left);
        i++;
      }
  
      if (i < arr.length && arr[i] > currentNode.val) {
        currentNode.right = new TreeNode(arr[i]);
        queue.push(currentNode.right);
        i++;
      }
    }
  
    return root;
  };
  
  var printLevelOrder = function(root) {
    if (root === null) {
      return;
    }
  
    let queue = [root];
  
    while (queue.length > 0) {
      let node = queue.shift();
      process.stdout.write(node.val + " ");
  
      if (node.left !== null) {
        queue.push(node.left);
      }
  
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  };
  
// testing Examples :
  let arr = [7, 4, 12, 3, 6, 8, 1, 5, 10];
  console.log(`The Binary Search Tree \nfrom the given [${arr}] level order traversal is :`);
  printLevelOrder(constructBSTFromLevelOrder(arr))