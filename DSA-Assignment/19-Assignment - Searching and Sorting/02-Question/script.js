function countSmaller(nums) {
    const counts = new Array(nums.length).fill(0);
    const indices = nums.map((num, index) => index); // Track original indices
  
    function mergeSort(arr, start, end) {
      if (start >= end) {
        return;
      }
  
      const mid = Math.floor((start + end) / 2);
      mergeSort(arr, start, mid);
      mergeSort(arr, mid + 1, end);
      merge(arr, start, mid, end);
    }
  
    function merge(arr, start, mid, end) {
      const temp = [];
      let leftIndex = start;
      let rightIndex = mid + 1;
      let smallerCount = 0;
  
      while (leftIndex <= mid && rightIndex <= end) {
        if (nums[indices[rightIndex]] < nums[indices[leftIndex]]) {
          smallerCount++;
          temp.push(indices[rightIndex]);
          rightIndex++;
        } else {
          counts[indices[leftIndex]] += smallerCount;
          temp.push(indices[leftIndex]);
          leftIndex++;
        }
      }
  
      while (leftIndex <= mid) {
        counts[indices[leftIndex]] += smallerCount;
        temp.push(indices[leftIndex]);
        leftIndex++;
      }
  
      while (rightIndex <= end) {
        temp.push(indices[rightIndex]);
        rightIndex++;
      }
  
      for (let i = start; i <= end; i++) {
        indices[i] = temp[i - start];
      }
    }
  
    mergeSort(nums, 0, nums.length - 1);
    return counts;
  }
  


//Testing Exampels :

// Example - 01 :
var nums = [5,2,6,1];
console.log(`
The Number of Smaller Elements to the right of given array [${nums}] are : [${countSmaller(nums)}] .
`);                    // Output: [2, 1, 1, 0]
  

// Example - 02 :
var nums = [-1];
console.log(`
The Number of Smaller Elements to the right of given array [${nums}] are : [${countSmaller(nums)}] .
`);                    // Output: [0]
  

// Example - 03 :
var nums = [-1,-1];
console.log(`
The Number of Smaller Elements to the right of given array [${nums}] are : [${countSmaller(nums)}] .
`);                    // Output: [0,0]