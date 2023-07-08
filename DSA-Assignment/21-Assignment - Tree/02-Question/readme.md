<aside>
💡 Question-2:

Given a Binary Search Tree with all unique values and two keys. Find the distance between two nodes in BST. The given keys always exist in BST.

Example:

Consider the following BST:

![Example Image](https://pwskills.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff2455039-7e12-43fc-a7d3-b5be24931c1c%2F1.png?id=d4bc1913-d662-4c2d-a70e-d9eb224f4f9e&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=2000&userId=&cache=v2)

**Input-1:**

n = 9

values = [8, 3, 1, 6, 4, 7, 10, 14,13]

node-1 = 6

node-2 = 14

**Output-1:**

The distance between the two keys = 4

**Input-2:**

n = 9

values = [8, 3, 1, 6, 4, 7, 10, 14,13]

node-1 = 3

node-2 = 4

**Output-2:**

The distance between the two keys = 2

To find the distance between two nodes in a Binary Search Tree (BST), we can follow these steps:

Construct the BST using the given values.
Find the Lowest Common Ancestor (LCA) of the two nodes in the BST.
Calculate the distance from the LCA to each of the two nodes.
Add the distances to get the total distance between the two nodes.

In this code, we have the TreeNode class to represent a node in the BST, and the BST class to represent the Binary Search Tree.

The BST class includes methods to insert nodes into the BST (insert), find the lowest common ancestor (lowestCommonAncestor), and calculate the distance from a node to a target node (calculateDistance).

To find the distance between two nodes, we first construct the BST using the given values. Then, we find the lowest common ancestor of the two nodes using the lowestCommonAncestor method. Next, we calculate the distance from the lowest common ancestor to each of the two nodes using the calculateDistance method. Finally, we add the distances to get the total distance between the two nodes.

You can run the code and observe the output to see the distance between the two nodes based on the given examples.





