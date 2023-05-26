var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};
console.log(`The Output of the Indices are :[ ${twoSum([2, 7, 11, 15],9)}]`);
console.log(`The Output of the Indices are :[ ${twoSum([3, 2, 4],6)}]`);