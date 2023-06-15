# **Assignment Questions - 14**

## **Question - 07**

You are given the `head` of a linked list with `n` nodes.
- For each node in the list, find the value of the **next greater node**. 
- That is, for each node, find the value of the first node that is next to it and has a **strictly larger** value than it.
- Return an integer array `answer` where `answer[i]` is the value of the next greater node of the `ith` node (**1-indexed**). 
- If the `ith` node does not have a next greater node, set `answer[i] = 0`.

**Example - 01 :**
```
Input: head = [2,1,5]
Output: [5,5,0]
```

![Example - 01 : Image](https://assets.leetcode.com/uploads/2021/08/05/linkedlistnext1.jpg)


**Example - 02 :**
```
Input: head = [2,7,4,3,5]
Output: [7,0,5,5,0]
```

![Example - 01 : Image](https://assets.leetcode.com/uploads/2021/08/05/linkedlistnext2.jpg)

This code will find the next greater node for each node in the linked list and return the result as an array.

The algorithm works as follows:

Traverse the linked list and store the values of each node in an array called values.
Initialize an empty stack and an array called result with the same length as values, filled with zeros.
Iterate over the values array from left to right:
While the stack is not empty and the current value is greater than the value at the index on the top of the stack, update the corresponding index in the result array with the current value and pop the index from the stack.
Push the current index into the stack.
Return the result array containing the next greater node values.
The algorithm has a time complexity of O(n) since it requires traversing the linked list once and performing operations on the stack. It uses O(n) extra space to store the values and the result array.





