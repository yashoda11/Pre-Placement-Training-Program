# **Assignment - 06**
## **Question 4**

Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

**Example :**

**Input:** nums = [0,1]

**Output:** 2

**Explanation:**
- [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
- To find the maximum length of a contiguous subarray with an equal number of 0s and 1s, we can use the concept of a running sum. 
- We initialize a variable maxLen to store the maximum length, and a variable count to keep track of the running sum.
- The code uses a map to store the running count as the key and the index as the value. 
- We initialize the map with an initial count of 0 at index -1 to handle the case where the subarray with equal 0s and 1s starts from the beginning of the array.
- Next, we iterate through the array and update the count based on the current element. 
- If the current count has been seen before (i.e., it exists in the map), we update the maximum length by calculating the difference between the current index and the index stored in the map for that count. 
- Otherwise, we add the current count and its index to the map.
- Finally, we return the maximum length.
- For the given **input nums = [0, 1]**, the **output** will be **2** since the longest contiguous subarray with an equal number of 0s and 1s is **[0, 1]**.




