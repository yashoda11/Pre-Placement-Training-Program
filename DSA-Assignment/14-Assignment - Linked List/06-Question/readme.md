# **Assignment Questions - 14**

## **Question - 06**

Given a singly linked list of size **N**. 
- The task is to **left-shift** the linked list by **k** nodes, where **k** is a given positive integer smaller than or equal to length of the linked list.

**Example - 01 :**
```
Input : N = 5
value[] = {2, 4, 7, 8, 9}
k = 3
Output : 8 9 2 4 7
Explanation : 
Rotate 1 : 4 -> 7 -> 8 -> 9 -> 2
Rotate 2 : 7 -> 8 -> 9 -> 2 -> 4
Rotate 3 : 8 -> 9 -> 2 -> 4 -> 7
```

**Example - 02 :**
```
Input : N = 8
value[] = {1, 2, 3, 4, 5, 6, 7, 8}
k = 4
Output : 5 6 7 8 1 2 3 4
```

**Explanation :**
- This code will left-shift the given singly linked list by k nodes and return the head of the shifted list. The printList function is a helper function to print the values of each node in the linked list.
- The algorithm works as follows:
- **Algorithn :**
    1. Find the length of the linked list and the tail node.
    2. Adjust k if it exceeds the length of the linked list.
    3. If k is 0 after adjustment, return the original head.
    4. Find the new head node by traversing k nodes from the original head.
    5. Set the newHead as the current node and break the link between the previous node and the new head.
    6. Connect the tail node to the original head to form a circular linked list.
    7. Return the new head.
- The algorithm has a **Time complexity of O(n)**, where n is the length of the linked list, as it requires traversing the list to find its length and perform the left shift. 
- It uses **O(1) extra space complexity** since it only requires a constant number of pointers to manipulate the linked list.