# **Assignment Questions - 16**
## **Question - 04**

Given a Queue consisting of first **n** natural numbers (in random order). 
- The task is to check whether the given Queue elements can be arranged in increasing order in another Queue using a stack. 
- The operation allowed are:
    1. Push and pop elements from the stack
    2. Pop (Or Dequeue) from the given Queue.
    3. Push (Or Enqueue) in the another Queue.

**Example 01 :**
```
Input : Queue[] = { 5, 1, 2, 3, 4 } 
Output : Yes 
Explanation :
Pop the first element of the given Queue 
i.e 5. Push 5 into the stack. 
Now, pop all the elements of the given Queue and push them to second Queue. 
Now, pop element 5 in the stack and push it to the second Queue.   
```

**Example 02 :**
```
Input : Queue[] = { 5, 1, 2, 6, 3, 4 } 
Output : No 
Explanation :
Push 5 to stack. 
Pop 1, 2 from given Queue and push it to another Queue. 
Pop 6 from given Queue and push to stack. 
Pop 3, 4 from given Queue and push to second Queue. 
Now, from using any of above operation, we cannot push 5 into the second Queue because it is below the 6 in the stack.
```

**Analysis :**
1. We start by defining two data structures: a stack and a second queue. We also initialize a variable prev with a value of negative infinity. This variable will keep track of the previously processed element.
2. We iterate over the given queue using a while loop until it becomes empty.
3. Inside the loop, we dequeue the element from the front of the queue using queue.shift() and store it in the element variable.
4. We check if the current element is equal to the previous element incremented by 1. If it is, then the elements are in increasing order, and we push the element to the second queue. We also update the prev variable with the current element.
5. If the elements are not in increasing order, we check if the stack is not empty and the current element is equal to the top element of the stack incremented by 1. This indicates that we can pop elements from the stack and push them to the second queue until we can't find consecutive numbers anymore.
6. After the inner while loop, we push the current element (or the incremented element from the stack) to the second queue.
7. If neither of the above conditions is satisfied, we simply push the current element to the stack.
8. Once we have processed all the elements in the given queue, we check if there are any remaining elements in the stack. If so, we pop them from the stack and push them to the second queue.
9. Finally, we check if the second queue is sorted in increasing order by using the isSorted() function. If it is sorted, we return "Yes"; otherwise, we return "No".
10. The isSorted() function checks if the elements in the queue are sorted in increasing order by comparing each element with the next element.
11. We demonstrate the usage of the code by providing two example queues and printing the output.