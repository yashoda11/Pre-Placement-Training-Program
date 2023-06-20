# **Assignment Questions - 15**

## **Question - 06**

Given string **S** representing a postfix expression, the task is to evaluate the expression and find the final value. 
- Operators will only include the basic arithmetic operators like ***, /, + and -**.

**Example - 01 :**
```
Input : S = "231*+9-"
Output : -4
Explanation :
After solving the given expression, we have -4 as result.
```

**Example - 02 :**
```
Input : S = "123+*8-"
Output : -3
Explanation : After solving the given postfix expression, we have -3 as result.
```

**Analysis :**
- To evaluate a postfix expression, we can use a stack and follow these steps.
- **Algorithm :**
    1. Create an empty stack.
    2. Iterate through each character in the postfix expression from left to right.
    3. If the character is an operand (numeric value), push it onto the stack.
    4. If the character is an operator, pop the top two elements from the stack, perform the corresponding operation, and push the result back onto the stack.
    5. After iterating through all the characters in the expression, the stack will contain the final result.
- In the code, we create a Stack class with push(), pop(), and isEmpty() methods.
- The evaluatePostfixExpression() function takes a postfix expression S as input, creates an empty stack, iterates through each character in the expression, performs the corresponding operations, and returns the final result.
- For Example 1 with the postfix expression "231*+9-", the output is -4. 
- For Example 2 with the postfix expression "123+*8-", the output is -3.