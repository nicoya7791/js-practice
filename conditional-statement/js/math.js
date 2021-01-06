// declare program variables
var num1 = 0;
var num2=0;
var message="";
// announce the program
alert("Let's do some math!");

// collect numeric input
var num1 = prompt("Please type a number");
num1 = parseFloat(num1);
if(num1==0 || isNaN(num1)){
    alert("you need to enter a number higher than 0 or enter a number");
};
var num2 = prompt("Please type another number");
num2 = parseFloat(num2)
if(num2==0|| isNaN(num2)){
    alert("you need to enter a number higher than 0 or enter a number");
}
else{
// build an HTML message
var message = "<h1>Math with the numbers " + num2 + " and " + num2 + "</h1>";
message += num2 + " + " + num2 + " = " + (num1 + num2);
message += "<br>";
message += num1 + " * " + num2 + " = " + (num1 * num2);
message += "<br>";
message += num1 + " / " + num2 + " = " + (num1 / num2);
message += "<br>";
message += num1 + " - " + num2 + " = " + (num1 - num2);
  
// write message to web page
document.write(message);
}



