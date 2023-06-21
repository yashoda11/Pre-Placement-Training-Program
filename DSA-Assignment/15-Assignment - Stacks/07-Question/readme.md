# **Assignment Questions - 15**

## **Question - 07**

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
- Implement the `MinStack` class:
    - `MinStack()` initializes the stack object.
    - `void push(int val)` pushes the element `val` onto the stack.
    - `void pop()` removes the element on the top of the stack.
    - `int top()` gets the top element of the stack.
    - `int getMin()` retrieves the minimum element in the stack.
- You must implement a solution with `O(1)` time complexity for each function.

**Example :**
```
Input : 
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output : 
[null,null,null,null,-3,null,0,-2]

Explanation : 
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```

**Analysis :**
- To implement a stack that supports push, pop, top, and retrieving the minimum element in constant time, we can use two stacks: 
    - one stack to store the elements and
    - another stack to keep track of the minimum element at each step.
- Now, let's go through the explanation of the code.
- **Algorithm :**
    1. The MinStack class is defined to implement the stack with the additional capability of retrieving the minimum element in constant time.
    2. The class has two stacks: stack to store the actual elements and minStack to keep track of the minimum element at any point.
    3. The push function adds an element to the stack and also checks if it is smaller than or equal to the top element of minStack. If so, it is pushed onto minStack as well.
    4. The pop function removes the top element from stack and checks if it is the same as the top element of minStack. If so, it is also popped from minStack.
    5. The top function returns the top element of stack, and the getMin function returns the top element of minStack.
    6. In the example code, we create a minStack object and perform a series of operations to test its functionality.
    7. The output array is used to store the results of each operation for demonstration purposes.
- In the code above, we define the MinStack class with the push(), pop(), top(), and getMin() methods. 
- The push() method pushes the element onto the stack and also checks if it is the new minimum element, updating the minStack accordingly. 
- The pop() method removes the top element from the stack and also checks if it is the minimum element, updating the minStack if necessary. 
- The top() method returns the top element of the stack, and the getMin() method returns the minimum element from the minStack.
- **The Time Complexity** of all the operations in the **MinStack class** is **O(1)** since we are using two stacks to keep track of the elements and the minimum value.