# **Assignment Questions - 13**

## **Question - 05**

Given a linked list and a key to be deleted. 
- Delete last occurrence of key from linked. 
- The list may have duplicates.

**Examples :**
```
Input:   1->2->3->5->2->10, key = 2
Output:  1->2->3->5->10
```

**Explanation :**
- The code defines a Node class to represent each node in the linked list. 
- The deleteLastOccurrence function traverses the linked list to find the last occurrence of the given key and removes it. 
- The displayList function is used to display the linked list before and after the deletion.
- The last occurrence of the key 2 is deleted from the linked list, resulting in the modified list 1->2->3->5->10.