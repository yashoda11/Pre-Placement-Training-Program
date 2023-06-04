# **Assignment - 05**
## **Question 6**

Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears **once** or **twice**, return an array of all the integers that appears **twice**.
- You must write an algorithm that runs in O(n) time and uses only constant extra space.

**Example :**

**Input :** nums = [4,3,2,7,8,2,3,1]

**Output :**  [2,3]

**Explanation :**
- To find the integers that appear twice in the given array nums, we can utilize the fact that the integers in nums are in the range [1, n], where n is the length of nums. 
- **Algorithm :**
- Here's an algorithm that runs in O(n) time and uses constant extra space:
    1. Initialize an empty array result to store the integers that appear twice.
    2. Iterate through each number num in nums.
    3. For each num, calculate the index idx by taking the absolute value of num and subtracting 1 (since the integers are in the range [1, n]).
    4. If nums[i] is positive, multiply it by -1 to mark it as visited.
    5. If nums[i] is already negative, it means num has appeared before, so add its absolute value to the result array.
    6. Finally, return the result array containing the integers that appear twice.
- In this example, we iterate through each number in nums and use the absolute value of the number to calculate the corresponding index in the array. We then check the value at that index:
- If it's positive, we mark it as visited by multiplying it by -1.
If it's already negative, it means the number has appeared before, so we add its absolute value to the result array.
- After iterating through all the numbers, we return the result array containing the integers that appear twice.
- The algorithm achieves O(n) time complexity since we iterate through the nums array once, and it uses constant extra space as it only requires the result array to store the duplicate integers.
