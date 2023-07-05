var intersectionOfArrays = function (nums1, nums2) {
    const frequencyMap = new Map();
    
    for (let num of nums1) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    const intersectionArr = [];
    
    for (let num of nums2) {
      if (frequencyMap.has(num)) {
        intersectionArr.push(num);
        
        frequencyMap.set(num, frequencyMap.get(num) - 1);
        
        if (frequencyMap.get(num) === 0) {
          frequencyMap.delete(num);
        }
      }
    }
    
    return intersectionArr;
};

  

// Testing Examples :

// Example - 01 :
var nums1 = [1,2,2,1];
var nums2 = [2,2];
console.log(`
For the given Arrays [${nums1}] and [${nums2}] of elements, after their intersection. \nThe New Arrays becomes : [${intersectionOfArrays(nums1, nums2)}]
`);                 // Output : [2,2]

// Example - 02 :
var nums1 = [4,9,5];
var nums2 = [9,4,9,8,4];
console.log(`
For the given Arrays [${nums1}] and [${nums2}] of elements, after their intersection. \nThe New Arrays becomes : [${intersectionOfArrays(nums1, nums2)}]
`);                 // Output : [4,9]