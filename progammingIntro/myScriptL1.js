//Lesson 1 of Intro to Programming
console.log("Hello from myScript.js");
console.log("Hello, again!"); //This is not needed.


// Establishes the firstName variable with a prompt
var firstName = prompt("What is your name?");
alert("Hello, " + firstName + ".");

/*
// Re-defines the firstName variable
 firstName = "Koby"; 
*/

console.log("The user's name is " + firstName + ".");


// Experimenting with a tip-calculator, and parseFloat versus parseInt
var billAmount = parseFloat(prompt("How much was your bill today?"));

var tipPercentage = parseFloat(prompt("What percentage of the bill would you like to type?"));

if (tipPercentage > 1) {
	var tipAmount = billAmount * (tipPercentage/100);
	var totalBillAmount = tipAmount + billAmount;
	alert ("Okay, " + firstName + ". The tip amount is " + tipAmount + ", and the total bill is " + totalBillAmount + ".");
}
else {
	var tipAmount = billAmount * (tipPercentage);
	var totalBillAmount = tipAmount + billAmount;
	alert ("Okay, " + firstName + ". The tip amount is " + tipAmount + ", and the total bill is " + totalBillAmount);
};