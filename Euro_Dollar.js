function valutaCalculator () {
	var dollarkoers = parseFloat(document.getElementById('dollarkoers').value);
	var omrekengetal = parseFloat(document.getElementById('omrekengetal').value);
	var uitkomst;
	if (document.getElementById("dollar-euro").checked) {
		uitkomst = omrekengetal/dollarkoers;
		alert('$'+omrekengetal + ' is €' + uitkomst.toFixed(2) + ' waard.');
	}
	if (document.getElementById("euro-dollar").checked) {
		uitkomst = omrekengetal*dollarkoers;
		alert('€' + omrekengetal + ' is $' + uitkomst.toFixed(2) + ' waard.');
	}
}
