# **Assignment Questions - 17**
## **Question - 07**

Design a queue that supports **push** and **pop** operations in the front, middle, and back.
- Implement the **FrontMiddleBack** class:
    - **FrontMiddleBack()** Initializes the queue.
    - **void pushFront(int val)** Adds val to the **front** of the queue.
    - **void pushMiddle(int val)** Adds val to the **middle** of the queue.
    - **void pushBack(int val)** Adds val to the **back** of the queue.
    - int popFront() Removes the **front** element of the queue and returns it. If the queue is empty, return 1.
    - int popMiddle() Removes the **middle** element of the queue and returns it. If the queue is empty, return `1`.
    - `int popBack()` Removes the **back** element of the queue and returns it. If the queue is empty, return 1.
- **Notice :** that when there are **two** middle position choices, the operation is performed on the **frontmost** middle position choice. For example:
    - Pushing `6` into the middle of `[1, 2, 3, 4, 5]` results in `[1, 2, 6, 3, 4, 5]`.
    - Popping the middle from `[1, 2, 3, 4, 5, 6]` returns `3` and results in `[1, 2, 4, 5, 6]`.

**Example :**
```
Input :
["FrontMiddleBackQueue", "pushFront", "pushBack", "pushMiddle", "pushMiddle", "popFront", "popMiddle", "popMiddle", "popBack", "popFront"]
[[], [1], [2], [3], [4], [], [], [], [], []]
Output :
[null, null, null, null, null, 1, 3, 4, 2, -1]
Explanation :
FrontMiddleBackQueue q = new FrontMiddleBackQueue();
q.pushFront(1);   // [1]
q.pushBack(2);    // [1,2]
q.pushMiddle(3);  // [1,3, 2]
q.pushMiddle(4);  // [1,4, 3, 2]
q.popFront();     // return 1 -> [4, 3, 2]
q.popMiddle();    // return 3 -> [4, 2]
q.popMiddle();    // return 4 -> [2]
q.popBack();      // return 2 -> []
q.popFront();     // return -1 -> [] (The queue is empty)
```

**Analysis :**
1. The FrontMiddleBackQueue class is defined with its constructor, which initializes an empty array called queue to store the elements.
2. The pushFront method adds a value to the front of the queue by using the unshift method, which inserts the value at the beginning of the array.
3. The pushMiddle method adds a value to the middle of the queue. It calculates the index of the middle element using integer division (Math.floor(this.queue.length / 2)) and then uses the splice method to insert the value at that index.
4. The pushBack method adds a value to the back of the queue by using the push method, which appends the value to the end of the array.
5. The popFront method removes and returns the front element of the queue. It checks if the queue is empty (this.queue.length === 0) and returns -1 in that case. Otherwise, it uses the shift method to remove and return the first element of the array.
6. The popMiddle method removes and returns the middle element of the queue. It first checks if the queue is empty and returns -1 if it is. Then it calculates the index of the middle element (Math.floor((this.queue.length - 1) / 2)) and uses the splice method to remove and return the element at that index.
7. The popBack method removes and returns the back element of the queue. It checks if the queue is empty and returns -1 if it is. Otherwise, it uses the pop method to remove and return the last element of the array.
8. The operations array contains the sequence of operations to be performed on the FrontMiddleBackQueue object, and the values array contains the corresponding values for each operation.
9. A queue object is created using the FrontMiddleBackQueue class.
10. The output array is initialized to store the results of the operations.
11. A loop is executed from index 1 to the end of the operations array.
12. Inside the loop, the current operation and value are obtained.
13. Depending on the operation, the corresponding method of the queue object is called, and the result is stored in the result variable.
14. The result is then pushed into the output array.
15. After the loop completes, the output array is logged to the console.
- The output gives the result as [null, null, null, null, null, 1, 3, 4, 2, -1], which represents the results of the operations performed on the FrontMiddleBackQueue object.