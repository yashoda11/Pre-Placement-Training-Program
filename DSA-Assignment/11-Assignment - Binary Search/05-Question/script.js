function intersection(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
  
    const result = [];
  
    for (let num of nums1) {
      if (binarySearch(nums2, num) !== -1 && !result.includes(num)) {
        result.push(num);
      }
    }
  
    return result;
  }
  
  function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }
  
//Examples :

//Example - 01 :
var nums1 = [1,2,2,1];
var nums2 = [2,2];
console.log(`
An array of intersection of the given two arrays [${nums1}] and [${nums2}] elelments is : [${intersection(nums1, nums2)}].
`);                                     // Output: [2]
  
//Example - 02 :
var nums1 = [4,9,5];
var nums2 = [9,4,9,8,4];
console.log(`
An array of intersection of the given two arrays [${nums1}] and [${nums2}] elelments is : [${intersection(nums1, nums2)}].
`);                                  // Output: [4, 9]