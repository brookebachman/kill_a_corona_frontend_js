// Login Elements
const loginForm = document.getElementById("login")
const currentUserDiv = document.getElementById("current-user")

login.addEventListener("submit", (e) => {
  login.style.visibility = "hidden";
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
        })
  }    

function displayName(user) {
  currentUserDiv.innerHTML = `<p data-id= ${user.id}id="display-user">Welcome, ${user.name}!</p>`;
  showStartButton();
}

var startDelay;

function showStartButton() {
  startDelay = setTimeout(delayFunc, 1000);
}

function delayFunc() {
  makeVisible(startButton);
}

// User name is displayed, then game.js for start button event listener