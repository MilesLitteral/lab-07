var cake;

function uInput(input)
{
  	var thousands = (input-(input % 1000))/1000;
    var hundreds = Math.floor((input%1000)/100);
    var tens = Math.floor((input % 100)/10);
    var ones = (input % 10);

    alert(thousands + " Thousands\n" + hundreds + " Hundreds\n" + tens + " Tens\n" + ones + " Ones\n");
}

$(document).ready(function() {
	cake = prompt("Input a Variable");
	uInput(cake);
})