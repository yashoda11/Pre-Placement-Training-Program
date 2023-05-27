var removeOccrances = function (nums, val){
    let count = 0;
    for(let i = 0;i<nums.length;i++){
      if(nums[i]!==val){
          nums[count++];
          }
      }
    return count;
    }
  
  var nums = [3,2,2,3,4,6,8,3,11,7,9];
  var val = 3;
  const result = nums.filter(n => n!==3);
  
  console.log(`
  After removing all Occurances of value (${val}) in the given array [${nums}],the remaining elements are : 
  ${removeOccrances(nums,val)} elements and 
  The New Array is: [${result}]`);
  