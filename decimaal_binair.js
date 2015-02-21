var radio0 = document.getElementById('dec-bin')
var radio1 = document.getElementById('dec-bin').checked
var radio2 = document.getElementById('bin-dec')
var radio3 = document.getElementById('bin-dec').checked

var number = document.getElementById()

function decimalBinaryHandler () {
	var radioDecimalToBinary = document.getElementById('dec-bin');
	var radioBinaryToDecimal = document.getElementById('bin-dec');

	if (radioBinaryToDecimal.checked) {
		alert('hello');
	}
}

function isEven(input){
    if(input % 2 === 0){
        return true;
    }
    return false;
}

function decimalToBinary(input){
    var decimal = input;
    var binary = "_";
    
    while(true){
        if(decimal === 0){
            return binary;
        }
        if(isEven(decimal)){
            binary = "0" + binary;
        }
        else if(!isEven(decimal)){
            binary = "1" + binary;
            decimal--;
        }
        
    }
}