var mergeSortedArrays = function (arr1, arr2) {
    const n1 = arr1.length;
    const n2 = arr2.length;
    let i = 0;
    let j = 0;
    const mergedArray = [];
  
    while (i < n1 && j < n2) {
      if (arr1[i] <= arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    while (i < n1) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    while (j < n2) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  };
  


//Testing Examples :

// Example - 01 :
var arr1 = [1, 3, 4, 5];
var arr2 = [2, 4, 6, 8];
console.log(`
After Merging the two given Sorted Arrays [${arr1}] and [${arr2}] of elements. \nThe New Array becomes as : [${mergeSortedArrays(arr1, arr2)}]
`);                                       // Output: [1, 2, 3, 4, 4, 5, 6, 8] .
  

// Example - 02 :
var arr1 = [5, 8, 9];
var arr2 = [4, 7, 8];
console.log(`
After Merging the two given Sorted Arrays [${arr1}] and [${arr2}] of elements. \nThe New Array becomes as : [${mergeSortedArrays(arr1, arr2)}]
  `);                                     // Output: [4, 5, 7, 8, 8, 9]