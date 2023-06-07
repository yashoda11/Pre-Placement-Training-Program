var compressCharacters = function (chars) {
    let writeIndex = 0;
    let count = 1;
  
    for (let i = 0; i < chars.length; i++) {
      if (i + 1 === chars.length || chars[i] !== chars[i + 1]) {
        // Current character is different from the next character or it's the last character
        chars[writeIndex++] = chars[i];
  
        if (count > 1) {
          const countString = count.toString();
  
          for (let j = 0; j < countString.length; j++) {
            chars[writeIndex++] = countString.charAt(j);
          }
        }
  
        count = 1;
      } else {
        // Current character is the same as the next character
        count++;
      }
    }
  
    return writeIndex;
  }
  
  const chars = ["a", "a", "b", "b", "c", "c", "c"];
  const compressedLength = compressCharacters(chars);
  console.log(`The Length of the new arrays is : ${compressedLength}`);
  console.log(`The New Array is : `);
  console.log(chars.slice(0, compressedLength));