const rockMove = document.getElementById("rock");
const paperMove = document.getElementById("paper");
const scissorsMove = document.getElementById("scissors");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const resultMessage = document.getElementById("result");

rockMove.addEventListener("click", () => playRound("rock"));
paperMove.addEventListener("click", () => playRound("paper"));
scissorsMove.addEventListener("click", () => playRound("scissors"));

let userScoreCount = 0;
let computerScoreCount = 0;

function computerPlay() {
	const choices = ["rock", "paper", "scissors"];
	const randomChoice = Math.floor(Math.random() * choices.length);
	return choices[randomChoice];
}

function playRound(userChoice) {
	const computerChoice = computerPlay();
	let result;
	if (userChoice === computerChoice) {
		result = "it's a tie!";
		resultMessage.textContent = result;
	} else if (
		(userChoice === "rock" && computerChoice === "scissors") ||
		(userChoice === "paper" && computerChoice === "rock") ||
		(userChoice === "scissors" && computerChoice === "paper")
	) {
		userScoreCount++;
		userScore.textContent = userScoreCount;
		result = "you won!";
		resultMessage.textContent = result;
	} else {
		computerScoreCount++;
		computerScore.textContent = computerScoreCount;
		result = "you lost!";
		resultMessage.textContent = result;
	}
	return result;
}
