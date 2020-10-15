function revealMsg() {
	document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
	var curr = document.getElementById("countDownButton").innerHTML;
	var newer = curr - 1;
	if (newer < 0) {
		newer = 0;
	}
	document.getElementById("countDownButton").innerHTML = newer;

}

