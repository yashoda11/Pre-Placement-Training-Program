function backspaceCompare(s, t) {
    function processString(string) {
        const stack = [];

        for (let char of string) {
            if (char !== '#') {
                stack.push(char);
            } else {
                stack.pop();
            }
        }

        return stack.join('');
    }

    const processedS = processString(s);
    const processedT = processString(t);

    return processedS === processedT;
}

var s = "ab#c";
var t = "ad#c";
console.log(backspaceCompare(s, t));