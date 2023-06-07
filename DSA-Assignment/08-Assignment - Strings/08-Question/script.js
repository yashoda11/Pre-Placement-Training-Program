function swapStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    if (s === goal) {
      // Check if s has at least one character that appears more than once
      const charCount = new Set(s).size;
      return charCount < s.length;
    }
  
    const diffPositions = [];
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        diffPositions.push(i);
      }
    }
  
    return (
      diffPositions.length === 2 &&
      s[diffPositions[0]] === goal[diffPositions[1]] &&
      s[diffPositions[1]] === goal[diffPositions[0]]
    );
  }
  
  const s = "ab";
  const goal = "ba";
  console.log(swapStrings(s, goal));
  