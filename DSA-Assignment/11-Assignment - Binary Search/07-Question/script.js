var searchTargetRange = function (nums, target) {
    const result = [-1, -1];
  
    // Search for the leftmost occurrence of the target
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        result[0] = mid;
        right = mid - 1; // Continue searching on the left side
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    // Search for the rightmost occurrence of the target
    left = 0;
    right = nums.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        result[1] = mid;
        left = mid + 1; // Continue searching on the right side
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
  
// Example :

//Example - 01 :
var nums = [5,7,7,8,8,10];
var target = 8;
console.log(`
The Starting and Ending Position of a given Target value ${target} of the given array [${nums}] elements range is : [${searchTargetRange(nums, target)}].
`);                                                            // Output: [3, 4]

//Example - 02 :
var nums = [5,7,7,8,8,10];
var target = 6;
console.log(`
The Starting and Ending Position of a given Target value ${target} of the given array [${nums}] elements range is : [${searchTargetRange(nums, target)}].
`);                                                        // Output: [-1, -1]



//Example - 03 :
var nums = [];
var target = 0;
console.log(`
The Starting and Ending Position of a given Target value ${target} of the given array [${nums}] elements range is : [${searchTargetRange(nums, target)}].
`);                    // Output: [-1, -1]
  