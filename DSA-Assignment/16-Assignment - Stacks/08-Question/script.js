function maxAbsDifference(arr) {
    const n = arr.length;
  
    // Arrays to store the nearest left and right smaller elements
    const LS = new Array(n).fill(0);
    const RS = new Array(n).fill(0);
  
    const stack = [];
  
    // Finding nearest smaller element on the left side
    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
        stack.pop();
      }
      LS[i] = stack.length === 0 ? 0 : stack[stack.length - 1];
      stack.push(arr[i]);
    }
  
    // Clearing the stack
    stack.length = 0;
  
    // Finding nearest smaller element on the right side
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
        stack.pop();
      }
      RS[i] = stack.length === 0 ? 0 : stack[stack.length - 1];
      stack.push(arr[i]);
    }
  
    // Finding the maximum absolute difference between LS and RS
    let maxDiff = 0;
    for (let i = 0; i < n; i++) {
      maxDiff = Math.max(maxDiff, Math.abs(LS[i] - RS[i]));
    }
  
    return maxDiff;
  }
  
  // Example usage:
  var arr1 = [2, 1, 8];
  var arr2 = [2, 4, 8, 7, 7, 9, 3];
  var arr3 = [5, 1, 9, 2, 5, 1, 7];
  
  console.log(`
  The Maximim Absolute Difference for the given array [${arr1}] is : ${maxAbsDifference(arr1)} .
  `);
  console.log(`
  The Maximim Absolute Difference for the given array [${arr2}] is : ${maxAbsDifference(arr2)} .
  `);
  console.log(`
  The Maximim Absolute Difference for the given array [${arr3}] is : ${maxAbsDifference(arr3)} .
  `);
  