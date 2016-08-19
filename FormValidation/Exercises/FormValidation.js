/*
	Function Name: checkLength
	Arguments: text,min?,max?
	Returns:
		false if text has fewer than min characters
		false if text has more than max characters
		true otherwise
*/
function checkLength(text, min, max){
	min = min || 1;
	max = max || 10000;

	if (text.length < min || text.length > max) {
		return false;
	}
	return true;
}

/*
	Function Name: compareValues
	Arguments: val1, val2
	Returns:
		0 if two values are equal
		-1 if val1 is greater than val2
		1 if val2 is greater than val1
*/

/*
	Function Name: checkEmail
	Arguments: email
	Returns:
		false if email has fewer than 6 characters
		false if email does not contain @ symbol 
		false if email does not contain a period (.)
		true otherwise
*/
