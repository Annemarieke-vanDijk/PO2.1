var radio0 = document.getElementById('dollar-euro');
var radio1 = document.getElementById('dollar-euro').checked;
var radio2 = document.getElementById('euro-dollar');
var radio3 = document.getElementById('euro-dollar').checked;
var dollarkoers = document.getElementById('dollarkoers');
var omrekengetal = document.getElementById('omrekengetal');

function euroToDollar() {
	return dollarkoers * omrekengetal;
}


function dollarToEuro() {
	return omrekengetal / dollarkoers;
}

function valutaCalculator () {
	// body...
	alert("Hello World");
}