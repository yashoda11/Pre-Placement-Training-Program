# **Assignment - 03**
##  **Question 8**
Given an array of meeting time intervals where intervals[i] = [starti, endi],
determine if a person could attend all meetings.

**Example :**

**Input :** intervals = [ [0,30],[5,10],[15,20] ]

**Output :** false

**Explanation :**
- To determine if a person could attend all meetings, we need to check if there are any overlapping intervals in the given array.
- Here's the approach we can follow:
- Sort the intervals based on their start times in ascending order.
- Iterate over the sorted intervals starting from the second interval.
- Compare the start time of the current interval with the end time of the previous interval.
- If the start time of the current interval is less than or equal to the end time of the previous interval, there is an overlap, and the person cannot attend all meetings. Return false.
- If we reach the end of the loop without any overlaps, return true since the person can attend all meetings.
- In the example , we use the given input [[0, 30], [5, 10], [15, 20]] to demonstrate how the canAttendMeetings function works. 
- The output will be false since there is an overlap between the intervals [0, 30] and [15, 20].





