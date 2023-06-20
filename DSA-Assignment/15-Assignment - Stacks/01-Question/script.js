function findNextGreaterElements(N, arr) {
    const stack = [];
    const result = [];
  
    // Iterate through the elements in reverse order
    for (let i = N - 1; i >= 0; i--) {
      // Remove the elements from the stack that are smaller than the current element
      while (stack.length > 0 && arr[i] >= stack[stack.length - 1]) {
        stack.pop();
      }
  
      // Push the next greater element to the result array
      if (stack.length === 0) {
        result.unshift(-1);
      } else {
        result.unshift(stack[stack.length - 1]);
      }
  
      // Push the current element to the stack
      stack.push(arr[i]);
    }
  
    return result;
  }
  
  
  
//Examples : 

// Example - 01 :
  const N1 = 4;
  const arr1 = [1, 3, 2, 4];
  console.log(`
  The Next greater Element of the each element of the given array [${arr1}] elements is : [${findNextGreaterElements(N1, arr1)}]
  `);                                       // Output: [3, 4, 4, -1]
  
// Example - 02 :
  const N2 = 5;
  const arr2 = [6, 8, 0, 1, 3];
  const result2 = findNextGreaterElements(N2, arr2);
  console.log(`
  The Next greater Element of the each element of the given array [${arr2}] elements is : [${findNextGreaterElements(N2, arr2)}]
  `);                                      // Output: [8, -1, 1, 3, -1]
  