var cake;

function uInput(input)
{
  	if(input == "Yes")
  	{
  		alert("Have some cake");
  		return 0;
  	}
  	if(input == "No")
  	{
  		alert("Perhaps some other time");
  		return 0;
  	}
  	else
  	{
  		alert("No cake for you");
  		return 0;
  	}
}


$(document).ready(function() {
	cake = prompt("Do you want some cake?");
	uInput(cake);
})