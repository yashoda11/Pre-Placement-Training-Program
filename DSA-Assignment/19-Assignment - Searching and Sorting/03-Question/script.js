var mergeSort = function (nums) {
    if (nums.length <= 1) {
      return nums;
    }
  
    const mid = Math.floor(nums.length / 2);
    const left = mergeSort(nums.slice(0, mid));
    const right = mergeSort(nums.slice(mid));
  
    return merge(left, right);
  };
  
var merge = function (left, right) {
    const merged = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        merged.push(left[leftIndex]);
        leftIndex++;
      } else {
        merged.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Add remaining elements from left array, if any
    while (leftIndex < left.length) {
      merged.push(left[leftIndex]);
      leftIndex++;
    }
  
    // Add remaining elements from right array, if any
    while (rightIndex < right.length) {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  
    return merged;
  };
  


// Testing Examples :

// Example - 01 :
var nums = [5,2,3,1];
console.log(`
The Ascending Order of the given array [${nums}] elements are : [${mergeSort(nums)}] .
 `);                             // Output: [1, 2, 3, 5]
  
// Example - 02 :
var nums = [5,1,1,2,0,0];
console.log(`
The Ascending Order of the given array [${nums}] elements are : [${mergeSort(nums)}] .
 `);                             // Output: [0, 0, 1, 1, 2, 5]
  