var mary ={
	firstName: "Mary",
	lasName: "Stuart",
	address: "Linlithgow Palace, Scotland",
	number: "12345",
	mobile: "6789",
	email: "mary@stuart.com"
};
var elizabeth ={
	firstName: "Elizabeth",
	lasName: "Tudor",
	address: "Greenwich, London",
	number: "0987",
	mobile: "654321",
	email: "elizabeth@tudor.com"
};
var william ={
	firstName: "William",
	lasName: "Shakespeare",
	address: "Stratford-upon-Avon;, Britain",
	number: "365654",
	mobile: "437865",
	email: "william@shakespeare.com"
}

var contacts= [mary, elizabeth, william];

function list(){
	for(var i =0; i<contacts.length; i++){
		console.log(contacts[i]);
	}
};

function search(lastName){
	var contactsLength = contacts.length;
	for(var i=0; i<contactsLength; i++){
		if(lastName === lastName){
			console.log(contacts[i]);
		}
	}
};

function add(){
	contacts[contacts.length]={
		firstName: prompt("Vorname"),
		lastName: prompt("Nachname"),
		address: prompt("Adresse"),
		number: prompt("Telefonnummer"),
		mobile: prompt("Mobil"),
		email: prompt("Email"),
		document.getElementbyId('')
	}

}
//function add() {
//	var clone = document.getElementById('adbook').cloneNode(true);
//	clone.setAttribute('id');
//
//	var x = document.getElementById("adbook");
//	x.appendChild(clone);
//}

function del(){

}

list(contacts);
search("Mary");
add("Oliver", "Cromwell", "oliver@cromwell.com", "347289");