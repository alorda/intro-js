function monthAsString(num){

	if (num < 1 || num > 12 || isNaN(num) ) {
		alert("Bad Number!");
		return "Bad Number!";
	} else {
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		return months[parseInt(num)-1];
	}
}

function dayAsString(num){
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return days[num-1];
}
