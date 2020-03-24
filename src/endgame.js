//need to set seconds back to 0.
//reset score and anything that is temporary side effect

//EVENT LISTENER ON "SAVE SCORE BUTTON "
//need to get the user's id
function updateScoreForPlayer(){
  // data = {
  //   score: newScore
  //   user_id: 
       game_id: 1

  // }
//  const gameScore = scoreNum.innerHTML
//  const newScore = 
//  scoreNum.innerHTML = gameScore + oldScore

  fetch(`${SCORES_URL}`, {
    method: 'POST'
  })
  .then(resp => resp.json())
}

function endTheGame(){
  seconds = 12;
  resetScore 
   
}
    //only want to end timer if time runs out or person pauses with stop button.

    //login page first thing, so we could have a event listener on login button change the display to block. 

    