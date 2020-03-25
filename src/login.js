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
        .then(user => displayName(user))
}

function displayName(user) {
    currentUserDiv.innerHTML = `<p id="display-user">Welcome, ${user.name}</p>`
    loginDiv.style.visibility = "hidden"
    startDiv.removeAttribute("hidden")
  }

startButton.addEventListener("click", () => {
	if(startButton.innerText === "Start Game"){
        gameContainer.removeAttribute("hidden");
		init();
	}
	else{
		stop();
	}
})