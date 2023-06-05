# **Assignment - 07**
## **Question - 02**

Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.
- A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

**Example :**

**Input :** num = "69"

**Output :** true

**Explanation :**
- To determine if a given string num is a strobogrammatic number, we need to check if the string remains the same when rotated 180 degrees.
- Here's the step-by-step process to solve this problem:
- **Algorithm :**
    1. Initialize two pointers, left and right, pointing to the start and end of the string, respectively.
    2. Iterate while left is less than or equal to right:
        - Check if the characters at positions left and right are valid strobogrammatic pairs. The valid pairs are:
            - "00", "11", "88", "69", and "96".
            - If the characters at left and right do not form a valid pair, return false.
        - Move the left pointer one position to the right and the right pointer one position to the left.
    3. If the loop completes without returning false, it means the string is a strobogrammatic number. Return true.
- The code uses an object strobogrammaticPairs to store the valid strobogrammatic pairs.
- It initializes two pointers, left and right, to the start and end of the string, respectively.
- The code then iterates while left is less than or equal to right. It checks if the characters at positions left and right form a valid strobogrammatic pair. If they don't, it returns false.
- If the loop completes without returning false, it means the string is a strobogrammatic number. It returns true.
- For the given input num = "69", the output will be true since the string "69" remains the same when rotated 180 degrees.





