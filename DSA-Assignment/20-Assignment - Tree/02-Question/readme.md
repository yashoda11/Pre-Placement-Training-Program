# **Assignment Questions - 20**
## **Question - 02**

Construct the BST (Binary Search Tree) from its given level order traversal.

```
Example :

Input : 
arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

Output :
BST:

            7

         /    \

       4     12

     /  \     /

    3   6  8

   /    /     \

 1    5      10
 ```

 **Explanation :**
- The code defines a Node class to represent a node in a binary tree. 
- It has properties data, left, and right to store the node value and references to the left and right child nodes, respectively.
-The inorder() function performs an in-order traversal of a binary tree, recursively visiting the left subtree, printing the node value, and then recursively visiting the right subtree.
- The attachNode() function recursively attaches a new node with the given value to the binary search tree (BST). It compares the value with the current node and attaches it to the left subtree if it's less than the current node's value, or to the right subtree otherwise.
- The formBST() function takes an array levelOrder representing the level-order traversal of a BST. It initializes the root variable as null and iterates over the elements in levelOrder. 
- For each element, it calls attachNode() to attach a new node with the element's value to the BST.
- In the main() function, two examples are created by providing different levelOrder arrays. 
- The formBST() function is called for each example to construct the BST. 
- Finally, the inorder() function is called to print the nodes of each BST in in-order traversal.

**Algorithm :**
- The algorithm used in the code constructs a binary search tree (BST) from its level-order traversal.
  1. Define a Node class to represent a node in the BST with properties data, left, and right.
  2. Implement the attachNode() function:
      - If the root is null, create a new node with the given value and assign it to the root.
      - If the value is less than the root's data, recursively attach the node to the left subtree.
      - If the value is greater than or equal to the root's data, recursively attach the node to the right subtree.
      - Return the root.
  3. Implement the formBST() function:
      - Initialize the root as null.
      - Iterate over the elements in the levelOrder array.
      - For each element, call the attachNode() function to attach a new node with the element's value to the BST using the root as the starting point.
      - Return the root of the constructed BST.
  4. In the main() function:
      - Create examples by providing different levelOrder arrays.
      - Call the formBST() function for each example to construct the corresponding BST.
      - Call the inorder() function to print the nodes of each BST in in-order traversal.


**Time Complexity :**
The **Time Complexity** of constructing the **BST** from the **level-order traversal** is **O(n log n)**, where n is the number of elements in the level-order array.
- The **attachNode()** function has a **time complexity** of **O(log n)** in the average case since it performs a binary search on the BST to find the appropriate position for the new node.
- In the formBST() function, the attachNode() function is called for each element in the level-order array, resulting in a total time complexity of O(n log n).
- The **inorder()** function, which performs an in-order traversal, has a **time complexity** of **O(n)** since it visits each node once.
- Therefore, the overall **Time Complexity** of the code is dominated by the construction of the BST, resulting in a time complexity of **O(n log n)**.

**Space Complexity :**
- The **space complexity** of the code is determined by the space used for the **recursion stack** and the **space** required to store the BST.
- In the **attachNode()** function, the **space** used by the **recursion stack** is **O(log n)** in the average case, corresponding to the height of the BST.
- The space required to store the BST depends on the number of nodes in the tree. 
  - In the **worst case**, when the tree is completely unbalanced and resembles a linked list, the **space complexity** is **O(n)**. 
  - However, in the **average case**, the **space complexity** is **O(log n)** due to a balanced BST.
- Therefore, the overall **space complexity** of the code is **O(log n)** in the average case, considering both the recursion stack and the space required for the BST.