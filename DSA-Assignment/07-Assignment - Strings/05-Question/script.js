var reverseStr = function(s, k) {
    let result = "";
    
    for (let i = 0; i < s.length; i += 2 * k) {
      const substring = s.substring(i, i + k);
      const reversedSubstring = substring.split("").reverse().join("");
      result += reversedSubstring + s.substring(i + k, i + 2 * k);
    }
    
    return result;
  };
  
  var s = "abcdefg";
  var k = 2;
  console.log(reverseStr(s, k));
  