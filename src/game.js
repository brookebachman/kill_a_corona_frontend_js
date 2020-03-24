const startButton = document.getElementById("btn-start");
const viruses = document.getElementsByClassName("virus-pic")
const scoreNum = document.getElementById("score-out");
const numViruses = viruses.length;
		
// Images
const virusImg = "assets/virus.png";
const virusWhackedImg = "assets/mad.png";

// Game Parameters
const gameTime = 12000;
const minPeepTime = 1000;
const maxPeepTime = 2000;

// Game State Variables
let prevVirusNumber = null;
let timeUp = false;
let score = 0;
let gameTimer = null;
let peepTimer = null;

// Random virus
let virus = randomVirus(viruses);

startButton.addEventListener("click", () => {
	if(startButton.innerText === "Start Game"){
		init();
	}
	else{
		stop();
	}
})
	
function init() {
	scoreNum.innerText = score;
	timeUp = false;
	prevVirusNumber = null;
	startButton.innerText = "Stop Game";
	peep();
	gameTimer = setTimeout(() => {
		console.log("Game Over...");
		startButton.innerText = "Start Game";
		timeUp = true;
	}, gameTime);		
	}
	
function stop(){
	console.log("Game Stopped...");
	startButton.innerText = "Start Game";
	timeUp = true;
	let virusesOnPage = document.getElementsByClassName("up")
	virusesOnPage.forEach(virus => {
		virus.classList.remove("up")
	}
	)
	clearInterval(peepTimer);
	clearInterval(gameTimer);
}
	
function peep(){
	const time = randomTime(minPeepTime, maxPeepTime);
	virus.classList.add("up");
	peepTimer = setTimeout(() => {
		virus.classList.remove("up");
		if(timeUp === false){
				peep();
			} 
	}, time);
}
	

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

function randomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
	
function randomVirus(viruses) {
	const virusNum = Math.floor(Math.random() * numViruses);
	const virus = viruses[virusNum];
	if(virusNum === prevVirusNumber ) {
		console.log("...same virus...try again...");
		return randomVirus(viruses);
	}
	else {
		return virus;
	}
}