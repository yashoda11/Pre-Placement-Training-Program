# **Assignment Questions - 18**
## **Question - 08** 
## **132 Pattern**

Given an array of `n` integers `nums`, a **132 pattern** is a subsequence of three integers `nums[i]`, `nums[j]` and `nums[k]` such that `i < j < k` and `nums[i] < nums[k] < nums[j]`.
- Return `true` *if there is a **132 pattern** in* `nums`*, otherwise, return* `false`*.*

**Example - 01 :**
```
Input: nums = [1,2,3,4]
Output: false
Explanation : 
There is no 132 pattern in the sequence.
```

**Example - 02 :**
```
Input : nums = [3,1,4,2]
Output : true
Explanation : 
There is a 132 pattern in the sequence: [1, 4, 2].
```

**Example - 03 :**
```
Input : nums = [-1,3,2,0]
Output : true
Explanation : 
There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
```

**Constraints:**
- n == nums.length
- 1 <= n <= 2 * 10^5
- -10^9 <= nums[i] <= 10^9

**Analysis :**
- To determine if there is a **132 pattern** in the given array nums, we can use a stack and keep track of the maximum value encountered so far.

- **Explanation :**
    - The find132pattern function takes an array nums as input and implements the steps mentioned above to determine if there is a "132 pattern" in the array.
    - We initialize an empty stack to store the elements in a decreasing order.
    - We also initialize a variable maxK to keep track of the maximum value encountered so far.
    - We iterate through the elements of nums starting from the last element.
    - For each element at index i, we compare it with maxK. If the current element is less than maxK, we have found a "132 pattern" and return true.
    - Otherwise, we remove the elements from the stack that are less than the current element nums[i] and update maxK with the maximum value encountered so far.
    - Finally, if we haven't found a "132 pattern" after iterating through all elements, we return false.
    
- **OUTPUT :**
    - The outputs for the given example cases are as follows:
        - **Example - 01 :** There is **no 132 pattern** in the sequence [1, 2, 3, 4], so the output is **false**.
        - **Example - 02 :** There is **a 132 pattern** in the sequence [3, 1, 4, 2] with the subsequence [1, 4, 2], so the output is **true**.
        - **Example - 03 :** There are **three 132 patterns** in the sequence [-1, 3, 2, 0] with the subsequences [-1, 3, 2], [-1, 3, 0], and [-1, 2, 0], so the output is **true**.