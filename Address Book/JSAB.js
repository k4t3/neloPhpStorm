var contacts = new Array();
var lastEditIndex = 0;

document.getElementById('update').style.display="none";

function val() {
	var result = '';
	var formular = document.formular;
	if (formular.firstName.value == '') {
		formular.firstName.style.borderColor="#ff0000";
		result += 'Geben Sie bitte ihren Vornamen ein\n';
	}else{
		formular.firstName.style.borderColor="#dcdcdc";
	}
	if (formular.lastName.value == '') {
		formular.lastName.style.borderColor="#ff0000";
		result += 'Geben Sie bitte ihren Nachnamen ein\n';
	}else{
		formular.lastName.style.borderColor="#dcdcdc";
	}
	if (formular.address.value == '') {
		formular.address.style.borderColor="#ff0000";
		result += 'Geben Sie bitte ihre Adresse ein\n';
	}else{
		formular.address.style.borderColor="#dcdcdc";
	}
	if (formular.number.value == '') {
		formular.number.style.borderColor="#ff0000";
		result += valNumber(formular.number.value);
	}else{
		formular.number.style.borderColor="#dcdcdc";
	}
	if (formular.mobile.value == '') {
		formular.mobile.style.borderColor="#ff0000";
		result += valNumber(formular.mobile.value);
	}else{
		formular.mobile.style.borderColor="#dcdcdc";
	}
	if (formular.email.value != '') {
		formular.email.style.borderColor="#dcdcdc";
		result += valEMail(formular.email.value);
	}else{
		formular.email.style.borderColor="#ff0000";
		result += 'Geben Sie bitte ihre Email-Adresse ein\n';
	}
	if (result == '') {
		var contact = {
			firstName: formular.firstName.value,
			lastName: formular.lastName.value,
			address: formular.address.value,
			number: formular.number.value,
			mobile: formular.mobile.value,
			email: formular.email.value
		}
		writeToList(contact);
	} else {
		alert(result);
	}
	return false;
}

function writeToList(contact) {
	var tableRef = document.getElementById('tbl').getElementsByTagName('tbody')[0];
	var newRow = tableRef.insertRow(tableRef.rows.length);

	var getInsertedIndex = contacts.push(contact);
	newRow.id = 'row-'+getInsertedIndex;

	var newCell = newRow.insertCell(0);
	var newText = document.createTextNode(tableRef.rows.length)
	newCell.appendChild(newText);

	newCell = newRow.insertCell(1);
	newText = document.createTextNode(contact.firstName)
	newCell.appendChild(newText);

	newCell = newRow.insertCell(2);
	newText = document.createTextNode(contact.lastName)
	newCell.appendChild(newText);

	newCell = newRow.insertCell(3);
	newText = document.createTextNode(contact.address)
	newCell.appendChild(newText);

	newCell = newRow.insertCell(4);
	newText = document.createTextNode(contact.number)
	newCell.appendChild(newText);

	newCell = newRow.insertCell(5);
	newText = document.createTextNode(contact.mobile)
	newCell.appendChild(newText);

	newCell = newRow.insertCell(6);
	newText = document.createTextNode(contact.email)
	newCell.appendChild(newText);

	newCell = newRow.insertCell(7);
	var newButton = document.createElement("input");
	newButton.type="button";
	newButton.className = "btn btn-default";
	newButton.value="löschen";
	newButton.dataset.id = getInsertedIndex;
	newButton.onclick=function(){
		alert("Möchten Sie diesen Kontakt wirklich löschen!");
		var removeFromArray = this.dataset.id;
		document.getElementById('row-'+removeFromArray).remove();
		contacts.splice(removeFromArray-1,1);
		updateIndex();
	};
	newCell.appendChild(newButton);

	newCell = newRow.insertCell(8);
	var editButton = document.createElement("input");
	editButton.type="button";
	editButton.className = "btn btn-default";
	editButton.value="bearbeiten";
	editButton.dataset.id = getInsertedIndex;
	editButton.onclick=function(){
		var formular = document.formular;
		var editIndex = this.dataset.id - 1;
		formular.firstName.value = contacts[editIndex].firstName;
		formular.lastName.value = contacts[editIndex].lastName;
		formular.email.value = contacts[editIndex].email;
		formular.address.value = contacts[editIndex].address;
		formular.mobile.value = contacts[editIndex].mobile;
		formular.number.value = contacts[editIndex].number;
		lastEditIndex = editIndex+1;
		hideAddContact();
		document.getElementById('update').style.display="block";
	};
	newCell.appendChild(editButton);
}

function valEMail(emailValue) {
	var email = emailValue;
	var at = email.indexOf("@");
	var dot = email.lastIndexOf(".");
	if (at < 1 || dot < at + 2 || dot + 2 >= email.length) {
		return 'Geben Sie ihre Email Adresse bitte korrekt ein\n';
	} else {
		return '';
	}
}

function valNumber(numberValue) {
	if (!isNaN(numberValue)) {
		return 'Geben Sie ihre Telefonnummer bitte korrekt ein\n';
	} else {
		return '';
	}
}

function updateContact(){
	var currentRow = document.getElementsByTagName('tr')[lastEditIndex].getElementsByTagName('td');
	console.log(currentRow);
	//schreibt in die Tabelle
	currentRow[1].innerHTML = formular.firstName.value;
	currentRow[2].innerHTML = formular.lastName.value;
	currentRow[3].innerHTML = formular.address.value;
	currentRow[4].innerHTML = formular.number.value;
	currentRow[5].innerHTML = formular.mobile.value;
	currentRow[6].innerHTML = formular.email.value;


	//schreibt ins Array
	contacts[lastEditIndex-1].firstName = formular.firstName.value;
	contacts[lastEditIndex-1].lastName = formular.lastName.value;
	contacts[lastEditIndex-1].email = formular.email.value;
	contacts[lastEditIndex-1].address = formular.address.value;
	contacts[lastEditIndex-1].mobile = formular.mobile.value;
	contacts[lastEditIndex-1].number = formular.number.value;

	document.getElementById('addContact').style.display="block";
	document.getElementById('update').style.display="none";
	clearForm();

}

function updateIndex() {
	var tableRef = document.getElementById('tbl').getElementsByTagName('tbody')[0];
	var rows = tableRef.rows.length;
	for(var i=1; i<= rows; i++){
		var currentRow = document.getElementsByTagName('tr')[i];
		currentRow.firstElementChild.innerHTML = i;
		currentRow.getElementsByClassName('btn')[0].dataset.id = i;
		currentRow.getElementsByClassName('btn')[1].dataset.id = i;
	}
}

function hideAddContact() {
		document.getElementById('addContact').style.display="none";
}

function clearForm() {
	var obj = document.getElementsByName('formular')[0];
	for(var i =0; i<obj.elements.length;i++){
		if(obj.elements[i].type == 'text' || obj.elements[i] == 'button'){
			obj.elements[i].value = '';
		}
	}
}
