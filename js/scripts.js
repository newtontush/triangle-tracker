var one = prompt("Enter value of one side of trangle");
var two = prompt("Enter value of another side of triangle");
var three = prompt("Enter value of third side of triangle");
if (one + two <= three || one + three <= two || two + three <= one) {
    alert("The values cannot form a triangle");
}else if (one === two && one === three && three === two) {
    alert("This is a equilateral triangle");
}else if (one != two && one != three && two != three) {
    alert("The triangle is scalene");
}else{
    alert("This is an isoceles triangle");
}