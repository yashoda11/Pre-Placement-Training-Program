function findNearestSmallerNumbers(n, a) {
    const stack = [];
    const result = [];
  
    // Iterate through the elements
    for (let i = 0; i < n; i++) {
      // Remove the elements from the stack that are greater than or equal to the current element
      while (stack.length > 0 && stack[stack.length - 1] >= a[i]) {
        stack.pop();
      }
  
      // If there are no smaller elements on the left, assign -1
      if (stack.length === 0) {
        result.push(-1);
      } else {
        result.push(stack[stack.length - 1]);
      }
  
      // Push the current element to the stack
      stack.push(a[i]);
    }
  
    return result;
  }
  
//Examples : 
  
// Example - 01 :
  const n1 = 3;
  const a1 = [1, 6, 2];
  console.log(`
  The Nearest Smaller Number of the every element of the given array [${a1}] elements is : [${findNearestSmallerNumbers(n1, a1)}].
  `);                                                 // Output: [-1, 1, 1]
  
// Example - 02 :
  const n2 = 6;
  const a2 = [1, 5, 0, 3, 4, 5];
  console.log(`
  The Nearest Smaller Number of the every element of the given array [${a2}] elements is : [${findNearestSmallerNumbers(n2, a2)}].
  `);                                               // Output: [-1, 1, -1, 0, 3, 4]