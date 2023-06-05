function firstUniqChar(s) {
    const count = new Map();
    const n = s.length;
    for (let i = 0; i < n; i++) {
        const c = s.charAt(i);
        count.set(c, (count.get(c) || 0) + 1);
    }
    for (let i = 0; i < n; i++) {
        if (count.get(s.charAt(i)) === 1) {
            return i;
        }
    }
    return -1;
}

//Example - 01
var s1 = "leetcode";         
console.log(`
    The First Unique Character in a given string "${s1}" at the index of : ${firstUniqChar(s1)}.
`);

//Example - 02
var s2= "loveleetcode";      
console.log(`
    The First Unique Character in a given string "${s2}" at the index of : ${firstUniqChar(s2)}.
`);

//Example - 03
var s3 = "aabb";             
console.log(`
    The First Unique Character in a given string "${s3}" at the index of : ${firstUniqChar(s3)}.
`);




//    OUTPUT :
//    The First Unique Character in a given string "leetcode" at the index of : 0.
//    The First Unique Character in a given string "loveleetcode" at the index of : 2.
//    The First Unique Character in a given string "aabb" at the index of : -1.