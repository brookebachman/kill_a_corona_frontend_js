const viruses = document.getElementsByClassName("virus-pic")
const scoreNum = document.getElementById("score-num");
const numViruses = viruses.length;
const saveScore = document.createElement("button")
const startButtonDiv = document.getElementById("save-score")
const level2Div = document.getElementById("level-2")
const level2Button = document.createElement("button")
// Images
const virusImg = "assets/virus.png";
const virusWhackedImg = "assets/clean.png";

// Game Parameters
const gameTime = 12000;
let minPopUpTime = 1000;
const maxPopUpTime = 2000;
const timerNumber = document.getElementById("timer-num");


// Game State Variables
let timeUp = false;
let score = 0;
let gameTimer = null;
let popUpTimer = null;
let decrementSeconds = null;
let seconds = gameTime/1000;

// Random virus
let virus = randomVirus(viruses);
	
function init() {
	scoreNum.innerText = score;
	timeUp = false;
	startButton.innerText = "Stop Game";
	popUp();
	gameTimer = setTimeout(() => {
		console.log("Game Over...");
		startButton.innerText = "Start Game";
		timeUp = true;
	}, gameTime);		
	decrementSeconds = setInterval(function(){
		if (seconds > 0) {
			console.log("set interval is running")
			seconds -= 1;
			timerNumber.innerText = seconds + " seconds left!";
		}
		else {
			timerNumber.innerText = `Time's up! Your score is ${score}`
			saveScore.innerText = "Save Score"
			startButtonDiv.appendChild(saveScore)
			saveScore.addEventListener("click", function(){
					updateScoreForPlayer();
				
			})
			if (score > 6){
				level2Button.innerText = "Play Level 2"
				level2Div.appendChild(level2Button)
				level2Button.addEventListener("click", function(){
					startLevel2();
				})
			}
		}
	}, 1000)
	}
	
function stop(){
	console.log("Game Stopped...");
	startButton.innerText = "Start Game";
	timeUp = true;
	Array.prototype.map.call(viruses, virus => virus.classList.remove("up"))
	clearInterval(popUpTimer);
	clearInterval(gameTimer);
	clearInterval(decrementSeconds);

}
	
function popUp(){
	const time = randomTime(minPopUpTime, maxPopUpTime);
	let virus = randomVirus(viruses);
	virus.classList.add("up");
	virus.addEventListener("click", () => {
		if(virus.classList.contains("whacked")){
			return;
		}
		else {
		virus.setAttribute("src", virusWhackedImg)
		virus.classList.remove("up")
		virus.classList.add("whacked")
		score++;
		scoreNum.innerText = score;
		}
	})
	popUpTimer = setTimeout(() => {
		virus.classList.remove("up", "whacked");
		virus.setAttribute("src", virusImg)
		if(timeUp === false){
				popUp();
			} 
	}, time);
}

function randomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
	
function randomVirus(viruses) {
	const virusNum = Math.floor(Math.random() * numViruses);
	const virus = viruses[virusNum];
	return virus;
}