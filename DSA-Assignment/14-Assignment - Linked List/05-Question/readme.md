# **Assignment Questions - 14**

## **Question 5**

Given the `head` of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return *the reordered list*.
- The **first** node is considered **odd**, and the **second** node is **even**, and so on.
- Note that the relative order inside both the even and odd groups should remain as it was in the input.
- You must solve the problem in `O(1)` extra space complexity and `O(n)` time complexity.

**Example - 01 :**
```
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
```

![Examplem - 01 : Image](https://assets.leetcode.com/uploads/2021/03/10/oddeven-linked-list.jpg)

**Example - 02 :**
```
Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
```

![Examplem - 02 : Image](https://assets.leetcode.com/uploads/2021/03/10/oddeven2-linked-list.jpg)


**Explanation :**
- This code will reorder the singly linked list with odd indices followed by even indices and return the head of the reordered list. The printList function is a helper function to print the values of each node in the linked list.
- The algorithm works as follows:
- **Algorithm :**
    1. Initialize two pointers, oddHead and evenHead, to the head of the linked list and the next node, respectively.
    2. Create two more pointers, odd and even, to track the current odd and even nodes.
    3. Iterate through the list by moving odd and even pointers alternately. At each step, connect the next odd node to odd.next and the next even node to even.next.
    4. After the loop, connect the last odd node to the head of the even list to combine the odd and even parts.
    5. Return the head of the reordered list.
- The algorithm has a time complexity of O(n) since it iterates through the entire list once. 
- It also uses O(1) extra space complexity since it only requires a constant number of pointers to rearrange the list.