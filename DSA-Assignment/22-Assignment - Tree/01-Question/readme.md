# **Assignment Questions - 22**
## **Question - 01**

Given a **Binary Tree (BT)**, **convert** it to a **Doubly Linked List(DLL)**. The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL. 
- The order of nodes in DLL must be the same as in Inorder for the given Binary Tree. 
- The first node of Inorder traversal (leftmost node in BT) must be the head node of the DLL.

**Example :**

![Example Image](https://file.notion.so/f/s/f9dda6ae-60b9-427b-990f-dc5b3117a5e3/Untitled.png?id=f5542efd-4d64-4904-9259-23aeb80f012b&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&expirationTimestamp=1688976000000&signature=L9Hg-9QYlu2KrKI37eg0i9x7y5m7PvD9VcCO53ARVAc&downloadName=Untitled.png)

**Explanation :**
- The code defines a **Node class** to represent a node in the binary tree. Each node has a data value and left and right pointers.
- The **BinaryTreeToDLL class** is defined to convert a binary tree to a doubly linked list (DLL) while maintaining the inorder traversal order.
- The **binaryTreeToDLL()** method is implemented to **convert** the **binary tree** to **DLL** using recursion.
- The method takes the root node as an input parameter.
- If the root is null, it returns and ends the recursion.
- The method first converts the left subtree to DLL by recursively calling binaryTreeToDLL() on the left child of the root.
- Then, it processes the current node:
- If **prev** is **null**, it means the current node is the **leftmost node** (head of DLL), so it assigns the root to head.
- If prev is not null, it sets the right pointer of the previous node (prev.right) to the current root node, and sets the left pointer of the current root to the previous node (root.left = prev).
- Updates the prev pointer to the current root for the next iteration.
- Finally, it converts the right subtree to DLL by recursively calling binaryTreeToDLL() on the right child of the root.
- The **printDLL()** method is implemented to print the values of the nodes in the **DLL**.
- It starts from the head node and iterates through the DLL using the right pointers, printing each node's data.
- In the main() part of the code:
- An instance of the BinaryTreeToDLL class is created.
- The binary tree is constructed by assigning nodes and connecting them appropriately.
- The **binaryTreeToDLL()** method is called on the root node to convert the binary tree to DLL.
- The **printDLL()** method is called to print the values of the nodes in the DLL.
- The **Output** of the code is the values of the nodes in the DLL after converting the given binary tree to a doubly linked list while maintaining the inorder traversal order.