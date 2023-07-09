# **Assignment Questions - 22**
## **Question - 03 :**

Given a binary tree, **print** all its **root-to-leaf paths** **without** using **recursion**. 
- For example, consider the following Binary Tree.

```
Example :

Input :

        6
     /    \
    3      5
  /   \     \
 2     5     4
     /   \
    7     4

Output :

There are 4 leaves, hence 4 root to leaf paths -
  6->3->2
  6->3->5->7
  6->3->5->4
  6->5->4
```

**Explanation :**
- The code defines a Node class to represent a node in the binary tree. Each node has a data value and left and right pointers.
- The printRootToLeafPaths() function is implemented to print all the root-to-leaf paths in the binary tree without using recursion.
- The function takes the root node of the binary tree as an input parameter.
- It uses two stacks: stack to store the nodes to be processed, and pathStack to store the corresponding paths from the root to each node.
- The function starts by pushing the root node and its data (as a string) into the respective stacks.
- It enters a while loop that continues until the stack is empty.
- Inside the loop, it pops a node and its corresponding path from the stacks.
- If the popped node is a leaf node (both left and right pointers are null), it prints the path.
- If the popped node has a right child, it pushes the right child and the updated path (appending the right child's data) into the stacks.
- If the popped node has a left child, it pushes the left child and the updated path (appending the left child's data) into the stacks.
- The loop continues until all nodes are processed.
- In the main() part of the code:
- A binary tree is constructed by creating instances of the Node class and connecting them appropriately.
- The printRootToLeafPaths() function is called with the root of the binary tree to print all the root-to-leaf paths.
- The output of the code is the printed root-to-leaf paths of the given binary tree. Each path represents the values of the nodes along the path, separated by "->" symbols.