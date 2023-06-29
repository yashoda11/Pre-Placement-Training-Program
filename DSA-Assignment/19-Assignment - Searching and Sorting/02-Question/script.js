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
  
  // Example 1
  console.log(countSmaller([5, 2, 6, 1]));
  // Output: [2, 1, 1, 0]
  
  // Example 2
  console.log(countSmaller([-1]));
  // Output: [0]
  
  // Example 3
  console.log(countSmaller([-1, -1]));
  // Output: [0, 0]
  