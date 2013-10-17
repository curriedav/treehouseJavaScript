// JavaScript Numbers

console.log("Hello, David.");

// Whole Numbers
var a = 11;
	b = -123;

// Floating Point Numbers
var c = 1.5;
	d = 123.456789;


// Rounding Error with Floating Point Numbers
var e = 0.1;
	f = 0.2;

var result = e * f;

// Exponential Representation
var g = 1E6;

// Octal Numbers (WATCH OUT!!!)
var h = 020;
// but wait, that's not octal... Javascript literals leading w/ 0 produces confusing results.
// h = 019;

// Hexidecimal Values (RGB)
var i = 0xff3399;

// Pulling an integer out of a string ("number", base)
var j = parseInt("197", 10);
var k = parseInt("010111", 2);

//NAN
var l = parseInt("there are 23 people", 10);
if (isNaN(l)) {
	console.log("l is NaN.");
} else {
	console.log("l is not NaN.");
}

//Parse float
var m = parseFloat("123.456");

// Random numbers

var u = Math.floor(Math.random() * 10);

//Math.round
//Math.ceil

var y = Math.pow(2, 5);


