# **Assignment Questions - 22**
## **Question - 02**


A Given a binary tree, the task is to flip the binary tree towards the right direction that is clockwise. 
- See the below examples to see the transformation.
- In the flip operation, the **leftmost node** becomes the **root** of the flipped tree and its **parent** becomes its **right child** and the **right sibling** becomes its **left child** and the same should be done for all left most nodes recursively.


**Example - 01 :**

![Example Image - 01](https://file.notion.so/f/s/a5f5bbbe-8607-4f17-9ab4-b31327ffa2d0/Untitled.png?id=bf2642e8-4284-4d78-9cf8-ea00a926b238&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&expirationTimestamp=1688976000000&signature=XLXkewa4amXXJ7UGj4EoCzNQCCl5zL4j_ZxTmB0Vwfs&downloadName=Untitled.png)



**Example - 02 :**

![Example Image - 02](https://file.notion.so/f/s/063636b4-9f35-4524-b6d9-c97e30cac510/Untitled.png?id=257a6e42-4876-4a44-ac0e-07f80a570f83&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&expirationTimestamp=1688976000000&signature=oOLOvQYWsNlFLGcHXFsrfjUVd_1et4RdlkChmLBlwIE&downloadName=Untitled.png)


**Explanation :**
- The provided code implements flipping a binary tree in a clockwise direction and printing the level order traversal of the given tree and the flipped tree. 
- Here's an explanation of the code:
    - The code begins by defining a Node class to represent a node in a binary tree. Each node has a data value and left and right pointers.
    - The flipBinaryTree() function is implemented to flip the binary tree in a clockwise direction.
    - It takes the root node of the binary tree as an input parameter.
        - If the root is null or a leaf node (both left and right pointers are null), it returns the root as it is.
        - If the root has child nodes, it recursively calls itself on the left subtree and assigns the returned node to flippedRoot.
    - It rearranges the root and its left subtree to perform the flip operation:
        - It assigns the root.right to root.left.left to make the left child of the root become the left child of its right child.
        - It assigns the root to root.left.right to make the root become the right child of its left child.
    - It sets the root.left and root.right to null.
- Finally, it returns flippedRoot as the new root of the flipped tree.
- The printLevelOrder() function is implemented to print the level order traversal of a binary tree.
    - It takes the root node of the tree as an input parameter.
    - It uses a queue to perform a level order traversal of the tree.
    - It starts by enqueueing the root node.
    - It enters a loop that continues until the queue is empty:
    - It retrieves the first node from the queue and prints its data.
        - If the node has a left child, it enqueues the left child.
        - If the node has a right child, it enqueues the right child.
    - The loop continues until all nodes at the current level are processed.
- After processing each level, it prints a new line to separate the levels.
- In the main() part of the code:
    - A binary tree is constructed by creating instances of the Node class and connecting them appropriately.
    - The level order traversal of the original tree is printed using the printLevelOrder() function.
    - The flipBinaryTree() function is called with the root of the binary tree to flip it.
    - The level order traversal of the flipped tree is printed using the printLevelOrder() function.