//Lesson 4 of Intro to Programming
console.log("Before");

//alert("Hello");

var sayHello = function () {
	var message = "Hello";
	console.log(message + " World!");
}

var debug = function (message) {
	console.log("Debug", message);
}

var double_number = function (num) {
	return num * 2;
}

debug(double_number(7));

sayHello();

var x = 1;
debug("x has been set")

sayHello();

x += 10;
var y = 100;
debug("x has been increase, y has been set")

sayHello();