# **Assignment Questions - 11**

## **Question = 04**

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.
- There is only **one repeated number** in `nums`, return *this repeated number*.
- You must solve the problem **without** modifying the array `nums` and uses only constant extra space.

**Example - 01:**
```
Input: nums = [1,3,4,2,2]
Output: 2
```

**Example - 02:**
```
Input: nums = [3,1,3,4,2]
Output: 3
```

**Explanation :**
- To find the repeated number in an array nums without modifying the array and using only constant extra space, we can utilize the concept of cycle detection in a linked list.
**Algorithm :**
- Here's the step-by-step approach to solving this problem:
    1. Initialize two pointers, slow and fast, to the first element of the array.
    2. Move slow one step at a time and fast two steps at a time until they meet.
        - This step is similar to finding the meeting point in a cycle in a linked list.
    3. Reset the slow pointer to the first element.
    4. Move both slow and fast pointers one step at a time until they meet again.
        - This step is similar to finding the start of the cycle in a linked list.
    5. The value at the meeting point of slow and fast is the repeated number. Return this value.