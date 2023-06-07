# **Assignment - 07**

## **Question - 08**

You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. 
- Check if these points make a straight line in the XY plane.

**Example :**

**Input :** coordinates = [ [1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

**Output :** true

**Explanation :**
- To check if the given array of coordinates forms a straight line in the XY plane, we can calculate the slope      between each pair of consecutive points. 
- If all the slopes are equal, then the points lie on a straight line. 
- Here's the algorithm to solve this problem:
- **Alogorithm :**
    1. Initialize variables x1, y1 with the coordinates of the first point in the array.
    2. Iterate over the remaining points in the array using a loop variable i starting from 1.
        - Initialize variables x2, y2 with the coordinates of the current point.
        - Calculate the slope slope as (y2 - y1) / (x2 - x1). Note that division by zero should be handled separately.
        - If the slope is not equal to the previous slope (if it exists), return false.
        - Update x1, y1 with the current point's coordinates.
    3. If the loop completes without returning false, return true as all points lie on a straight line.
- The function will output true for the given example, indicating that the points form a straight line in the XY plane.