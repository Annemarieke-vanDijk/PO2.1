function income(uurloon, uren, minuten)
	var uurloon = document.getElementById("uurloon");
	var uren = document.getElementById("uren");
	var minuten = document.getElementById("minuten");

	var income = uurloon * (uren + minuten*1/60)