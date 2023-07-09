class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
var areTraversalsSame =  function (preorder, inorder, postorder) {
    if (preorder.length === 0 && inorder.length === 0 && postorder.length === 0) {
      return true;
    }
  
    if (preorder.length === 1 && inorder.length === 1 && postorder.length === 1) {
      return preorder[0] === inorder[0] && inorder[0] === postorder[0];
    }
  
    if (preorder.length > 0 && inorder.length > 0 && postorder.length > 0) {
      const root = preorder[0];
      const rootIndex = inorder.indexOf(root);
  
      const leftInorder = inorder.slice(0, rootIndex);
      const rightInorder = inorder.slice(rootIndex + 1);
  
      const leftPreorder = preorder.slice(1, rootIndex + 1);
      const rightPreorder = preorder.slice(rootIndex + 1);
  
      const leftPostorder = postorder.slice(0, rootIndex);
      const rightPostorder = postorder.slice(rootIndex, -1);
  
      const leftSubtree = areTraversalsSame(leftPreorder, leftInorder, leftPostorder);
      const rightSubtree = areTraversalsSame(rightPreorder, rightInorder, rightPostorder);
  
      return leftSubtree && rightSubtree;
    }
  
    return false;
  };
  
  
  
// Testing Examples :

// Example - 01 :

  var inorder = [4, 2, 5, 1, 3];
  var preorder = [1, 2, 4, 5, 3];
  var postorder = [4, 5, 2, 3, 1];
  
  console.log(`
  Example - 01 : 

  In-Order is : [${inorder}] ,
  Pre-Order is : [${preorder}],
  Post-Order is : [${postorder}] ,
  The Output is : ${areTraversalsSame(preorder, inorder, postorder)}
  `);
  


// Example - 02 :

  var inorder = [4, 2, 5, 1, 3];
  var preorder = [1, 5, 4, 2, 3];
  var postorder = [4, 1, 2, 3, 5];
  
  console.log(`
  Example - 02 : 

  In-Order is : [${inorder}] ,
  Pre-Order is : [${preorder}] ,
  Post-Order is : [${postorder}] ,
  The Output is : ${areTraversalsSame(preorder, inorder, postorder)}
  `);