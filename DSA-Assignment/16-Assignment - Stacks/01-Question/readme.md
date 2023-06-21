# **Assignment Questions - 16**

## **Question - 01**

Given an array, for each element find the value of the nearest element to the right which is having a frequency greater than that of the current element. 
- If there does not exist an answer for a position, then make the value ‘-1’.

**Example - 01 :**
```
Input : a[] = [1, 1, 2, 3, 4, 2, 1]
Output : [-1, -1, 1, 2, 2, 1, -1]

Explanation :
Given array a[] = [1, 1, 2, 3, 4, 2, 1]
Frequency of each element is: 3, 3, 2, 1, 1, 2, 3

Lets calls Next Greater Frequency element as NGF
1. For element a[0] = 1 which has a frequency = 3,
   As it has frequency of 3 and no other next element
   has frequency more than 3 so  '-1'
2. For element a[1] = 1 it will be -1 same logic
   like a[0]
3. For element a[2] = 2 which has frequency = 2,
   NGF element is 1 at position = 6  with frequency
   of 3 > 2
4. For element a[3] = 3 which has frequency = 1,
   NGF element is 2 at position = 5 with frequency
   of 2 > 1
5. For element a[4] = 4 which has frequency = 1,
   NGF element is 2 at position = 5 with frequency
   of 2 > 1
6. For element a[5] = 2 which has frequency = 2,
   NGF element is 1 at position = 6 with frequency
   of 3 > 2
7. For element a[6] = 1 there is no element to its
   right, hence -1
   ```

**Example - 02 :**
```
Input : a[] = [1, 1, 1, 2, 2, 2, 2, 11, 3, 3]
Output : [2, 2, 2, -1, -1, -1, -1, 3, -1, -1]
```

**Analysis :**
- **Algorithm :**
   1. Create an empty stack to store the indices of elements with increasing frequency.
   2. Create an empty map called frequencyMap to store the frequency of each element in the input array.
   3. Iterate through the input array from right to left and update the frequencyMap with the frequency of each element.
   4. Iterate through the input array from right to left again:
      - While the stack is not empty and the frequency of the element represented by the index at the top of the stack is less than or equal to the frequency of the current element, pop elements from the stack since they are not required for the result.
      - If the stack becomes empty, it means there is no greater frequency element to the right of the current element. Assign -1 to the result array at the current index.
      - If the stack is not empty, store the element represented by the index at the top of the stack in the result array at the current index.
      - Push the current index onto the stack.
   5. The remaining indices in the stack represent elements that have no greater frequency elements to the right. Assign -1 to the result array for those indices.
   6. Return the result array as the output.

- **Explanation :**
   1. The findNextGreaterFrequency function takes an array arr as input.
   2. Inside the function, we create a frequencyMap using a Map to store the frequency of each element in the input array.
   3. We iterate through the input array from right to left (line 8) to update the frequencyMap with the frequency of each element. If an element is already present in the map, we increment its frequency. If it is not present, we set its frequency to 1.
   4. After building the frequencyMap, we iterate through the input array from right to left again (line 13) to find the nearest element to the right with a greater frequency for each element.
   5. Inside the loop, while the stack is not empty and the frequency of the element at the top of the stack (retrieved using frequencyMap.get(arr[stack[stack.length - 1]])) is less than or equal to the frequency of the current element, we pop elements from the stack (line 16).
   6. If the stack becomes empty, it means there is no greater frequency element to the right of the current element. Hence, we assign -1 to the result array at the current index (line 19).
   7. If the stack is not empty, we store the element represented by the index at the top of the stack in the result array at the current index (line 21).
   8. Finally, we push the current index onto the stack (line 23) to continue finding the nearest element with greater frequency for subsequent elements.
   9. After the loop, we handle the remaining indices in the stack by assigning -1 to the result array (lines 26-28).
   10. Finally, we return the result array as the output.
- This algorithm ensures that for each element, the value of the nearest element to the right with a frequency greater than the current element is found, and if there is no such element, -1 is assigned.