var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = "";
  
    while (i >= 0 || j >= 0 || carry !== 0) {
      const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
      const digitSum = digit1 + digit2 + carry;
      const digit = digitSum % 10;
      carry = Math.floor(digitSum / 10);
      result += digit;
      i--;
      j--;
    }
    addition = result.split("").reverse().join("");
  
    return `
    The Addition of two numbers represented as strings "${num1}" and "${num2}"  is : ${addition}
    `;
  };
  
  var num1 = "11";
  var num2 = "123";
  console.log(addStrings(num1, num2));