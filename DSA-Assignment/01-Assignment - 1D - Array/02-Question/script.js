function removeElement(nums, val) {
  nums.splice(0, nums.length, ...nums.filter(num => num !== val));
  return nums.length;
}

// Example usage:
const nums = [3, 2, 2, 3];
const val = 3;
const k = removeElement(nums, val);
console.log(k); // Output: 2
console.log(nums); // Output: [2, 2, *, *]
