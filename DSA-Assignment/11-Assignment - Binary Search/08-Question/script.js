var intersection = function (nums1, nums2) {
    // Sort the arrays
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
  
    const result = [];
  
    let i = 0;
    let j = 0;
  
    // Perform binary search to find intersection
    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] === nums2[j]) {
        result.push(nums1[i]);
        i++;
        j++;
      } else if (nums1[i] < nums2[j]) {
        i++;
      } else {
        j++;
      }
    }
  
    return result;
  };
  

// Examples :

// Example - 01 :
var nums1 = [1,2,2,1];
var nums2 = [2,2];
console.log(`
An array of intersection of the given two array [${nums1}] and [${nums2}] elelments is : [${intersection(nums1, nums2)}] .
`);                                                   // Output: [2, 2]


// Example -02 :
var nums1 = [4,9,5];
var nums2 = [9,4,9,8,4];
console.log(`
An array of intersection of the given two array [${nums1}] and [${nums2}] elelments is : [${intersection(nums1, nums2)}] .
`);                                                 // Output: [4, 9]
  