$(document).ready(function(){
	var getInsertedIndex;
	var tempValues = [];
	var contacts = [];
	var lastEditIndex = 0;
	var formular = $('.form-horizontal .form-group');
	$('#update').hide();


	$(".form-horizontal").submit(function(event){
		event.preventDefault();
		var result = '';
		$(this).find('input[type=text]').each(function(){
			if($(this).val() == ''){
				result += 'Fehler\n';
				this.style.borderColor="#ff0000";
			}
			if($(this).attr("name") == "number" || $(this).attr("name") == "mobile"){
				result += valNumber($(this).val());
			}
			if($(this).attr("name") == "email"){
				if($(this).val() !=''){
					result += valEmail($(this).val());
				}
			}
			if(result == '' && result == 0 ){
				this.style.borderColor="#dcdcdc";
				tempValues[$(this).attr('name')] = $(this).val();
			} else {
				alert(result);
			}
		});

		if(result == "" ){
			getInsertedIndex = contacts.push({
				firstName: tempValues['firstName'],
				lastName: tempValues['lastName'],
				address: tempValues['address'],
				number:tempValues['number'],
				mobile:tempValues['mobile'],
				email:tempValues['email']
			});
			fillTable();
		}

	});
	function fillTable() {
		$('#tbl tbody').append(
			"<tr class='row-"+getInsertedIndex+"'>"
				+"<td class='index'>"+getInsertedIndex+"</td>"
				+"<td class='firstname'>"+tempValues['firstName']+"</td>"
				+"<td class='lastname'>"+tempValues['lastName']+"</td>"
				+"<td class='address'>"+tempValues['address']+"</td>"
				+"<td class='number'>"+tempValues['number']+"</td>"
				+"<td class='mobile'>"+tempValues['mobile']+"</td>"
				+"<td class='email'>"+tempValues['email']+"</td>"
				+"<td><input  type='button' class='btn btn-default btn-"+getInsertedIndex+"' value='löschen' dataset-id='"+getInsertedIndex+"'></td>"
				+"<td><input  type='button' class='btn btn-default btn-edit-"+getInsertedIndex+"' value='bearbeiten' dataset-id='"+getInsertedIndex+"'></td>"
				+"</tr>"
		);
		registerButtons(getInsertedIndex);
	}

	function registerButtons(index) {
		$(".btn-"+index).click(function(){
			var removeFromArray = $(this).attr("dataset-id");
			$('#tbl tbody').html("");
			contacts.splice(removeFromArray-1,1);
			updateIndex();
		});
		$('.btn-edit-'+index).click(function(){
			var editIndex=$(this).attr("dataset-id")-1;
			formular.find('input').each(function(){
				if ($(this).attr('name') == 'firstName') {
					$(this).val(contacts[editIndex].firstName);
				}
				if ($(this).attr('name') == 'lastName') {
					$(this).val(contacts[editIndex].lastName);
				}
				if ($(this).attr('name') == 'address') {
					$(this).val(contacts[editIndex].address);
				}
				if ($(this).attr('name') == 'number') {
					$(this).val(contacts[editIndex].number);
				}
				if ($(this).attr('name') == 'mobile') {
					$(this).val(contacts[editIndex].mobile);
				}
				if ($(this).attr('name') == 'email') {
					$(this).val(contacts[editIndex].email);
				}
				lastEditIndex = editIndex+1;
				$('#addContact').hide();
				$('#update').show();
			})
		})
	}

	function valNumber(numValue){
		if ($.isNumeric(numValue)){
			return "";
		} else {
			return 'Geben Sie ihre Telefonnummer bitte korrekt ein\n';
		}
	}

	function valEmail(emailValue){
		var at = emailValue.indexOf('@');
		var dot = emailValue.lastIndexOf('.');
		if (at < 1 || dot < at + 2 || dot + 2 >= emailValue.length) {
			return "Geben Sie ihre Email Adresse bitte korrekt ein\n" ;
		} else {
			return '';
		}
	}

	$('#update').click(function(){
		var firstName = $('input[name="firstName"]')[0];
		var lastName = $('input[name="lastName"]')[0];
		var address = $('input[name="address"]')[0];
		var number = $('input[name="number"]')[0];
		var mobile = $('input[name="mobile"]')[0];
		var email = $('input[name="email"]')[0];

		$('.row-'+lastEditIndex+' td.firstname').text($(firstName).val());
		$('.row-'+lastEditIndex+' td.lastname').text($(lastName).val());
		$('.row-'+lastEditIndex+' td.address').text($(address).val());
		$('.row-'+lastEditIndex+' td.number').text($(number).val());
		$('.row-'+lastEditIndex+' td.mobile').text($(mobile).val());
		$('.row-'+lastEditIndex+' td.email').text($(email).val());

		contacts[lastEditIndex-1].firstName = $(firstName).val();
		contacts[lastEditIndex-1].lastName = $(lastName).val();
		contacts[lastEditIndex-1].address = $(address).val();
		contacts[lastEditIndex-1].number = $(number).val();
		contacts[lastEditIndex-1].mobile = $(mobile).val();
		contacts[lastEditIndex-1].email = $(email).val();

		$('#addContact').show();
		$(this).hide();
	});
	function updateIndex() {
		$.each(contacts, function(index,value){
			index = index+1;

			$('#tbl tbody').append(
				"<tr class='row-"+index+"'>"
					+"<td class='index'>"+index+"</td>"
					+"<td class='firstname'>"+this.firstName+"</td>"
					+"<td class='lastname'>"+this.lastName+"</td>"
					+"<td class='address'>"+this.address+"</td>"
					+"<td class='number'>"+this.number+"</td>"
					+"<td class='mobile'>"+this.mobile+"</td>"
					+"<td class='email'>"+this.email+"</td>"
					+"<td><input  type='button' class='btn btn-default btn-"+index+"' value='löschen' dataset-id='"+index+"'></td>"
					+"<td><input  type='button' class='btn btn-default btn-edit-"+index+"' value='bearbeiten' dataset-id='"+index+"'></td>"
					+"</tr>"
			);
			registerButtons(index);
		});
	}
	$('#cancel').click(function(){
			$(this).closest('form').find('input[type=text],button').val('');
			this.style.borderColor="#dcdcdc";
			$('#addContact').show();
			$('#update').hide();
		});

});
