var topKFrequent = function (words, k) {

    const frequencyMap = new Map();

    for (const word of words) {

        frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
    }

    const sortedWords = Array.from(frequencyMap.keys()).sort((a, b) => {

        const frequencyDiff = frequencyMap.get(b) - frequencyMap.get(a);

        if (frequencyDiff === 0) {
            return a.localeCompare(b);
        } else {
            return frequencyDiff;
        }

    });

    return sortedWords.slice(0, k);

};



// Testing Examples :

// Example - 01 :

var words = ["i","love","leetcode","i","love","coding"];
var k = 2;
console.log(`
Example : - 01 :
For the given an Array of Strings Words :`);
console.log(words);
console.log(`and an Integer K ( ${k} ) ,`);
console.log(`
The K (${k} ) most Frequent Strings are : `);
console.log(topKFrequent(words, k));
console.log(`\n------------------------------------------`);


// Example - 02 :

var words = ["the","day","is","sunny","the","the","the","sunny","is","is"];
var k = 4;
console.log(`\nExample : - 02 :
For the given an Array of Strings Words :`);
console.log(words);
console.log(`and an Integer K ( ${k} ) ,`);
console.log(`
The K (${k} ) most Frequent Strings are : `);
console.log(topKFrequent(words, k));