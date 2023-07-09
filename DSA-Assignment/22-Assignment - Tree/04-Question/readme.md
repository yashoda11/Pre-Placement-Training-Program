# **Assignment Questions - 22**
## **Question - 04**

Given **Preorder**, **Inorder** and **Postorder traversals** of some tree. 
- Write a program to check if they all are of the same tree.


**Examples - 01 :**

```
Input : 
        Inorder -> 4 2 5 1 3
        Preorder -> 1 2 4 5 3
        Postorder -> 4 5 2 3 1

Output : 
Yes

Explanation : 
All of the above three traversals are of the same tree 

                           1
                         /   \
                        2     3
                      /   \
                     4     5

```


**Examples - 02 :**

```
Input :

        Inorder -> 4 2 5 1 3
        Preorder -> 1 5 4 2 3
        Postorder -> 4 1 2 3 5

Output :
No
```


**Explanation :**
- The Node class is defined to represent a node in a binary tree.
- The areTraversalsSame() function takes the Preorder, Inorder, and Postorder traversals as input parameters.
- In the function, it checks if the lengths of the traversals are the same and if they are all empty. If so, it returns true, as empty traversals represent the same tree.
- If the lengths are not all zero, it proceeds with the comparisons.
- It takes the first element of the Preorder traversal as the root value and finds its index in the Inorder traversal.
- Based on the root index, it splits the Inorder, Preorder, and Postorder traversals into left and right subtrees.
- It recursively calls the areTraversalsSame() function for the left and right subtrees, passing the respective split traversals.
- The function returns true only if both the left and right subtrees are found to be the same.
- If any of the conditions are not met, it returns false.
- In the main() part of the code, two examples are provided, and the areTraversalsSame() function is called with the example traversals to check if they correspond to the same tree.