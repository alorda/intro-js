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
function compareValues(val1, val2){
	if (val1 > val2) {
		return -1;
	} else if(val2 > val1) {
		return 1;
	} else {
		return 0;
	}
}

/*
	Function Name: checkEmail
	Arguments: email
	Returns:
		false if email has fewer than 6 characters
		false if email does not contain @ symbol
		false if email does not contain a period (.)
		false if the last @ symbol comes after the last period (.)
		true otherwise
*/
function checkEmail(email){
	if (!checkLength(email, 6)) {
		return false;
	} else if (email.indexOf("@") == -1) {
		return false;
	} else if (email.indexOf(".") == -1) {
		return false;
	} else if (email.lastIndexOf(".") < email.lastIndexOf("@")) {
		return false;
	}
	return true;
}

/*
	Function Name: checkRadioArray
	Arguments: radioButtons
	Returns:
		true if one of the radio buttons is checked
		false otherwise
*/
function checkRadioArray(radioButtons){
	for (var i=0; i < radioButtons.length; i++) {
		if (radioButtons[i].checked) {
			console.log("Radio array: ", radioButtons);
			return true;
		}
	}
	return false;
}

/*
	Function Name: checkCheckBox
	Arguments: cb
	Returns:
		true if the checkbox is checked
		false otherwise
*/
function checkCheckBox(cb){
	return cb.checked;
}

/*
	Function Name: checkSelect
	Arguments: select
	Returns:
		false if the first option is selected
		true otherwise
*/
function checkSelect(select){
	console.log("selectedIndex is: ", select.selectedIndex);
	return (select.selectedIndex > 0);
}

/*Function to check that State/Province matches Country */
function checkStateCountry(state, country) {
	var usMin = 1;
	var usMax = 51;
	var canMin = 52;
	var canMax = 61;

	if (state >= usMin && state <= usMax && country == "USA") {
		return true;
	} else if ( state >= canMin && state <= canMax && country == "CA") {
		return true;
	} else if ( state == 0 && country == "Other" ) {
		return true;
	}
}

/*
	Function Name: checkTextArea
	Arguments: textArea,max
	Returns: nothing
	Action: alerts user if length of text is greater than max
*/
function checkTextArea(textArea, max){
	var numChars, chopped, message;
	if (!checkLength(textArea.value, 0, max)) {
		numChars = textArea.value.length;
		chopped = textArea.value.substr(0, max);
		message = 'You typed ' + numChars + ' characters.\n';
		message += 'The limit is ' + max + '.';
		message += 'Your entry will be shortened to:\n\n' + chopped;
		alert(message);
		textArea.value = chopped;
	}
}
