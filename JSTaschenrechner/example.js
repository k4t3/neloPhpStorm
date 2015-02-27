

if (Ausdruck) {   // entweder
	Anweisung;
} else {           // oder
	Anweisung;
}

var alter;
if(alter >= 18) {
	alert("Volljähring");
} else {
	alert("noch nicht volljährig.");
}

var sum =0;
for(var i =0; i <=5; i++) {
	sum = sum +i;
}

for(Start; Stop; Änderung){
	Anweisung;
}

var sum = 0;
var i = 1;
while (i <= 5) {
	sum = sum + 1;
	i++;
}


while (Bedingung) {
	Anweisung;
}

for(Laufvariable in Objekt) {
	Anweisung;
}

var obj = {a:1, b:2, c:3};
for(var property in obj){
	console.log(property); // a b c
}
