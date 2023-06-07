# **Assignmnet - 08**

## **Question - 07**

Given an encoded string, return its decoded string.
- The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. 
- Note that k is guaranteed to be a positive integer.
- You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. 
- Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. 
- For example, there will not be input like 3a or 2[4].
- The test cases are generated so that the length of the output will never exceed 105.

**Example :**

**Input:** s = "3[a]2[bc]"

**Output:** "aaabcbc"

**Explanation :**
- In this code, we iterate through the characters of the input string s. If the current character is not ']', we push it to the stack since it's part of the decoded string.
- When we encounter ']', it means we have to decode the substring inside the brackets. We pop characters from the stack until we find the corresponding '[' character, building the substring in reverse order.
- After popping '[' from the stack, we extract the repetition count by popping digits from the stack until we reach a non-digit character.
- Next, we repeat the substring count number of times and push it back to the stack.
- Finally, we join all the characters in the stack to form the decoded string and return it.
- In the example usage, we decode the string "3[a]2[bc]", which results in the decoded string "aaabcbc".