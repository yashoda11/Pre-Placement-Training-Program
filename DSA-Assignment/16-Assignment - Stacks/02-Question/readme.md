# **Assignment Questions - 16**
## **Question - 02**

Given a stack of integers, sort it in ascending order using another temporary stack.

**Example 01 :**
```
Input : [34, 3, 31, 98, 92, 23]
Output : [3, 23, 31, 34, 92, 98]
```

**Example 02 :**
```
Input : [3, 5, 1, 4, 2, 8]
Output : [1, 2, 3, 4, 5, 8]
```

**Explanation :**
1. The sortStack function takes a stack as input and returns the sorted stack in ascending order.
2. We initialize an empty temporary stack called tempStack.
3. We start a loop until the original stack becomes empty (line 4).
4. Inside the loop, we pop an element from the original stack and store it in a temporary variable called temp (line 6).
5. We check if the tempStack is not empty and the top element of tempStack is smaller than temp (line 8).
    - If it is true, we pop elements from the tempStack and push them back to the original stack until the top element of tempStack becomes greater than or equal to temp.
6. After the inner while loop, we push the temp element onto the tempStack (line 11).
7. Repeat steps 4-6 until the original stack becomes empty.
8. Once the original stack is empty, we transfer the elements from tempStack back to the original stack, resulting in a sorted stack in ascending order (lines 14-17).
9. Finally, we return the sorted stack.
- The algorithm works by using the tempStack to hold elements temporarily in a reverse sorted order. 
- We compare each element from the original stack with the elements in the tempStack and position it in the correct place to maintain the ascending sorted order. 
- By repeating this process, we can sort the entire stack in ascending order.