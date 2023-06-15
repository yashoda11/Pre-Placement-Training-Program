# **Assignment Questions - 12**
## **Question 8**

Given a singly linked list, find if the linked list is [circular](https://www.geeksforgeeks.org/circular-linked-list/amp/) or not.
- A linked list is called circular if it is not NULL-terminated and all nodes are connected in the form of a cycle. Below is an example of a circular linked list.
- ![Example Image](https://file.notion.so/f/s/d30bbf79-b1eb-4ba4-b23e-6d3f27ccdfe5/Untitled.png?id=5ccbc796-7fb9-4c82-b385-f45ba589a896&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&expirationTimestamp=1686886573491&signature=qv69dKiPTHWYlGasB12pGK6Tl4-UuaW1SONbESxUy3I&downloadName=Untitled.png)

**Explanation :**
- To determine if a singly linked list is circular, you can use the Floyd's cycle-finding algorithm. 
- This algorithm uses two pointers, often referred to as the "slow" and "fast" pointers, to traverse the linked list. 
- If there is a cycle in the linked list, the fast pointer will eventually catch up to the slow pointer.
- In this example, we create two linked lists.
- The first one is a circular linked list, where the last node points back to the head. 
- The second one is a non-circular linked list. 
- We then call the isCircularLinkedList function to check if each linked list is circular. 
- The function returns true if the linked list is circular and false otherwise.