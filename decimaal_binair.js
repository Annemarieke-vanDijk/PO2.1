function decimalBinaryHandler () {
    var number = document.getElementById('number').value;
    //Voor het omrekenen van decimaal naar binair.
	if (document.getElementById('dec-bin').checked) {
        alert(decimalToBinary(number));
	}
	//voor het omrekenen van binair naar decimaal
    if (document.getElementById('bin-dec').checked) {
        alert(binaryToDecimal(number));
    }
}
/*Decimaal naar binair*/
function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    return false;
}

function decimalToBinary(decimal){
    decimal = parseInt(decimal);

    var binary = '';
    
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
        decimal = decimal/2;
    }
}
/*einde decimaal naar binair*/

/*binair naar decimaal*/
function binaryToDecimal(binaryNumber){
   binaryNumber = parseInt(binaryNumber,2);
   var decimalNumber = binaryNumber.toString(10);
   return decimalNumber;
 }
/*einde binair naar decimaal*/