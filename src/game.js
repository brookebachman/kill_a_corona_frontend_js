const startButton = document.getElementById("btn-start");
const viruses = document.getElementsByClassName(".virus-pic")
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
const prevVirusNumber = null;
const timeUp = false;
let score = 0;
const gameTimer = null;
const peepTimer = null;	

startButton.addEventListener("click", () => {
	if(startButton.text() === "Start Game"){
		init();
	}
	else{
		stop();
	}
})
	
function init() {
	scoreNum.text(score);
	timeUp = false;
	prevVirusNumber = null;
	startButton.text("Stop Game");
	peep();
	gameTimer = setTimeout(() => {
		console.log("Game Over...");
		startButton.text("Start Game");
		timeUp = true;
	}, gameTime);		
	}
	
function stop(){
	console.log("Game Stopped...");
	startButton.text("Start Game");
	timeUp = true;
	viruses.removeClass("up");
	clearInterval(peepTimer);
	clearInterval(gameTimer);
}
	
function peep(){
	const time = randomTime(minPeepTime, maxPeepTime);
	const virus = randomVirus(viruses);
	virus.addClass("up");
	peepTimer = setTimeout(() => {
		virus.removeClass("up");
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
			whack();
		}
	}
	virus.attr("src", virusWhackedImg.src)
		.removeClass("up")
		.addClass("whacked")
		.one("transitionend", () => {
				virus.attr("src", virusImgSrc);
				virus.removeClass("whacked");
			});
	score++;
	scoreNum.text(score);
}

function randomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
	
function randomVirus(viruses) {
	const virusNum = Math.floor(Math.random() * numViruses);
	const virus = viruses.eq(virusNum);
	if(virusNum === prevVirusNumber ) {
		console.log("...same virus...try again...");
		return randomVirus(viruses);
	}
		prevVirusNumber = virusNum;
	return virus;
}