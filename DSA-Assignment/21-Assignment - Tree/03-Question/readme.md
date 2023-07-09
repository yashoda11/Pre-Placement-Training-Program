# **Assignment Questions - 21**
## **Question - 03**


Write a program to convert a binary tree to a doubly linked list.

```
Input :

        10

       /   \

     5     20

           /   \

        30     35

Output:
5 10 30 20 35
```

**Explanation :**
- To convert a binary tree to a doubly linked list, we can perform an in-order traversal of the tree and adjust the pointers to create the doubly linked list. 
- In this code, we have the TreeNode class to represent a node in the binary tree, and the DoublyLinkedListNode class to represent a node in the doubly linked list.
- The convertToDoublyLinkedList function takes the root of the binary tree as input and recursively converts the binary tree to a doubly linked list using an in-order traversal. 
- It returns the head node of the doubly linked list.
- The connectNodes function connects the current node to the previous node in the in-order traversal by updating the prev and next pointers.
- Finally, the printDoublyLinkedList function is used to print the values of the doubly linked list.