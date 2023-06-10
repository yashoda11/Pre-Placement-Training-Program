function checkEquality(s)
{
	return (s.charAt(0) == s.charAt(s.length - 1));
}
function countSubstringWithEqualEnds(s)
{
	var result = 0;
	var n = s.length;

	// Starting point of substring
	for (var i = 0; i < n; i++)

	// Length of substring
	for (var len = 1; len <= n-i; len++)

		// Check if current substring has same
		// starting and ending characters.
		if (checkEquality(s.substring(i, i + len)))
			result++;

	return result;
}

//Examples :

//Example - 01 :
	var s = "abcab";
    console.log(`
    The Count of all contiguous substrings starting and ending with same character of given string "${s}" is : ${countSubstringWithEqualEnds(s)}
    `);

//Example - 02 :
    var s = "aba";
    console.log(`
    The Count of all contiguous substrings starting and ending with same character of given string "${s}" is : ${countSubstringWithEqualEnds(s)}
    `);