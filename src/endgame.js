//need to set seconds back to 0.
//reset score and anything that is temporary side effect

//EVENT LISTENER ON "SAVE SCORE BUTTON "
//need to get the user's id
function updateScoreForPlayer(user){
  let userId = user.id
  let data = {
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
  body: JSON.stringify((data))
})
  .then(resp => resp.json())
  .then(data => console.log(data))
 
}
// function endTheGame(){
//   seconds = 12;
//   resetScore 
   
// }
    //only want to end timer if time runs out or person pauses with stop button.

    //login page first thing, so we could have a event listener on login button change the display to block. 

    