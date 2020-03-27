//EVENT LISTENER ON "SAVE SCORE BUTTON "
//need to get the user's id
function updateScoreForPlayer(event){
  let userId = gameContainer.dataset.id
  let dataHash = {
  value: score,
  game_id: 1,
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
  saveScoreBtn.innerText = "Score saved!"
}   