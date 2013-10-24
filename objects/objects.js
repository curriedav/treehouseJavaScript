// Objects

// var jim = {
// 	name: "Jim", 
// 	skills: ["Javascript", "Ruby", "Dancer"],
// 	"favorite color": "green",
// 	greet: function () {
// 		console.log("I am", this.name);
// 	}
// };

// console.log(jim.skills);
// console.log(jim["favorite color"]);

// jim.name = "James"

// jim.greet();

var personPrototype = {
	name: "Anonymous",
	greet: function (theirName, mood) {
		theirName = theirName || "you";
		mood = mood || "good";

		console.log("Hello,", theirName, 
					"I am", this.name, 
					"and I am in a", mood, 
					"mood!");

	},
	species: "Homo Sapien",

}

function Person (name) {
	this.name = name;
}

Person.prototype = personPrototype;

jim = new Person("Jim");
