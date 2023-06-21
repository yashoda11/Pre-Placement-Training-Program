var sortStack = function (stack) {
    const tempStack = [];
  
    while (stack.length > 0) {
      const temp = stack.pop();
  
      while (tempStack.length > 0 && tempStack[tempStack.length - 1] < temp) {
        stack.push(tempStack.pop());
      }
  
      tempStack.push(temp);
    }
  
    while (tempStack.length > 0) {
      stack.push(tempStack.pop());
    }
  
    return stack;
  };
  
// Examples :

//Example - 01 :
  const stack1 = [34, 3, 31, 98, 92, 23];
  console.log(sortStack(stack1));              // Output: [3, 23, 31, 34, 92, 98]
  
//Example - 02 :
  const stack2 = [3, 5, 1, 4, 2, 8];
  console.log(sortStack(stack2));              // Output: [1, 2, 3, 4, 5, 8]
  