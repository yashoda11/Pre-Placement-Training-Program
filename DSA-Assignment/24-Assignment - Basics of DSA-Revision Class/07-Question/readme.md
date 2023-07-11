# **Assignment Questions - 24**
## **Question - 07**
## **Sliding Window Maximum :**

You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. 
- You can only see the `k` numbers in the window. 
- Each time the sliding window moves right by one position.
- Return *the max sliding window*.

**Example - 01 :**
```
Input : nums = [1,3,-1,-3,5,3,6,7], k = 3
Output : [3,3,5,5,6,7]
Explanation :
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6 7         3
 1 [3  -1  -3] 5  3  6 7         3
 1  3 [-1  -3  5] 3  6 7         5
 1  3  -1 [-3  5  3] 6 7         5
 1  3  -1  -3 [5  3  6]7         6
 1  3  -1  -3  5 [3  6  7]       7
```

**Example - 02 :**
```
Input : nums = [1], k = 1
Output : [1]
```

**Constraints :**
- `1 <= nums.length <= 100000`
- -`10000 <= nums[i] <= 10000`
- `1 <= k <= nums.length`


**Explanation :**
- The code uses a deque (double-ended queue) to efficiently find the maximum elements in the sliding window. 
- It iterates through the array nums and performs the following steps for each element:
    - Remove elements from the deque that are smaller than or equal to the current element. 
    - This ensures that the deque only contains elements that are potentially the maximum elements in the current and future windows.
    - Add the index of the current element to the deque.
    - Remove the index from the front of the deque if it is outside the current window.
- If the index is greater than or equal to k - 1 (the window size minus one), add the maximum element in the current window (which is nums[deque[0]]) to the result array.
- Finally, the code returns the result array containing the maximum elements in each sliding window.

**Time Complexity :** 
- The code has a **Time Complexity** of **O(n)**, where n is the length of the input array nums. 
- This is because it iterates through the array once, and at each iteration, it performs constant-time operations.

**Space Complexity :** 
- The **Space Complexity** is **O(k)** since the deque can store at most k elements, representing the sliding window size.