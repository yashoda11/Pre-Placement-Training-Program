var sortColors = function (nums) {
    let start = 0; 
    let end = nums.length - 1; 
    let current = 0; 
  
    while (current <= end) {

      if (nums[current] === 0) {
        [nums[start], nums[current]] = [nums[current], nums[start]];
        start++;
        current++;
      } else if (nums[current] === 2) {
        [nums[end], nums[current]] = [nums[current], nums[end]];
        end--;
      } else {
        current++;
      }
    }
  };
  
 
// Testing Examples :

// Example - 01 :
  const nums1 = [2, 0, 2, 1, 1, 0];
  sortColors(nums1);
  console.log("Example - 01 :");
  console.log(nums1);            // Output: [0, 0, 1, 1, 2, 2]
  
// Example - 02 :
  const nums2 = [2, 0, 1];
  sortColors(nums2);
  console.log("\nExample - 02 :");
  console.log(nums2);                     // Output: [0, 1, 2]