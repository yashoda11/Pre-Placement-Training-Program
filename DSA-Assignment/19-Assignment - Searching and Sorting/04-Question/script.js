function moveZeroesToEnd(arr) {
    let i = 0; // pointer for non-zero elements
  
    // Iterate through the array
    for (let j = 0; j < arr.length; j++) {
      // If the current element is non-zero, swap it with the element at the i-th position
      if (arr[j] !== 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
    return arr;
  }
  

// Testing Examples :

// Example - 01 :
var arr = [1, 2, 0, 4, 3, 0, 5, 0];
console.log(`
The Array [${arr}] of given elemnets, Moving all Zeroes to the end.\nThe New Array becomes : [${moveZeroesToEnd(arr)}]
`);                             // Output: [1, 2, 4, 3, 5, 0, 0, 0]
  
 
// Example - 02 :
var arr = [1, 2, 0, 0, 0, 3, 6];
console.log(`
The Array [${arr}] of given elemnets, Moving all Zeroes to the end.\nThe New Array becomes : [${moveZeroesToEnd(arr)}]
`);                             // Output: [1, 2, 3, 6, 0, 0, 0]
  