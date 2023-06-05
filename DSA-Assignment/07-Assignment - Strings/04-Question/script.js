var reverseWords = function(s) {
    const words = s.split(" ");
    
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].split("").reverse().join("");
    }
    result = words.join(" ");
    return `
    The Reverse of a given String "${s}" is : ${result}
    `;
  };
  
  var s = "Let's take LeetCode contest";
  console.log(reverseWords(s));
  