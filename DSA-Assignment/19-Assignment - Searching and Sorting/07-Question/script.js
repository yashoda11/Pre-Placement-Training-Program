function intersectionOfArraysUnique(nums1, nums2) {
    // Create a set to store the unique elements
    const set = new Set(nums1);
    
    // Create an array to store the intersection
    const intersectionArr = [];
    
    // Iterate through the second array
    for (let num of nums2) {
      // Check if the element is present in the set
      if (set.has(num)) {
        // Add the element to the intersection array
        intersectionArr.push(num);
        
        // Remove the element from the set to avoid duplicates
        set.delete(num);
      }
    }
    
    return intersectionArr;
  }
  
// Testing Examples :

// Example - 01 :
var nums1 = [1,2,2,1];
var nums2 = [2,2];
console.log(`
For the given Arrays [${nums1}] and [${nums2}] of elements, after their intersection. \nThe New Array becomes : [${intersectionOfArraysUnique(nums1, nums2)}]
`);

// Example - 03 :
var nums1 = [4,9,5];
var nums2 = [9,4,9,8,4];
console.log(`
For the given Arrays [${nums1}] and [${nums2}] of elements, after their intersection. \nThe New Array becomes : [${intersectionOfArraysUnique(nums1, nums2)}]
`);