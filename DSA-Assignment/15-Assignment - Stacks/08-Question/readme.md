# **Assignment Questions - 15**
## **Question - 08**

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

**Example - 01 :**
```
Input : 
height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output : 
6
Explanation : 
The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water (blue section) are being trapped.
```
![Example - 01 Image](https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png)

**Example - 02 :**
```
Input : 
height = [4,2,0,3,2,5]
Output : 
9
```

**Analysis :**
- To solve the water trapping problem using a stack in JavaScript, you can follow these steps:
- **Algorithm :**
    1. Initialize a variable waterTrapped to 0, which will store the total amount of water trapped.
    2. Initialize an empty stack.
    3. Iterate through each bar's height in the input array height:
        - While the stack is not empty and the current height is greater than the height at the top of the stack:
            - Pop the top element from the stack and store it as topBar.
            - If the stack becomes empty, break the loop.
            - Calculate the distance between the current bar and the bar at the top of the stack: distance = currentBarIndex - stackTopIndex - 1.
            - Calculate the height of the water trapped between the two bars: trappedHeight = Math.min(currentBarHeight, stackTopHeight) - topBarHeight.
            - Add the trapped water's volume to waterTrapped: waterTrapped += distance * trappedHeight.
        - Push the index of the current bar onto the stack.
    4. Return the value of waterTrapped, which represents the total amount of water trapped.
- The trap function takes an array of heights as input and returns the total amount of water that can be trapped. 
In the example usage, it calculates and prints the output for the given input arrays.