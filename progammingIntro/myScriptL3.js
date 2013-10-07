//Lesson 3 of Intro to Programming
console.log("Before");


//Arrays
var friends = ["Anna", "Frankie", "Cory", "Casey", "Julia", "Kristen"];

console.log(friends)

console.log(friends.length);

var friendNumber = 1;

console.log(friends[friendNumber]);

for (var i = 0; i < friends.length; i++) {
	console.log(friends[i]);
};


//Objects
var me = {
	first_name: "David",
	last_name: "Currie",
	"Employee Number": 1,
}

console.log(me.first_name);
console.log(me.last_name);
console.log(me["Employee Number"]);

var key = "first_name";
console.log(me[key]);

me.first_name = "Dave";
console.log(me.first_name); 

console["log"]("After");