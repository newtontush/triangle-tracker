function findout(){
var base = document.getElementById("oneSide").value;
var height = document.getElementById("twoSide").value;
var hypotenuse = document.getElementById("threeSide").value;
var one = parseInt(base);
var two = parseInt(height);
var three = parseInt(hypotenuse);
if (one + two <= three || one + three <= two || two + three <= one) {
    alert("The values cannot form a triangle");
}else if (one === two && one === three && three === two) {
    alert("This is a equilateral triangle");
}else if (one != two && one != three && two != three) {
    alert("The triangle is scalene");
}else{
    alert("This is an isoceles triangle");
}
}