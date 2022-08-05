function getAverage (assignment1, assignment2, assignment3) {
    var total = assignment1 + assignment2 + assignment3;
    var average = total / 3;
    return average;
}

var assignment1 = 60;
var assignment2 = 58;
var assignment3 = 59;

var myAverage = getAverage(assignment1, assignment2, assignment3);
console.log(myAverage);