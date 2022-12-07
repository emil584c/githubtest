var number = 6600;
 
//The percent that we want to get.
//i.e. We want to get 50% of 120.
var percentToGet = 25;
 
//Calculate the percent.
var percent = (percentToGet / 100) * number;
document.getElementById("moms").innerHTML = percent;

console.log (percent);

