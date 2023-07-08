class TreeNode {
    constructor (value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
var lowestCommonAncestor = function(root, p, q) {
    if ((root.val > p) && (root.val > q)) {
        return lowestCommonAncestor(root.left, p, q);
    }
    else if (root.val < p && root.val < q ) {
        return lowestCommonAncestor(root.right, p, q);
    }
    else 
    return root.val;
};

// 
let root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

console.log(`LCA of BST : ${lowestCommonAncestor(root, 0, 4)}`);

