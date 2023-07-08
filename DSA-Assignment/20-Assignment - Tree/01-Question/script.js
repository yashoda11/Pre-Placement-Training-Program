// Definition of a binary tree node
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Function to find the subtree with maximum sum
function findMaxSubtreeSum(root) {
    if (root === null) {
        return 0;
    }

    // Helper function to calculate the sum of a subtree
    function calculateSubtreeSum(node) {
        if (node === null) {
            return 0;
        }
        return node.data + calculateSubtreeSum(node.left) + calculateSubtreeSum(node.right);
    }

    let maxSum = root.data;

    // Calculate the sum of the current subtree
    let currentSum = calculateSubtreeSum(root);

    // If the sum of the current subtree is greater than the maximum sum, update the maximum sum
    if (currentSum > maxSum) {
        maxSum = currentSum;
    }

    // Recursively find the maximum sum in the left and right subtrees
    let leftSum = findMaxSubtreeSum(root.left);
    let rightSum = findMaxSubtreeSum(root.right);

    // If the maximum sum in the left subtree is greater than the current maximum sum, update the maximum sum
    if (leftSum > maxSum) {
        maxSum = leftSum;
    }

    // If the maximum sum in the right subtree is greater than the current maximum sum, update the maximum sum
    if (rightSum > maxSum) {
        maxSum = rightSum;
    }

    return maxSum;
}


// Testing Examples :

// Example - 01 : Create the binary tree for the first example
let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);
root1.right.left = new Node(6);
root1.right.right = new Node(7);

// Find the subtree with maximum sum in the first example
console.log(`Example - 01 : \nThe Maximum Sum in the Subtree is : ${findMaxSubtreeSum(root1)} .
`);
    

// Example - 02 : Create the binary tree for the second example 
let root2 = new Node(1);
root2.left = new Node(-2);
root2.right = new Node(3);
root2.left.left = new Node(4);
root2.left.right = new Node(5);
root2.right.left = new Node(-6);
root2.right.right = new Node(2);

// Find the subtree with maximum sum in the second example
console.log(`Example - 02 : \nThe Maximum Sum in the Subtree is : ${findMaxSubtreeSum(root2)} .
`);
    
