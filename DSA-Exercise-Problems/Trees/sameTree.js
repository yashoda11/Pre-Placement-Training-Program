class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

var issameTree = function (p, q) {

    if ((p == null) && (q == null)) return true;
    if ((p == null) || (q == null)) return false;
    if (p.value != q.value)         return false;
    return issameTree(p.left, q.left) && issameTree(p.right, q.right);

}

// construct binary tree :

var p = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(3);

p.left = node2;
// p.right = node3;


var q = new TreeNode(1);
var node2 = new TreeNode(3);
var node3 = new TreeNode(2);

// q.left = node2;
q.right = node3;

console.log(issameTree(p, q));