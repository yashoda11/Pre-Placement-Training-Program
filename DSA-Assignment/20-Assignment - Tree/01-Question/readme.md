# **Assignment Questions - 20**
## **Question - 01**

Given a binary tree, your task is to find subtree with maximum sum in tree.

**Example - 01 :**

**Input - 01 :**      

       1

     /   \

   2      3

  / \    / \

4   5  6   7

**Output - 01 : 28**

As all the tree elements are positive, the largest subtree sum is equal to sum of all tree elements.

**Example - 02 :**

**Input- 02 :**

       1

     /    \

  -2      3

  / \    /  \

4   5  -6   2

**Output - 02 : 7**

Subtree with largest sum is :

 -2

 / \

4   5

Also, entire tree sum is also 7.

**Explanation :**
- The code defines a Node class to represent the nodes of the binary tree. 
- The **findMaxSubtreeSum** function recursively calculates the maximum sum in each subtree, considering both left and right subtrees. 
- It keeps track of the maximum sum found so far and updates it if a larger sum is found. 
- Finally, it returns the sum of the current subtree.
- In the examples provided, the binary trees are constructed using the Node class, and the **findMaxSubtreeSum** function is called with the root node of each tree to find the maximum sum in the subtree. 