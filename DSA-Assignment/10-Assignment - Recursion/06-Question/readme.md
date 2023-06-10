# **Assignment - 10**
## **Question - 06**

The [tower of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi) is a famous puzzle where we have three rods and **N** disks. The objective of the puzzle is to move the entire stack to another rod. You are given the number of discs **N**. Initially, these discs are in the rod 1. You need to print all the steps of discs movement so that all the discs reach the 3rd rod. Also, you need to find the total moves.**Note:** The discs are arranged such that the **top disc is numbered 1** and the **bottom-most disc is numbered N**. Also, all the discs have **different sizes** and a bigger disc **cannot** be put on the top of a smaller disc. Refer the provided link to get a better clarity about the puzzle.

**Example 1:**

```
Input:
N = 2
Output:
move disk 1 from rod 1 to rod 2
move disk 2 from rod 1 to rod 3
move disk 1 from rod 2 to rod 3
3
Explanation:For N=2 , steps will be
as follows in the example and total
3 steps will be taken.
```

**Example 2:**
```
Input:
N = 3
Output:
move disk 1 from rod 1 to rod 3
move disk 2 from rod 1 to rod 2
move disk 1 from rod 3 to rod 2
move disk 3 from rod 1 to rod 3
move disk 1 from rod 2 to rod 1
move disk 2 from rod 2 to rod 3
move disk 1 from rod 1 to rod 3
7
Explanation:For N=3 , steps will be
as follows in the example and total
7 steps will be taken.
```


**Explanation :**
- In this code, the towerOfHanoi function is called recursively. It takes four parameters: n represents the number of disks, sourceRod represents the rod where the disks are initially placed, destinationRod represents the rod where we want to move all the disks, and auxiliaryRod represents the spare rod used for temporary storage during the moves.
- The base case is when n is equal to 1, in which case we simply move the disk from the source rod to the destination rod and return 1 move.
- For n greater than 1, we recursively solve the Tower of Hanoi problem for n-1 disks by moving them from the source rod to the auxiliary rod. Then, we move the largest disk (disk n) from the source rod to the destination rod. Finally, we recursively solve the Tower of Hanoi problem again for n-1 disks by moving them from the auxiliary rod to the destination rod.
- The function returns the total number of moves performed, which is the sum of the moves for the smaller subproblems plus the move for the largest disk.