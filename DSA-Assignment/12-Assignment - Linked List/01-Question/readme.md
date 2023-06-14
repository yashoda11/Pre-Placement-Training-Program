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

To delete the middle node(s) of a singly linked list in JavaScript, we can use the fast and slow pointer technique. The fast pointer moves two steps at a time, while the slow pointer moves one step at a time. By the time the fast pointer reaches the end of the list, the slow pointer will be pointing to the middle node(s) of the list.

You can run this code in a JavaScript environment to see the output. The Node class represents a single node in the linked list, and the LinkedList class provides the necessary operations on the linked list, including adding nodes, deleting middle node(s), and printing the list.




