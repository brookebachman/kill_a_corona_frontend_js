// Login Elements
const loginForm = document.getElementById("login")
const welcomeDiv = document.getElementById("welcome")
const greeting = document.getElementById("welcome-user")

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
            greeting.setAttribute('data-id' , user.id);
        })
  }    

function displayName(user) {
  let userName = user.name
  greeting.innerText = `Welcome, ${userName}!`
  welcomeDiv.appendChild(startButton);
}