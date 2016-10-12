function checkLength(text, min, max){
	min = min || 1;
	max = max || 10000;

	if (text.length < min || text.length > max) {
		return false;
	}
	return true;
}

function compareValues(val1, val2) {
	if (val1 > val2) {
		return -1;
	} else if (val1 < val2) {
		return 1;
	} else {
		return 0;
	}
}

function checkEmail(email) {
	if (email.length < 6) {
		return false;
	} else if (!email.includes("@")) {
		return false;
	}	else if (!email.includes(".")) {
		return false;
	} else {
		return true;
	}
}
