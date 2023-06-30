var rearrangeArray = function (arr) {
    const n = arr.length;
  
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0 && arr[i] >= 0) {
        // Find the next negative number
        let j = i + 1;
        while (j < n && arr[j] >= 0) {
          j++;
        }
  
        // If a negative number is found, shift the array elements
        if (j < n) {
          const temp = arr[j];
          for (let k = j; k > i; k--) {
            arr[k] = arr[k - 1];
          }
          arr[i] = temp;
        }
      } else if (i % 2 !== 0 && arr[i] < 0) {
        // Find the next positive number
        let j = i + 1;
        while (j < n && arr[j] < 0) {
          j++;
        }
  
        // If a positive number is found, shift the array elements
        if (j < n) {
          const temp = arr[j];
          for (let k = j; k > i; k--) {
            arr[k] = arr[k - 1];
          }
          arr[i] = temp;
        }
      }
    }
  
    return arr;
  };



// Testing Examples :

// Example - 01 :
var arr = [1, 2, 3, -4, -1, 4];
console.log(`
After Rearrange the given Array [${arr}] of elements in alternating positive and negative items. \nThe New Array becomes as : [${rearrangeArray(arr)}] .
`);                                // Output: [-4, 1, -1, 2, 3, 4] .
  
// Example - 02 :
var arr = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
console.log(`
After Rearrange the given Array [${arr}] of elements in alternating positive and negative items. \nThe New Array becomes as : [${rearrangeArray(arr)}] .
`);                                // Output: [-5, 5, -2, 2, -8, 4, 7, 1, 8, 0] .