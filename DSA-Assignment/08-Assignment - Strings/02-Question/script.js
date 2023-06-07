function validString(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i);
  
      if (char === '(' || char === '*') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.length > 0 && (stack[stack.length - 1] === '(' || stack[stack.length - 1] === '*')) {
          stack.pop();
        } else if (stack.length > 1 && stack[stack.length - 2] === '(') {
          stack.pop();
          stack.pop();
        } else {
          return false;
        }
      }
    }
  
    let openCount = 0;
  
    while (stack.length > 0) {
      const char = stack.pop();
  
      if (char === '(') {
        openCount++;
      } else if (char === '*') {
        if (openCount > 0) {
          openCount--;
        }
      } else {
        return false;
      }
    }
  
    return openCount === 0;
  }
  
  // Example usage:
  const s = "()";
  console.log(validString(s));
