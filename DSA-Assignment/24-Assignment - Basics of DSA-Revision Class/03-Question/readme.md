# **Assignment Questions - 24**
## **Question - 03**
## **Majority Element :**

Given an array `nums` of size `n`, return *the majority element*.
- The majority element is the element that appears more than `⌊n / 2⌋` times. 
- You may assume that the majority element always exists in the array.

**Example - 01 :**
```
Input : nums = [3,2,3]
Output : 3
```

**Example - 02 :**
```
Input : nums = [2,2,1,1,1,2,2]
Output : 2
```

**Constraints :**
- n == nums.length
- 1 <= n <= 5 * 10^4
- 10^9 <= nums[i] <= 10^9

**Explanation :**
- The code uses a variant of the **Boyer-Moore Voting Algorithm** to find the majority element. 
- It maintains a count variable that keeps track of the number of occurrences of the majority element seen so far, and a majority variable that stores the current candidate for the majority element.
- The algorithm iterates through the array nums and updates the count and majority as follows:
    - If count is 0, it means that there is currently no majority candidate. So, the current element becomes the majority candidate, and count is incremented.
    - If the current element is the same as the majority candidate, count is incremented.
    - If the current element is different from the majority candidate, count is decremented.
- Since the majority element appears more than ⌊n / 2⌋ times, it will eventually emerge as the final majority after eliminating all other elements.
- Finally, the code returns the majority as the majority element.

**Time Complexity :** 
- The code has a **Time Complexity** of **O(n)**, where n is the length of the input array nums. 
- This is because it iterates through the array once, performing constant-time operations at each iteration.

**Space Complexity :** 
- The **Space Complexity** is **O(1)** since the code uses a constant amount of extra space for the count and majority variables, regardless of the input size.