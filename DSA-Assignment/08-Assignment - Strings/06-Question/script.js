function findAnagrams(s, p) {
    const result = [];
    const targetFreq = getCharFrequency(p);
    let windowFreq = new Array(26).fill(0);
    let windowStart = 0;
    let windowEnd = 0;
  
    while (windowEnd < s.length) {
      const char = s.charAt(windowEnd);
      windowFreq[char.charCodeAt() - 97]++;
  
      if (windowEnd - windowStart + 1 === p.length) {
        if (isAnagram(windowFreq, targetFreq)) {
          result.push(windowStart);
        }
  
        windowFreq[s.charAt(windowStart).charCodeAt() - 97]--;
        windowStart++;
      }
  
      windowEnd++;
    }
  
    return result;
  }
  
  function getCharFrequency(str) {
    const freq = new Array(26).fill(0);
  
    for (let i = 0; i < str.length; i++) {
      freq[str.charAt(i).charCodeAt() - 97]++;
    }
  
    return freq;
  }
  
  function isAnagram(freq1, freq2) {
    for (let i = 0; i < 26; i++) {
      if (freq1[i] !== freq2[i]) {
        return false;
      }
    }
  
    return true;
  }
  
  const s = "cbaebabacd";
  const p = "abc";
  const indices = findAnagrams(s, p);
  console.log(indices);