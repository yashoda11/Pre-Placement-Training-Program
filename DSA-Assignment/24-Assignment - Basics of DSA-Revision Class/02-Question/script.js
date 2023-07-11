var lengthOfLongestSubstring = function (s) {
    let maxLength = 0;
    let start = 0;
    let charMap = {};

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (charMap[currentChar] >= start) {
            start = charMap[currentChar] + 1;
        }

        charMap[currentChar] = end;
        const currentLength = end - start + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;

};



// Testing Examples :

// Example - 01 :

var s = "abcabcbb";
console.log(`
Example - 01 :
For the given String "${s} , 
The Length of The Longest Substring Without Repeating Characters is : ${lengthOfLongestSubstring(s)}.
`);

// Example - 02 :

var s = "bbbbb";
console.log(`
Example - 02 :
For the given String "${s} , 
The Length of The Longest Substring Without Repeating Characters is : ${lengthOfLongestSubstring(s)}.
`);

// Example - 03 :

var s = "pwwkew";
console.log(`
Example - 03 :
For the given String "${s} ,
The Length of The Longest Substring Without Repeating Characters is : ${lengthOfLongestSubstring(s)}.
`);