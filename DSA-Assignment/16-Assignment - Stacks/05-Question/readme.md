# **Assignment Questions - 16**

## **Question - 05**

Given a number , write a program to reverse this number using stack.

**Example - 01 :**
```
Input : 365
Output : 563
```

**Example -02 :**
```
Input : 6899
Output : 9986
```

**Explanation :**
- we use a stack to reverse the given number. 
    1. We define a stack, represented as an array, to store the digits of the number in reverse order.
    2. We iterate over the digits of the number by performing modulo 10 operation (number % 10). This gives us the last digit of the number, which we push onto the stack. Then we divide the number by 10 (number = Math.floor(number / 10)) to remove the last digit.
    3. After pushing all the digits onto the stack, we pop the digits from the stack one by one and construct the reversed number. We initialize reversedNumber to 0 and placeValue to 1. We multiply each digit from the stack by the current place value (digit * placeValue) and add it to the reversedNumber. We then multiply placeValue by 10 to move to the next place value.
    4. Finally, we return the reversedNumber, which represents the reversed form of the input number.