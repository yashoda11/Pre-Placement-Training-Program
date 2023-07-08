# **Assignment Questions - 20**
## **Question - 03**

Given an array of size n. 
- The problem is to check whether the given array can represent the level order traversal of a Binary Search Tree or not.

```
Example - 01 :

Input - 01 : 
arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

Output - 01 : 
Yes

For the given arr[], the Binary Search Tree is:

            7

         /    \

       4     12

     /  \     /

    3   6  8

   /    /     \

 1    5      10
```

```
Example - 02 :

Input - 02 : 
arr[] = {11, 6, 13, 5, 12, 10}

Output - 02 : 
No

The given arr[] does not represent the level order traversal of a BST.
```


The code you provided demonstrates how to check if a given array can represent the level order traversal of a Binary Search Tree (BST). Let's break down the code step by step:

class TreeNode: This is a class representing a node in the binary tree. Each node has a value (val), and references to its left and right child nodes (left and right). This class is used to construct the BST.

canRepresentBST(arr): This is the main function that takes an array (arr) as input and checks if it can represent the level order traversal of a BST.

const n = arr.length;: Get the length of the given array.

if (n === 0): Check if the array is empty. If it is, return true because an empty array represents an empty BST.

const root = new TreeNode(arr[0]);: Create the root node of the BST using the first element of the array.

for (let i = 1; i < n; i++): Iterate through the remaining elements of the array.

let current = root;: Set the current node to the root.

while (true): Start an infinite loop to find the appropriate position for the current element in the BST.

If the current element is less than the value of the current node (arr[i] < current.val):

If the left child of the current node is null, create a new node with the current element and assign it as the left child.
If the left child already exists, update the current node to its left child and continue searching.
If the current element is greater than the value of the current node (arr[i] > current.val):

If the right child of the current node is null, create a new node with the current element and assign it as the right child.
If the right child already exists, update the current node to its right child and continue searching.
If the current element is equal to the value of the current node (arr[i] === current.val), it is a duplicate value, and the array cannot represent a valid BST. Return false.

After the loop ends, the BST has been constructed.

Perform a level order traversal of the BST to check if it matches the given array:

const levelOrder = [] and const queue = []: Initialize an empty array for storing the level order traversal and a queue for performing BFS.

queue.push(root): Enqueue the root node.

While the queue is not empty, dequeue a node (const current = queue.shift()) and add its value to the levelOrder array. Enqueue its left and right children if they exist.

Compare the levelOrder array with the given array (arr) to check if they match element by element. If any element differs, return a message stating that the given array cannot represent the level order traversal of a BST.

If all elements match, return a message stating that the given array can represent the level order traversal of a BST.

Example test cases: The code includes two example test cases (console.log(canRepresentBST(...))) to demonstrate how to use the canRepresentBST function. The outputs for these test cases are provided as comments.

With this code, you can check whether a given array represents the level order traversal of a BST. If the output is true, it means the given array can represent a valid BST; otherwise, it cannot.

I a