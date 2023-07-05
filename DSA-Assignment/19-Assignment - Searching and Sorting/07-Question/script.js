var intersectionOfArraysUnique = function (nums1, nums2) {
    const set = new Set(nums1);
    
    const intersectionArr = [];
    
    for (let num of nums2) {
      if (set.has(num)) {
        intersectionArr.push(num);
        set.delete(num);
      }
    }
    
    return intersectionArr;

  };
  

// Testing Examples :

// Example - 01 :
var nums1 = [1,2,2,1];
var nums2 = [2,2];
console.log(`
For the given Arrays [${nums1}] and [${nums2}] of elements, after their intersection (unique). \nThe New Array becomes : [${intersectionOfArraysUnique(nums1, nums2)}]
`);

// Example - 03 :
var nums1 = [4,9,5];
var nums2 = [9,4,9,8,4];
console.log(`
For the given Arrays [${nums1}] and [${nums2}] of elements, after their intersection (unique). \nThe New Array becomes : [${intersectionOfArraysUnique(nums1, nums2)}]
`);