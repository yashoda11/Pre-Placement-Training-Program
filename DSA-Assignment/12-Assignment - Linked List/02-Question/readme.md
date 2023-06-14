# **Assignment Questions - 12**
## **Question - 02**

Given a linked list of **N** nodes. 
- The task is to check if the linked list has a loop. 
- Linked list can contain self loop.

**Example - 01:**

**Input :** N = 3
- value[] = {1,3,4}
- x(position at which tail is connected) = 2

**Output :** True

**Explanation :**
- In above test case N = 3.
- The linked list with nodes N = 3 is given. 
- Then value of x=2 is given which means last node is connected with xth node of linked list. 
- Therefore, there exists a loop.

**Example 2:**
**Input :** N = 4
- value[] = {1,8,3,4}
- x = 0

**Output :** False

**Explanation :** 
- For N = 4 ,x = 0 means then lastNode->next = NULL, then the Linked list does not contains
any loop.


**Analysis :**
- This code includes the createLinkedList function, which takes an array of values and the position x where the tail is connected to create a linked list. 
- It creates a linked list with the provided values and connects the tail to the xth node, creating a loop if x is a valid index.
- The testCases array contains multiple test cases, each specified as an object with values representing the values of the linked list and x representing the position at which the tail is connected.
- The code then iterates over the test cases, creates a linked list using the createLinkedList function, and checks for the presence of a loop using the hasLoop function. 
- The linked list values, x, and the result are logged to the console.