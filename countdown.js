const countdownDate = new Date("March 26, 2024 09:00:00").getTime();
let countdownElement;
let countdownTimer;

window.addEventListener("load", function () {
	countdownElement = document.getElementById("countdown");

	if (!countdownElement) {
		throw Error("Countdown element not found");
	}

	countdownTimer = setInterval(RefreshTimerText, 1000);
	RefreshTimerText();
});

function RefreshTimerText() {
	// Get the current date and time
	const now = new Date().getTime();

	// Calculate the time remaining
	const timeRemaining = countdownDate - now;

	// Calculate months, days, hours, minutes, seconds, and milliseconds
	const months = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30));
	const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
	const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
	const minutes = Math.floor(timeRemaining / (1000 * 60));
	const seconds = Math.floor(timeRemaining / 1000);

	// Display the countdown in the element with id="countdown"
	countdownElement.innerHTML =
		months + " Months<br>" + days + " Days<br>" + hours + " Hours<br>" + minutes + " Minutes<br>" + seconds + " Seconds<br>";

	// If the countdown is finished, display a message
	if (timeRemaining < 0) {
		clearInterval(countdownTimer);
		countdownElement.innerHTML = "Countdown has ended";
	}
}
