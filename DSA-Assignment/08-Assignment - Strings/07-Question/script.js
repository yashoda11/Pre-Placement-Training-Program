function decodeString(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== ']') {
        // If the current character is not ']', push it to the stack
        stack.push(s[i]);
      } else {
        // If the current character is ']', it means we need to decode the substring inside the brackets
        let substr = '';
        
        // Build the substring until we find the corresponding '['
        while (stack[stack.length - 1] !== '[') {
          substr = stack.pop() + substr;
        }
        
        // Pop '[' from the stack
        stack.pop();
        
        let count = '';
        
        // Extract the repetition count from the stack (digits before '[')
        while (!isNaN(stack[stack.length - 1])) {
          count = stack.pop() + count;
        }
        
        // Repeat the substring count number of times and push it back to the stack
        stack.push(substr.repeat(parseInt(count)));
      }
    }
    
    // Concatenate all the characters in the stack and return the decoded string
    return stack.join('');
  }
  
  const s = "3[a]2[bc]";
  console.log(decodeString(s));