# **Assignment - 08**

## **Question - 02**

Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

The following rules define a **valid** string:
- Any left parenthesis '(' must have a corresponding right parenthesis ')'.
- Any right parenthesis ')' must have a corresponding left parenthesis '('.
- Left parenthesis '(' must go before the corresponding right parenthesis ')'.
- '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

**Example :**

**Input :** s = "()"

**Output :**  true

**Explanation :**
- In this code, we iterate through each character in the string s. 
- If the character is either '(' or '*', we push it onto the stack. If the character is ')', we check the top of the stack. 
- If the top of the stack is '(' or '*', we can pair the current closing parenthesis with the top of the stack, so we pop the stack. 
- If the top of the stack is not '(' or '*', we try to pair the current closing parenthesis with the second-to-top element in the stack, which should be '('. If we cannot pair the closing parenthesis with any element in the stack, the string is not valid.
- After processing all characters in s, there might be some remaining elements in the stack. 
- We need to handle these remaining elements to ensure that all opening parentheses are matched. 
- We count the number of opening parentheses '(' and the number of asterisks '*' encountered while emptying the stack. 
- An opening parenthesis can be matched by an asterisk or itself, so we decrement the count of open parentheses if we encounter an asterisk. 
- If there are any unmatched opening parentheses remaining, the string is not valid.
- Finally, if all opening parentheses have been matched and there are no unmatched closing parentheses, the string is valid.