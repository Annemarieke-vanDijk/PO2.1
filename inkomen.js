function incomeCalc() {
	var uurloon = parseFloat(document.getElementById("uurloon").value);
	var uren = document.getElementById("uren").value;
	var minuten = document.getElementById("minuten").value;

	var income = uurloon * (uren+minuten*1/60);
	alert('Uw inkomsten bedragen €' + income.toFixed(2));
}