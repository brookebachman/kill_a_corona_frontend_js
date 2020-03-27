function startLevel2(){
    score = 0;
    game_id = 2;
    minPopUpTime = 870;
            init();
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
            
  function updateScoreForPlayer2(){
    let userId = gameContainer.dataset.id
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
      console.log("your score was sent for level 2!", data)
    }) 
  }
  