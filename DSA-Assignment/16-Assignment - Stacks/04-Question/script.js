function checkIncreasingOrder(queue) {
    const stack = [];
    const secondQueue = [];
  
    let prev = -Infinity;
  
    while (queue.length > 0) {
      const element = queue.shift();
  
      if (element === prev + 1) {
        secondQueue.push(element);
        prev = element;
      } else if (stack.length > 0 && element === stack[stack.length - 1] + 1) {
        while (stack.length > 0 && element === stack[stack.length - 1] + 1) {
          secondQueue.push(stack.pop());
        }
        stack.push(element);
      } else {
        stack.push(element);
      }
    }
  
    while (stack.length > 0) {
      secondQueue.push(stack.pop());
    }
  
    return isSorted(secondQueue) ? "Yes" : "No";
  }
  
  function isSorted(queue) {
    for (let i = 0; i < queue.length - 1; i++) {
      if (queue[i] > queue[i + 1]) {
        return false;
      }
    }
    return true;
  }
  
// Examples :

// Example - 01 :
  const queue1 = [5, 1, 2, 3, 4];
  console.log(checkIncreasingOrder(queue1)); // Output: Yes

// Example - 02 :
  const queue2 = [5, 1, 2, 6, 3, 4];
  console.log(checkIncreasingOrder(queue2)); // Output: No
  