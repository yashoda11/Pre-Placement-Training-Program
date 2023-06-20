# **Assignment Questions - 15**

## **Question - 03**

Implement a Stack using two queues **q1** and **q2**.

**Example - 01 :**
```
Input :
push(2)
push(3)
pop()
push(4)
pop()
Output : 3 4
Explanation :
push(2) : the stack will be {2}. 
push(3) : the stack will be {2 3}.
pop()   : poped element will be 3 the stack will be {2}
push(4) : the stack will be {2 4}
pop()   : poped element will be 4
```

**Example - 02 :**
```
Input :
push(2)
pop()
pop()
push(3)
Output : 2 -1
```

**Analysis :**

- **In Example - 01 :**
    - After the first push(2), the stack will be {2}.
    - After the second push(3), the stack will be {2, 3}.
    - The first pop() will return 3, and the stack will be {2}.
    - After the push(4), the stack will be {2, 4}.
    - The second pop() will return 4.

- **In Example -02 :**
    - After the push(2), the stack will be {2}.
    - The first pop() will return 2.
    - The second pop() will return -1 since the stack is already empty.
- The code now stores the outputs in arrays output1 and output2, respectively, and logs them to the console.
- The exact outputs for both example inputs are:
- Example - 01 : [3, 4]
- Example - 02 : [2, -1]
