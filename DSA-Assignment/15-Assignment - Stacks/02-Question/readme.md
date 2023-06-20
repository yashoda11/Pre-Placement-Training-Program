# **Assignment Questions - 15**
## **Question - 02**

Given an array **a** of integers of length **n**, find the nearest smaller number for every element such that the smaller element is on left side.
- If no small element present on the left print -1.

**Example - 01 :**
```
Input : n = 3, a = {1, 6, 2}
Output : -1 1 1
Explaination : 
There is no number at the left of 1. 
Smaller number than 6 and 2 is 1.
```

**Example - 02 :**
```
Input : n = 6, a = {1, 5, 0, 3, 4, 5}
Output : -1 1 -1 0 3 4
Explaination : 
Upto 3 it is easy to see the smaller numbers. 
But for 4 the smaller numbers are 1, 0 and 3. 
But among them 3 is closest. 
Similary for 5 it is 4.
```

**Analysis :**
- Here's the code to find the nearest smaller number on the left side for each element in the array.
- **Algorithm :**
    1. We start by initializing an empty stack and an empty result array.
    2. We iterate through the elements of the array from left to right.
    3. For each element a[i] in the array, we check if there are any elements in the stack that are greater than or equal to a[i]. 
        - If there are, it means those elements are not the nearest smaller numbers on the left side of a[i], so we remove them from the stack.
    4. After removing the elements, we check if the stack is empty. If it is, there are no smaller elements on the left side of a[i], so we assign -1 to result[i]. 
        - Otherwise, the top element of the stack is the nearest smaller number on the left side of a[i], so we assign it to result[i].
    5. Finally, we push the current element a[i] to the stack.
    6. Once we have iterated through all the elements, we return the result array.
- The code will provide the exact output for both example inputs. 
- For Example 1, the output is [-1, 1, 1], and 
- For Example 2, the output is [-1, 1, -1, 0, 3, 4].

- Let's go through Example 1 for a better understanding:

>Input: n = 3, a = [1, 6, 2]
>Initialization: stack = [], result = []

**For a[0] = 1 :**
- Stack: []
- Since there are no elements in the stack, result[0] = -1.
- Stack: [1]
- Result: [-1]

**For a[1] = 6 :**
- Stack: [1]
- 1 is the nearest smaller number on the left side of 6.
- Stack: [1, 6]
- Result: [-1, 1]

**For a[2] = 2 :**
- Stack: [1, 6]
- 1 is the nearest smaller number on the left side of 2.
- Stack: [1, 6, 2]
- Result: [-1, 1, 1]
- Output: [-1, 1, 1]