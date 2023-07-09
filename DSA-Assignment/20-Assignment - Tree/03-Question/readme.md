# **Assignment Questions - 20**
## **Question - 03**

Given an array of size n. 
- The problem is to check whether the given array can represent the level order traversal of a **Binary Search Tree or not**.

```
Example - 01 :

Input - 01 : 
arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

Output - 01 : 
Yes

For the given arr[], the Binary Search Tree is:

            7

         /    \

       4     12

     /  \     /

    3   6  8

   /    /     \

 1    5      10
```

```
Example - 02 :

Input - 02 : 
arr[] = {11, 6, 13, 5, 12, 10}

Output - 02 : 
No

The given arr[] does not represent the level order traversal of a BST.
```


**Analysis :**
1. class TreeNode: This is a class representing a node in the binary tree. Each node has a value (val), and references to its left and right child nodes (left and right). This class is used to construct the BST.
2. canRepresentBST(arr): This is the main function that takes an array (arr) as input and checks if it can represent the level order traversal of a BST.
   - const n = arr.length;: Get the length of the given array.
   - if (n === 0): Check if the array is empty. If it is, return true because an empty array represents an empty BST.
   - const root = new TreeNode(arr[0]);: Create the root node of the BST using the first element of the array.
