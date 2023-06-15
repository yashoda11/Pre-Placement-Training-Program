# **Assignment Questions - 14**

## **Question - 03**

Given a Linked List of size N, where every node represents a sub-linked-list and contains two pointers:(i) a **next** pointer to the next node,(ii) a **bottom** pointer to a linked list where this node is head.
- Each of the sub-linked-list is in sorted order.
- Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order. 
- **Note :** The flattened list will be printed using the bottom pointer instead of next pointer.

**Example - 01 :**
```
Input :
5 -> 10 -> 19 -> 28
|     |     |     |
7     20    22   35
|           |     |
8          50    40
|                 |
30               45

Output : 
5-> 7-> 8-> 10-> 19-> 20-> 22-> 28-> 30-> 35-> 40-> 45-> 50.

Explanation :
The resultant linked lists has every node in a single level.
(Note:| represents the bottom pointer.)
```

**Example - 02 :**
```
Input :
5 -> 10 -> 19 -> 28
|          |
7          22
|          |
8          50
|
30

Output : 
5->7->8->10->19->22->28->30->50

Explanation :
The resultant linked lists has every node in a single level.
(Note:| represents the bottom pointer.)
```

**Analysis :**
- This implementation uses a recursive approach to flatten the linked list. 
- The mergeLists function is used to merge two sorted linked lists. 
- The flatten function recursively flattens the sub-linked lists by merging the current node with the flattened next node. 
- Finally, the flattened linked list is printed by traversing the bottom pointers.