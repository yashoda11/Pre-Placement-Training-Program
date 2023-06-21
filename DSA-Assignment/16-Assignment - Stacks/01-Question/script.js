function findNextGreaterFrequency(arr) {
    const frequencyMap = new Map(); // To store frequency of elements
    const stack = []; // Stack to track elements with increasing frequency
    const result = []; // Array to store the final result
  
    // Step 1: Build frequency map
    for (let i = arr.length - 1; i >= 0; i--) {
      if (frequencyMap.has(arr[i])) {
        frequencyMap.set(arr[i], frequencyMap.get(arr[i]) + 1);
      } else {
        frequencyMap.set(arr[i], 1);
      }
    }
  
    // Step 2: Iterate the array from right to left
    for (let i = arr.length - 1; i >= 0; i--) {
      while (stack.length > 0 && frequencyMap.get(arr[stack[stack.length - 1]]) <= frequencyMap.get(arr[i])) {
        stack.pop(); // Pop elements from stack as they are not required for the result
      }
      if (stack.length === 0) {
        result[i] = -1; // No greater frequency element to the right
      } else {
        result[i] = arr[stack[stack.length - 1]]; // Store the nearest element with greater frequency
      }
      stack.push(i); // Push current index to stack
    }
  
    return result;
  }
  
// Examples :

// Example - 01 :

  var arr = [1, 1, 2, 3, 4, 2, 1];
  var result = findNextGreaterFrequency(arr);
  console.log(result); // Output: [-1, -1, 1, 2, 2, 1, -1]

// Example - 02 :
  var arr = [1, 1, 1, 2, 2, 2, 2, 11, 3, 3]
  var result = findNextGreaterFrequency(arr);
  console.log(result); // Output : [2, 2, 2, -1, -1, -1, -1, 3, -1, -1]