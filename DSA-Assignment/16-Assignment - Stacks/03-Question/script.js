var deleteMiddle = function (stack) {
    const mid = Math.floor(stack.length / 2);
    deleteRecursive(stack, mid);
    return stack;
  };
  
 var deleteRecursive = function (stack, k) {
    if (k === 0) {
      stack.pop();
      return;
    }
  
    const temp = stack.pop();
    deleteRecursive(stack, k - 1);
    stack.push(temp);
  };
  
// Examples :

// Example - 01 :
  const stack1 = [1, 2, 3, 4, 5];
  console.log(`
  After Deleting the Middle element, The New Stack is : [${deleteMiddle(stack1)}] .
  `);                                      // Output: [1, 2, 4, 5]
  

// Example - 02 :
  const stack2 = [1, 2, 3, 4, 5, 6];
  console.log(`
  After Deleting the Middle element, The New Stack is : [${deleteMiddle(stack2)}] .
  `);                                    // Output: [1, 2, 4, 5, 6]
  