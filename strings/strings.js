/* Javascript Strings */

var name = "David";
console.log(name);

var name2 = 'David';
console.log(name2);

var statement = "This is David's string.";
console.log(statement);

var statement = "This is David's string.";
console.log(statement);

var statement2 = 'He said "this is awesome!';
console.log(statement2);

var statement3 = "He said \"this is David's string.\"";
console.log(statement3);

var path = "C:\\\\folder\\myfile.txt";
console.log(path);

var multiLine = "This is line one\n\tThis is line two\n\t\tThis is line three";
console.log(multiLine);

console.log(multiLine.length);

console.log(multiLine[5]);
console.log(multiLine.charAt(5));
console.log(multiLine.substr(8, 4).toUpperCase());

var first = "Hello";
var second = "hello";

if (first.toLowerCase() === second.toLowerCase()) {
	console.log("These strings are equal! \t :)");
} else { 
	console.log("These strings are not equal. \t :(");
};

function compare(a, b) {
	console.log(a + " < " + b, a < b);
}

compare('a', 'b');

compare('a', 'A');

compare('apples', 'oranges');

compare('apples', 'applications');

compare('app', 'apples');

compare('apples', 'app');

compare('hello', 'hello');

