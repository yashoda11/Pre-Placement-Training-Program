# **Assignment Questions - 13**
## **Question - 02**

Write a function that takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. 
- The list should only be traversed once.
- For example if the linked list is 11->11->11->21->43->43->60 then removeDuplicates() should convert the list to 11->21->43->60.

**Example - 01:**
```
Input:
LinkedList: 
11->11->11->21->43->43->60
Output:
11->21->43->60
```

**Example 2:**
```
Input:
LinkedList: 
10->12->12->25->25->25->34
Output:
10->12->25->34
```

**Explanation :**
- The code defines a Node class to represent each node in the linked list. 
- The removeDuplicates function removes duplicate nodes from the list by traversing it once. 
- Finally, the displayList function is used to display the linked list before and after removing duplicates.