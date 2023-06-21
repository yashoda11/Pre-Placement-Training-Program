# **Assignment Questions - 16**
## **Question - 03**

Given a stack with **push()**, **pop()**, and **empty()** operations, The task is to delete the **middle** element of it without using any additional data structure.

**Example - 01 :**
```
Input  : Stack[] = [1, 2, 3, 4, 5]
Output : Stack[] = [1, 2, 4, 5]
```

**Example - 02 :**
```
Input  : Stack[] = [1, 2, 3, 4, 5, 6]
Output : Stack[] = [1, 2, 4, 5, 6]
```

**Explanation :**
1. The deleteMiddle function takes a stack as input and returns the modified stack after deleting the middle element.
2. Inside the deleteMiddle function, we calculate the index of the middle element based on the size of the stack (line 2).
3. We then call the deleteRecursive function with the stack and the middle index as input (line 3).
4. The deleteRecursive function takes the stack and the current index k as input.
5. If the current index k is 0 (indicating the middle element), we remove the element at index k from the stack using the pop() operation (line 7).
6. If the current index k is not 0, we recursively call the deleteRecursive function with k-1 as the index and store the popped element in a variable temp (lines 10-11).
7. After the recursive call, we push the stored element temp back to the stack using the push() operation (line 12).
8. The recursive calls continue until the current index k reaches 0, indicating the middle element (line 4).
9. Finally, we return the modified stack from the deleteMiddle function.
- This implementation ensures that the middle element is deleted from the stack without using any additional data structure.