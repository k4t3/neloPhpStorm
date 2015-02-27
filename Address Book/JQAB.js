$(document).ready(function(){



var contact= {
	firstName: "",
	lastName:"" ,
	address: "",
	number:"" ,
	mobile: "",
	email:""
};

var $contact =$(contact);

var contacts = $.makeArray(document.geetElementsByTagName('tbody')[0]);
	contacts.push();


	function val() {
		var result = '';
		var formular = $('form.form-horizontal');

		$('form.form-horizontal .form-group. input[type=text]').each(function(){
			if (this.val() == '') {
				result = 'Fehler\n';
			}
			if (xyz){

			}
		});

		if (formular.firstName.value == '') {
			result += 'Fehler\n';
		}
		if (formular.lastName.value == '') {
			result += 'Fehler\n';
		}
		if (formular.address.value == '') {
			result += 'Fehler\n';
		}
		if (formular.number.value == '') {
			result += valNumber(formular.number.value);
		}
		if (formular.mobile.value == '') {
			result += valNumber(formular.mobile.value);
		}
		if (formular.email.value != '') {
			result += valEMail(formular.email.value);
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
			//contacts.push(contact);
			//for(var i =0; i<contacts.length; i++){
			//writeToList(contact);
			//}
			writeToList(contact);
		} else {
			alert(result);
		}

		return false;
	}

	$.val = function() {

		var $result ='';
		if($('.form-horizontal').firstName.value =''){
			$result += 'Fehler\n';
		}
	}
});

