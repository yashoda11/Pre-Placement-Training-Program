# **Assignment Questions - 13**

## **Question - 06**

Given two sorted linked lists consisting of **N** and **M** nodes respectively. 
- The task is to merge both of the lists (in place) and return the head of the merged list.

**Examples - 01 :**
```
Input: 
a: 5->10->15,
b: 2->3->20
Output: 2->3->5->10->15->20
```

**Examples - 02 :**
```
Input: 
a: 1->1,
b: 2->4
Output: 1->1->2->4
```

**EXplanation :**
- The code defines a Node class to represent each node in the linked list. 
- The mergeSortedLists function merges two sorted linked lists a and b in-place and returns the head of the merged list. 
- The displayList function is used to display the input and output lists.
- The two sorted linked lists are merged into a single sorted linked list according to their node values.