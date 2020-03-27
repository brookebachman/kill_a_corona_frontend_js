function startLevel2(){
	init2();
	console.log("start Level 2")
	  setDisplay(saveScoreBtn);
	  saveScoreBtn.addEventListener("click", function(event){
		updateScoreForPlayer2(event);
	})
	stop();
	setDisplay(saveScoreBtn);
	saveScoreBtn.addEventListener("click", function(event){
	  updateScoreForPlayer2(event);
  })
}

function init2() {
	let minPopUpTime = 900;
	setDisplay(pauseButton);
	setDisplay(endButton);
	noDisplay(saveScoreBtn);
	setDisplay(level2Button);
	score = 0;
   
   
	// in case of press 'pause' then 'new'
	pauseButton.innerText = "Pause Game";
	popUp();
	scoreNum.innerText = score;
	timeUp = false;
	level2Button.innerText = "Stop Game";
	popUp();
	gameTimer = setTimeout(() => {
		console.log("Game Over...");
		level2Button.innerText = "Start Game";
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
			saveScore.addEventListener("click", function(){
					updateScoreForPlayer2();
				
			})
		}
	}, 1000)
	}
		
function updateScoreForPlayer2(){
let userId = gameContainer.dataset.id
let gameId = 2;
let dataHash = {
value: score,
game_id: gameId,
user_id: userId
}

fetch(`${SCORES_URL}`, {
  method: 'POST',
  headers: {
  "Content-Type": 'application/json',
  Accepts: 'application/json'
  },
  body: JSON.stringify((dataHash))
})
.then(resp => resp.json())
.then(function(data){
  console.log("your score was sent for level 2!", data)
}) 
}
