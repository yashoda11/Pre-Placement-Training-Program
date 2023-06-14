# **Assignment Questions - 12**
## **Question 6**

Given a linked list and two integers M and N. 
- Traverse the linked list such that you retain M nodes then delete next N nodes, continue the same till end of the linked list.
- Difficulty Level: Rookie

**Examples - 01 :**
```
Input : M = 2, N = 2
Linked List : 1->2->3->4->5->6->7->8
Output :
Linked List: 1->2->5->6
```
**Examples - 02 :**
```
Input : M = 3, N = 2
Linked List: 1->2->3->4->5->6->7->8->9->10
Output :
Linked List: 1->2->3->6->7->8
```

**Examples - 03 :**
```
Input : M = 1, N = 1
Linked List: 1->2->3->4->5->6->7->8->9->10
Output :
Linked List: 1->3->5->7->9
```

**Analysis :**
- This implementation defines two classes, Node and LinkedList, to represent the linked list and its nodes. 
- The retainAndDelete method retains M nodes and deletes N nodes in a loop until the end of the linked list is reached. 
- After performing the operations, the resulting linked list is printed using console.log.
- The toString method is added to the LinkedList class to generate the arrow-separated output string. 
- The resulting linked list is printed using console.log.