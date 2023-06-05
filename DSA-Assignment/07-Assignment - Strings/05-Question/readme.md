# **Assignment - 07**
## **Question 5**

Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
- If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

**Example :**

**Input :** s = "abcdefg", k = 2

**Output :** "bacdfeg"

**Explanation :**
- To reverse the first k characters for every 2k characters in a string, we can iterate through the string and reverse the substring of length k for every 2k characters.
- Here's the step-by-step process to solve this problem:
- **Algorithm :**
    1. Initialize an empty result string.
    2. Iterate through the string with a step size of 2k.
    3. For each iteration, reverse the substring of length k starting from the current position.
    4. Append the reversed substring to the result string.
    5. Append the remaining characters (if any) from the original string to the result string.
    6. Return the result string.
- The code iterates through the string s with a step size of 2k. 
- For each iteration, it extracts the substring of length k starting from the current position, reverses it using the split, reverse, and join array methods, and then appends it to the result string. 
- It also appends the remaining characters (if any) from the original string to the result string. Finally, it returns the result string.
- For the given input s = "abcdefg" and k = 2, the output will be "bacdfeg", which is the original string with the first two characters reversed for every 2 characters.