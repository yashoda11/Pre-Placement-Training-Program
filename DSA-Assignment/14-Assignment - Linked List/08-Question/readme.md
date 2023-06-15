# **Assignment Questions - 14**

## **Question - 08**

Given the `head` of a linked list, we repeatedly delete consecutive sequences of nodes that sum to `0` until there are no such sequences.
- After doing so, return the head of the final linked list.  
- You may return any such answer.
- **Note** that in the examples below, all sequences are serializations of `ListNode` objects.

**Example - 01 :**
```
Input: head = [1,2,-3,3,1]
Output: [3,1]
Note: The answer [1,2,1] would also be accepted.
```

**Example - 02 :**
```
Input: head = [1,2,3,-3,4]
Output: [1,2,4]
```

**Example - 03 :**
```
Input: head = [1,2,3,-3,-2]
Output: [1]
```

**Explanation :**
- To solve this problem, we can use a stack to keep track of the running sum of the nodes as we traverse the linked list. 
- Whenever the sum becomes zero, we remove the nodes from the linked list.