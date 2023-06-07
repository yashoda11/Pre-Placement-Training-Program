# **Assignment - 08**

## **Question 4**

You need to construct a binary tree from a string consisting of parenthesis and integers.
- The whole input represents a binary tree. 
- It contains an integer followed by zero, one or two pairs of parenthesis. 
- The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
- You always start to construct the **left** child node of the parent first if it exists.

**Input :** s = "4(2(3)(1))(6(5))"

**Output :** [4,2,6,3,1,5]

In this code, we define a TreeNode class to represent a node in the binary tree. We also define two main functions: str2tree to construct the binary tree from the string format, and inorderTraversal to perform an inorder traversal of the constructed tree.

In the str2tree function, we first check if the string is empty. If it is, we return null since there is no tree to construct.

Next, we find the index of the first '(' character. If no '(' is found, it means the entire string is the root value, so we create a new TreeNode with that value and return it.

If a '(' is found, we extract the root value from the substring before the '(' and create a new TreeNode with that value.

We then iterate through the remaining characters in the string and keep track of the open parenthesis count. Whenever the count reaches 0 (indicating the end of a subtree), we recursively construct the left or right subtree using the corresponding substring.

Finally, we return the constructed root node.

To verify the correctness of the construction, we use the inorderTraversal function to perform an inorder traversal of the constructed tree. This will give us the values of the tree nodes in ascending order.

In the example usage, we construct the binary tree from the string "4(2(3)(1))(6(5))" and perform an inorder traversal. The resulting output [3, 2, 1, 4, 5, 6] represents the values of the nodes in the constructed binary tree.