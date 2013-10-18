// JavaScript Arrays

/*
var x = ['some', 'extra', 'words', 'here'];

var y = ['a string', 3, true, ['a sub array', 2, 3, 4], 'treehouse', function(a, b){return a + b} ]

var z = [];

var a = new Array(50);


var my_array = ["Hello", 42, true, function (a) {return a * 2}];
var word = my_array[0];
var answer = my_array[1];
var doubler = my_array[3];
console.log(doubler(10));

my_array[1] = 144;
var new_answer = my_array[1];

my_array[my_array.length] = "an new string";
my_array[my_array.length] = "an new string";
my_array[my_array.length] = "an new string";

// my_array[14] = "an new string on a later index";
*/

//Methods

/*
var my_array = [2, 3, 4];
console.log(my_array.toString());

my_array.push(5);
console.log(my_array.toString());

var value = my_array.pop();
console.log(my_array.toString());

var value2 = my_array.pop();
console.log(my_array.toString());
*/

/*
var my_array = [2, 3, 4];
console.log(my_array.toString());

my_array.unshift(1);
console.log(my_array.toString());

var value = my_array.shift();
console.log(my_array.toString());
*/

// my_array = [10, 44, 32, 100, 0, 44, 3, 4];
// console.log(my_array.toString());
/*
//default sort sorts #s as strings.
my_array.sort();
console.log(my_array.toString());


my_array.sort(function (a, b) {
//the sign of the return determines the sorting order
	return a - b;
});
console.log(my_array.toString());

my_array.sort(function (a, b) {
//the sign of the return determines the sorting order
	return b - a;
});
console.log(my_array.toString());
*/

/*
my_array.sort(function (a, b) {
	return Math.random() - 0.5;
});
console.log(my_array.toString());
*/
/*
var x = [1, 2, 3];
var y = [4, 5, 6];
var z = x.concat(y);

console.log(x);

console.log(y);

console.log(z);
*/

/*
var my_array = [0, 1, 2, 3, 4, 5];

var result = my_array.slice(1, 5);

console.log(result);

var words = ["The", "cat", "wears", "a", "hat"];
var sentence = words.join(" ");
console.log(sentence);

sentence_array = sentence.split(' ');
console.log(sentence_array);
*/

//Splice

my_array = [0, 1, 2, 3, 4, 5, 6];

console.log(my_array.toString());

my_array.splice(2, 1, "two");


console.log(my_array.toString());




