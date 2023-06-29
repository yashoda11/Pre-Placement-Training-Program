var mergeIntervals = function (intervals) {

    intervals.sort((a, b) => a[0] - b[0]);
  
    const merged = [intervals[0]];
  
    for (let i = 1; i < intervals.length; i++) {
        
      const currentInterval = intervals[i];
      const previousInterval = merged[merged.length - 1];
  
      if (currentInterval[0] <= previousInterval[1]) {

        previousInterval[1] = Math.max(currentInterval[1], previousInterval[1]);

      } else {

        merged.push(currentInterval);
        
      }
    }
  
    return merged;

  };
  


// Testing Examples :

// Example - 01 :
  const intervals1 = [[1,3],[2,6],[8,10],[15,18]];
  const mergedIntervals1 = mergeIntervals(intervals1);
  console.log("Example - 01 :");
  console.log(mergedIntervals1);                                // Output: [[1,6],[8,10],[15,18]]
  
  
// Example - 02 :
  const intervals2 = [[1,4],[4,5]];
  const mergedIntervals2 = mergeIntervals(intervals2);
  console.log("\nExample - 02 :");
  console.log(mergedIntervals2);                                // Output: [[1,5]]