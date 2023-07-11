# **Assignment Questions - 24**
## **Question - 08**
## **Find K Closest Elements :**

Given a **sorted** integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in the array. 
- The result should also be sorted in ascending order.
- An integer `a` is closer to `x` than an integer `b` if:
    - `|a - x| < |b - x|`, or
    - `|a - x| == |b - x|` and `a < b`

**Example - 01 :**
```
Input : arr = [1,2,3,4,5], k = 4, x = 3
Output : [1,2,3,4]
```

**Example - 02 :**
```
Input : arr = [1,2,3,4,5], k = 4, x = -1
Output : [1,2,3,4]
```

**Constraints :**
- `1 <= k <= arr.length`.
- `1 <= arr.length <= 10000`.
- `arr` is sorted in **ascending** order.
- -`10000 <= arr[i], x <= 10000`.


**Explanation :**
- The code uses a two-pointer approach to find the k closest elements to x in the sorted array. 
- It initializes left to 0, representing the leftmost index, and right to arr.length - 1, representing the rightmost index.
- The algorithm continues to shrink the window between left and right until the window size is equal to k. 
- At each step, it compares the absolute differences between the elements at left and right with x. 
    - If the absolute difference at left is greater, it means the element at left is farther from x, so left is incremented. 
    - Otherwise, right is decremented.
- Finally, the code returns a subarray of arr that includes the k closest elements. 
- The subarray is obtained using the slice() method, with left as the starting index and right + 1 as the ending index.

**Time Complexity :** 
- The code has a **Time Complexity** of **O(n)**, where n is the length of the input array arr. 
- This is because the window size is reduced by at least 1 in each iteration, and the maximum number of iterations is n - k.

**Space Complexity :** 
- The **Space Complexity** is **O(1)** since the code uses only a constant amount of extra space regardless of the input size.