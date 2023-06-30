# **Assignment Questions - 19**
## **Question - 01** 
## **Merge k Sorted Lists**

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.
- *Merge all the linked-lists into one sorted linked-list and return it.*

**Example - 1 :**
```
Input : lists = [[1,4,5],[1,3,4],[2,6]]
Output : [1,1,2,3,4,4,5,6]
Explanation : 
The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
```

**Example - 02 :**
```
Input : lists = []
Output : []
```

**Example 3:**
```
Input : lists = [[]]
Output : []
```

**Constraints:**
- k == lists.length.
- 0 <= k <= 10000.
- 0 <= lists[i].length <= 500.
- -10000 <= lists[i][j] <= 10000.
- lists[i]` is sorted in **ascending order**.
- The sum of `lists[i].length` will not exceed `10000.

**Explanation :**
- To merge k sorted linked lists into one sorted linked list, we can utilize the concept of a min-heap (priority queue). 
- The mergeKLists function takes an array lists of k linked lists as input and merges them into one sorted linked list.
- It first creates a min-heap (priority queue) to store the nodes based on their values.
- The min-heap is initialized by adding the first node from each linked list (if it exists) to the heap.
- It then creates a dummy node to serve as the starting point of the merged list and initializes a curr pointer to track the current node.
- The function enters a loop where it removes the node with the minimum value from the min-heap and appends it to the merged list.
- If the removed node has a next node, it is inserted back into the min-heap.
- This process continues until the min-heap becomes empty.
- Finally, the function returns the merged list starting from the next node of the dummy node.
- The MinHeap class implements the operations required for a min-heap, including insertion (insert), removal of the minimum element (removeMin), and maintaining the heap property (bubbleUp and bubbleDown).
- The helper functions arrayToLinkedList and linkedListToArray are used to convert the linked lists to arrays and vice versa for easier testing and output verification.

**Output - Testing Example :**
- The outputs for the given example cases are as follows:
  - **Example - 01 :** The linked lists [1->4->5], [1->3->4], and [2->6] are merged into one sorted list: 1->1->2->3->4->4->5->6.
  - **Example - 02 :** The input is an empty array, so the merged list is also empty ([]).
  - **Example - 03 :** The input contains an empty linked list, so the merged list is also empty ([]).