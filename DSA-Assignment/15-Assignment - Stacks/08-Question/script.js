function trap(height) {
  let waterTrapped = 0;
  const stack = [];

  for (let i = 0; i < height.length; i++) {
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop();
      if (stack.length === 0) {
        break;
      }

      const distance = i - stack[stack.length - 1] - 1;
      const trappedHeight = Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
      waterTrapped += distance * trappedHeight;
    }

    stack.push(i);
  }

  return waterTrapped;
}

// Examples :

//Example - 01 :
const height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(`
water which can trap after raining for the giveen height [${height1}] is ${trap(height1)} .
`);                                     // Output: 6

//Example - 02 :
const height2 = [4, 2, 0, 3, 2, 5];
console.log(`
water which can trap after raining for the giveen height [${height2}] is ${trap(height2)} .
`);                                     // Output: 9
