var findMinimumElement = function (nums) {
    let left = 0;
    let right = nums.length - 1;
  
    // If the array is not rotated, return the first element
    if (nums[left] < nums[right]) {
      return nums[left];
    }
  
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
  
      // Check if the middle element is the rotation point
      if (nums[mid] > nums[mid + 1]) {
        return nums[mid + 1];
      }
  
      // Check if the middle element is the rotation point
      if (nums[mid] < nums[mid - 1]) {
        return nums[mid];
      }
  
      // If the middle element is greater than the last element,
      // the rotation point is in the second half of the array
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      }
      // If the middle element is smaller than the last element,
      // the rotation point is in the first half of the array
      else {
        right = mid - 1;
      }
    }
  
    // The loop should never reach this point, but return -1 if not found
    return -1;
  };


// Examples :

//Example - 01 :
var nums = [3,4,5,1,2];
console.log(`
The Minimum Element present in the given array [${nums}] elements is : ${findMinimumElement(nums)}.
`);                                   // Output: 1

//Example - 02 :
var nums = [4,5,6,7,0,1,2];
console.log(`
The Minimum Element present in the given array [${nums}] elements is : ${findMinimumElement(nums)}.
`);                                  // Output: 0

//Example - 03 :
var nums = [11,13,15,17];
console.log(`
The Minimum Element present in the given array [${nums}] elements is : ${findMinimumElement(nums)}.
`);                                   // Output: 11