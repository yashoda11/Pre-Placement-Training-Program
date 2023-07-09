# **Assignment Questions - 21**
## **Question - 04**

Write a program to connect nodes at the same level.

```
Input :

        1

      /   \

    2      3

  /   \   /   \

4     5 6    7

Output :

1 → -1

2 → 3

3 → -1

4 → 5

5 → 6

6 → 7

7 → -1
```

**Explanation :**
- To connect nodes at the same level in a binary tree, we can use the level order traversal technique along with maintaining a "next" pointer for each node to connect it to the next node at the same level.
- In this code, we have the TreeNode class to represent a node in the binary tree. 
- Each node has a next pointer that will be used to connect it to the next node at the same level.
- The connectNodesAtSameLevel function takes the root of the binary tree as input. 
- It performs a level order traversal and connects the nodes at the same level by setting the next pointers.
- The printConnections function is used to print the connections between nodes at the same level. 
- It traverses each level of the tree and prints the values of nodes followed by →, and -1 at the end of each level.