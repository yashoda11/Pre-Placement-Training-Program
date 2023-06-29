# **Assignment Questions - 18**
## **Question - 03** 
## **First Bad Version Solution**

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. 
- Since each version is developed based on the previous version, all the versions after a bad version are also bad.
- Suppose you have `n` versions `[1, 2, ..., n]` and you want to find out the first bad one, which causes all the following ones to be bad.
- You are given an API `bool isBadVersion(version)` which returns whether `version` is bad. 
- Implement a function to find the first bad version. 
- You should minimize the number of calls to the API.

**Example - 01 :**
```
Input : n = 5, bad = 4
Output : 4
Explanation :
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
```

**Example - 02 :**
```
Input : n = 1, bad = 1
Output : 1
```

**Constraints :**
- 1 <= bad <= n <= 2^31 - 1

**Analysis :**
1. The code declares a global variable bad to represent the first bad version. 
    - This variable will be used by the isBadVersion function to determine if a given version is bad or not. 
    - In the provided code, the isBadVersion function is implemented as a dummy function and returns true if the version is greater than or equal to the bad value.
2. The firstBadVersion function takes an integer n as input, representing the total number of versions.
3. We initialize two pointers: left and right. left represents the starting version, which is set to 1, and right represents the ending version, which is set to n.
4. The function uses a binary search approach to find the first bad version. The binary search is performed by repeatedly dividing the search space in half.
5. Inside the while loop, we calculate the middle version using mid = Math.floor(left + (right - left) / 2).
6. We call the isBadVersion API function to check if the middle version is bad or not:
    - If isBadVersion(mid) returns true, it means the current version is bad. In this case, we update right to mid because all versions after mid will also be bad. 
        - We continue searching for the first bad version in the left half of the search space.
    - If isBadVersion(mid) returns false, it means the current version is good. In this case, we update left to mid + 1 because the first bad version must be after mid. 
        - We continue searching for the first bad version in the right half of the search space.
7. The binary search continues until left and right become equal, indicating that we have found the first bad version.
8. Finally, we return the value of left as the first bad version.