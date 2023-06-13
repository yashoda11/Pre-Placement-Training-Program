var findDuplicate =  function (nums) {
    let slow = nums[0];
    let fast = nums[0];
  
    // Finding the meeting point
    do {
      slow = nums[slow];
      fast = nums[nums[fast]];
    } while (slow !== fast);
  
    // Resetting slow to the first element
    slow = nums[0];
  
    // Finding the start of the cycle
    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[fast];
    }
  
    return slow;
  }
  

// Example :

// Example - 01 :
var nums = [1,3,4,2,2];
console.log(`
The Duplicate (Repeated) Number in the given array [${nums}] elements is : ${findDuplicate(nums)}.  
`);                           // Output: 2

// Example - 02 :
var nums = [3,1,3,4,2];
console.log(`
The Duplicate (Repeated) Number in the given array [${nums}] elements is : ${findDuplicate(nums)}.  
`);                         // Output: 3
  