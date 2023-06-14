# **Assignment Questions - 12**

## **Question - 03**

Given a linked list consisting of **L** nodes and given a number **N**. The task is to find the **N**th node from the end of the linked list.

**Example - 01:**
```
Input: N = 2
LinkedList: 1->2->3->4->5->6->7->8->9
Output :8
Explanation :
In the first example, there are 9 nodes in linked list and we need to find 2nd node from end. 
2nd node from end is 8.
```

**Example - 02:**
```
Input : N = 5
LinkedList: 10->5->100->5
Output:-1
Explanation : 
In the second example, there are 4 nodes in the linked list and we need to find 5th from the end. Since 'n' is more than the number of nodes in the linked list, the output is -1.
```

**Analysis :**
- In this code, the Node class represents a linked list node. 
- The findNthFromEnd function takes the head of the linked list and the value N as input and finds the Nth node from the end of the linked list. 
- It uses two pointers, slow and fast, where the fast pointer is moved N nodes ahead of the slow pointer. 
- Then both pointers are moved simultaneously until the fast pointer reaches the end of the linked list. 
- The value of the slow pointer represents the Nth node from the end.
- The createLinkedList function creates a linked list from an array of values.
- The code includes test cases where different inputs are provided. 
- For each test case, it creates a linked list, finds the Nth node from the end, and prints the resulting value.