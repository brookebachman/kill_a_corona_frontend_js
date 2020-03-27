//need to set seconds back to 0.
//reset score and anything that is temporary side effect

//EVENT LISTENER ON "SAVE SCORE BUTTON "
//need to get the user's id
function updateScoreForPlayer(){
  let gameId = 1;
  const name = document.getElementById("current-user");
  let userId = name.dataset.id
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
    console.log("your score was sent!", data)
  }) 
 
}

function startLevel2(){
  score = 0;
  game_id = 2;
  level2Button.style.display = 'none';
  startButton.innerText = "Start Level 2";
  minPopUpTime = 870;
  saveScore.innerText = "Save Level 2 Score"
  startButton.addEventListener("click", (event) => {
    if(startButton.innerText != "Start Level 2"){
      console.log("you clicked start level 2")
          init();
         
    }
    else if (startButton.innerText === "Stop Game"){
          saveScore.innerText = "Save Level 2 Score"
          console.log("something weird")
          startButtonDiv.appendChild(saveScore)
          if (saveScore.innerText === "Save Level 2 Score") {
            saveScore.addEventListener("click", function(event){
              updateScoreForPlayer2(event);
          })
          stop();
          }
    }
  })
}

function updateScoreForPlayer2(){
  const name = document.getElementById("current-user");
  let userId = name.dataset.id
  let dataHash = {
  value: score,
  game_id: 2,
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
    console.log("your score was sent for level 2 !", data)
  }) 
}