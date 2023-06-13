function findMissingNumber(nums) {
    nums.sort((a, b) => a - b)
    let left = 0;
    let right = nums.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] > mid) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left;
};

//Examples :

//Example - 01 :
var nums = [3,0,1];
console.log(`
The Missing Number in the range of [0, ${nums.length}] in the given array [${nums}] elements is : ${findMissingNumber(nums)}.
`);                                // Output: 2

//Example - 02 :
var nums = [0,1];
console.log(`
The Missing Number in the range of [0, ${nums.length}] in the given array [${nums}] elements is : ${findMissingNumber(nums)}.
`);              // Output: 2

//Example - 03 :
var nums = [9,6,4,2,3,5,7,0,1];console.log(`
The Missing Number in the range of [0, ${nums.length}] in the given array [${nums}] elements is : ${findMissingNumber(nums)}.
`);    // Output: 8