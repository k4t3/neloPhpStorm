function run(value) {
	document.frame.display.value += value;
	if (!isNaN(value) || value =='00'){
		document.getElementById('sheet').value +=  value;
	} else {
		document.getElementById('sheet').value +=  value+'\n';
	}
}
function runClear() {
	document.frame.display.value= "";
	document.getElementById('sheet').value = "";
}
function runPoint() {
	document.frame.display.value += ".";
}

function runSqrt() {
	document.frame.display.value += "sqrt";
	var radical = Math.sqrt(parseFloat(document.frame.display.value, 2));
	document.frame.display.value = radical;
	document.getElementById('sheet').value += 'sqrt'+' = '+ radical + '\n';
}

function quad() {
	var qu = Math.pow(parseFloat(document.frame.display.value),2);
	document.frame.display.value = qu;
	document.getElementById('sheet').value += '^2' +  ' = '+ qu + '\n';
}

function evalu() {
	var evalo = eval(document.frame.display.value);
	if (evalo == '' || evalo == null){
		alert("Bitte eine Zahl eingeben");
	} else {
		document.frame.display.value = evalo;
		document.getElementById('sheet').value += ' = '+ evalo + '\n';
	}

}

