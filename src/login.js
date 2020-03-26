loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let userNameInput = e.target.name.value;
    findOrCreateUser(userNameInput);
    e.target.reset();
})

function findOrCreateUser(userNameInput) {
    fetch(USERS_URL, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
          Accepts: 'application/json'
        },
        body: JSON.stringify({name: userNameInput})
      })
        .then(resp => resp.json())
        .then(function(user){
            displayName(user);
            const name = document.getElementById("current-user")
            name.setAttribute('data-id' , user.id); 

        });
    }           
           // user => displayName(user))


function displayName(user) {
    currentUserDiv.innerHTML = `<p data-id= ${user.id}id="display-user">Welcome, ${user.name}</p>`
    loginDiv.style.visibility = "hidden"
    startDiv.removeAttribute("hidden")
   
  }

startButton.addEventListener("click", (event) => {
	if(startButton.innerText === "Start Game"){
        gameContainer.removeAttribute("hidden");
        init();
       
	}
	else{
        saveScore.innerText = "Save Score"
        startButtonDiv.appendChild(saveScore)
        saveScore.addEventListener("click", function(event){
            updateScoreForPlayer(event);
        })
        stop();
        
        

        
	}
})

