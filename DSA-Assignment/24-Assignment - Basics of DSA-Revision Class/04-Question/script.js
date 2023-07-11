var groupAnagrams = function (strs) {
    const anagramMap = new Map();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (anagramMap.has(sortedStr)) {
            anagramMap.get(sortedStr).push(str);
        } else {
            anagramMap.set(sortedStr, [str]);
        }
    }

    return Array.from(anagramMap.values());
};



// Testing Examples :

// Example - 01 :

var strs = ["eat","tea","tan","ate","nat","bat"];
console.log(`\nExample - 01 :
For the Given Array of string : `);
console.log(strs);
console.log("The Group Anagram is :");
console.log(groupAnagrams(strs));

// Example - 02 :

var strs = [""];
console.log(`\nExample - 02 :
For the Given Array of string : `);
console.log(strs);
console.log("The Group Anagram is :");
console.log(groupAnagrams(strs));

// Example - 03 :

var strs = ["a"];
console.log(`\nExample - 03 :
For the Given Array of string : `);
console.log(strs);
console.log("The Group Anagram is :");
console.log(groupAnagrams(strs));
