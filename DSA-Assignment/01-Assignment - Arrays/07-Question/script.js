function moveAllZeorsToAtEnd(nums)
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
	return `OUTPUT : \nThe given array after shifting all zeros to right side is: ${nums}`
}
console.log(moveAllZeorsToAtEnd([0,1,0,3,12]));
