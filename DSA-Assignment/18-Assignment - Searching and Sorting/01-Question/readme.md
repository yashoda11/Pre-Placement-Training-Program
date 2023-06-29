# **Assignment Questions 18**
## **Question - 01** 
## **Merge Intervals**

Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.

**Example - 01 :**
```
Input : intervals = [[1,3],[2,6],[8,10],[15,18]]
Output : [[1,6],[8,10],[15,18]]
Explanation : 
Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

**Example - 02 :**
```
Input : intervals = [[1,4],[4,5]]
Output : [[1,5]]
Explanation : 
Intervals [1,4] and [4,5] are considered overlapping.
```

**Constraints :**
- `1 <= intervals.length <= 10000`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 10000`

**Analysis :**
- The mergeIntervals function takes an array of intervals as input.
- First, we sort the intervals based on the start time using the sort method and a custom comparator function.
- We initialize the merged array with the first interval from the sorted input.
- Then, we iterate over the remaining intervals starting from the second interval.
- For each interval, we compare its start time with the end time of the previously merged interval.
- If the current interval overlaps with the previous interval, we update the end time of the previous interval to the maximum of the two end times.
- If the current interval is non-overlapping, we add it to the merged array.
- Finally, we return the merged array as the result.