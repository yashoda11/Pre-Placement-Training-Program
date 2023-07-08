# **Assignment Questions - 20**
## **Question - 02**

Construct the BST (Binary Search Tree) from its given level order traversal.

**Example :**

**Input :** arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

**Output :** BST:

            7

         /    \

       4     12

     /  \     /

    3   6  8

   /    /     \

 1    5      10

 **Explanation :**
- To construct a Binary Search Tree (BST) from its given level order traversal, we can follow the following steps:
  1. Create an empty root node.
  2. Iterate through the given level order traversal array.
  3. For each element in the array, insert it into the BST starting from the root.
  4. To insert an element, compare it with the current node's value and decide whether to move to the left or right subtree.
  5. If the element is smaller than the current node's value, move to the left subtree. If it's larger, move to the right subtree.
  6. Repeat steps 4-5 until finding an appropriate position to insert the element as a new node.
  7. Return the root of the constructed BST.
- In this code, the constructBSTFromLevelOrder function takes the level order traversal array as input and constructs the corresponding BST using the iterative approach. 
- It uses a queue to keep track of the nodes during the construction process.
- The printLevelOrder function is a helper function that prints the BST in level order traversal.
- In the given input, the given level order traversal array [7, 4, 12, 3, 6, 8, 1, 5, 10] is used to construct the BST, and then the BST is printed using the printLevelOrder function.