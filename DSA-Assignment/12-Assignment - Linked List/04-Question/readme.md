# **Assignment Questions - 12**
## **Question 4**

Given a singly linked list of characters, write a function that returns true if the given list is a palindrome, else false.

![Example Image](https://media.geeksforgeeks.org/wp-content/uploads/20220816144425/LLdrawio.png)

**Examples : 01**

**Input :** R->A->D->A->R->NULL

**Output :** Yes

**Examples : 02**

**Input :** C->O->D->E->NULL

**Output :** No

**Explanation :**
- In this code, the Node class represents a linked list node. 
- The isPalindrome function takes the head of the linked list as input and checks if the linked list is a palindrome. 
- It uses the fast and slow pointers approach to find the middle of the list and reverses the first half of the list using the prev variable. 
- Then it compares the reversed first half with the second half of the list. 
- If they match, the list is a palindrome.
- The createLinkedList function creates a linked list from an array of characters.
- The code includes test cases where different inputs are provided. 
- For each test case, it creates a linked list, checks if it is a palindrome using the isPalindrome function, and prints the result.