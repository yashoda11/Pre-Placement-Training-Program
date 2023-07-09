# **Assignment Questions - 21**
## **Question - 01**

You are given a binary tree. The binary tree is represented using the TreeNode class. 
- Each TreeNode has an integer value and left and right children, represented using the TreeNode class itself. 
- Convert this binary tree into a binary search tree.

```
Example :

Input :

        10

       /   \

     2      7

   /   \

 8      4

Output :

        8

      /   \

    4     10

  /   \

2      7
```

**Explanation :**
- The given code represents a solution to convert a binary tree into a binary search tree (BST). 
- Let's go through the explanation of the code :
  1. The Node class represents a node in the binary tree. It has three properties: data to store the node's value, left to store the left child, and right to store the right child.
  2. The index variable is declared to keep track of the current index while performing operations on the array representation of the binary tree.
  3. The storeInorder function performs an inorder traversal of the binary tree and stores the values in the inorder array. It uses recursion to traverse the left subtree, store the current node's value, and then traverse the right subtree.
5. The countNodes function recursively counts the number of nodes in the binary tree. It returns 0 for a null node and counts the nodes in the left and right subtrees by recursion.
6. The arrayToBST function takes the arr (inorder traversal of the binary tree) and assigns the values to the binary search tree in a sorted manner. It uses recursion to assign the values to the left subtree, the current node, and then the right subtree.
7. The binaryTreeToBST function is the main function that converts the given binary tree to a binary search tree. It calculates the number of nodes in the tree, creates an array to store the inorder traversal, performs the inorder traversal to populate the array, sorts the array, and assigns the values back to the binary tree using the arrayToBST function.
8. The printInorder function performs an inorder traversal of the binary tree and prints the node values. It uses recursion to traverse the left subtree, prints the current node's value, and then traverses the right subtree.
9. Finally, the code creates a sample binary tree with some nodes, calls the binaryTreeToBST function to convert it to a binary search tree, and prints the inorder traversal of the converted BST.