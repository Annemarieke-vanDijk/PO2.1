function euroDollar() {
	var resultaat= parseFloat(document.FormRekenmachine.getal1.value) 
	parseFloat(document.FormRekenmachine.getal2.value);
	document.getElementById('output').innerHTML = resultaat;
}
//hier staat in aangegeven hoe de site de 2 getallen moet vermenigvuldigen.
function dollarEuro() {
	var resultaat= parseFloat(document.FormRekenmachine.getal1.value) 
	* parseFloat(document.FormRekenmachine.getal2.value);
	document.getElementById('output').innerHTML = resultaat;
}
//Bij elke function gelden precies dezelfde regels, afgezien van +, -, * of /, dus herhaling van commentaar is niet nodig