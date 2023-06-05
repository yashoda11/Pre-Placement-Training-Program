var moveAllZeorsToAtEnd = function (nums)
{
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == 0) {
			count++;
			nums.splice(i,1);
			i--;
		}
	}
	for (let i = 0; i < count; i++)
	{
		nums.push(0);
	}
	return `
	The given array after shifting all zeros to right side is: [${nums}]
	`;
}
var nums1 = [0,1,0,3,12];  //Example - 01
var nums2 = [0];           //Example - 0
console.log(moveAllZeorsToAtEnd(nums1));
console.log(moveAllZeorsToAtEnd(nums2));