# **Assignment Questions - 17**
## **Question - 08**

For a stream of integers, implement a data structure that checks if the last k integers parsed in the stream are **equal** to **value**.
- Implement the **DataStream** class:
    - `DataStream(int value, int k)` Initializes the object with an empty integer stream and the two integers `value` and `k`.
    - `boolean consec(int num)` Adds `num` to the stream of integers. Returns `true` if the last `k` integers are equal to `value`, and `false` otherwise. If there are less than `k` integers, the condition does not hold true, so returns `false`.

**Example :**
```
Input :
["DataStream", "consec", "consec", "consec", "consec"]
[[4, 3], [4], [4], [4], [3]]
Output :
[null, false, false, true, false]
Explanation :
DataStream dataStream = new DataStream(4, 3); //value = 4, k = 3
dataStream.consec(4); 
// Only 1 integer is parsed, so returns False.
dataStream.consec(4); 
// Only 2 integers are parsed.
// Since 2 is less than k, returns False.
dataStream.consec(4); 
// The 3 integers parsed are all equal to value, so returns True.
dataStream.consec(3); 
// The last k integers parsed in the stream are [4,4,3].
// Since 3 is not equal to value, it returns False.
```

**Analysis :**
1. The DataStream class is defined with a constructor that takes two parameters: value and k. It initializes the object with these values and an empty array stream to store the integers.
2. The consec method is implemented to add a new number to the stream and check if the last k integers in the stream are equal to the value.
3. Inside the consec method:
    - The num parameter is added to the stream array using the push method.
    - If the length of the stream array is less than k, it means there are not enough integers in the stream to determine consecutiveness. In this case, the method returns false.
    - If the length of the stream array is greater than or equal to k, a loop is executed to check the last k integers in the stream.
    - The loop iterates from this.stream.length - this.k to this.stream.length - 1 (inclusive).
    - If any of the integers in the range are not equal to the value, the method returns false.
    - If all the integers in the range are equal to the value, the method returns true.
4. In the testing example:
    - A new DataStream object is created with value = 4 and k = 3.
    - An out  put array is initialized.
    - null is added to the output array to represent the initialization of the object.
    - The consec method is called multiple times with different numbers, and the return values are added to the output array.
    - Finally, the output array is logged to the console.
5. The output of the code will be [null, false, false, true, false].
    - The first element is null because it represents the initialization of the object.
    - The consecutive checks return false until at least k = 3 integers are added to the stream.
    - Once three 4's are added to the stream, the consecutive check returns true.
    - When a 3 is added to the stream, the consecutive check returns false because the last k integers are [4, 4, 3], and 3 is not equal to value = 4.
- Therefore, the code correctly checks if the last k integers in the stream are equal to the given value.