// Login Elements
const loginForm = document.getElementById("login")
const currentUserDiv = document.getElementById("current-user")
const main = document.querySelector("main")

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
  // currentUserDiv.innerHTML = `<p data-id= ${user.id}id="display-user">Welcome, ${user.name}!</p>`;
  let p = document.createElement("p")
  p.id = "greet-user"
  let userName = user.name
  p.innerText = `Welcome, ${userName}!`
  currentUserDiv.appendChild(p);
  delayShow();
}

// Weird delay on transition from login to start button
// Hacky solution, come back to this later 

let startDelay;

function delayShow() {
  startDelay = setTimeout(showStart, 1000);
}

function showStart() {
  currentUserDiv.appendChild(startButton)
}