function incomeCalc() {
	var uurloon = parseFloat(document.getElementById("uurloon").value);
	var uren = document.getElementById("uren").value;
	var minuten = document.getElementById("minuten").value;

	uren = parseInt(uren);
	minuten = parseInt(minuten);

	var income = uurloon * (uren + minuten / 60);
	alert('Uw inkomsten bedragen €' + income.toFixed(2));
}