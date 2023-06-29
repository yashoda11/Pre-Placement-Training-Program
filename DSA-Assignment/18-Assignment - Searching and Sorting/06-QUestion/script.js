var findMinArrowShots = function (points) {
    if (points.length === 0) {
      return 0;
    }
  
    points.sort((a, b) => a[1] - b[1]);
  
    let end = points[0][1];
    let arrows = 1;
  
    for (let i = 1; i < points.length; i++) {
      if (points[i][0] > end) {
        end = points[i][1];
        arrows++;
      } else {
        end = Math.min(end, points[i][1]);
      }
    }
  
    return `For the given array point elements, The Minimum Number of Arrows that must be shot to burst all balloons are : ${arrows}
    `;

  };
  

// Testing Examples :

// Example - 01 :
  var points = [[10, 16], [2, 8], [1, 6], [7, 12]];
  console.log("Example - 01 :");
  console.log(findMinArrowShots(points));                // Output: 2
  

// Example - 02 :
  var points = [[1, 2], [3, 4], [5, 6], [7, 8]];
  console.log("Example - 02 :");
  console.log(findMinArrowShots(points));                // Output: 4
  

// Example - 03 :
  var points = [[1, 2], [2, 3], [3, 4], [4, 5]];
  console.log("Example - 03 :");
  console.log(findMinArrowShots(points));                // Output: 2
  