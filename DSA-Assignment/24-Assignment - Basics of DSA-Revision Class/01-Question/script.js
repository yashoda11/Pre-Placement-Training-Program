var romanToIntiger = function (s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currValue = romanValues[s[i]];
        if (currValue >= prevValue) {
            result += currValue;
        } else {
            result -= currValue;
        }
        prevValue = currValue;
    }

    return result;
};



// Testing Examples :

// Example - 01 :

var s = "III";
console.log(`
After Converting the given Roman Number "${s}" into Integer. \nIts equivalent interger is : ${romanToIntiger(s)} . 
`);

// Example - 02 :

var s = "LVIII";
console.log(`
After Converting the given Roman Number "${s}" into Integer. \nIts equivalent interger is : ${romanToIntiger(s)} . 
`);