# **Assignment Questions - 18**
## **Question - 06** 
## **Minimum Number of Arrows to Burst Balloons**

There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array `points` where `points[i] = [xstart, xend]` denotes a balloon whose **horizontal diameter** stretches between `xstart` and `xend`. 
- You do not know the exact y-coordinates of the balloons.
- Arrows can be shot up **directly vertically** (in the positive y-direction) from different points along the x-axis. 
- A balloon with `xstart` and `xend` is **burst** by an arrow shot at `x` if `xstart <= x <= xend`. 
- There is **no limit** to the number of arrows that can be shot. 
- A shot arrow keeps traveling up infinitely, bursting any balloons in its path.
- Given the array `points`, return *the **minimum** number of arrows that must be shot to burst all balloons*.

**Example - 01 :**
```
Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation : 
The balloons can be burst by 2 arrows:
1. Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
2. Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
```

**Example - 02 :**
```
Input : points = [[1,2],[3,4],[5,6],[7,8]]
Output : 4
Explanation : 
One arrow needs to be shot for each balloon for a total of 4 arrows.
```

**Example - 03 :**
```
Input : points = [[1,2],[2,3],[3,4],[4,5]]
Output : 2
Explanation : 
The balloons can be burst by 2 arrows:
1. Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
2. Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].
```

**Constraints :**
- 1 <= points.length <= 10^5
- points[i].length == 2
- 231 <= xstart < xend <= 2^31 - 1

**Analysis :**
- To determine the minimum number of arrows needed to burst all the balloons, we can use the Interval Scheduling approach. 
- We need to find the maximum number of non-overlapping intervals.

- **Algorithm :**
    1. Sort the balloons based on their end points in ascending order.
    2. Initialize a variable end to track the end point of the first balloon.
    3. Initialize a variable arrows to count the number of arrows needed, starting from 1.
    4. Iterate through the remaining balloons starting from the second balloon.
        - If the current balloon's start point is greater than end, it means this balloon doesn't overlap with the previous one. Update end to the end point of the current balloon and increment arrows by 1.
        - If the current balloon's start point is less than or equal to end, it means this balloon overlaps with the previous one. Update end to the minimum of end and the end point of the current balloon.
    5. After iterating through all the balloons, return the value of arrows.
- **Explanation :**
    - The findMinArrowShots function takes an array points as input and implements the steps mentioned above to find the minimum number of arrows needed to burst all balloons.
    - We first check if the length of points is 0. If it is, we return 0 since there are no balloons to burst.
    - We sort the balloons based on their end points in ascending order using the sort method with a comparison function (a, b) => a[1] - b[1].
    - We initialize the end variable to the end point of the first balloon in the sorted array and set arrows to 1 since we need at least one arrow.
    - We then iterate through the remaining balloons starting from the second balloon.
    - For each balloon, we check if its start point is greater than the current end. If it is, it means the balloon doesn't overlap with the previous one. We update the end to the end point of the current balloon and increment arrows by 1.
    - If the start point is less than or equal to the current end, it means the balloon overlaps with the previous one. We update the end to the minimum of the current end and the end point of the current balloon, ensuring that the arrow can burst both balloons.
    - After iterating through all the balloons, we return the value of arrows, which represents the minimum number of arrows needed to burst all the balloons.
- **Time Complexity :**
    - The **Time Complexity** of this solution is **O(n log n)** due to the sorting step, where n is the number of balloons. 
- **Space Complexity :**
    - The **Space Complexity** is **O(1)** as we only need a constant amount of extra space to store the variables.