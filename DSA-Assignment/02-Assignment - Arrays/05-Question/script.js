var maxProduct = function(nums){
    let n = nums.length;
    nums.sort((a,b) => (a-b));
    // maxProduct = nums[0]*nums[1]*nums[nums.length-1];
    console.log(nums);
    console.log(nums[n-1]*nums[n-2]*nums[n-3]);
};
maxProduct([-10, -3, -5, -6, -20]);
