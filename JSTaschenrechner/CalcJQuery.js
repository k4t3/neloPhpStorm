$(document).ready(function() {

	var sheet = $("#sheet");
	var display = $('#display');

	$(".click").click(function(){
		display.val(display.val()+ $(this).html());
		sheet.val(sheet.val()+ $(this).html());
	});

	$(".evalu").click(function() {
		var result = eval(display.val());
		var result2 = eval(sheet.val());
		if ( result && result2 == '' || result && result2 === null){
			alert("Bitte eine Zahl eingeben");
		}else{
			display.val(result);
			sheet.val(result2);
		}
	});

	$(".clear").click(function() {
		display.val("");
		sheet.val("");
	});

	$(".quad").click(function() {
		var quad = Math.pow(parseFloat(display.val()),2);
		display.val(display.val()+"=" + quad);
		sheet.val(sheet.val()+"=" + quad);
	});

	$(".sqrt").click(function() {
		var radical = Math.sqrt(parseFloat(display.val()),2);
		display.val(display.val()+"=" + radical);
		sheet.val(sheet.val()+"=" + radical);
	});
});




