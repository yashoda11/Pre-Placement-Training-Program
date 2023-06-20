# **Assignment Questions - 15**

## **Question - 05**

You are given a string **S**, the task is to reverse the string using stack.

**Example :**

**Input :** S="GeeksforGeeks"

**Output :** skeeGrofskeeG

**Explanation :**
- To reverse a string using a stack, you can follow these steps:
- **Algorithm :**
    1. Create an empty stack.
    2. Iterate through each character in the string from left to right.
    3. Push each character onto the stack.
    4. Pop each character from the stack and append it to a new string.
    5. The new string will be the reversed string.
- In the code above, we create a Stack class with push(), pop(), and isEmpty() methods. 
- The reverseString() function takes a string S as input, creates an empty stack, pushes each character of the string onto the stack, and then pops each character from the stack to construct the reversed string.
- For the given example input "**GeeksforGeeks**", the output is "**skeeGrofskeeG**", which is the reversed string.





