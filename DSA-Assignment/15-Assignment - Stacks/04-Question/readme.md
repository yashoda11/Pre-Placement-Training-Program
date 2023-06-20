# **Assignment Questions - 15**
## **Question - 04**

You are given a stack **St**. 
- You have to reverse the stack using recursion.

**Example - 01 :**
```
Input : St = {3,2,1,7,6}
Output : {6,7,1,2,3}
```

**Example - 02 :**
```
Input : St = {4,3,9,6}
Output : {6,9,3,4}
```

**Explanation :**
- To reverse a stack using recursion, We can follow these steps:
- **Algorithm :**
    1. If the stack is empty or has only one element, it is already reversed. Return the stack as is.
    2. Remove the top element from the stack using the pop() operation and store it in a variable, let's call it topElement.
    3. Recursively reverse the remaining stack.
    4. Insert the topElement at the bottom of the reversed stack using the push() operation.
    5. Return the reversed stack.
- The code defines a Stack class with push(), pop(), isEmpty(), reverse(), and insertAtBottom() methods. 
- We create a stack, push the elements into it, and then call the reverse() method to reverse the stack. 
- Finally, we print the reversed stack using console.log().
- For Example 1, the output is [6, 7, 1, 2, 3]. 
- For Example 2, the output is [6, 9, 3, 4].