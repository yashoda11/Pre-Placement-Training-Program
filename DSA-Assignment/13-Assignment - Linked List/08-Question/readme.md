# **Assignment Questions - 13**

## **Question - 08**

Given a doubly linked list and a position. 
- The task is to delete a node from given position in a doubly linked list.

**Example - 01 :**
```
Input : LinkedList = 1 <--> 3 <--> 4
x = 3
Output : 1 3
Explanation : 
After deleting the node at position 3 (position starts from 1), the linked list will be now as 1->3.
```

**Example - 02 :**
```
Input : LinkedList = 1 <--> 5 <--> 2 <--> 9
x = 1
Output:5 2 9
```

**EXplanation :**
- The code defines a Node class to represent each node in the doubly linked list. 
- The deleteNodeAtPosition function deletes a node from the given position in the doubly linked list. 
- If the position is 1, the head is updated. 
- Otherwise, the function traverses to the node at the given position and adjusts the prev and next pointers of the adjacent nodes to remove the node.
- The displayList function is used to display the original and updated linked lists.
- In the first example, the node at position 3 is deleted, resulting in the updated linked list 1 <-> 3. 
- In the second example, the node at position 1 is deleted, resulting in the updated linked list 5 <-> 2 <-> 9.