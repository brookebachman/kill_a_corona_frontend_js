const startButton = document.getElementById("btn-start");
const viruses = document.getElementsByClassName("virus-pic")
const scoreNum = document.getElementById("score-out");
const numViruses = viruses.length;
		
// Images
const virusImg = "assets/virus.png";
const virusWhackedImg = "assets/virus-x";

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
	viruses.classList.remove("up");
	clearInterval(peepTimer);
	clearInterval(gameTimer);
}
	
function peep(){
	const time = randomTime(minPeepTime, maxPeepTime);
	const virus = randomVirus(viruses);
	virus.classList.add("up");
	peepTimer = setTimeout(() => {
		virus.classList.remove("up");
		if(timeUp === false){
				peep();
			} 
	}, time);
}
	
function whack(virus) {
	virus.addEventListener("click", () => {
		if(virus.hasClass("whacked")){
			return;
		}
		else {
		virus.attr("src", virusWhackedImg.src)
		.classList.remove("up")
		.classList.add("whacked")
		.one("transitionend", () => {
				virus.attr("src", virusImgSrc);
				virus.classList.remove("whacked");
			});
		score++;
		scoreNum.innerText = score;
		}
	})
}

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