var findErrorNums =  function(nums) {
  const n = nums.length;
  const set = new Set();
  let duplicate = 0;
  let missing = 0;

  for (const num of nums) {
    if (set.has(num)) {
      duplicate = num;
    }
    set.add(num);
  }

  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      missing = i;
      break;
    }
  }

  return [duplicate, missing];
}
const nums = [1, 2, 2, 4];
console.log(findErrorNums(nums));                  // Output: [2, 3]