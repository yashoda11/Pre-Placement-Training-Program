class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function str2tree(s) {
    if (s === "") {
      return null;
    }
  
    // Find the first occurrence of '('
    const leftParenIndex = s.indexOf("(");
  
    if (leftParenIndex === -1) {
      // No left parenthesis found, so the entire string is the root value
      return new TreeNode(parseInt(s));
    }
  
    // Parse the root value from the substring before '('
    const rootVal = parseInt(s.substring(0, leftParenIndex));
    const root = new TreeNode(rootVal);
  
    let openParenCount = 0;
    let start = leftParenIndex;
  
    for (let i = start; i < s.length; i++) {
      if (s[i] === "(") {
        openParenCount++;
      } else if (s[i] === ")") {
        openParenCount--;
      }
  
      if (openParenCount === 0 && start === leftParenIndex) {
        // Recursively construct the left subtree
        root.left = str2tree(s.substring(start + 1, i));
        start = i + 1;
      } else if (openParenCount === 0) {
        // Recursively construct the right subtree
        root.right = str2tree(s.substring(start + 1, i));
      }
    }
  
    return root;
  }
  
  function inorderTraversal(root) {
    const result = [];
  
    function traverse(node) {
      if (node === null) {
        return;
      }
  
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
    }
  
    traverse(root);
  
    return result;
  }
  
  // Example usage:
  const s = "4(2(3)(1))(6(5))";
  const root = str2tree(s);
  const result = inorderTraversal(root);
  console.log(result);