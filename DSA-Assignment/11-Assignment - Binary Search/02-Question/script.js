var findPeakElement = function (nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
  
      if (nums[mid] < nums[mid + 1]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return left;
  }
  
//Examples :

//Example - 01 :
var nums = [1,2,3,1];
console.log(`
The Index of the Peak element in the given array [${nums}] elements is at : ${findPeakElement(nums)}.
`);
  

//Example - 02: 
var nums = [1,2,1,3,5,6,4];
console.log(`
The Index of the Peak element in the given array [${nums}] elements is at : ${findPeakElement(nums)}.
`);