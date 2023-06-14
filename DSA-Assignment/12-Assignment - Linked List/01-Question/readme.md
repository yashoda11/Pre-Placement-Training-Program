# **Assignment Questions - 12**

## **Question - 01**

Given a singly linked list, delete **middle** of the linked list. 
- For example, if given linked list is 1->2->**3**->4->5 then linked list should be modified to 1->2->4->5.
- If there are **even** nodes, then there would be **two middle** nodes, we need to delete the second middle element. 
- For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.
- If the input linked list is NULL or has 1 node, then it should return NULL

**Example - 01:**
```
Input: LinkedList: 1->2->3->4->5
Output:1 2 4 5
```

**Example - 02:**
```
Input: LinkedList: 2->4->6->7->5->1
Output:2 4 6 5 1
```
**Explanation :**
- In this code, the Node class represents a linked list node. 
- The deleteMiddle function takes the head of the linked list as input and deletes the middle element(s) from it. - It uses the two-pointer approach to find the middle element(s). 
- If the linked list has an odd number of nodes, it deletes the middle element. 
- If the linked list has an even number of nodes, it deletes the second middle element. 
- The modified linked list is then returned.
- The linkedListToArray function converts the linked list to an array for easy output display. 
- The createLinkedList function creates a linked list from an array of values.
- The code includes test cases where different inputs are provided. 
-  For each test case, it creates a linked list, deletes the middle element(s), and prints the resulting linked list values.