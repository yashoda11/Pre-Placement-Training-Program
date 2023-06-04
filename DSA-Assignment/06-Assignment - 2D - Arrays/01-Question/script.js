var reconstructPermutation = function (s) {
    let low = 0;
    let high = s.length;
    const perm = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === 'I') {
        perm.push(low);
        low++;
      } else if (s[i] === 'D') {
        perm.push(high);
        high--;
      }
    }
    perm.push(low);
    return perm;
  }
  const s = "IDID";
  console.log(reconstructPermutation(s));