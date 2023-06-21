# **Assignment Questions - 16**
## **Question - 06**

Given an integer k and a **[queue](https://www.geeksforgeeks.org/queue-data-structure/)** of integers, The task is to reverse the order of the first **k** elements of the queue, leaving the other elements in the same relative order.
- Only following standard operations are allowed on queue.
    - **enqueue(x) :** Add an item x to rear of queue
    - **dequeue() :** Remove an item from front of queue
    - **size() :** Returns number of elements in queue.
    - **front() :** Finds front item.
- To reverse the order of the first k elements in a queue while keeping the other elements in the same relative order, we can use a stack. 
    1. The program starts by defining a Queue class with the necessary methods: enqueue(), dequeue(), size(), front(), and isEmpty(). The queue is implemented using an array.
    2. The reverseFirstKElements() function takes a queue and a value k as input.
    3. First, we perform some checks to ensure the input is valid: the queue should not be empty, k should be within a valid range, and k should not exceed the size of the queue.
    4. We create an empty stack to temporarily store the first k elements of the queue.
    5. Using a loop, we dequeue the first k elements from the queue and push them onto the stack.
    6. After that, we pop elements from the stack and enqueue them back into the queue. This step effectively reverses the order of the first k elements.
    7. Finally, we move the remaining elements (queue size - k) from the front of the queue to the rear by dequeueing and enqueueing them one by one.
    8. The function returns the modified queue.
    9. We demonstrate the usage of the code by creating a queue and calling the reverseFirstKElements() function with a value of k. We then dequeue and print the elements of the modified queue to verify the reversed order.