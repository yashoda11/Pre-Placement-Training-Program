function reverseNumber(number) {
    const stack = [];
    let reversedNumber = 0;
  
    // Push each digit of the number onto the stack
    while (number > 0) {
      const digit = number % 10;
      stack.push(digit);
      number = Math.floor(number / 10);
    }
  
    // Pop digits from the stack and construct the reversed number
    let placeValue = 1;
    while (stack.length > 0) {
      const digit = stack.pop();
      reversedNumber += digit * placeValue;
      placeValue *= 10;
    }
  
    return reversedNumber;
  }
  
// Examples :

//Example - 01 :
  const number1 = 365;
  console.log(`
  Using Stack, The Reverse of a given Number ${number1} is : ${reverseNumber(number1)} .
  `);                                             // Output: 563

//Example - 02 :
  const number2 = 6899;
  console.log(`
  Using Stack, The Reverse of a given Number ${number2} is : ${reverseNumber(number2)} .
  `);                                            // Output: 9986
  