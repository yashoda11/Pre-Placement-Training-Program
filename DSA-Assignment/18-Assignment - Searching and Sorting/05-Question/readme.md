# **Assignment Questions - 18**
## **Question - 05** 
## **Contains Duplicate**

Given an integer array `nums`, 
- return `true` if any value appears **at least twice** in the array, and 
- return `false` if every element is distinct.

**Example - 01 :**
```
Input : nums = [1,2,3,1]
Output : true
```

**Example - 02 :**
```
Input : nums = [1,2,3,4]
Output : false
```

**Example - 03 :**
```
Input : nums = [1,1,1,3,3,4,3,2,4,2]
Output : true
```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `109 <= nums[i] <= 10^9`

**Explanation :**
- To determine if any value appears at least twice in the given integer array nums, we can use a hash set data structure. 
    - We iterate through the array and check if each element is already present in the set. 
    - If it is, then we have found a duplicate element, and we return **true**. 
    - If we iterate through the entire array without finding any duplicates, we return **false**.
- The **containsDuplicate** function takes an array nums as input and implements the steps mentioned above to determine if any value appears at least twice.
- We initialize an empty set called set.
- We iterate through the elements of the array using a **for...of** loop.
- For each element num, we check if it already exists in the set using the has method. 
    - If it does, we have found a duplicate, and we immediately return true.
    - If the element is not in the set, we add it to the set using the add method.
- After iterating through the entire array without finding any duplicates, we return **false**.
- The **Time Complexity** of this solution is **O(n)** since we iterate through the entire array once, and 
- The **Space Complexity** is **O(n)** as well due to the storage of elements in the set.