# **Assignment Questions - 14**

## **Question - 02**

A number **N** is represented in Linked List such that each digit corresponds to a node in linked list. 
- You need to add 1 to it.

**Example - 01 :**
```
Input : LinkedList: 4->5->6
Output : 457
```

**Example - 02 :**
```
Input : LinkedList: 1->2->3
Output : 124
```

**EXplanation :**
- The code begins by defining a Node class to represent a node in the linked list. Each node has a data property to store the digit value and a next property to link to the next node in the list.
- The addOneToList function takes the head of the linked list as input and performs the addition operation. It uses a dummy node to handle cases where the most significant digit needs to be incremented.
- Inside the function, a dummy node is created and linked to the head of the input list. This dummy node helps in cases where the leftmost digit needs to be incremented.
- A variable lastNonNineNode is initialized as the dummy node. It keeps track of the rightmost non-nine digit encountered while traversing the list.
- The linked list is traversed to find the rightmost non-nine digit. If a digit is not equal to 9, the lastNonNineNode is updated to that digit.
- Once the rightmost non-nine digit is found, it is incremented by 1.
- Starting from lastNonNineNode.next, all the following digits are set to 0, effectively "carrying over" the increment.
- If the dummy node is still the head after the increment operation, it means a new node has been added at the leftmost position. In this case, the dummy node itself is returned as the new head of the list.
- Otherwise, the next node after the dummy node is returned as the new head of the list.
- The displayListAsArrows function is used to display the linked list with arrows, representing the input.
- The displayListAsDigits function is used to display the linked list as a sequence of digits, representing the output.
- Two test cases are provided to demonstrate the functionality of the code. The input linked lists are created, displayed, and passed to the addOneToList function. The resulting linked lists are displayed as digits.