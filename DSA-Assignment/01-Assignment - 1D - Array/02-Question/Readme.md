# Question - 02

**Q2.** Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

- Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
- Return k.

**Example :**

**Input:** nums = [3,2,2,3], val = 3

**Output:** 2, nums = [2,2,_*,_*]

**Explanation:** 
- Your function should return k = 2, with the first two elements of nums being 2. 
- It does not matter what you leave beyond the returned k (hence they are underscores).
- In this code, we use two pointers, i and k, to iterate through the nums array. 
- The pointer i represents the current element being checked, and the pointer k represents the position where the next non-equal element should be placed.
- Whenever we encounter an element that is not equal to val, we copy it to the position k and increment k to move to the next position. 
- This ensures that all non-equal elements are placed at the beginning of the array.
- After processing all the elements, the value of k represents the number of elements in nums that are not equal to val.
- Finally, we return k and the nums array will contain the desired elements at the beginning, followed by irrelevant elements denoted by underscores.
- In the example usage, the nums array is [3, 2, 2, 3] and the val is 3. 
- After removing all occurrences of val, the updated nums array becomes [2, 2, _, _], where _ represents irrelevant elements. 
- The function returns k = 2, indicating that there are 2 elements in nums that are not equal to val.