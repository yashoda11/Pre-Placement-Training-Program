function isConsonant(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return (
      char >= 'a' &&
      char <= 'z' &&
      !vowels.includes(char)
    );
  }
  
  function countConsonants(str) {
    if (str.length === 0) {
      return 0;
    }
  
    const firstChar = str[0].toLowerCase();
    const countRest = countConsonants(str.slice(1));
    return (isConsonant(firstChar) ? 1 : 0) + countRest;
  }
  
  var str = 'abc de';
  var consonantCount = countConsonants(str);
  console.log(`
  The Number of Consonants present in the given string "${str}" is : ${consonantCount}.
  `);

  var str = 'geeksforgeeks portal';
  var consonantCount = countConsonants(str);
  console.log(`
  The Number of Consonants present in the given string "${str}" is : ${consonantCount}.
  `);