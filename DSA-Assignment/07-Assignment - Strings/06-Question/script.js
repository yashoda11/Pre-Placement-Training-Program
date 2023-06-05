var isGoalExistsInString = function (s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    let s1 = s + s;
    return s1.includes(goal);
};
var s = "abcde";
var goal = "cdeab";
console.log(isGoalExistsInString(s, goal));
