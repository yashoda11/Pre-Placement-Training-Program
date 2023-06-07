function checkStraightLine(coordinates) {
    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];
    const initialSlope = (y2 - y1) / (x2 - x1);

    for (let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];
        const slope = (y - y1) / (x - x1);

        if (slope !== initialSlope) {
            return false;
        }
    }

    return true;
}
var coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
console.log(checkStraightLine(coordinates));