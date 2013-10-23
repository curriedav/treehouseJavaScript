// // JavaScript Functions

// console.log("Time to work on some functions, David.");

// function sayHello (name, greeting) {
// 	if (typeof name === 'undefined') {
// 		return 0;
// 	}
// 	if (typeof greeting === 'undefined') {
// 		greeting = "Hello";
// 	}
// 	console.log(greeting + " " + name);
// }

// sayHello("David", "Greetings");
// sayHello("David");









// var color = 'black';
// var number = 1;

// function showColor () {
// 	var color = 'green';
// 	number = 2;
// 	shape = "trapezoid"

// 	console.log('Show color', color);
// 	console.log('Show number', number);
// 	console.log('Show shape', shape);
// }


// showColor();

// console.log('Global color', color);
// console.log('Global number', number);
// console.log('Global shape', shape);





var button = document.getElementById('action');
var input = document.getElementById('text_field');

button.addEventListener('click', function () {
	console.log('clicked');
});


button.addEventListener('click', function () {
	console.log('Other click');
	input.setAttribute('value', Math.random());
});






















