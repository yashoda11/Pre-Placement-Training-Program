var findMaximumElememt = function (arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  
  const mid = Math.floor(arr.length / 2);
  const leftMax = findMaximumElememt(arr.slice(0, mid));
  const rightMax = findMaximumElememt(arr.slice(mid));
  
  return Math.max(leftMax, rightMax);
}

// Example usage:

//Example - 01 : 
var arr = [ 1, 4, 3, -5, -4, 8, 6 ];
console.log(`
In the given array [${arr}] numbers, The Maximum element is : ${findMaximumElememt(arr)}.
`);               // Output: 8

//Example - 02 :
var arr = [1, 4, 45, 6, 10, -8];
console.log(`
In the given array [${arr}] numbers, The Maximum element is : ${findMaximumElememt(arr)}.
`);                     // Output: 45