# **Assignment - 07**
## **Question 3**

Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
- You must solve the problem without using any built-in library for handling large integers (such as BigInteger). 
- You must also not convert the inputs to integers directly.

**Example :**

**Input :** num1 = "11", num2 = "123"

**Output :** "134"

**Explanation :**
- To add two non-negative integers represented as strings (num1 and num2), we can perform digit-by-digit addition starting from the least significant digit (rightmost digit) and propagate the carry to the next digit.
- Here's the step-by-step process to solve this problem:
- **Algorithm :**
    1. Initialize two pointers, i and j, pointing to the last characters of num1 and num2, respectively.
    2. Initialize a variable carry to 0 to store the carry during addition.
    3. Initialize an empty string result to store the sum of num1 and num2.
    4. Iterate while i is greater than or equal to 0 or j is greater than or equal to 0 or carry is non-zero:
        - Convert the characters at positions i and j to integers (digit1 and digit2), or 0 if the pointers are out of range.
        - Calculate the sum of digit1, digit2, and carry (digitSum).
        - Append the least significant digit of digitSum to result by converting it back to a character.
        -  Update the value of carry to the carry generated from digitSum.
        - Move the pointers i and j one position to the left.
    5. Reverse the string result to obtain the correct order of digits.
    6. Return the resulting string result.
- The code initializes two pointers, i and j, to the last characters of num1 and num2, respectively.
- It also initializes a variable carry to store the carry during addition, and an empty string result to store the sum of the numbers.
- The code then iterates while i is greater than or equal to 0 or j is greater than or equal to 0 or carry is non-zero. 
- It performs the digit-by-digit addition, appends the least significant digit to result, updates the value of carry, and moves the pointers i and j one position to the left.
- Finally, it reverses the string result to obtain the correct order of digits and returns the resulting string.
- For the given input num1 = "11" and num2 = "123", the output will be "134" since the sum of the numbers is 11 + 123 = 134.