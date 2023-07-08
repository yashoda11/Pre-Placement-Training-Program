class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

var preOrder = function (root) {
  if ( root ==  null ) 
  return "";

  result = root.value + " ";
  result += preOrder(root.left);
  result += preOrder(root.right);

  return result;

};

var inOrder = function(root) {
  if (root ==  null ) 
  return "";

  let result = "";
  result += inOrder(root.left);
  result += root.value + " ";
  result += inOrder(root.right);

  return result;

}

var postOrder = function(root) {
  if (root == null)
  return "";

  let result = "";
  result += postOrder(root.left);
  result += postOrder(root.right);
  result += root.value + " ";
  return result;
}
 
  //nth Level :
  var nthLevel = function(root, currentValue, level) {
    if (root == null || currentValue > level)
      return "";
  
    if (currentValue == level) {
      return root.value + " ";
    }
  
    let left = nthLevel(root.left, currentValue + 1, level);
    let right = nthLevel(root.right, currentValue + 1, level);
  
    return left + right;
  };

  var printAllLevels = function (root) {
    var levelsOfTree = function(root) {
      if (root == null) return 0;
  
      return 1 + Math.max(levelsOfTree(root.left), levelsOfTree(root.right));
    };
    var nthLevel = function(root, currentValue, level) {
      if (root == null || currentValue > level)
        return "";
    
      if (currentValue == level) {
        return root.value + " ";
      }
    
      let left = nthLevel(root.left, currentValue + 1, level);
      let right = nthLevel(root.right, currentValue + 1, level);
    
      return left + right;
    };

    for (let i = 1; i <= levelsOfTree(root); i ++) {
      console.log(`${i} Level nodes are : ${nthLevel(root, 1, i)}`);
    }
  };


  

  // Create a binary tree
  const root = new TreeNode(1);
  const node2 = new TreeNode(2);
  const node3 = new TreeNode(3);
  const node4 = new TreeNode(4);
  const node5 = new TreeNode(5);
  const node6 = new TreeNode(6);
  const node7 = new TreeNode(7);
  const node8 = new TreeNode(8);
  const node9 = new TreeNode(9);
  const node10 = new TreeNode(10);
  const node11 = new TreeNode(11);
  const node12 = new TreeNode(12);
  const node13 = new TreeNode(13);
  const node14 = new TreeNode(14);
  const node15 = new TreeNode(15);
  
  root.left = node2; 
  root.right = node3;
  node2.left = node4;
  node2.right = node5;
  node3.left = node6;
  node3.right = node7;
  node4.left = node8;
  node4.right = node9;
  node5.left = node10;
  node5.right = node11;
  node6.left = node12;
  node6.right = node13;
  node7.left = node14;
  node7.right = node15;

  console.log(`Pre Order Traversal is : ${preOrder(root)}`);
  console.log(`In Order Traversal is : ${inOrder(root)}`);
  console.log(`Post Order Traversal is : ${postOrder(root)}`);
  // console.log(`Nth Level traversal is : ${nthLevel(root, 1, 3)}`);
  printAllLevels(root);