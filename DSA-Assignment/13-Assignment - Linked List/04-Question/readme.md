# **Assignment Questions - 13**

## **Question - 04**

Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way. Give the complexity of your algorithm.

**Example :**   
```
Inputs:   1->2->3->4->5->6->7->8->9->NULL and k = 3
Output:   3->2->1->4->5->6->9->8->7->NULL.
```

**Explanation :**
- The class syntax is used to define the LinkedList class, and the methods are defined as class methods.
- The Node function is used to create a new node object, and the kAltReverse and _kAltReverse methods are defined as instance methods. 
- The printList and push methods are also defined as instance methods.
- In the main part of the code, an instance of the LinkedList class is created. 
- The linked list is populated using the push method, and then the original linked list is printed using the printList method. 
- After that, the kAltReverse method is called to reverse alternate groups of 3 nodes, and the modified linked list is printed again.