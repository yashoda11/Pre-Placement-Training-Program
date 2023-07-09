class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function areTraversalsSame(preorder, inorder, postorder) {
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
  }
  
  // Example 1
  const inorder1 = [4, 2, 5, 1, 3];
  const preorder1 = [1, 2, 4, 5, 3];
  const postorder1 = [4, 5, 2, 3, 1];
  
  console.log(areTraversalsSame(preorder1, inorder1, postorder1));
  
  // Example 2
  const inorder2 = [4, 2, 5, 1, 3];
  const preorder2 = [1, 5, 4, 2, 3];
  const postorder2 = [4, 1, 2, 3, 5];
  
  console.log(areTraversalsSame(preorder2, inorder2, postorder2));
  