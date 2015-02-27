

function divideByThree (number) {
	var result = number / 3;
	console.log(result);
}

divideByThree(9); // 3


function Funktionsname (Parameter) {
	Anweisung;
}


var hello = new Function ('return "Hello, nice to meet you"');


var person = {};



var person = {
		name: Bob,
		age: 34
};

var name1 = person.name;
var age1 = person.age;


var name1 = person["name"];
var age1 = person["age"];


var person = new Object();

function Person(name, age) {
	this.name = name;
	this.age = age;
}

var family = new Array();
family[0] = new Person("Bob", 34);
family[1] = new Person("Mary", 29);
family[2] = new Person("Tim", 9);



var person1 = new Person("Bob", 34);
var person2 = new Person("Mary", 29);


console.log(family());


var bob = {
	name: "Bob",
	age: 34,
	email: "bob@example.com"
}

var mary = {
	name: "Mary",
	age: 29,
	email: "mary@example.com"
}

var contacts = new Array;
contacts[0] = bob;
contacts[1] = mary;


document.getElementById("textbox").style.display="none";

$("#textbox").hide();