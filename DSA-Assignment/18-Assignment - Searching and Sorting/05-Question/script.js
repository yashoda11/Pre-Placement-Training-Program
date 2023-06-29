var containsDuplicate = function (nums) {

        const set = new Set();
      
        for (const num of nums) {
          if (set.has(num)) {
            return `The given array [${nums}] elements contain Duplicate elements in it. \nHence True.
            `;
          }
          set.add(num);
        }
      
        return `The given array [${nums}] elements do not contain duplicate elements in it. \nHence False.
        `;
};
      

// Testing Examples :

// Example - 01 :
var nums = [1,2,3,1];
console.log("Example - 01 :");
console.log(containsDuplicate(nums));       // Output: true

// Example - 02 :
var nums = [1,2,3,4];
console.log("Example - 02 :");
console.log(containsDuplicate(nums));       // Output: false

// Example - 03 :
var nums = [1,1,1,3,3,4,3,2,4,2];
console.log("Example - 03 :");
console.log(containsDuplicate(nums));       // Output: true