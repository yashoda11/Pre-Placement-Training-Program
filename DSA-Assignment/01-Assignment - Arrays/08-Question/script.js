var displayTwiceOccuredNoANDMissingNumber = function(nums){
for ( i = 0 ; i < nums.length ; i++ ){
    if(nums[i] === nums[i+1]){
        return `
        OUTPUT : \n
        In the given array [${nums}] \n
        The Repeated (Duplicate) Number and Missing Number respectively is : [${nums[i]},${(nums[i+1]+1)}] 
        `;
    }
}
}
console.log(displayTwiceOccuredNoANDMissingNumber([1,2,2,4]));